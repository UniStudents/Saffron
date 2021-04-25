import Database from "../database";
import Config from "../../components/config";
import Logger from "../../modules/logger"
export default class Scheduler {

    private declare offload: Database

    constructor(offLoadDB: Database) {
        this.offload = offLoadDB
    }

    private scanSourceFiles: Promise<void | object> = new Promise((loaded, failed)=>{
        let sourcesPath = Config.load().sources.path

            fs.readdir(path + sourcesPath, (err: object, files: object[]) => {
                let acceptedFiles = new RegExp(/.*js/)

                if(!files){
                    Logger("install-error", "No source files were found")
                    throw Error
                }

                let rawSources = files.filter((file: any) => acceptedFiles.test(file))

                let sources = rawSources.map((file: any) => Object({
                    filename: file,
                    ...require(`${path + sourcesPath}/${file}`)
                }))

                sources.forEach((source: any)=>{
                    if(!source.baseURL) throw new Error('Please specify a baseURL.')
                    // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(baseURL)) throw new Error('You specified an invalid baseURL')
                    if(!['api','portal'].includes(source.type)) throw new Error('A source\'s "api" value must be either "api" or "portal"')
                })
                loaded(sources)
            })
        })

    async start(): Promise<void> {

    }

    async stop(): Promise<void> {

    }
}

const fs = require('fs');
const path = process.cwd();