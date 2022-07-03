import Logger from "../middleware/logger";
import {LoggerTypes} from "../middleware/LoggerTypes";
import Job from "../components/job";
import Article from "../components/articles";
import chalk from "chalk";
import Grid from "./grid/index";
import Config from "../components/config";
import {ConfigOptions} from "../middleware/ConfigOptions";
import Source from "../components/source";

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

            this.getAntennae().on('grid.connection.okay', () =>
                Logger(LoggerTypes.STEP, 'The grid module has been initialized. Saffron will now search and connect to other counterpart nodes."'));

            this.getAntennae().on("grid.node.connected", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node connected.`));
            this.getAntennae().on("grid.node.disconnected", () =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - node disconnected.`));
            this.getAntennae().on("grid.worker.announced", (worker_id: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker announced (${worker_id}).`));
            this.getAntennae().on("grid.worker.destroyed", (worker_id: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker destroyed (${worker_id}).`));

            this.getAntennae().on("workers.job.finished", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - finished job(${job.id}).`));
            this.getAntennae().on("workers.job.failed", (job: Job) =>
                Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - failed job(${job.id}).`));

            this.getAntennae().on("workers.articles.found", (articles: Article[], src: string) =>
                Logger(LoggerTypes.DEBUG, `${chalk.cyan('Articles')} - Finished job returned ${articles.length} articles for ${src}.`));
            this.getAntennae().on("workers.articles.new", (articles: Article[], src: string) =>
                Logger(LoggerTypes.INFO, `${chalk.cyan('Articles')} - ${articles.length} articles will be added to to the db for ${src}.`));
        }

        if (logLevel === 'all' || logLevel === 'info' || logLevel === 'errors') {
            this.getAntennae().on("database.get.error", (source: Source, error: any) => {
                Logger(LoggerTypes.DEBUG, `${chalk.red('Scheduler')} - Cannot get articles from ${source.name}.`);
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

            this.getAntennae().on("workers.parsers.error", (e: any) => {
                Logger(LoggerTypes.INFO, `${chalk.red('Parsers')} - failed to scrape the articles.`);
                console.log(e);
            });
        }

    }
}

class Antennae {
    private _callbacks: any = {};

    public on(eventName: string, callback: (...args: any[]) => void): void {
        if (eventName.length === 0) throw Error("You cannot create an event for nothing!")

        if (!this._callbacks[eventName]) this._callbacks[eventName] = [];
        this._callbacks[eventName].push(callback)
    }

    public emit(eventName: string, ...args: any[]): void {
        if (!this._callbacks[eventName]) return;

        Grid.getInstance().emit(eventName, ...args)

        this._callbacks[eventName].forEach((callback: any) => callback(...args))
        if (this._callbacks['*']) this._callbacks["*"].forEach((callback: any) => callback(...args))
    }
}