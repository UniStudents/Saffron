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
    private declare encryptionKey: string

    declare jobsStorage: Job[]

    private constructor() {
        this.isMain = Config.load()!!.mode === 'main'
        this.workersIds = []
        this.workersClients = []

        this.jobsStorage = []

        this.encryptionKey = nanoid(256)

        // // If main saffron
        if (this.isMain) {
            this.server = new Server()

            this.server.on("connection", (socket: any) => {
                this.workersClients.push({workersIds: [], socketId: socket.id})
                Events.getAntennae().emit("grid.node.connected")
            })

            this.server.on('disconnect', (socket: any) => {
                Events.getAntennae().emit("grid.node.disconnected")
                let i = this.workersClients.findIndex(js => js.socketId == socket.id)
                if (i != -1) {
                    // Delete all workers from client
                    this.workersIds.forEach((id, index, object) => {
                        if (this.workersClients[i].workersIds.includes(id))
                            this.workersIds.splice(index, 1)
                    })

                    // Delete socket association
                    this.workersClients.splice(i, 1)
                }
            })

            this.server.on('grid.worker.announced', (socket: any, data: any) => {
                let workerId = data.id
                if (typeof workerId !== 'string') return
                if (workerId.length == 0) return

                Events.getAntennae().emit("grid.worker.announced", workerId)

                this.workersIds.push(workerId)
                this.workersClients.find(js => js.socketId == socket.id)?.workersIds?.push(workerId)
            })

            this.server.on('grid.worker.destroyed', (socket: any, data: any) => {
                Events.getAntennae().emit("grid.worker.destroyed", data.id)

                let j = this.workersIds.findIndex((obj: string) => obj === data.id)
                if (j != -1) this.workersIds.splice(j, 1)

                let i = this.workersClients.findIndex(js => js.socketId == socket.id)
                if (i != -1) {
                    let k = this.workersClients[i].workersIds.findIndex(id => id == data.id)
                    if (k != -1) this.workersClients[i].workersIds.splice(k, 1)
                }
            })

            this.server.on('workers.job.finished', (data: any) => {
                let jobId = data.id

                let i = this.jobsStorage.findIndex(job => job.id == jobId)
                if (i != -1) {
                    this.jobsStorage[i].status = JobStatus.FINISHED
                    Events.getAntennae().emit("workers.job.finished", this.jobsStorage[i])

                }
            })

            this.server.on('workers.job.failed', (data: any) => {
                let jobId = data.id

                let i = this.jobsStorage.findIndex(job => job.id == jobId)
                if (i != -1) {
                    this.jobsStorage[i].status = JobStatus.FAILED
                    Events.getAntennae().emit("workers.job.failed", this.jobsStorage[i])
                }
            })

            this.server.on('workers.articles.new', async (socket: any, data: any) => {
                let articles = data.articles.map((json: any) => Article.fromJSON(json))
                Events.getAntennae().emit('workers.articles.new', articles)

                let collection = articles[0].getSource().collection_name
                if (!collection || collection.length == 0)
                    collection = articles[0].getSource().name

                // TODO - if articles are added only from main merger articles here
                // await this.mergeArticles(collection, articles)
            })

            this.server.on('workers.articles.found', (data: any) => {
                let articles = data.map((json: any) => Article.fromJSON(json))
                Events.getAntennae().emit('workers.articles.found', articles)
            })

            this.server.on('workers.parsers.error', (data: any) => {
                Events.getAntennae().emit('workers.parsers.error', data)
            })
        }
    }

    async registerGridNode(): Promise<void> {
        let _publicIp = {ipv4: (await publicIp.v4()), ipv6: (await publicIp.v6)}
        let _privateIp = privateIp.address()
        let id = (this.isMain ? 'grd-main' : randomId("grd"))
        await Database.getInstance()!!.insertGridNode(id, _publicIp, _privateIp, this.encryptionKey)
    }

    /**
     * Connects to the grid
     */
    async connect(): Promise<void> {
        if (this.isMain) {
            if (Config.load().grid.distributed)
                await this.server.listen()
        } else if (Config.load()!!.workers.nodes > 0) {
            await this.client.connect()

            this.client.on('connect', () => {
                for (const workerId of this.workersIds)
                    this.client.emit('grid.worker.announced', {id: workerId})
            })

            this.client.on('scheduler.job.push', (data: any) => {
                let job = Job.fromJSON(data)
                Events.getAntennae().emit("scheduler.job.push", job)
            })
        }
    }

    /**
     * <h1>Scheduler</h1>
     * Return all workers
     */
    async getWorkers(): Promise<Worker[]> {
        return [...this.workersIds.map(id => new Worker(id))];
    }

    /**
     * <h1>Worker</h1>
     * Initialize a new worker on the grid
     * @param worker
     */
    async announceWorker(worker: Worker): Promise<void> {
        this.workersIds.push(worker.id)
        if (!this.isMain)
            await this.client.emit('grid.worker.announced', {id: worker.id})
        else {
            this.workersIds.push(worker.id)
            Events.getAntennae().emit("grid.worker.announced", worker.id)
        }
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    async destroyWorker(worker: Worker): Promise<void> {
        let index = this.workersIds.findIndex(id => id == worker.id)
        this.workersIds.splice(index, 1)

        if (!this.isMain)
            await this.client.emit('grid.worker.destroyed', {id: worker.id})
        else {
            Events.getAntennae().emit("grid.worker.destroyed", worker.id)

            let j = this.workersIds.findIndex((obj: string) => obj === worker.id)
            if (j != -1) this.workersIds.splice(j, 1)
        }
    }

    /**
     * Remove a worker from the grid
     * @param workerId
     */
    async fireWorker(workerId: string): Promise<void> {
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
     * <h1>Scheduler</h1>
     * Push a new job to the grid
     * @param job The job object
     */
    async addNewJob(job: Job): Promise<void> {
        if (!this.isMain) return

        this.jobsStorage.push(job)
        Events.getAntennae().emit("scheduler.job.new", job)
    }

    /**
     * <h1>Scheduler</h1>
     * Clears all the jobs from the grid
     */
    async clearAllJobs(): Promise<void> {
        if (!this.isMain) return
        this.jobsStorage.splice(0, this.jobsStorage.length)
    }

    /**
     * <h1>Scheduler</h1>
     * Returns a copy array of all the jobs
     */
    async getJobs(): Promise<Array<Job>> {
        if (!this.isMain) return []
        return [...this.jobsStorage]
    }

    /**
     * <h1>Scheduler</h1>
     * Delete a job from the grid based on id
     * @param job
     */
    async deleteJob(job: Job): Promise<void> {
        if (!this.isMain) return
        Events.getAntennae().emit("scheduler.job.finished", job)

        let index = this.jobsStorage.findIndex((obj: Job) => obj.id === job.id)
        if (index !== -1) this.jobsStorage.splice(index, 1)
    }

    async reincarnateJob(job: Job): Promise<void> {
        job.status = JobStatus.PENDING
        await this.updateJob(job)

        Events.getAntennae().emit("scheduler.job.reincarnate", job)
    }

    /**
     * <h1>Grid</h1>
     * Update a job based on id
     * @param job
     */
    private async updateJob(job: Job): Promise<void> {
        let index = this.jobsStorage.findIndex((obj: Job) => obj.id === job.id)
        if (index !== -1) this.jobsStorage[index] = job
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as finished and update the grid
     * @param job
     */
    async finishedJob(job: Job): Promise<void> {
        job.status = JobStatus.FINISHED
        if (this.isMain) {
            await this.updateJob(job)
            Events.getAntennae().emit('workers.job.finished', job)
        } else await this.client.emit('workers.job.finished', {id: job.id})
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        job.status = JobStatus.FAILED
        if (this.isMain) {
            await this.updateJob(job)
            Events.getAntennae().emit("workers.job.failed", job)
        } else await this.client.emit('workers.job.failed', {id: job.id})
    }

    /**
     * <h1>Scheduler</h1>
     * Tells all the workers in the network that a job must be done
     * @param job
     */
    async spreadJob(job: Job): Promise<void> {
        if (!this.isMain) return

        job.emitAttempts++
        await this.updateJob(job)
        Events.getAntennae().emit("scheduler.job.push", job)

        if (Config.load().grid.distributed)
            await this.server.broadcast('scheduler.job.push', {job: job.toJSON()})
    }

    async onNewArticles(articles: Article[]): Promise<void> {
        // TODO - Client emit will be removed if articles are all added from the main saffron
        if (this.isMain)
            Events.getAntennae().emit("workers.articles.new", articles)
        else await this.client.emit('workers.articles.new', {
            articles: articles.map(a => a.toJSON())
        })
    }

    async onFoundArticles(articles: Article[]): Promise<void> {
        // TODO - Client emit will be removed if articles are all added from the main saffron
        if (this.isMain)
            Events.getAntennae().emit("workers.articles.found", articles)
        else await this.client.emit('workers.articles.found', articles.map(a => a.toJSON()))
    }

    async onFailedUploadingArticle(article: Article): Promise<void> {
        // TODO - Client emit will be removed if articles are all added from the main saffron
        if (this.isMain) Events.getAntennae().emit("workers.articles.errorOffloading", article.toJSON())
        else await this.client.emit('workers.articles.errorOffloading', article)
    }

    async onParserError(message: any): Promise<void> {
        if (this.isMain) Events.getAntennae().emit("workers.parsers.error", message)
        else await this.client.emit('workers.parsers.error', message)
    }

    async mergeArticles(collection: string, articles: Article[]): Promise<void> {
        // TODO - if main then merge
        await Database.getInstance()?.mergeArticles(collection, articles)
        // else emit only articles to server on workers.articles.new
    }
}