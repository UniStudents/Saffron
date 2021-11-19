import Config from "../../components/config";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import hashCode from "../../middleware/hashCode"
import Events from "../events";
import Job from "../../components/job";
import Source from "../../components/source";
import Grid from "../grid/index";
import {JobStatus} from "../../components/JobStatus";
import randomId from "../../middleware/randomId";
import Worker from "../workers";


const path = process.cwd();
const glob = require("glob")

export default class Scheduler {

    private declare isRunning: boolean
    private declare isForcedStopped: boolean

    constructor() {
        Events.getAntennae().on("start", () => this.start())
        Events.getAntennae().on("stop", (force: boolean) => this.stop(force))
    }

    /**
     * Scans the source files from given path and translate them to classes
     */
    private scanSourceFiles(): Promise<void> {
        return new Promise((resolve, reject) => {
            let sourcesPath = Config.load().sources.path
            glob(`${path+sourcesPath}/**`,null,(error : any,files: string[])=>{
                if(error){
                    Logger(LoggerTypes.INSTALL_ERROR, "Path is invalid or there are insufficient permissions.")
                    reject(error)
                }else{
                    let acceptedFiles = new RegExp(/.*js/)
                    if (!files || files.length <=0) {
                        Logger(LoggerTypes.INSTALL_ERROR, "No source files were found.")
                        reject(new Error("No source files were found."))
                    }
                    let rawSources = files.filter((file: any) => acceptedFiles.test(file))
                    let sources = rawSources.map((file: any) => Object({
                        filename: `${file.split("/").pop()}`,
                        path: `${file}`,
                        ...require(`${file}`)
                    }))
                    sources.forEach(async (sourceFile: any) => {
                        try {
                            let parsed = await Source.parseFileObject(sourceFile)
                            Source._sources.push(parsed);
                        }
                        catch (e) {
                            Events.getAntennae().emit("scheduler.sources.error",sourceFile,  e)
                        }
                    })
                    resolve()
                }
            })
        })
    }

    private times = [
        -400, -360, -300, -280, -240, -210, -180, -160, -120, -90, -60, -30, -10, -5,
        0, 5, 10, 30, 60, 90, 120, 160, 180, 210, 240, 280, 300, 360, 400
    ]

    /**
     * Return a random time in milliseconds
     * @param source_id Helps to get a more random time
     */
    private getRandomTime(source_id: string): number {
        // return a random number of some minutes
        if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing')
            return 0

        return this.times[Math.abs(hashCode(source_id + randomId())) % this.times.length] * 1000;
    }

    /**
     * Return the id of a worker that will be used for the next job
     * @param lastWorkerId The job's previous worker id. It will be excluded from the election only if the workers are greater that one
     */
    private async electWorker(lastWorkerId: string): Promise<string> {
        let workers = (await Grid.getInstance()!!.getWorkers()).slice()
        if (workers.length > 1) {
            let index = workers.findIndex((obj: Worker) => obj?.id === lastWorkerId)
            if (index != -1)
                workers.splice(index, 1)
        }

        if(workers.length == 0)
            return lastWorkerId;

        let newWorker = workers[Math.abs(hashCode(lastWorkerId)) % workers.length]
        return newWorker.id
    }

    /**
     * Create a job for a source
     * @param sourceId The source id
     * @param workerId The worker that the job will be assigned
     * @param interval The time from now the job will be issued to a worker
     */
    private async createJob(sourceId: string, workerId: string, interval: number): Promise<Job> {
        let job = new Job()
        job.source = {id: sourceId}
        // nextRetry = The time the job finished (just now) + interval + randomTIme
        job.nextRetry = Date.now() + interval + this.getRandomTime(sourceId)
        job.worker = {id: workerId}
        job.status = JobStatus.PENDING
        job.attempts = 0
        job.emitAttempts = 0
        return job
    }

    /**
     * Issue a new job for a specific source
     * @param source The source
     * @param lasWorkerId The worker who has the job last time (Optional)
     * @param interval
     * @return Return the issued job id
     */
    async issueJobForSource(source: Source, lasWorkerId: string = "", interval: number = -1): Promise<void> {
        if (interval == -1)
            interval = source.scrapeInterval ? source.scrapeInterval : Config.load().scheduler.intervalBetweenJobs

        let nJob = await this.createJob(source.getId(), await this.electWorker(lasWorkerId), interval)
        await Grid.getInstance().addNewJob(nJob)
    }

    /**
     * Starts the scheduler
     */
    async start(): Promise<void> {
        let checkInterval = Config.load().scheduler.intervalBetweenChecks;
        if (!checkInterval) checkInterval = 120000; // 2 minutes

        this.isRunning = true;
        this.isForcedStopped = false;

        // Read all source files
        await this.scanSourceFiles();
        let sources = Source.getSources();
        let includeOnly = Config.load().sources.includeOnly;
        let excluded = Config.load().sources.excluded;

        if(!Array.isArray(includeOnly)) throw new Error("Config.sources.includeOnly is not an array.");
        if(!Array.isArray(excluded)) throw new Error("Config.sources.excluded is not an array.");

        let tmpSources: Source[] = [];
        sources.forEach((source: Source) => {
            if (includeOnly.includes(source.name))
                tmpSources.push(source);
        });
        sources = tmpSources;

        excluded.forEach((ex_source: any) => {
            if(typeof ex_source !== 'string')
                throw new Error("Config.sources.excluded is not an array of strings.")

            let index = sources.findIndex((source: Source) => source.name === ex_source)
            if(index !== -1)
                sources.splice(index, 1)
        })

        Events.getAntennae().emit("scheduler.sources.new", sources.map((source: Source) => source.name))
        // Load workers
        let workers = await Grid.getInstance()!!.getWorkers()

        // Create separation interval
        let separationInterval = Config.load().scheduler.intervalBetweenJobs / sources.length

        // Initialize jobs for first time for every loaded source
        await Grid.getInstance().clearAllJobs()
        let sI = 0, wI = 0
        for (let source of sources) {
            await this.issueJobForSource(source, workers[wI].id, separationInterval * sI)
            sI++;
            wI++;

            if (wI == workers.length) wI = 0
        }

        // Check grid for job status
        const mInterval = setInterval(async () => {
            if (this.isForcedStopped)
                await Grid.getInstance().clearAllJobs()
            if (!this.isRunning)
                clearInterval(mInterval)

            // Load all jobs
            let pendingJobs = await Grid.getInstance().getJobs()
            for (let job of pendingJobs) {
                switch (job.status) {
                    // Issue new job for this source
                    case JobStatus.FINISHED: {
                        await Grid.getInstance().deleteJob(job)
                        await this.issueJobForSource(job.getSource(), job.worker.id)
                    }
                        break
                    // A job failed so increment the attempts and try again
                    case JobStatus.FAILED: {
                        Events.getAntennae().emit("scheduler.job.failed", job)

                        job.attempts += 1
                        job.emitAttempts = 0

                        // If attempts > e.x. 10 increase interval to check on e.x. a day after
                        let source = job.getSource()
                        let interval = job.attempts > 10
                            ? Config.load().scheduler.heavyJobFailureInterval
                            : (source.retryInterval ? source.retryInterval : Config.load().scheduler.intervalBetweenJobs / 2)

                        job.nextRetry = Date.now() + interval

                        await Grid.getInstance().reincarnateJob(job)
                    }
                        break
                    // Pending jobs
                    case JobStatus.PENDING: {
                        if (job.nextRetry <= Date.now()) {
                            // If the worker did not returned the job after 5 times elect new worker
                            if (job.emitAttempts > 5) {
                                let oldWorker = job.worker.id
                                await Grid.getInstance().fireWorker(job.worker.id)
                                job.worker.id = await this.electWorker(job.worker.id)
                                Events.getAntennae().emit("scheduler.job.worker.replace", oldWorker, job)
                            }

                            await Grid.getInstance().spreadJob(job)
                        }
                    }
                        break
                }
            }
        }, checkInterval) // Refresh rate: 2 minutes - for dev 2 seconds
    }

    /**
     * Stops the scheduler from issuing new jobs
     * @param force If true it will delete all pending jobs
     */
    async stop(force: boolean): Promise<void> {
        this.isRunning = false
        this.isForcedStopped = force
    }
}