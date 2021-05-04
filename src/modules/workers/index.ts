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

export default class Worker {

    async toJSON(): Promise<object> {
        return {
            id: this.id

        }
    }

    declare id: string;


    async start(): Promise<void> {
        this.id = randomId('wrk')
        await Database.getInstance()!!.announceWorker(this)
        Logger(LoggerTypes.INFO, `Worker started. ID: ${this.id}`)
        // start listening for new jobs
        Events.getAntennae().on("new-job", (job: Job) => {
           // if(this.id !== job.worker.id) return
           /* let string = "When was the People&#039;s Republic of China founded?"
            console.log(Utils.htmlStrip(string))


            console.log(job.worker.id)*/
           // Database.getInstance()!!.

            // Test for html Parser.

           /* let parseInstructions: Instructions = new Instructions(randomId("inst"));
            parseInstructions.source = {id: job.getSource()?.id};
            parseInstructions.url = "https://www.ntua.gr/el/news/announcements";
            parseInstructions.elementSelector = ".itemList > article:nth-child(1)";
            parseInstructions.scrapeOptions = {
                "": {
                    "name": "title"
                },
                ".itemList > article:nth-child(1) > header:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1)": {
                    "name": "pubDate"
                },
                " ": {
                    "name": "description"
                }
            }

            parseInstructions.parserType = ParserType.HTML;

            HtmlParser.parse(parseInstructions).then( (map) => {
                console.log(map)
            });*/

            // when job is finish emit finished job.id
            Events.getAntennae().emit("finish-job", job.id)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job and delete worker
        // False delete worker from gird
    }
}