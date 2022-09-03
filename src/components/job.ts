import Source from "./source";
import {JobStatus} from "./JobStatus";
import randomId from "../middleware/randomId"
import Instructions from "../components/instructions"
import Config, {ConfigOptions} from "./config.js";

export default class Job {
    declare id: string;
    declare source: {
        id: string;
        source?: Source;
    };
    declare untilRetry: number;
    declare attempts: number;
    declare emitAttempts: number;
    declare status: JobStatus;
    declare worker: {
        id: string;
    };

    private constructor() {
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
        let job = new Job();
        job.source = {id: sourceId};
        job.untilRetry = interval + Config.getOption(ConfigOptions.SCHEDULER_RANDOMIZER)();
        job.worker = {id: workerId};
        job.status = JobStatus.PENDING;
        return job;
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