import Logger from "../middleware/logger";
import {LoggerTypes} from "../components/LoggerTypes";
import Job from "../components/job";
import Article from "../components/article";
import chalk from "chalk";
import Grid from "./grid";
import Config, {ConfigOptions} from "../components/config";
import Source from "../components/source";
import {CallbackVoid} from "../components/types";
import {Saffron} from "../index";

export default class Events {

    private antennae: Antennae;
    constructor(private readonly saffron: Saffron) {
        this.antennae = new Antennae(saffron);
    }

    emit(eventName: string, ...args: any[]): void {
        this.antennae.emit(eventName, ...args);
    }

    on(eventName: string, callback: (...args: any[]) => void): void {
        this.antennae.on(eventName, callback);
    }

    registerLogListeners(config: Config | null): void {
        let logLevel = Config.getOption(ConfigOptions.MISC_LOG_LEVEL, config);
        if (logLevel === 'none') return;

        this.antennae.on('title', () =>
            Logger(LoggerTypes.TITLE, "Simple Abstract Framework For the Retrieval Of News"));
        this.antennae.on("start", () =>
            Logger(LoggerTypes.DEBUG, `${chalk.white('Saffron')} - Saffron started.`));
        this.antennae.on("stop", () =>
            Logger(LoggerTypes.DEBUG, `${chalk.white('Saffron')} - Saffron stopped.`));

        if (logLevel === 'all' || logLevel === 'info') {
            this.antennae.on("database.set.okay", (source: Source, articles: Article[]) =>
                Logger(LoggerTypes.DEBUG, `${chalk.red('Database')} - Upload ${articles.length} articles to db for ${source.name}.`));

            this.antennae.on("scheduler.sources.new", (names: string[]) =>
                Logger(LoggerTypes.INFO, `Loaded ${names.length} sources`))

            this.antennae.on("scheduler.job.new", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - add new job(${job.id}) to queue for ${job.source.name}.`));
            this.antennae.on("scheduler.job.finished", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - found finished job(${job.id}).`));
            this.antennae.on("scheduler.job.failed", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - found failed job(${job.id}).`));
            this.antennae.on("scheduler.job.reincarnate", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - reincarnating job(${job.id}).`));

            this.antennae.on("scheduler.job.worker.replace", (old_worker_id: string, job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - replacing worker for job(${job.id}).`));
            this.antennae.on("scheduler.job.push", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - pushing job(${job.id}) to workers.`));

            this.antennae.on("grid.node.connected", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node connected.`));
            this.antennae.on("grid.node.disconnected", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node disconnected.`));
            this.antennae.on("grid.worker.announced", (worker_id: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker announced (${worker_id}).`));
            this.antennae.on("grid.worker.destroyed", (worker_id: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker destroyed (${worker_id}).`));
            this.antennae.on("grid.node.auth.failed", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node authentication failed.`));

            this.antennae.on("worker.job.finished", (jobId: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - finished job(${jobId}).`));
            this.antennae.on("worker.job.failed", (jobId: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - failed job(${jobId}).`));

            this.antennae.on("worker.articles.found", (articles: Article[], src: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.cyan('Articles')} - Finished job returned ${articles.length} articles for ${src}.`));
            this.antennae.on("worker.articles.new", (articles: Article[], src: string) =>
                Logger(LoggerTypes.INFO, `${chalk.cyan('Articles')} - ${articles.length} articles will be added to to the db for ${src}.`));
        }

        if (logLevel === 'all' || logLevel === 'info' || logLevel === 'errors') {
            this.antennae.on("database.get.error", (source: Source, error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Database')} - Cannot get articles from db for ${source.name}.`);
                console.log(error);
            });

            this.antennae.on("database.set.error", (source: Source, error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Database')} - Cannot upload articles to db for ${source.name}.`);
                console.log(error);
            });

            this.antennae.on("scheduler.path.error", (error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Scheduler')} - Path is invalid or there are insufficient permissions.`);
                console.log(error);
            });

            this.antennae.on("scheduler.sources.error", (sourceFile: any, error: any) =>
                Logger(LoggerTypes.DEBUG, `${chalk.red('Scheduler')} - failed to parse source '${sourceFile.path}' with error: ${error.message}`));

            this.antennae.on('grid.connection.failed', (error: any) => {
                Logger(LoggerTypes.INSTALL_ERROR, 'Failed to start grid.')
                console.log(error)
            });

            this.antennae.on("worker.parsers.error", (e: any) => {
                Logger(LoggerTypes.INFO, `${chalk.red('Parsers')} - failed to scrape the articles.`);
                console.log(e);
            });

            this.antennae.on("middleware.error", (mid: string, e: any) => {
                Logger(LoggerTypes.INFO, `${chalk.red('Middleware')} - an error was caught at ${mid}.`);
                console.log(e);
            });
        }

    }
}

class Antennae {
    private _callbacks: { [event: string]: CallbackVoid[] } = {};

    constructor(private readonly saffron: Saffron) {
    }

    public on(eventName: string, callback: CallbackVoid) {
        if (eventName.length === 0) throw Error("You cannot create an event for nothing!");

        if (!this._callbacks[eventName])
            this._callbacks[eventName] = [];

        this._callbacks[eventName].push(callback);
    }

    public emit(eventName: string, ...args: any[]) {
        if (!this._callbacks[eventName]) return;

        const _emit = () => {
            this.saffron.grid.emit(eventName, ...args);

            // Call specified callback
            this._callbacks[eventName].forEach(callback => {
                // Catch callbacks errors that the saffron cannot handle
                try {
                    callback(...args);
                } catch (e) {
                    console.log(e);
                }
            });

            if(this._callbacks['*'])
                this._callbacks['*'].forEach(callback => {
                    // Catch callbacks errors that the saffron cannot handle
                    try {
                        callback(eventName, ...args);
                    } catch (e) {
                        console.log(e);
                    }
                });
        };

        const delay = Config.getOption(ConfigOptions.MISC_EVENT_DELAY, this.saffron.config);
        if(!delay) return _emit();
        setTimeout(_emit, delay);
    }
}