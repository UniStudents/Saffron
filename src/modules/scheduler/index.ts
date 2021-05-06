import Database from "../database";
import Config from "../../components/config";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import Events from "../events";
import {nanoid} from "nanoid";
import Job from "../../components/job";
import Source from "../../components/source";
import Grid from "../grid";
import {JobStatus} from "../../components/JobStatus";
import randomId from "../../middleware/randomId";
import Worker from "../workers";

const fs = require('fs');
const path = process.cwd();

const hashCode = (str: String) => {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

export default class Scheduler {

    constructor() {
        Events.getAntennae().on("start", () => this.start())
        Events.getAntennae().on("stop", (force: boolean) => this.stop(force))
    }

    private scanSourceFiles(): Promise<void> {
        return new Promise((loaded, failed) => {
            let sourcesPath = Config.load().sources.path

            fs.readdir(path + sourcesPath, (err: object, files: object[]) => {
                let acceptedFiles = new RegExp(/.*js/)

                if (!files) {
                    Logger(LoggerTypes.INSTALL_ERROR, "No source files were found")
                    throw Error
                }

                let rawSources = files.filter((file: any) => acceptedFiles.test(file))

                let sources = rawSources.map((file: any) => Object({
                    filename: file,
                    ...require(`${path + sourcesPath}/${file}`)
                }))

                sources.forEach(async (source: any) => await Source.parseFileObject(source))
                loaded()
            })
        })
    }

    private times = [
        -400, -360, -300, -280, -240, -210, -180, -160, -120, -90, -60, -30, -10, -5,
        0,
        5, 10, 30, 60, 90, 120, 160, 180, 210, 240, 280, 300, 360, 400
    ]

    private getRandomTime(source_id: string): number {
        // return a random number of some minutes
        if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing')
            return 0

        return this.times[Math.abs(hashCode(source_id + randomId())) % this.times.length] * 1000;
    }

    private async electWorker(lastWorkerId: string): Promise<string> {
        let workers = await Database.getInstance()!!.getWorkers()
        if(workers.length != 1){
            let index = workers.findIndex((obj: Worker) => obj?.id === lastWorkerId)
            if (index != -1)
                workers.splice(index, 1)
        }

        let newWorker = workers[Math.abs(hashCode(lastWorkerId)) % workers.length]
        return newWorker.id
    }

    private async createJob(sourceId: string, workerId: string, interval: number): Promise<Job> {
        let job = new Job(sourceId + '_' + nanoid(10) + '_' + Date.now())
        job.source = {id:sourceId}
        // nextRetry = The time the job finished (just now) + interval + randomTIme
        job.nextRetry = Date.now() + interval + this.getRandomTime(sourceId)
        job.worker = {id:workerId}
        job.status = JobStatus.PENDING

        return job
    }

    async start(): Promise<void> {
        await this.scanSourceFiles()
        let sources = Source.getSources()
        Logger(LoggerTypes.INFO, `Loaded ${sources.length} sources`)

        let workers = await Database.getInstance()!!.getWorkers()
        let interval = Config.load().scheduler.intervalBetweenJobs / sources.length

        // Initialize jobs for first time
        await Grid.getInstance().clearAllJobs()

        let sI = 0, wI = 0
        for(let source of sources){
            let new_job = await this.createJob(source.id, await this.electWorker(workers[wI].id), interval * sI)
            await Grid.getInstance().pushJob(new_job)
            sI++; wI++

            if(wI == workers.length) wI = 0
        }

        // Check if is time for new job
        setInterval(async () => {
            let pendingJobs = await Grid.getInstance().getJobs()
            if(pendingJobs.length === 0)
                Logger(LoggerTypes.DEBUG, 'Scheduler: no pending jobs')

            for(let pJob of pendingJobs){
                if(pJob.status === JobStatus.FAILED){
                    await Grid.getInstance().deleteJob(pJob.id)

                    let source = pJob.getSource()
                    if(source == null) throw Error('Worker finished job for a source that does not exist.')

                    // Job failed so try again in half interval
                    let interval = (source.intervalBetweenNewScan ? source.intervalBetweenNewScan : Config.load().scheduler.intervalBetweenJobs) / 2

                    let new_job = await this.createJob(source.id, await this.electWorker(pJob.worker.id), interval)
                    await Grid.getInstance().pushJob(new_job)
                }
                else if(pJob.nextRetry <= Date.now()){
                    Events.getAntennae().emit("new-job", pJob)
                }
            }
        }, 10 * 1000) // 2 minutes

        // Issue new job for this source
        Events.getAntennae().on("finish-job", async (job_id: string) => {
            Logger(LoggerTypes.DEBUG, "Job finished")
            // Get job from grid
            let job = await Grid.getInstance().getJob(job_id)
            if(job == null) throw Error("Worker finished a job but send invalid job id.")
            await Grid.getInstance().deleteJob(job_id)

            // Find source
            let source = job.getSource()
            if(source == null) throw Error('Worker finished job for a source that does not exist.')

            let interval = source.intervalBetweenNewScan ? source.intervalBetweenNewScan : Config.load().scheduler.intervalBetweenJobs

            let new_job = await this.createJob(source.id, await this.electWorker(job.worker.id), interval)
            await Grid.getInstance().pushJob(new_job)
            Logger(LoggerTypes.DEBUG, "Added new job")
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force == true then clear db from the existing jobs
    }
}