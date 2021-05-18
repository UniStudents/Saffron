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
        Events.getAntennae().on("new-job", (job: Job) => {
           if(this.id !== job.worker.id) return
           /* rssParser.rssParser("https://eclass.uoa.gr/modules/announcements/rss.php?c=AEROSPACE119",10).then(res=>{
                console.log(res)
            })*/
           /* let string = "When was the People&#039;s Republic of China founded?"
            console.log(Utils.htmlStrip(string))


            console.log(job.worker.id)*/
           // Database.getInstance()!!.

            // Test for html Parser.

            let parseInstructions: Instructions = new Instructions();
            parseInstructions.source = {id: job.getSource()?.id};
            parseInstructions.url = "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html";
            parseInstructions.elementSelector = ".itemContainer.itemContainerLast";
            parseInstructions.scrapeOptions = {
                ".catItemDateCreated" : {
                    "name": "pubDate",
                    "attributes": ["value","href"],
                    "find" : null,
                    "multiple": false
                },
                ".catItemTitle" : {
                    "name": "title",
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
                    "multiple": true
                }
            }

            parseInstructions.parserType = ParserType.HTML;

            // HtmlParser.parse(parseInstructions).then( (map) => {
            //     console.log(map)
            // });

            // when job is finish emit finished job class
            logger(LoggerTypes.DEBUG, `Finished job (${job.id}).`)
            Grid.getInstance().finishJob(job)
            // Grid.getInstance().failedJob(job)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job and delete worker
        // False delete worker from gird
    }
}