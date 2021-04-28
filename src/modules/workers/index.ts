import Events from "../events"
import Job from "../../components/job";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import randomId from "../../middleware/randomId";
import Database from "../database/index";

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
            if(this.id !== job.worker.id) return


            console.log(job.worker.id)
           // Database.getInstance()!!.


            // when job is finish emit finished job.id
            Events.getAntennae().emit("finish-job", job.id)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job and delete worker
        // False delete worker from gird
    }
}