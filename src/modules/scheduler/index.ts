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
        let job = new Job(randomId('src'))
        job.source = {id:sourceId}
        // nextRetry = The time the job finished (just now) + interval + randomTIme
        job.nextRetry = Date.now() + interval + this.getRandomTime(sourceId)
        job.worker = {id:workerId}
        job.status = JobStatus.PENDING
        job.attempts = 0
        job.emitAttempts = 0

        return job
    }

    async start(): Promise<void> {
        let refreshInterval = 2 * 60 * 1000
        if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing')
            refreshInterval = 10 * 1000

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

        // Check grid for job status
        setInterval(async () => {
            let pendingJobs = await Grid.getInstance().getJobs()
            if(pendingJobs.length === 0)
                Logger(LoggerTypes.DEBUG, 'Scheduler: no pending jobs')

            for(let job of pendingJobs){
                switch (job.status){
                    // Issue new job for this source
                    case JobStatus.FINISHED: {
                        Logger(LoggerTypes.DEBUG, "Scheduler: found finished job: " + job.id)
                        await Grid.getInstance().deleteJob(job.id)

                        let source = job.getSource()
                        let interval = source.intervalBetweenScans ? source.intervalBetweenScans : Config.load().scheduler.intervalBetweenJobs

                        let nJob = await this.createJob(source.id, await this.electWorker(job.worker.id), interval)
                        await Grid.getInstance().pushJob(nJob)
                        Logger(LoggerTypes.DEBUG, "Scheduler: added new job: " + job.id)
                    } break
                    // A job failed so add retry flag
                    case JobStatus.FAILED: {
                        Logger(LoggerTypes.DEBUG, "Scheduler: found failed job: " + job.id)
                        let source = job.getSource()

                        job.attempts += 1

                        // If attempts > e.x. 10 increase interval to check on e.x. a day after
                        let interval = job.attempts > 10
                            ? 86400000 // One full day
                            : ((source.intervalBetweenScans ? source.intervalBetweenScans : Config.load().scheduler.intervalBetweenJobs) / 2)

                        job.nextRetry = Date.now() + interval
                        job.status = JobStatus.PENDING

                        Logger(LoggerTypes.DEBUG, "Scheduler: updated failed job: " + job.id)
                        await Grid.getInstance().updateJob(job)
                    } break
                    case JobStatus.PENDING: {
                        if(job.nextRetry <= Date.now()) {
                            if(job.emitAttempts > 5)
                                job.worker.id = await this.electWorker(job.worker.id)

                            Logger(LoggerTypes.DEBUG, "Scheduler: emitting pending job: " + job.id)
                            await Grid.getInstance().emitJob(job)
                        }
                    } break
                }
            }
        }, refreshInterval) // Refresh rate: 2 minutes - for dev 10 seconds
    }

    async stop(force: boolean): Promise<void> {
        // if force == true then clear db from the existing jobs
    }
}