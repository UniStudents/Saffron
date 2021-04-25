import Database from "../database/index"
import Grid from "../grid";
import Events from "../events"

export default class Worker {

    async start(): Promise<void> {
        // start listening for new jobs
        Events.getAntennae().on("new-job", () => {
            // We have a new job
        })
    }

    async stop(force: boolean): Promise<void> {
        // if force then abandon current job
    }
}