import type Job from "../components/job";
import randomId from "../middleware/randomId";
import type Grid from "./grid";
import type Article from "../components/article";
import ParserLoader from "./parsers/ParserLoader";
import hashCode from "../middleware/hashCode";
import type {ParserResult} from "../components/types";
import Utils from "./parsers/Utils";
import type {Saffron} from "../index";


export default class Worker {

    declare readonly id: string;
    private declare isRunning: boolean;

    constructor(private readonly saffron: Saffron) {
        this.id = randomId("wkr");
    }

    static async parse(job: Job): Promise<ParserResult[]> {
        let instructions = job.source.instructions;

        let results: ParserResult[] = [];
        for (const pair of instructions.url) {
            const parser = ParserLoader.getParser(instructions.parserType)!!;
            const utils = new Utils();
            utils.url = pair.url;
            utils.aliases = pair.aliases;
            utils.isScrapeAfterError = job.attempts !== 0;
            utils.source = job.source;

            // Will throw error in case of fail (catch in call function).
            const newArticles = await parser.parse(utils);
            results.push({
                aliases: pair.aliases,
                url: pair.url,
                articles: newArticles
            });
        }

        results.forEach(r => {
            r.articles.forEach((article: Article) => {
                article.source = job.source.name
            });
        });

        return results;
    }

    /**
     * Return the id of a worker that will be used for the next job
     * @param lastWorkerId The job's previous worker id. It will be excluded from the election only if the worker are greater that one
     * @param grid
     */
    static electWorker(lastWorkerId: string, grid: Grid): string {
        // Make a copy of the array
        let workers = grid.workers.slice();

        // This is not supposed to be true
        if(workers.length === 0) return lastWorkerId;

        // If only one worker return that worker
        if (workers.length === 1) return workers[0];

        // If more than one worker, delete the last used worker (if in array)
        let index = workers.findIndex((id: string) => id === lastWorkerId);
        if (index != -1) workers.splice(index, 1);

        // From the remaining worker select one
        return workers[Math.abs(hashCode(lastWorkerId)) % workers.length];
    }

    /**
     * Worker will start accepting jobs
     */
    start() {
        this.saffron.grid.announceWorker(this);
        this.isRunning = true;

        // start listening for new jobs
        this.saffron.events.on("scheduler.job.push", async (job: Job) => {
            if (!this.isRunning || this.id !== job.worker) return;

            let result: ParserResult[];
            try {
                result = await Worker.parse(job);
            } catch (e: any) {
                this.saffron.events.emit("worker.parsers.error", e);
                await this.saffron.grid.failedJob(job);
                return;
            }

            if (!this.isRunning) return;

            await this.saffron.grid.mergeArticles(job.source, result);
            await this.saffron.grid.finishedJob(job);
        });
    }

    /**
     * Worker will stop accepting jobs and abort existing ones.
     */
    stop() {
        this.isRunning = false;
        this.saffron.grid.destroyWorker(this);
    }
}