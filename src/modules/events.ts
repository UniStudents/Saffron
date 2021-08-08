import EventEmitter from "events"
import Logger from "../middleware/logger";
import {LoggerTypes} from "../middleware/LoggerTypes";
import Job from "../components/job";
import Article from "../components/articles";
import chalk from "chalk";

export default class Events {

    private static antennae: any

    /**
     * Return the event emitter
     */
    static getAntennae(): any {
        if (Events.antennae == null) Events.antennae = new EventEmitter()
        return Events.antennae
    }

    static registerLogListeners(): void {
        this.getAntennae().on("scheduler.sources.new", (names: string[]) => Logger(LoggerTypes.INFO, `Loaded ${names.length} sources`))

        this.getAntennae().on("scheduler.job.new", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - add new job(${job.id}) to stack.`))
        this.getAntennae().on("scheduler.job.push", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - pushing job(${job.id}) to workers.`))
        this.getAntennae().on("scheduler.job.finished", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - found finished job(${job.id}).`))
        this.getAntennae().on("scheduler.job.failed", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - found failed job(${job.id}).`))
        this.getAntennae().on("scheduler.job.reincarnate", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - reincarnating job(${job.id}).`))
        this.getAntennae().on("scheduler.job.worker.replace", (old_worker_id: string, job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.blue('Scheduler')} - replacing worker for job(${job.id}).`))

        this.getAntennae().on("grid.worker.announced", (worker_id: string) => Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker announced (${worker_id}).`))
        this.getAntennae().on("grid.worker.destroyed", (worker_id: string) => Logger(LoggerTypes.DEBUG, `${chalk.yellow('Grid')} - worker destroyed (${worker_id}).`))

        this.getAntennae().on("workers.job.finished", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - finished job(${job.id}).`))
        this.getAntennae().on("workers.job.failed", (job: Job) => Logger(LoggerTypes.DEBUG, `${chalk.green('Worker')} - failed job(${job.id}).`))

        this.getAntennae().on("workers.articles.found", (articles: Article[]) => Logger(LoggerTypes.DEBUG, `${chalk.cyan('Articles')} - Finished job returned ${articles.length} articles.`))
        this.getAntennae().on("workers.articles.new", (articles: Article[]) => Logger(LoggerTypes.DEBUG, `${chalk.cyan('Articles')} - ${articles.length} articles will be added to to the db.`))

        this.getAntennae().on("workers.parsers.error", (data: any) => Logger(LoggerTypes.DEBUG, `${chalk.red('Parsers')} - failed to scrape the articles with error message: ${data.message}.`))

    }

    static registerListeners(): void {
        this.getAntennae().on("workers.articles.new", (articles: Article[]) => {
            // TODO - if articles are added only by the main implement here.
        })
    }
}