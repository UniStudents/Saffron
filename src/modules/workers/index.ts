import Events from "../events"
import Job from "../../components/job";
import Logger from "../../middleware/logger"
import logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import randomId from "../../middleware/randomId";
import HtmlParser from "./parsers/htmlParser";
import {ParserType} from "./parsers/ParserType";
import Grid from "../grid";
import Database from "../database";
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
        if (id !== "")
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
            if (!this.isRunning) return
            if (this.id !== job.worker.id) return

            let instructions = job.getInstructions()

            let articles = await Worker.parse(instructions, job)

            if (this.isForcedStopped) return

            if (Array.isArray(articles)) {
                articles.forEach((article: Article) => {
                    article.source = {id: job.source.id}
                    article.timestamp = Date.now()
                })

                let collection = job.getSource().collection_name
                if (!collection || collection.length == 0)
                    collection = job.getSource().name
                if (!collection || collection.length == 0)
                    collection = job.getSource().getId()

                await Database.getInstance()?.mergeArticles(collection, articles)

                await Grid.getInstance().finishJob(job)
            } else await Grid.getInstance().failedJob(job)

            logger(LoggerTypes.DEBUG, `Worker: Job finished ${!articles ? ' with a failure: ' : ' successfully: '} (${job.id}).`)
        })
    }

    static async parse(instructions: Instructions, job: Job): Promise<Array<Article> | object> {
        let articles: Array<Article> = [];
        let parseFailed = false
        let errorMessage = ""

        switch (instructions.parserType) {
            case ParserType.HTML: {
                let result = await HtmlParser.parse(instructions, 10)
                if (Array.isArray(result))
                    articles.push.apply(articles, result)
                else {
                    parseFailed = true
                    errorMessage = "html parser failed."
                }
            }
                break
            case ParserType.RSS: {
                let rename_fields: Map<string, string> = new Map<string, string>()
                if (instructions.scrapeOptions.hasOwnProperty("renameFields"))
                    rename_fields = instructions.scrapeOptions.renameFields

                let result = await rssParser.parse(instructions.url, 10, rename_fields)
                if (Array.isArray(result))
                    articles.push.apply(articles, result)
                else {
                    parseFailed = true
                    errorMessage = "rss parser failed."
                }
            }
                break
            case ParserType.DYNAMIC: {
                let result: any = await DynamicParser.parse(job, instructions)
                if (Array.isArray(result))
                    articles.push.apply(articles, result)
                else {
                    parseFailed = true
                    errorMessage = result.errorMessage
                }
            }
                break
            case ParserType.WORDPRESS: {
                let result: any = await WordpressParser.parse(instructions)
                if (Array.isArray(result))
                    articles.push.apply(articles, result)
                else {
                    parseFailed = true
                    errorMessage = result.errorMessage
                }
            }
                break
        }

        if (parseFailed) return {
            sourceName: instructions.getSource().name,
            parser: ParserType.toString(instructions.parserType),
            message: "Failed to fetch the articles from the site."
        }

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