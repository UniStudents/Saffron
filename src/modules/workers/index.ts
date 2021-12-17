import Events from "../events"
import Job from "../../components/job";
import randomId from "../../middleware/randomId";
import Grid from "../grid";
import Article from "../../components/articles";
import ParserLoader from "./parsers/ParserLoader";
import hashCode from "../../middleware/hashCode";


export default class Worker {

    declare readonly id: string;
    private declare isForcedStopped: boolean
    private declare isRunning: boolean

    /**
     * Worker constructor
     * @param id The worker's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if (id !== "")
            this.id = id
        else this.id = randomId("wkr")
    }

    /**
     * Parse the worker class to a json object
     */
    async toJSON(): Promise<object> {
        return {
            id: this.id
        }
    }

    /**
     * Worker will start accepting jobs
     */
    async start(): Promise<void> {
        Grid.getInstance().announceWorker(this)
        this.isForcedStopped = false
        this.isRunning = true

        // start listening for new jobs
        Events.getAntennae().on("scheduler.job.push", async (job: Job) => {
            if (!this.isRunning) return
            if (this.id !== job.worker.id) return

            let articles: Article[]
            try {
                articles = await Worker.parse(job)
            } catch (e: any) {
                Events.emit("workers.parsers.error", e);
                await Grid.getInstance().failedJob(job)
                return
            }

            if (this.isForcedStopped) return

            articles.forEach((article: Article) => {
                article.source = {
                    id: job.getSource().getId(),
                    name: job.getSource().name
                }
            })

            let collection = job.getSource().tableName
            if (!collection)
                collection = job.getSource().name

            await Grid.getInstance().mergeArticles(collection, articles)
            await Grid.getInstance().finishedJob(job)
        })
    }

    static async parse(job: Job): Promise<Article[]> {
        let instructions = job.getInstructions();

        let articles: Article[] = [];
        for (const pair of instructions.url) {
            let url = pair[0];
            let alias = pair[1] ? pair[1] : "";

            // Will throw error in case of fail (catch in call function).
            articles.push(...await (ParserLoader.getParser(instructions.parserType))!!.parse(job, alias, url, job.getInstructions().amount));
        }
        return articles;
    }

    /**
     * Worker will stop accepting jobs
     * @param force if true the it will abandon the current job
     */
    stop(force: boolean): void {
        this.isForcedStopped = force
        this.isRunning = false
        Grid.getInstance().destroyWorker(this)
    }

    /**
     * Return the id of a worker that will be used for the next job
     * @param lastWorkerId The job's previous worker id. It will be excluded from the election only if the workers are greater that one
     */
    static electWorker(lastWorkerId: string): string {
        let workers = Grid.getInstance().getWorkers().slice()
        if (workers.length > 1) {
            let index = workers.findIndex((id: string) => id === lastWorkerId)
            if (index != -1)
                workers.splice(index, 1)
        }

        if (workers.length == 0)
            return lastWorkerId;

        return workers[Math.abs(hashCode(lastWorkerId)) % workers.length]
    }
}