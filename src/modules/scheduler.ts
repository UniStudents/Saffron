import Config, {ConfigOptions} from "../components/config";
import Job, {JobStatus} from "../components/job";
import Source from "../components/source";
import Worker from "./worker";
import glob from "glob";
import * as path from "path";
import {Saffron} from "../index";

export default class Scheduler {

    declare sources: Source[];
    private declare running: boolean;
    declare jobs: Job[];
    declare interval:  NodeJS.Timeout
    checkInterval: number = 1000;

    constructor(private readonly saffron: Saffron) {
        this.jobs = [];
        this.running = false;
        this.sources = [];
    }

    get isRunning() {
        return this.running;
    }

    /**
     * Issue a new job for a specific source
     * @param source The source
     * @param lasWorkerId The worker who has the job last time (Optional)
     * @param interval
     * @return Return the issued job id
     */
    issueJobForSource(source: Source, lasWorkerId: string = "", interval: number = -1): void {
        let worker = Worker.electWorker(lasWorkerId, this.saffron.grid);
        let nJob = new Job(source, worker, interval !== -1 ? interval : source.interval, this.saffron.config);

        this.jobs.push(nJob);
        this.saffron.events.emit("scheduler.job.new", nJob);
    }

    /**
     * Starts the scheduler
     */
    async start(reset: boolean): Promise<void> {
        this.running = true;

        if (reset) {
            await this.resetSources();
            this.resetJobs();
        }

        const noResponseThreshold = Config.getOption(ConfigOptions.NO_RESPONSE_THR, this.saffron.config);

        let checkingJobs = false;
        this.interval = setInterval(() => {
            if(checkingJobs) return;
            checkingJobs = true;
            if (!this.running) return;

            for (let job of this.jobs) {
                // Subtract the elapsed time
                job.untilRetry -= this.checkInterval;

                if (job.status === JobStatus.FINISHED) {
                    this.saffron.events.emit("scheduler.job.finished", job);

                    // Delete job
                    let index = this.jobs.findIndex((obj: Job) => obj.id === job.id);
                    if (index !== -1) this.jobs.splice(index, 1);

                    this.issueJobForSource(job.source, job.worker);
                } else if (job.status === JobStatus.FAILED) {
                    this.saffron.events.emit("scheduler.job.failed", job);

                    job.attempts++;
                    job.emitAttempts = 0;

                    // If attempts > 10 increase interval to heavy interval
                    job.untilRetry = job.attempts > 10
                        ? Config.getOption(ConfigOptions.JOB_HEAVY_INT, this.saffron.config)
                        : (job.source.retryInterval ? job.source.retryInterval : job.source.interval / 2);

                    job.status = JobStatus.PENDING;
                    this.saffron.events.emit("scheduler.job.reincarnate", job);
                } else if (job.status === JobStatus.PENDING && job.untilRetry <= 0) {
                    // Replace worker under conditions
                    if (job.untilRetry < -job.source.interval * noResponseThreshold || !job.worker.trim().length) {
                        let oldWorker = job.worker;
                        this.saffron.grid.fireWorker(oldWorker);

                        job.worker = Worker.electWorker(oldWorker, this.saffron.grid);
                        job.emitAttempts = 0;
                        this.saffron.events.emit("scheduler.job.worker.replace", oldWorker, job);
                    }

                    if (job.emitAttempts == 0)
                        this.saffron.events.emit("scheduler.job.push", job);

                    job.emitAttempts++;
                }
            }

            checkingJobs = false;
        }, this.checkInterval);
    }

    /**
     * Stops the scheduler from issuing new jobs
     */
    stop() {
        this.running = false;
        clearInterval(this.interval);
    }

    /**
     * It will replace the current jobs with new ones. It will also override the workers' ids
     * with new ones.
     * @param jobs
     */
    replaceCurrentJobs(jobs: Job[]) {
        jobs.forEach(job => job.worker = Worker.electWorker(job.worker, this.saffron.grid))
        this.jobs = jobs;
    }

    /**
     * Reset jobs for current loaded sources.
     */
    resetJobs() {
        this.jobs = [];

        if(this.sources.length == 0) return;

        const jobInt: number = Config.getOption(ConfigOptions.JOB_INT, this.saffron.config);
        if(jobInt < 5000) throw new Error('SaffronException scheduler.jobInterval must be at least 5000ms');

        // Create separation interval
        let separationInterval = Config.getOption(ConfigOptions.JOB_INT, this.saffron.config) / this.sources.length;

        let workersIds = this.saffron.grid.workers;
        let sI = 0, wI = 0;
        for (let source of this.sources) {
            this.issueJobForSource(source, workersIds[wI++], separationInterval * sI++);
            if (wI == workersIds.length) wI = 0;
        }
    }

    async resetSources() {
        // Read all source files
        let parsedSources = await this.scanSourceFiles();
        if(parsedSources.length == 0) {
            this.sources = [];
            return;
        }

        let includeOnly = Config.getOption(ConfigOptions.SOURCES_INCLUDE_ONLY, this.saffron.config);
        let excluded = Config.getOption(ConfigOptions.SOURCES_EXCLUDE, this.saffron.config);

        if (!Array.isArray(includeOnly)) throw new Error("SaffronException sources.includeOnly is not an array.");
        if (!Array.isArray(excluded)) throw new Error("SaffronException sources.excluded is not an array.");

        // Include only
        if (includeOnly.length > 0) {
            let tmpSources: Source[] = [];
            parsedSources.forEach((source: Source) => {
                if (includeOnly.includes(source.name))
                    tmpSources.push(source);
            });
            parsedSources = tmpSources;
        }

        // Exclude sources
        excluded.forEach((ex_source: any) => {
            let index = this.sources.findIndex((source: Source) => source.name === ex_source);
            if (index !== -1)
                parsedSources.splice(index, 1);
        });

        this.sources.length = 0;
        this.sources.push(...parsedSources);

        this.saffron.events.emit("scheduler.sources.new", this.sources.map((source: Source) => source.name));
    }

    changeJobStatus(id: string, status: JobStatus) {
        let job = this.jobs.find((obj: Job) => obj.id === id);
        if (job) job.status = status;
    }

    /**
     * Scans the source files from given path and translate them to classes
     */
    private scanSourceFiles(): Promise<Source[]> {
        return new Promise((resolve, reject) => {
            let sourcesPath = Config.getOption(ConfigOptions.SOURCES_PATH, this.saffron.config);
            glob(`${path.join(process.cwd(), sourcesPath)}/**`, {}, (error: any, files: string[]) => {
                if (error) {
                    this.saffron.events.emit('scheduler.sources.error', error);
                    reject(error);
                    return;
                }

                if (!files || files.length == 0) {
                    resolve([]);
                    return;
                }

                let acceptedFiles = new RegExp(/.+\.(json|js)/); // Both .js and .json
                let rawSources = files.filter((file: any) => acceptedFiles.test(file))

                let sources = rawSources.map((file: string) => {
                    return {
                        filename: `${file.split("/").pop()}`,
                        path: `${file}`,
                    };
                });

                const parsedSources: Source[] = [];
                sources.forEach((sourceFile: any) => {
                    try {
                        sourceFile = {
                            ...sourceFile,
                            ...require(`${sourceFile.path}`)
                        };
                    } catch (e) {
                        this.saffron.events.emit("scheduler.sources.error", sourceFile, e);
                        return;
                    }

                    try {
                        const newSource = Source.parseSourceFile(sourceFile, this.saffron.config);
                        parsedSources.push(newSource);
                    } catch (e) {
                        this.saffron.events.emit("scheduler.sources.error", sourceFile, e);
                    }
                });

                resolve(parsedSources);
            });
        });
    }
}