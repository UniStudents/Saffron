import type {Job} from "../components/job";
import {randomId} from "../middleware/randomId";
import type {Grid} from "./grid";
import type {Article} from "../components/article";
import {ParserLoader} from "./parsers/ParserLoader";
import {hashCode} from "../middleware/hashCode";
import type {ParserResult} from "../components/types";
import {Utils} from "./parsers/Utils";
import type {Saffron} from "../index";

const sleep = ms => new Promise( res => setTimeout(res, ms));

export class Worker {

    declare readonly id: string;
    private declare isRunning: boolean;

    constructor(private readonly saffron: Saffron, id?: string) {
        this.id = id ?? randomId("wkr");
    }

    static async parse(job: Job): Promise<ParserResult[]> {
        const instructions = job.source.instructions;

        const results: ParserResult[] = [];
        for (let i = 0; i < instructions.url.length; i++) {
            const pair = instructions.url[i];

            const parser = ParserLoader.getParser(instructions.parserType)!!;
            const utils = new Utils();
            utils.url = pair.url;
            utils.aliases = pair.aliases;
            utils.isScrapeAfterError = job.attempts !== 0;
            utils.source = job.source;

            const delayBetweenRequests = utils.source.instructions.delayBetweenRequests;
            if(i !== 0 && delayBetweenRequests !== 0) {
                await sleep(delayBetweenRequests);
            }

            // Will throw error in case of fail (catch in call function).
            const articles = await parser.parse(utils);
            if(!Array.isArray(articles))
                throw new Error('did not return an array of articles');

            const categoriesFromAliases = utils.aliases.map((alias: string) => ({name: alias, links: [utils.url]}));
            articles.forEach(article => article.pushCategories(categoriesFromAliases));

            results.push({
                aliases: pair.aliases,
                url: pair.url,
                articles
            });
        }

        results.forEach(r => {
            r.articles.forEach((article: Article) => {
                article.source = job.source.name
            });
        });

        return results;
    }

    static electWorker(lastWorkerId: string, grid: Grid): string {
        // Make a copy of the array
        const workers = grid.workers.slice();

        // This is not supposed to be true
        if (workers.length === 0) return lastWorkerId;

        // If only one worker return that worker
        if (workers.length === 1) return workers[0];

        // If more than one worker, delete the last used worker (if in array)
        const index = workers.findIndex((id: string) => id === lastWorkerId);
        if (index != -1) workers.splice(index, 1);

        // From the remaining worker select one
        return workers[Math.abs(hashCode(lastWorkerId)) % workers.length];
    }

    start() {
        this.saffron.grid.announceWorker(this);
        this.isRunning = true;

        // start listening for new jobs
        this.saffron.events.on("scheduler.job.push", this.acceptJob.bind(this));
    }

    stop() {
        this.isRunning = false;
        this.saffron.grid.destroyWorker(this);
    }

    private async acceptJob(job: Job) {
        if (!this.isRunning || this.id !== job.worker) return;

        let result: ParserResult[];
        try {
            result = await Worker.parse(job);
        } catch (e: any) {
            e.message = `${job.source.instructions.parserType.toUpperCase()}ParserException failed [${job.source.name}] job: ${e.message}`;

            this.saffron.events.emit("worker.parsers.error", e);
            await this.saffron.grid.failedJob(job, e);
            return;
        }

        if (!this.isRunning) return;

        await this.saffron.grid.mergeArticles(job.source, result);
        await this.saffron.grid.finishedJob(job);
    }
}