import Config, {ConfigOptions} from "../../components/config";
import Job, {JobStatus} from "../../components/job";
import Source from "../../components/source";
import Worker from "../worker";
import glob from "glob";
import * as path from "path";
import {Saffron} from "../../index";

export default class Scheduler {

    declare sources: Source[];
    private declare running: boolean;
    private declare jobsStorage: Job[];

    constructor(private readonly saffron: Saffron) {
        this.jobsStorage = [];
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

        this.jobsStorage.push(nJob);
        this.saffron.events.emit("scheduler.job.new", nJob);
    }

    /**
     * Starts the scheduler
     */
    async start(keepPreviousSession: boolean): Promise<void> {
        const checkInterval = Config.getOption(ConfigOptions.SCHEDULER_CHECKS_INT, this.saffron.config);

        this.running = true;
        if (!keepPreviousSession) {
            const sources = await this.resetSources();
            this.resetJobs(sources);
        }

        // Check grid for job status
        const mInterval = setInterval(async () => {
            if (!this.running) {
                clearInterval(mInterval);
                return;
            }

            // Load all jobs
            for (let job of this.jobsStorage) {
                job.untilRetry -= checkInterval;

                switch (job.status) {
                    // Issue new job for this source
                    case JobStatus.FINISHED:
                        this.saffron.events.emit("scheduler.job.finished", job);
                        this.deleteJob(job);

                        // TODO: Maybe do not delete jobs. Keep same instances with updated data.

                        await this.issueJobForSource(job.source, job.worker.id);
                        break;
                    // A job failed so increment the attempts and try again
                    case JobStatus.FAILED:
                        this.saffron.events.emit("scheduler.job.failed", job);

                        job.attempts++;
                        job.emitAttempts = 0;

                        // If attempts > e.x. 10 increase interval to check on e.x. a day after
                        let interval = job.attempts > 10
                            ? Config.getOption(ConfigOptions.SCHEDULER_JOB_HEAVY_INT, this.saffron.config)
                            : (job.source.retryInterval ? job.source.retryInterval : Config.getOption(ConfigOptions.SCHEDULER_JOB_INT, this.saffron.config) / 2);

                        job.untilRetry = interval;
                        job.status = JobStatus.PENDING;

                        this.saffron.events.emit("scheduler.job.reincarnate", job);
                        break;
                    // Pending jobs
                    case JobStatus.PENDING:
                        if (job.untilRetry <= 0) {
                            // If the worker did not change the job status after 5 times (totally: 5 * checkInterval ms),
                            // expect it to have crashed, so we elect a new worker to take its place.
                            if (job.emitAttempts > 5 || job.worker.id.trim().length === 0) {
                                let oldWorker = job.worker.id;
                                this.saffron.grid.fireWorker(job.source.id, oldWorker);

                                job.worker.id = Worker.electWorker(job.worker.id, this.saffron.grid);
                                job.emitAttempts = 0;
                                this.saffron.events.emit("scheduler.job.worker.replace", oldWorker, job);
                            }

                            if (job.emitAttempts === 0) this.saffron.events.emit("scheduler.job.push", job);
                            job.emitAttempts++;
                        }
                        break;
                }
            }
        }, checkInterval);
    }

    /**
     * Stops the scheduler from issuing new jobs
     */
    stop() {
        this.running = false;
    }

    getJobs(): Job[] {
        return this.jobsStorage;
    }

    replaceCurrentJobs(jobs: Job[]) {
        jobs.forEach(job => job.worker.id = Worker.electWorker(job.worker.id, this.saffron.grid))
        this.jobsStorage = jobs;
    }

    resetJobs(sources: Source[]) {
        this.jobsStorage = [];

        // Create separation interval
        let separationInterval = Config.getOption(ConfigOptions.SCHEDULER_JOB_INT, this.saffron.config) / sources.length

        let workersIds = this.saffron.grid.getWorkers();
        let sI = 0, wI = 0;
        for (let source of sources) {
            this.issueJobForSource(source, workersIds[wI++], separationInterval * sI++);
            if (wI == workersIds.length) wI = 0;
        }
    }

    async resetSources(): Promise<Source[]> {
        // Read all source files
        this.sources = [];
        await this.scanSourceFiles();
        let sources = this.sources;

        let includeOnly = Config.getOption(ConfigOptions.SOURCES_INCLUDE_ONLY, this.saffron.config);
        let excluded = Config.getOption(ConfigOptions.SOURCES_EXCLUDE, this.saffron.config);

        if (!Array.isArray(includeOnly)) throw new Error("Config.sources.includeOnly is not an array.");
        if (!Array.isArray(excluded)) throw new Error("Config.sources.excluded is not an array.");

        // Include only
        if (includeOnly.length > 0) {
            let tmpSources: Source[] = [];
            sources.forEach((source: Source) => {
                if (includeOnly.includes(source.name))
                    tmpSources.push(source);
            });
            sources = tmpSources;
        }

        // Exclude sources
        excluded.forEach((ex_source: any) => {
            let index = sources.findIndex((source: Source) => source.name === ex_source);
            if (index !== -1)
                sources.splice(index, 1);
        });

        this.saffron.events.emit("scheduler.sources.new", sources.map((source: Source) => source.name));
        return sources;
    }

    changeJobStatus(id: string, status: JobStatus) {
        let job = this.jobsStorage.find((obj: Job) => obj.id === id);
        if (job) job.status = status;
    }

    /**
     * Scans the source files from given path and translate them to classes
     */
    private scanSourceFiles(): Promise<void> {
        return new Promise((resolve, reject) => {
            let sourcesPath = Config.getOption(ConfigOptions.SOURCES_PATH, this.saffron.config);
            glob(`${path.join(process.cwd(), sourcesPath)}/**`, {}, (error: any, files: string[]) => {
                if (error) {
                    this.saffron.events.emit('scheduler.path.error', error);
                    return reject(error);
                }

                if (!files || files.length <= 0)
                    return reject(new Error("No source files were found."));

                let acceptedFiles = new RegExp(/.*js/);
                let rawSources = files.filter((file: any) => acceptedFiles.test(file))

                let sources = rawSources.map((file: string) => {
                    return {
                        filename: `${file.split("/").pop()}`,
                        path: `${file}`,
                    };
                });

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
                        this.sources.push(newSource);
                    } catch (e) {
                        this.saffron.events.emit("scheduler.sources.error", sourceFile, e);
                    }
                });

                resolve();
            });
        });
    }

    /**
     * Delete a job from storage so a new one can be issued.
     * @param job
     */
    private deleteJob(job: Job) {
        let index = this.jobsStorage.findIndex((obj: Job) => obj.id === job.id);
        if (index !== -1) this.jobsStorage.splice(index, 1);
    }
}