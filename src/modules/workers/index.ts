import Events from "../events"
import Job from "../../components/job";
import randomId from "../../middleware/randomId";
import Grid from "../grid";
import Article from "../../components/articles";
import {ParserClass} from "./parsers/ParserClass";
import ParserLoader from "./parsers/ParserLoader";


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
        await Grid.getInstance()!!.announceWorker(this)
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
                await Grid.getInstance().onParserError(e.message)
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

            let collection = job.getSource().collection_name
            if (!collection)
                collection = job.getSource().name

            await Grid.getInstance().mergeArticles(collection, articles)
            await Grid.getInstance().finishedJob(job)
        })
    }

    static async parse(job: Job): Promise<Article[]> {
        let instructions = job.getInstructions();

        try {
            let articles: Article[] = await (ParserLoader.getParser(instructions.parserType))!!.parse(job);
            return articles;
        } catch (e: any) {
            throw new Error(`WorkerException failed to complete job for ${job.getSource().name}, original error: ${e.message}`);
        }
    }

    /**
     * Worker will stop accepting jobs
     * @param force if true the it will abandon the current job
     */
    async stop(force: boolean): Promise<void> {
        this.isForcedStopped = force
        this.isRunning = false
        await Grid.getInstance().destroyWorker(this)
    }
}