import {Config, ConfigOptions} from "../components/config";
import {Job, JobStatus} from "../components/job";
import {Source} from "../components/source";
import {Worker} from "./worker";
import glob from "glob";
import * as path from "path";
import * as fs from "fs";
import type {Saffron} from "../index";

export class Scheduler {

    declare sources: Source[];
    declare jobs: Job[];
    declare interval: NodeJS.Timeout
    checkInterval: number = 1000;
    private declare running: boolean;

    constructor(private readonly saffron: Saffron) {
        this.jobs = [];
        this.running = false;
        this.sources = [];
    }

    get isRunning() {
        return this.running;
    }

    issueJobForSource(source: Source, lasWorkerId: string = "", interval: number = -1): void {
        const worker = Worker.electWorker(lasWorkerId, this.saffron.grid);
        const nJob = new Job(source, worker, interval !== -1 ? interval : source.interval, this.saffron.config);

        this.jobs.push(nJob);
        this.saffron.events.emit("scheduler.job.new", nJob);
    }

    async start(reset: boolean): Promise<void> {
        this.running = true;

        if (reset) {
            await this.resetSources();
            this.resetJobs();
        }

        const noResponseThreshold = Config.getOption(ConfigOptions.NO_RESPONSE_THR, this.saffron.config);

        let checkingJobs = false;
        this.interval = setInterval(() => {
            if (checkingJobs) return;
            checkingJobs = true;
            if (!this.running) return;

            for (const job of this.jobs) {
                // Skip locked jobs
                if(job.isLocked) continue;

                // Subtract the elapsed time
                job.untilRetry -= this.checkInterval;

                if (job.status === JobStatus.FINISHED) {
                    this.saffron.events.emit("scheduler.job.finished", job);

                    // Delete job
                    const index = this.jobs.findIndex((obj: Job) => obj.id === job.id);
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
                        const oldWorker = job.worker;
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

    stop() {
        this.running = false;
        clearInterval(this.interval);
    }

    replaceCurrentJobs(jobs: Job[]) {
        jobs.forEach(job => job.worker = Worker.electWorker(job.worker, this.saffron.grid))
        this.jobs = jobs;
    }

    resetJobs() {
        this.jobs = [];

        if (this.sources.length == 0) return;

        const jobInt: number = Config.getOption(ConfigOptions.JOB_INT, this.saffron.config);

        // Create separation interval
        const separationInterval = jobInt / this.sources.length;

        const workersIds = this.saffron.grid.workers;
        let sI = 0, wI = 0;
        for (const source of this.sources) {
            this.issueJobForSource(source, workersIds[wI++], separationInterval * sI++);
            if (wI == workersIds.length) wI = 0;
        }
    }

    async resetSources() {
        // Read all source files
        let parsedSources = await this.scanSourceFiles();
        if (parsedSources.length == 0) {
            this.sources = [];
            return;
        }

        const includeOnly = Config.getOption(ConfigOptions.SOURCES_INCLUDE_ONLY, this.saffron.config);
        const excluded = Config.getOption(ConfigOptions.SOURCES_EXCLUDE, this.saffron.config);

        // Include only
        if (includeOnly.length > 0) {
            const tmpSources: Source[] = [];
            parsedSources.forEach((source: Source) => {
                if (includeOnly.includes(source.name))
                    tmpSources.push(source);
            });
            parsedSources = tmpSources;
        }

        // Exclude sources
        excluded.forEach((ex_source: any) => {
            const index = this.sources.findIndex((source: Source) => source.name === ex_source);
            if (index !== -1)
                parsedSources.splice(index, 1);
        });

        this.sources.length = 0;
        this.sources.push(...parsedSources);

        this.saffron.events.emit("scheduler.sources.new", this.sources.map((source: Source) => source.name));
    }

    changeJobStatus(id: string, status: JobStatus) {
        const job = this.jobs.find((obj: Job) => obj.id === id);
        if (job) job.status = status;
    }

    private scanSourceFiles(): Promise<Source[]> {
        return new Promise((resolve, reject) => {
            const sourcesPath = Config.getOption(ConfigOptions.SOURCES_PATH, this.saffron.config);
            const scanSubFolders = Config.getOption(ConfigOptions.SCAN_SUB_FOLDERS, this.saffron.config);

            let _path: string;
            if(scanSubFolders) {
                _path = `${path.join(process.cwd(), sourcesPath)}/**`;
            } else {
                _path = path.join(process.cwd(), sourcesPath);
            }

            glob(_path, {}, async (error: any, files: string[]) => {
                if (error) {
                    this.saffron.events.emit('scheduler.sources.error', error);
                    reject(error);
                    return;
                }

                if (!files || files.length == 0) {
                    resolve([]);
                    return;
                }

                const acceptedFiles = new RegExp(/.+\.(json|js)/); // Both .js and .json
                const rawSources = files.filter((file: any) => acceptedFiles.test(file))
                if (rawSources.length == 0) {
                    resolve([]);
                    return;
                }

                const sources = rawSources.map((file: string) => ({
                    filename: `${file.split("/").pop()}`,
                    path: `${file}`,
                }));

                const parsedSources: Source[] = [];
                for (const sourceFile of sources) {
                    let data: any;
                    if (sourceFile.filename.endsWith(".json")) {
                        data = JSON.parse(fs.readFileSync(sourceFile.path, 'utf-8'));
                    } else {
                        try {
                            data = await import(sourceFile.path);
                        } catch (e: any) {
                            try {
                                data = require(sourceFile.path);
                            } catch (e: any) {
                                this.saffron.events.emit("scheduler.sources.error", sourceFile, e);
                                continue;
                            }
                        }
                    }

                    let parsed: any;
                    try {
                        parsed = {
                            ...sourceFile,
                            ...data
                        };
                    } catch (e) {
                        this.saffron.events.emit("scheduler.sources.error", sourceFile, e);
                        continue;
                    }

                    try {
                        const newSource = Source.parseSourceFile(parsed, this.saffron.config);
                        parsedSources.push(newSource);
                    } catch (e) {
                        this.saffron.events.emit("scheduler.sources.error", sourceFile, e);
                    }
                }

                resolve(parsedSources);
            });
        });
    }
}