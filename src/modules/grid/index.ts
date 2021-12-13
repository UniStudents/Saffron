import Job from "../../components/job";
import Events from "../events";
import {JobStatus} from "../../components/JobStatus";
import Worker from "../workers";
import Config from "../../components/config";
import {nanoid} from "nanoid";
import publicIp from "public-ip";
import privateIp from "ip";
import Database from "../database/index";
import randomId from "../../middleware/randomId";
import Article from "../../components/articles";
import Server from "./server";
import Client from "./client";


export default class Grid {

    private static instance: Grid

    /**
     * Returns an instance of Grid
     */
    static getInstance(): Grid {
        if (this.instance == null)
            this.instance = new Grid()

        return this.instance
    }

    private declare readonly isMain: boolean

    private declare server: Server
    private declare client: Client

    private declare readonly workersIds: string[];
    private declare workersClients: { workersIds: string[], socketId: string }[];
    private declare readonly encryptionKey: string

    declare jobsStorage: Job[]

    private constructor() {
        this.isMain = Config.load()!!.mode === 'main'
        this.workersIds = []
        this.workersClients = []

        this.jobsStorage = []

        this.encryptionKey = nanoid(256)

        // // If main saffron
        if (this.isMain)
            this.server = new Server();
        else this.client = new Client();
    }

    emit(eventName: string, ...args: any[]): Promise<void> {
        return new Promise<void>(async resolve => {
            // TODO - emit event to other nodes
            if (this.isMain)
                await this.server.broadcast(eventName, ...args);
            else await this.client.emit(eventName, ...args)
            resolve()
        })
    }

    async registerGridNode(): Promise<string> {
        let _publicIp = {ipv4: (await publicIp.v4()), ipv6: (await publicIp.v6)}
        let _privateIp = privateIp.address()
        let id = (this.isMain ? 'grd-main' : randomId("grd"))
        await Database.getInstance()!!.insertGridNode(id, _publicIp, _privateIp, this.encryptionKey)

        return id
    }

    /**
     * Connect to grid network.
     */
    async connect(): Promise<void> {
        if (this.isMain) {
            if (Config.load().grid.distributed)
                await this.server.listen();

            this.server.on("connection", this.registerGridNode);

            this.server.on("workers.job.finished", data => {
                let id = data.id;
                let job = this.jobsStorage.find((job: Job) => job.id == id);

                if(job) {
                    job.status = JobStatus.FINISHED;
                    Events.emit("workers.job.finished", job)
                }
            })

            this.server.on("workers.job.failed", data => {
                let id = data.id;
                let job = this.jobsStorage.find((job: Job) => job.id == id);

                if(job) {
                    job.status = JobStatus.FAILED;
                    Events.emit("workers.job.failed", job)
                }
            })
        }
        else if (Config.load()!!.workers.nodes > 0) {
            await this.client.connect()

            this.client.on('connect', () => {
                for (const workerId of this.workersIds)
                    Events.emit("grid.worker.announced", workerId);
            })

            this.client.on('scheduler.job.push', (data: any) => {
                let job = Job.fromJSON(data)
                Events.emit("scheduler.job.push", job)
            })
        }
    }

    /**
     * Deletes all jobs.
     * This function is used by the scheduler to reset all jobs.
     */
    deleteJob(job: Job) {
        let index = this.jobsStorage.findIndex((obj: Job) => obj.id === job.id)
        if (index !== -1) this.jobsStorage.splice(index, 1)
    }

    /**
     * Return all connected workers' ids.
     * This function is used by the scheduler to access all the connected workers.
     */
    getWorkers(): string[] {
        return this.workersIds;
    }

    /**
     * <h1>Worker</h1>
     * Initialize a new worker on the grid
     * @param worker
     */
    announceWorker(worker: Worker): void {
        this.workersIds.push(worker.id)
        Events.emit("grid.worker.announced", worker.id);
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    destroyWorker(worker: Worker): void {
        let index = this.workersIds.findIndex(id => id == worker.id)
        this.workersIds.splice(index, 1)
        Events.emit("grid.worker.destroyed", worker.id)
    }

    /**
     * Forcefully remove a worker from the grid
     * @param workerId
     */
    fireWorker(workerId: string): void {
        if (!this.isMain) return

        let index = this.workersClients.findIndex(js => {
            let index = js.workersIds.findIndex(id => id == workerId)
            return index !== -1;
        })

        if (index != -1) {
            let j = this.workersIds.findIndex((obj: string) => obj === workerId)
            if (j != -1) this.workersIds.splice(j, 1)

            let k = this.workersClients[index].workersIds.findIndex(id => workerId == id)
            if (k != -1) this.workersClients[index].workersIds.splice(k, 1)
        }

        let k = this.workersIds.findIndex(id => workerId == id)
        if (k != -1) this.workersIds.splice(k, 1)
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as finished and update the grid
     * @param job
     */
    async finishedJob(job: Job): Promise<void> {
        job.status = JobStatus.FINISHED
        if (this.isMain)
            Events.emit('workers.job.finished', job)
        else
            await this.client.emit('workers.job.finished', {id: job.id})
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        job.status = JobStatus.FAILED
        if (this.isMain)
            Events.emit("workers.job.failed", job)
        else
            await this.client.emit('workers.job.failed', {id: job.id})
    }

    async mergeArticles(collection: string, articles: Article[]): Promise<void> {
        if(this.isMain)
            await Database.getInstance()?.mergeArticles(collection, articles)
        // else emit only articles to server on workers.articles.new
    }
}