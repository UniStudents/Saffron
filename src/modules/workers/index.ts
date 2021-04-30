import Events from "../events"
import Job from "../../components/job";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import randomId from "../../middleware/randomId";
import HtmlParser from "./parsers/htmlParser";
import Instructions from "../../components/instructions";
import {ParserType} from "./parsers/ParserType";

export default class Worker {

    async toJSON(): Promise<object> {
        return {
            id: this.id

        }
    }

    declare id: string;


    async start(): Promise<void> {
        this.id = randomId('wrk')
        Logger(LoggerTypes.INFO, `Worker started. ID: ${this.id}`)
        // start listening for new jobs
        Events.getAntennae().on("new-job", (job: Job) => {
           // if(this.id !== job.worker.id) return
           /* let string = "When was the People&#039;s Republic of China founded?"
            console.log(Utils.htmlStrip(string))


            console.log(job.worker.id)*/
           // Database.getInstance()!!.

            // Test for html Parser.

            /*let parseInstructions: Instructions = new Instructions("inst:1231");
            parseInstructions.url = "https://www.cs.unipi.gr/index.php?option=com_k2&view=itemlist&layout=category&task=category&id=16&Itemid=673&lang=el";
            parseInstructions.elementSelector = ".itemContainer.itemContainerLast";
            parseInstructions.scrapeOptions = {
                ".catItemHeader": {
                    "name": "title",
                    "find": ["a"],
                },
                ".catItemDateCreated": {
                    "name": "pubDate"
                },
                ".catItemIntroText": {
                    "name": "description"
                }
            }
            parseInstructions.parserType = ParserType.HTML;

            HtmlParser.parse(parseInstructions);*/



            // when job is finish emit finished job.id
            Events.getAntennae().emit("finish-job", job.id)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job and delete worker
        // False delete worker from gird
    }
}