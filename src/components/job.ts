import Source from "./source";
import {JobStatus} from "./JobStatus";

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

    constructor(id: string) {
        this.id = id
    }

    static getJobs(): Job[] {
        return Job.getJobs()
    }

    getSource(): Source {
        return Source.getSourceFromJob(this)
    }

    private static jobs: Array<Job> = []
}