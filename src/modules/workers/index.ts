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
            let parseFailed = false

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
            }


            if (!parseFailed) {
                // Check articles with database and import what you have to import

                await Grid.getInstance().finishJob(job)
            }
            else await Grid.getInstance().failedJob(job)

            logger(LoggerTypes.DEBUG, `Job finished ${parseFailed ? ' with a failure: ' : ' successfully: '} (${job.id}).`)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job and delete worker
        // False delete worker from gird
    }
}