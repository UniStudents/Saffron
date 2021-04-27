import Events from "../events"
import Job from "../../components/job";
import Logger from "../../middleware/logger"
import {LoggerTypes} from "../../middleware/LoggerTypes";
import randomId from "../../middleware/randomId";

export default class Worker {

    async toJSON(): Promise<object> {
        return {}
    }

    declare id: string;

    async start(): Promise<void> {
        this.id = randomId('wrk')
        Logger(LoggerTypes.INFO, `Worker started. ID: ${this.id}`)
        // start listening for new jobs
        Events.getAntennae().on("new-job", (job: Job) => {



            // when job is finish emit finished job.id
            Events.getAntennae().emit("finish-job", job.id)
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job
    }
}