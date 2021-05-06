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

const fs = require('fs');
const path = process.cwd();

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

    private getRandomTime(source_id: string): number {
        // return a random number between e.x. -3 minutes to +3 minutes (in milliseconds)
        return 0
    }

    private async electWorker(lastWorkerId: string): Promise<string> {

        return lastWorkerId
    }

    private async createJob(sourceId: string, workerId: string, interval: number): Promise<Job> {
        let job = new Job(sourceId + '_' + nanoid(10) + '_' + Date.now())
        job.source = {id:sourceId}
        // nextRetry = The time the job finished (just now) + interval + randomTIme
        job.nextRetry = Date.now() + interval + this.getRandomTime(sourceId)
        job.worker = {id:workerId}

        return job
    }

    async start(): Promise<void> {
        await this.scanSourceFiles()
        let sources = Source.getSources()
        Logger(LoggerTypes.DEBUG, `Loaded ${sources.length} sources`)

        let workers = await Database.getInstance()!!.getWorkers()
        let interval = Config.load().scheduler.intervalBetweenNewJobs / sources.length

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
                    let interval = (source.intervalBetweenNewScan ? source.intervalBetweenNewScan : Config.load().scheduler.intervalBetweenNewJobs) / 2

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

            let interval = source.intervalBetweenNewScan ? source.intervalBetweenNewScan : Config.load().scheduler.intervalBetweenNewJobs

            let new_job = await this.createJob(source.id, await this.electWorker(job.worker.id), interval)
            await Grid.getInstance().pushJob(new_job)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force == true then clear db from the existing jobs
    }
}