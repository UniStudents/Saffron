import Database from "../database";
import Config from "../../components/config";
import Logger from "../../middleware/logger"
import Events from "../events";
import {nanoid} from "nanoid";
import Job from "../../components/job";
import Source from "../../components/source";
import Grid from "../grid";

const fs = require('fs');
const path = process.cwd();

export default class Scheduler {

    private declare offload: Database

    constructor() {
        this.offload = Database.getInstance()!!
        Events.getAntennae().on("start", () => {
            this.start().then(null)
        })
        Events.getAntennae().on("stop", (force: boolean) => {
            this.stop(force).then(null)
        })
    }

    private scanSourceFiles(): Promise<Source[]> {
        return new Promise((loaded, failed) => {
            let sourcesPath = Config.load().sources.path

            fs.readdir(path + sourcesPath, (err: object, files: object[]) => {
                let acceptedFiles = new RegExp(/.*js/)

                if (!files) {
                    Logger("install-error", "No source files were found")
                    throw Error
                }

                let rawSources = files.filter((file: any) => acceptedFiles.test(file))

                let sources = rawSources.map((file: any) => Object({
                    filename: file,
                    ...require(`${path + sourcesPath}/${file}`)
                }))

                let mSources: Source[] = []
                sources.forEach(async (source: any) => mSources.push(await Source.parseFileObject(source)))
                loaded(sources)
            })
        })
    }

    private getRandomTime(source_id: string): number {
        // return a random number between -3 minutes to + 3 minutes in milliseconds
        return 0
    }

    async start(): Promise<void> {
        let sources = await this.scanSourceFiles()
        Logger("step", `Loaded ${sources.length} sources`)

        // Check if is time for new job
        setInterval(async () => {

        }, 2 * 60 * 1000) // 2 minutes

        // Issue new job for this source
        Events.getAntennae().on("finish-job", async (job_id: string) => {
            // Get job from grid
            let job = await Grid.getInstance().getJob(job_id)
            if(job == null) throw Error("Worker finished a job but send invalid job id.")
            await Grid.getInstance().deleteJob(job_id)

            // Find source
            let source = sources.find((source: Source) => { return source.id === job!!.source.id })
            if(source == null) throw Error('Worker finished job for a source that does not exist.')

            let interval = source.intervalBetweenNewScan ? source.intervalBetweenNewScan : Config.load().scheduler.intervalBetweenNewJobs

            let new_job = new Job(source.id + '_' + nanoid(10) + '_' + Date.now())
            new_job.source = source
            // nextRetry = The time the job finished (just now) + interval + randomTIme
            new_job.nextRetry = Date.now() + interval + this.getRandomTime(source.id)

            await Grid.getInstance().pushJob(new_job)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force == true then clear db from the existing jobs
    }
}