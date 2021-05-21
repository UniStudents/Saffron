import Source from "./source";
import {JobStatus} from "./JobStatus";
import randomId from "../middleware/randomId"
import Instructions from "../components/instructions"

export default class Job {
    declare id: string
    declare source: {
        id: string
    }
    declare nextRetry: number
    declare attempts: number
    declare emitAttempts: number
    declare status: JobStatus
    declare worker:{
        id: string
    }

    /**
     * Job constructor
     * @param id The job's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if(id !== "")
            this.id = id
        else this.id = randomId("job")
    }

    /**
     * Return the source class for the issued job
     */
    getSource(): Source {
        return Source.getSourceFromJob(this)
    }

    /**
     * Return the instructions of the source where this job is issued
     */
    getInstructions() : Instructions {
        return this.getSource().instructions
    }
}