export default class Job {
    declare id: string // Job id
    declare source_id: string // Source id where the job belongs
    declare nextRetry: number // The date (milliseconds) where the job will be send to a worker | Only the scheduler edit this

    constructor(id: string) {
        this.id = id
    }
}