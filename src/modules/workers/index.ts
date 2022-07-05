import Events from "../events"
import Job from "../../components/job";
import randomId from "../../middleware/randomId";
import Grid from "../grid";
import Article from "../../components/article";
import ParserLoader from "../parsers/ParserLoader";
import hashCode from "../../middleware/hashCode";
import {ParserResult} from "../../components/types";
import Utils from "../parsers/Utils";


export default class Worker {

    declare readonly id: string;
    private declare isRunning: boolean;

    constructor() {
        this.id = randomId("wkr");
    }

    static async parse(job: Job): Promise<ParserResult[]> {
        let instructions = job.getInstructions();

        let results: ParserResult[] = [];
        for (const pair of instructions.url) {
            const parser = ParserLoader.getParser(instructions.parserType)!!;
            const utils = new Utils();
            utils.url = pair.url;
            utils.aliases = pair.aliases;
            utils.isScrapeAfterError = job.attempts !== 0;
            utils.amount = job.getInstructions().amount;
            utils.instructions = job.getInstructions();

            // Will throw error in case of fail (catch in call function).
            const newArticles = await parser.parse(job, utils);
            results.push({
                aliases: pair.aliases,
                url: pair.url,
                articles: newArticles
            });
        }

        return results;
    }

    /**
     * Return the id of a worker that will be used for the next job
     * @param lastWorkerId The job's previous worker id. It will be excluded from the election only if the workers are greater that one
     */
    static electWorker(lastWorkerId: string): string {
        // Make a copy of the array
        let workers = Grid.getInstance().getWorkers().slice();

        // This is not supposed to be true
        if(workers.length === 0) return lastWorkerId;

        // If only one worker return that worker
        if (workers.length === 1) return workers[0];

        // If more than one worker, delete the last used worker (if in array)
        let index = workers.findIndex((id: string) => id === lastWorkerId);
        if (index != -1) workers.splice(index, 1);

        // From the remaining workers select one
        return workers[Math.abs(hashCode(lastWorkerId)) % workers.length];
    }

    /**
     * Worker will start accepting jobs
     */
    async start(): Promise<void> {
        Grid.getInstance().announceWorker(this);
        this.isRunning = true;

        // start listening for new jobs
        Events.getAntennae().on("scheduler.job.push", async (job: Job) => {
            if (!this.isRunning) return;
            if (this.id !== job.worker.id) return;

            let result: ParserResult[];
            try {
                result = await Worker.parse(job);
            } catch (e: any) {
                Events.emit("workers.parsers.error", e);
                await Grid.getInstance().failedJob(job);
                return;
            }

            const source = job.getSource();
            result.forEach(r => {
                r.articles.forEach((article: Article) => {
                    article.source = {
                        id: source.getId(),
                        name: source.name
                    }
                });
            });

            const tableName = source.tableName || source.name;

            if (!this.isRunning) return;

            await Grid.getInstance().mergeArticles(source, tableName, result);
            await Grid.getInstance().finishedJob(job);
        })
    }

    /**
     * Worker will stop accepting jobs and abort existing ones.
     */
    stop(): void {
        this.isRunning = false;
        Grid.getInstance().destroyWorker(this);
    }
}