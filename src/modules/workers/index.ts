import Events from "../events"
import Job from "../../components/job";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import randomId from "../../middleware/randomId";
import HtmlParser from "./parsers/htmlParser";
import {ParserType} from "./parsers/ParserType";
import Grid from "../grid";
import Database from "../database";
import logger from "../../middleware/logger";
import rssParser from "./parsers/rssParser";
import DynamicParser from "./parsers/dynamicParser";
import Article from "../../components/articles";
import Instructions from "../../components/instructions";
import WordpressParser from "./parsers/wordpress";

export default class Worker {

    declare readonly id: string;
    private declare isForcedStopped: boolean
    private declare isRunning: boolean

    /**
     * Worker constructor
     * @param id The worker's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if(id !== "")
            this.id = id
        else this.id = randomId("wkr")
    }

    /**
     * Parse the worker class to a json object
     */
    async toJSON(): Promise<object> {
        return {
            id: this.id

        }
    }

    /**
     * Worker will start accepting jobs
     */
    async start(): Promise<void> {
        await Grid.getInstance()!!.announceWorker(this)
        this.isForcedStopped = false
        this.isRunning = true
        Logger(LoggerTypes.INFO, `Worker started. ID: ${this.id}`)
        // start listening for new jobs
        Events.getAntennae().on("new-job", async (job: Job) => {
            if(!this.isRunning) return
            if(this.id !== job.worker.id) return

            let instructions = job.getInstructions()

            let articles = await Worker.parse(instructions, job)

            if(this.isForcedStopped) return

            if (Array.isArray(articles)) {
                // TODO - Check articles with database and import what you have to import
                articles.forEach((article: Article)=>{
                    article.source = {id: job.source.id}
                    article.timestamp = new Date()
                })

                await Database.getInstance()?.mergeArticles(articles)

                await Grid.getInstance().finishJob(job)
            }
            else await Grid.getInstance().failedJob(job)

            logger(LoggerTypes.DEBUG, `Worker: Job finished ${!articles ? ' with a failure: ' : ' successfully: '} (${job.id}).`)
        })
    }

    static async parse(instructions: Instructions, job: Job): Promise<Array<Article> | undefined> {
        let articles: Array<Article> = [];
        let parseFailed = false

        switch (instructions.parserType){
            case ParserType.HTML: {
                let result = await HtmlParser.parse(instructions,10)
                if(Array.isArray(result))
                    articles.push.apply(articles, result)
                else parseFailed = true
            } break
            case ParserType.RSS: {
                //All renameFields can be found on article.extras with the exact name mentioned in the source file
                if(instructions.scrapeOptions.hasOwnProperty("renameFields")){
                    //@ts-ignore
                    let rename_fields = instructions.scrapeOptions.renameFields

                    let result = await rssParser.parse(instructions.url,10,rename_fields)
                    if(Array.isArray(result))
                        articles.push.apply(articles, result)
                    else parseFailed = true
                }
                else {
                    let result = await rssParser.parse(instructions.url,10)
                    if(Array.isArray(result))
                        articles.push.apply(articles, result)
                    else parseFailed = true
                }
            } break
            case ParserType.CUSTOM: {
                let result = await DynamicParser.parse(job, instructions, 10)
                if(result[0].id !== "error")
                    articles.push.apply(articles, result)
                else parseFailed = true
            } break
            case ParserType.WORDPRESS: {
                let result = await WordpressParser.parse(job, instructions, 10)
                if(result[0].id !== "error")
                    articles.push.apply(articles, result)
                else parseFailed = true
            } break
        }

        if(parseFailed) return

        return articles
    }

    /**
     * Worker will stop accepting jobs
     * @param force if true the it will abandon the current job
     */
    async stop(force: boolean): Promise<void> {
        this.isForcedStopped = force
        this.isRunning = false
        await Grid.getInstance().destroyWorker(this)
    }
}