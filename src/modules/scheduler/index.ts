import Database from "../database";
import Config from "../../components/config";

import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import Events from "../events";
import {nanoid} from "nanoid";
import Job from "../../components/job";

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

    private scanSourceFiles(): Promise<object[]> {
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

                sources.forEach((source: any) => {
                    if (!source.baseURL) throw new Error('Please specify a baseURL.')
                    // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(baseURL)) throw new Error('You specified an invalid baseURL')
                    if (!['api', 'portal'].includes(source.type)) throw new Error('A source\'s "api" value must be either "api" or "portal"')
                })
                loaded(sources)
            })
        })
    }

    async start(): Promise<void> {
        let sources = await this.scanSourceFiles()
        // TODO - Override for specific source

        setInterval(async () => {
            // check if is time for new job
        }, 2 * 60 * 1000) // 2 minutes

        Events.getAntennae().on("finish-job", async (job_id: string) => {
            // Issue new job for this source
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force == true then clear db from the existing jobs
    }
}