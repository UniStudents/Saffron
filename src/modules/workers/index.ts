import Events from "../events"
import Job from "../../components/job";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import randomId from "../../middleware/randomId";
import HtmlParser from "./parsers/htmlParser";
import Instructions from "../../components/instructions";
import {ParserType} from "./parsers/ParserType";
import Source from "../../components/source";
import Grid from "../grid";
import Database from "../database";
import logger from "../../middleware/logger";
import rssParser from "./parsers/rssParser";
import DynamicParser from "./parsers/dynamicParser";
import Article from "../../components/articles";

export default class Worker {

    async toJSON(): Promise<object> {
        return {
            id: this.id

        }
    }

    constructor(){ 
        this.id = randomId("wkr")
    }

    declare id: string;


    async start(): Promise<void> {
        await Database.getInstance()!!.announceWorker(this)
        Logger(LoggerTypes.INFO, `Worker started. ID: ${this.id}`)
        // start listening for new jobs
        Events.getAntennae().on("new-job", async (job: Job) => {
           if(this.id !== job.worker.id) return

            let instructions = job.getInstructions()

            let articles: Array<Article> = [];
            switch (instructions.parserType){
                case ParserType.HTML: {
                    /* Test for html Parser.

                     let parseInstructions: Instructions = new Instructions();
                     parseInstructions.source = {id: job.getSource()?.id};
                     parseInstructions.url = "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html?start=10";
                     parseInstructions.elementSelector = ".itemContainer.itemContainerLast";
                     parseInstructions.scrapeOptions = {
                         ".catItemDateCreated" : {
                             "name": "pubDate",
                             "find" : null,
                             "multiple": false
                         },
                         ".catItemTitle" : {
                             "name": "title",
                             "attributes": null,
                             "find": ["a"],
                             "multiple": false
                         },
                         ".catItemBody" : {
                             "name": "body",
                             "find": null,
                             "multiple": false
                         },
                         ".catItemLinks": {
                             "name": "links",
                             "find": [".catItemAttachmentsBlock","li","a"],
                             "attributes": ["value","href"],
                             "multiple": true
                         }
                     }

                     parseInstructions.parserType = ParserType.HTML;
                     */
                    // articles = await HtmlParser.parse(instructions,10);
                } break
                case ParserType.RSS: {
                    // articles = await rssParser.rssParser(instructions.url,10)
                    // TODO - Fix rss to return Array<Article>
                } break
                case ParserType.CUSTOM: {
                    articles = await DynamicParser.parse(job, instructions, 10)
                } break
            }

            // when job is finish/failed emit finished/failed job class
            logger(LoggerTypes.DEBUG, `Job finished ${articles === undefined ? ' with a failure: ' : ' successfully: '} (${job.id}).`)
            console.log(articles)

           // if(articles === undefined) await Grid.getInstance().failedJob(job)
            await Grid.getInstance().finishJob(job)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job and delete worker
        // False delete worker from gird
    }
}