import Logger from "../middleware/logger";
import {LoggerTypes} from "../components/LoggerTypes";
import Job from "../components/job";
import Article from "../components/article";
import chalk from "chalk";
import Grid from "./grid/index";
import Config, {ConfigOptions} from "../components/config";
import Source from "../components/source";
import {CallbackVoid} from "../components/types";

export default class Events {

    private static antennae: any

    /**
     * Return the event emitter
     */
    static getAntennae(): Antennae {
        if (Events.antennae == null) Events.antennae = new Antennae()
        return Events.antennae
    }

    static emit(eventName: string, ...args: any[]): void {
        this.getAntennae().emit(eventName, ...args);
    }

    static on(eventName: string, callback: (...args: any[]) => void): void {
        this.getAntennae().on(eventName, callback);
    }

    static registerLogListeners(): void {
        let logLevel = Config.getOption(ConfigOptions.MISC_LOG_LEVEL);
        if (logLevel === 'none') return;

        this.getAntennae().on('title', () =>
            Logger(LoggerTypes.TITLE, "Simple Abstract Framework For the Retrieval Of News"));

        if (logLevel === 'all' || logLevel === 'info') {
            this.getAntennae().on("database.set.okay", (source: Source, articles: Article[]) =>
                Logger(LoggerTypes.DEBUG, `${chalk.red('Database')} - Upload ${articles.length} articles to db for ${source.name}.`));

            this.getAntennae().on("scheduler.sources.new", (names: string[]) =>
                Logger(LoggerTypes.INFO, `Loaded ${names.length} sources`))

            this.getAntennae().on("scheduler.job.new", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - add new job(${job.id}) to queue for ${job.getSource().name}.`));
            this.getAntennae().on("scheduler.job.finished", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - found finished job(${job.id}).`));
            this.getAntennae().on("scheduler.job.failed", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - found failed job(${job.id}).`));
            this.getAntennae().on("scheduler.job.reincarnate", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - reincarnating job(${job.id}).`));

            this.getAntennae().on("scheduler.job.worker.replace", (old_worker_id: string, job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - replacing worker for job(${job.id}).`));
            this.getAntennae().on("scheduler.job.push", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - pushing job(${job.id}) to workers.`));

            this.getAntennae().on("grid.node.connected", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node connected.`));
            this.getAntennae().on("grid.node.disconnected", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node disconnected.`));
            this.getAntennae().on("grid.worker.announced", (worker_id: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker announced (${worker_id}).`));
            this.getAntennae().on("grid.worker.destroyed", (worker_id: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker destroyed (${worker_id}).`));

            this.getAntennae().on("worker.job.finished", (jobId: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - finished job(${jobId}).`));
            this.getAntennae().on("worker.job.failed", (jobId: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - failed job(${jobId}).`));

            this.getAntennae().on("worker.articles.found", (articles: Article[], src: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.cyan('Articles')} - Finished job returned ${articles.length} articles for ${src}.`));
            this.getAntennae().on("worker.articles.new", (articles: Article[], src: string) =>
                Logger(LoggerTypes.INFO, `${chalk.cyan('Articles')} - ${articles.length} articles will be added to to the db for ${src}.`));
        }

        if (logLevel === 'all' || logLevel === 'info' || logLevel === 'errors') {
            this.getAntennae().on("database.get.error", (source: Source, error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Database')} - Cannot get articles from db for ${source.name}.`);
                console.log(error);
            });

            this.getAntennae().on("database.set.error", (source: Source, error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Database')} - Cannot upload articles to db for ${source.name}.`);
                console.log(error);
            });

            this.getAntennae().on("scheduler.path.error", (error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Scheduler')} - Path is invalid or there are insufficient permissions.`);
                console.log(error);
            });

            this.getAntennae().on("scheduler.sources.error", (sourceFile: any, error: any) =>
                Logger(LoggerTypes.DEBUG, `${chalk.red('Scheduler')} - failed to parse source '${sourceFile.path}' with error: ${error.message}`));

            this.getAntennae().on('grid.connection.failed', (error: any) => {
                Logger(LoggerTypes.INSTALL_ERROR, 'Failed to start grid.')
                console.log(error)
            });

            this.getAntennae().on("worker.parsers.error", (e: any) => {
                Logger(LoggerTypes.INFO, `${chalk.red('Parsers')} - failed to scrape the articles.`);
                console.log(e);
            });

            this.getAntennae().on("middleware.error", (mid: string, e: any) => {
                Logger(LoggerTypes.INFO, `${chalk.red('Middleware')} - an error was caught at ${mid}.`);
                console.log(e);
            });
        }

    }
}

class Antennae {
    private _callbacks: { [event: string]: CallbackVoid[] } = {};

    public on(eventName: string, callback: CallbackVoid): void {
        if (eventName.length === 0) throw Error("You cannot create an event for nothing!");

        if (!this._callbacks[eventName])
            this._callbacks[eventName] = [];

        this._callbacks[eventName].push(callback);
    }

    public emit(eventName: string, ...args: any[]): void {
        if (!this._callbacks[eventName]) return;

        Grid.getInstance().emit(eventName, ...args);

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
    }
}