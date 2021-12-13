import Source from "./source";
import {JobStatus} from "./JobStatus";
import randomId from "../middleware/randomId"
import Instructions from "../components/instructions"
import hashCode from "../middleware/hashCode";

export default class Job {
    declare id: string
    declare source: {
        id: string
    }
    declare nextRetry: number
    declare attempts: number
    declare emitAttempts: number
    declare status: JobStatus
    declare worker: {
        id: string
    }

    /**
     * Job constructor
     * @param id The job's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if (id !== "")
            this.id = id
        else this.id = randomId("job")

        this.attempts = 0
        this.emitAttempts = 0
    }

    /**
     * Return the source class for the issued job
     */
    getSource(): Source {
        return Source.getSourceFrom(this)
    }

    /**
     * Return the instructions of the source where this job is issued
     */
    getInstructions(): Instructions {
        return this.getSource().instructions
    }

    toJSON(): any {
        return {
            id: this.id,
            source: this.getSource().toJSON(),
            worker: {
                id: this.worker.id
            }
        }
    }

    static fromJSON(json: any): Job {
        let job = new Job(json.id)
        job.source = json.source

        // Add source to list
        let index = Source._sources.findIndex(s => s.getId() === json.source.id)
        if(index == -1)
            Source._sources.push(Source.fromJSON(json.source))
        else Source._sources[index] = Source.fromJSON(json.source)

        job.worker = json.worker

        return job
    }

    private static times = [
        -400, -360, -300, -280, -240, -210, -180, -160, -120, -90, -60, -30, -10, -5,
        0, 5, 10, 30, 60, 90, 120, 160, 180, 210, 240, 280, 300, 360, 400
    ]

    /**
     * Return a random time in milliseconds
     * @param source_id Helps to get a more random time
     */
    private static getRandomTime(source_id: string): number {
        if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing')
            return 0

        // return a random number of some minutes
        return this.times[Math.abs(hashCode(source_id + randomId())) % this.times.length] * 1000;
    }

    /**
     * Create a job for a source
     * @param sourceId The source id
     * @param workerId The worker that the job will be assigned
     * @param interval The time from now the job will be issued to a worker
     */
    static createJob(sourceId: string, workerId: string, interval: number): Job {
        let job = new Job()
        job.source = {id: sourceId}
        // nextRetry = The time the job finished (just now) + interval + randomTIme
        job.nextRetry = Date.now() + interval + this.getRandomTime(sourceId)
        job.worker = {id: workerId}
        job.status = JobStatus.PENDING
        job.attempts = 0
        job.emitAttempts = 0
        return job
    }
}