import Config from "../../components/config";
import Events from "../events";
import Job from "../../components/job";
import Source from "../../components/source";
import Grid from "../grid/index";
import {JobStatus} from "../../components/JobStatus";
import Worker from "../workers";
import {ConfigOptions} from "../../middleware/ConfigOptions";
import glob from "glob";
import * as path from "path";

const pathCwd = process.cwd();

export default class Scheduler {

    private static instance: Scheduler | null = null;
    static getInstance(): Scheduler {
        if(this.instance === null)
            this.instance = new Scheduler();
        return this.instance!!
    }

    private declare isRunning: boolean;
    private declare jobsStorage: Job[];

    constructor() {
        Events.on("start", (keepPreviousSession) => this.start(keepPreviousSession));
        Events.on("stop", () => this.stop());
        this.jobsStorage = [];
    }

    /**
     * Issue a new job for a specific source
     * @param source The source
     * @param lasWorkerId The worker who has the job last time (Optional)
     * @param interval
     * @return Return the issued job id
     */
    issueJobForSource(source: Source, lasWorkerId: string = "", interval: number = -1): void {
        if (interval == -1)
            interval = source.interval ? source.interval : Config.getOption(ConfigOptions.SCHEDULER_JOB_INT);

        let worker = Worker.electWorker(lasWorkerId);
        let nJob = Job.createJob(source.getId(), worker, interval);

        this.jobsStorage.push(nJob);
        Events.emit("scheduler.job.new", nJob);
    }

    /**
     * Starts the scheduler
     */
    async start(keepPreviousSession: boolean): Promise<void> {
        this.isRunning = true;

        if(!keepPreviousSession) {
            const sources = await this.resetSources();
            this.resetJobs(sources);
        } else {
            let separationInterval = Config.getOption(ConfigOptions.SCHEDULER_JOB_INT) / this.jobsStorage.length;
            let i = 0;
            this.jobsStorage.filter(job => job.status === JobStatus.PENDING).forEach(job => {
                // Push pending jobs to later date, so the jobs will not be pushed all together.
                job.nextRetry = Date.now() + separationInterval * i++;
            });
        }

        // Check grid for job status
        const mInterval = setInterval(async () => {
            if (!this.isRunning) {
                clearInterval(mInterval);
                return;
            }

            // Load all jobs
            for (let job of this.jobsStorage) {
                switch (job.status) {
                    // Issue new job for this source
                    case JobStatus.FINISHED:
                        Events.emit("scheduler.job.finished", job);
                        this.deleteJob(job);

                        await this.issueJobForSource(job.getSource(), job.worker.id);
                        break;
                    // A job failed so increment the attempts and try again
                    case JobStatus.FAILED:
                        Events.emit("scheduler.job.failed", job);

                        job.attempts++;
                        job.emitAttempts = 0;

                        // If attempts > e.x. 10 increase interval to check on e.x. a day after
                        let source = job.getSource();
                        let interval = job.attempts > 10
                            ? Config.getOption(ConfigOptions.SCHEDULER_JOB_HEAVY_INT)
                            : (source.retryInterval ? source.retryInterval : Config.getOption(ConfigOptions.SCHEDULER_JOB_INT) / 2);

                        job.nextRetry = Date.now() + interval;
                        job.status = JobStatus.PENDING;

                        Events.emit("scheduler.job.reincarnate", job);
                        break;
                    // Pending jobs
                    case JobStatus.PENDING:
                        // If nextRetry is in the past that means the time has come
                        if (job.nextRetry <= Date.now()) {
                            // If the worker did not complete the job after 5 times elect new worker
                            if (job.emitAttempts > 5) {
                                let oldWorker = job.worker.id;
                                Grid.getInstance().fireWorker(job.worker.id);

                                job.worker.id = Worker.electWorker(job.worker.id);
                                Events.emit("scheduler.job.worker.replace", oldWorker, job);
                            }

                            job.emitAttempts++;
                            Events.emit("scheduler.job.push", job);
                        }
                        break;
                }
            }
        }, Config.getOption(ConfigOptions.SCHEDULER_CHECKS_INT));
    }

    /**
     * Stops the scheduler from issuing new jobs
     */
    async stop(): Promise<void> {
        this.isRunning = false;
    }

    getJobs(): Job[] {
        return this.jobsStorage;
    }

    replaceCurrentJobs(jobs: Job[]) {
        this.jobsStorage = jobs;
    }

    resetJobs(sources: Source[]) {
        // Create separation interval
        let separationInterval = Config.getOption(ConfigOptions.SCHEDULER_JOB_INT) / sources.length

        let workersIds = Grid.getInstance().getWorkers();
        let sI = 0, wI = 0;
        for (let source of sources) {
            this.issueJobForSource(source, workersIds[wI++], separationInterval * sI++);
            if (wI == workersIds.length) wI = 0;
        }
    }

    async resetSources(): Promise<Source[]> {
        // Read all source files
        await this.scanSourceFiles();
        let sources = Source.getSources();

        let includeOnly = Config.getOption(ConfigOptions.SOURCES_INCLUDE_ONLY);
        let excluded = Config.getOption(ConfigOptions.SOURCES_EXCLUDE);

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

        Events.emit("scheduler.sources.new", sources.map((source: Source) => source.name));
        return sources;
    }

    changeJobStatus(id: string, status: JobStatus) {
        let job = this.jobsStorage.find((obj: Job) => obj.id === id);
        if(job) job.status = status;
    }

    /**
     * Scans the source files from given path and translate them to classes
     */
    private scanSourceFiles(): Promise<void> {
        return new Promise((resolve, reject) => {
            let sourcesPath = Config.getOption(ConfigOptions.SOURCES_PATH);
            glob(`${path.resolve(pathCwd, sourcesPath)}/**`, {}, (error: any, files: string[]) => {
                if (error) {
                    Events.emit('scheduler.path.error', error);
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
                        Events.emit("scheduler.sources.error", sourceFile, e);
                        return;
                    }

                    try {
                        const newSource = Source.fileToSource(sourceFile);
                        Source.pushSource(newSource);
                    } catch (e) {
                        Events.emit("scheduler.sources.error", sourceFile, e);
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