import Source from "./source";
import {JobStatus} from "./JobStatus";
import randomId from "../middleware/randomId"
import Instructions from "../components/instructions"

export default class Job {
    declare id: string;
    declare source: {
        id: string;
    };
    declare nextRetry: number;
    declare attempts: number;
    declare emitAttempts: number;
    declare status: JobStatus;
    declare worker: {
        id: string;
    };

    constructor() {
        this.id = randomId("job");

        this.attempts = 0;
        this.emitAttempts = 0;
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

    /**
     * Return a random time in milliseconds
     * @param source_id Helps to get a more random time
     */
    private static getRandomTime(source_id: string): number {
        if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing')
            return 0

        const high = 500;
        const low = 0;

        const random = Math.floor(Math.random() * (high - low) + low) * 1000;
        if (Math.random() >= 0.5)
            return random;
        else
            return -random;
    }

    /**
     * Return the source class for the issued job
     */
    getSource(): Source {
        return Source.getSourceFrom(this);
    }

    /**
     * Return the instructions of the source where this job is issued
     */
    getInstructions(): Instructions {
        return this.getSource().instructions;
    }
}