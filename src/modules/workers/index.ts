import Events from "../events"
import Job from "../../components/job";
import randomId from "../../middleware/randomId";
import Grid from "../grid";
import Article from "../../components/articles";
import ParserLoader from "../parsers/ParserLoader";
import hashCode from "../../middleware/hashCode";


export default class Worker {

    declare readonly id: string;
    private declare isForcedStopped: boolean;
    private declare isRunning: boolean;

    constructor() {
        this.id = randomId("wkr");
    }

    /**
     * Worker will start accepting jobs
     */
    async start(): Promise<void> {
        Grid.getInstance().announceWorker(this);
        this.isForcedStopped = false;
        this.isRunning = true;

        // start listening for new jobs
        Events.getAntennae().on("scheduler.job.push", async (job: Job) => {
            if (!this.isRunning) return;
            if (this.id !== job.worker.id) return;

            let articles: Article[];
            try {
                articles = await Worker.parse(job);
            } catch (e: any) {
                Events.emit("workers.parsers.error", e);
                await Grid.getInstance().failedJob(job);
                return;
            }

            if (this.isForcedStopped) return;

            const source = job.getSource();
            articles.forEach((article: Article) => {
                article.source = {
                    id: source.getId(),
                    name: source.name
                }
            });

            const tableName = source.tableName || source.name;

            await Grid.getInstance().mergeArticles(source, tableName, articles);
            await Grid.getInstance().finishedJob(job);
        })
    }

    static async parse(job: Job): Promise<Article[]> {
        let instructions = job.getInstructions();

        let articles: Article[] = []; // TODO - do not merge url per article
        for (const pair of instructions.url) {
            let url = pair[0];
            let alias = pair[1] ? pair[1] : "";

            const parser = ParserLoader.getParser(instructions.parserType)!!;
            // Will throw error in case of fail (catch in call function).
            const newArticles = await parser.parse(job, alias, url, job.getInstructions().amount);
            articles.push(...newArticles);
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
        let workers = Grid.getInstance().getWorkers().slice();

        // If only one worker, return the same
        if(workers.length === 1 && workers[0] === lastWorkerId)
            return lastWorkerId;

        // If more than one worker, delete the last one
        if (workers.length > 1) {
            let index = workers.findIndex((id: string) => id === lastWorkerId)
            if (index != -1)
                workers.splice(index, 1)
        }

        // From the remaining workers select one
        return workers[Math.abs(hashCode(lastWorkerId)) % workers.length]
    }
}