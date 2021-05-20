import Source from "./source";
import {JobStatus} from "./JobStatus";
import randomId from "../middleware/randomId"
import Instructions from "../components/instructions"
export default class Job {
    declare id: string // Job id
    declare source: {
        id: string
    } // Source id where the job belongs
    declare nextRetry: number // The date (milliseconds) where the job will be send to a worker | Only the scheduler edit this
    declare attempts: number
    declare emitAttempts: number
    declare status: JobStatus
    declare worker:{
        id: string
    }

    constructor() {
        this.id = randomId("job")

    }

    static getJobs(): Job[] {
        return Job.getJobs()
    }

    getSource(): Source {
        return Source.getSourceFromJob(this)
    }

    getInstructions() : Instructions {
        return this.getSource().instructions
    }

    private static jobs: Array<Job> = []
}