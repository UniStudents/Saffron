import Database from "../database/index"
import Grid from "../grid";
import Events from "../events"
import Job from "../../components/job";

export default class Worker {

    async start(): Promise<void> {
        console.log("Worker Started")

        // start listening for new jobs
        Events.getAntennae().on("new-job", (job: Job) => {
            console.log("New job")
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job
    }
}