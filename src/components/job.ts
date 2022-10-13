import Source from "./source";
import randomId from "../middleware/randomId"
import Config, {ConfigOptions} from "./config";

export enum JobStatus {
    FAILED = 'failed',
    PENDING = 'pending',
    FINISHED = 'finished'
}

export default class Job {
    declare id: string;
    declare source: Source;
    declare untilRetry: number;
    declare attempts: number;
    declare emitAttempts: number;
    declare status: JobStatus;
    declare worker: {
        id: string;
    };

    constructor(source: Source, workerId: string, interval: number, config: Config | null) {
        this.id = randomId("job");
        this.source = source;
        this.worker = {id: workerId};
        this.attempts = 0;
        this.emitAttempts = 0;

        let untilRetry = interval + Config.getOption(ConfigOptions.SCHEDULER_RANDOMIZER, config)();
        if(untilRetry < 0) untilRetry = interval;

        this.untilRetry = untilRetry;
        this.status = JobStatus.PENDING;
    }
}