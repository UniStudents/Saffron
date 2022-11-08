import type Source from "./source";
import randomId from "../middleware/randomId"
import Config, {ConfigOptions} from "./config";

export enum JobStatus {
    FAILED = -1,
    PENDING = 0,
    FINISHED = 1
}

export default class Job {
    declare id: string;
    declare source: Source;
    declare untilRetry: number;
    declare attempts: number;
    declare emitAttempts: number;
    declare status: JobStatus;
    declare worker: string;

    constructor(source: Source, workerId: string, interval: number, config: Config | null) {
        this.id = randomId("job");
        this.source = source;
        this.worker = workerId;
        this.attempts = 0;
        this.emitAttempts = 0;

        let untilRetry = interval + Config.getOption(ConfigOptions.INT_RANDOMIZER, config)();
        if(untilRetry < 0) untilRetry = interval;

        this.untilRetry = untilRetry;
        this.status = JobStatus.PENDING;
    }
}