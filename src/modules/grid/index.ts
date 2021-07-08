import Job from "../../components/job";
import Events from "../events";
import {JobStatus} from "../../components/JobStatus";
import {createServer} from "http";
import {Server, Socket} from "socket.io";
import io from "socket.io-client"
import Worker from "../workers";
import Config from "../../components/config";
import logger from "../../middleware/logger";
import {LoggerTypes} from "../../middleware/LoggerTypes";

// For alpha version
let jobsStorage: Job[] = []

export default class Grid {

    private static instance: Grid

    /**
     * Returns an instance of Grid
     */
    static getInstance(): Grid {
        if(this.instance == null)
            this.instance = new Grid()

        return this.instance
    }

    private declare readonly isMain: boolean

    private declare readonly httpServer
    private declare io_server: Server
    private declare io_client: any

    private declare workersIds: string[];
    private declare workersClients: { workersIds: string[], socketId: string }[];

    private constructor() {
        this.isMain = Config.load()!!.mode === 'main'
        this.workersIds = []
        this.workersClients = []

        // // If main saffron
        if(this.isMain){
            this.httpServer = createServer()
            this.io_server = new Server(this.httpServer, { });

            this.io_server.on("connection", (socket: Socket) => {
                this.workersClients.push({ workersIds: [], socketId: socket.id })

                socket.on('disconnect', () => {
                    let i = this.workersClients.findIndex(js => js.socketId == socket.id)
                    if(i != -1) {
                        // Delete all workers from client
                        this.workersIds.forEach((id, index, object) => {
                            if(this.workersClients[i].workersIds.includes(id))
                                this.workersIds.splice(index, 1)
                        })

                        // Delete socket association
                        this.workersClients.splice(i, 1)
                    }
                })

                socket.on('announce-worker', (data: any) => {
                    let workerId = data.id
                    if(typeof workerId !== 'string') return
                    if(workerId.length == 0) return

                    this.workersIds.push(workerId)
                    this.workersClients.find(js => js.socketId == socket.id)?.workersIds?.push(workerId)

                    logger(LoggerTypes.INFO, `Worker connected: ${workerId}`)
                })

                socket.on('destroy-worker', (data: any) => {
                    logger(LoggerTypes.INFO, `Worker disconnected: ${data.id}`)

                    let j = this.workersIds.findIndex((obj: string) => obj === data.id)
                    if(j != -1) this.workersIds.splice(j, 1)

                    let i = this.workersClients.findIndex(js => js.socketId == socket.id)
                    if(i != -1){
                        let k = this.workersClients[i].workersIds.findIndex(id => id == data.id)
                        if(k != -1) this.workersClients[i].workersIds.splice(k, 1)
                    }
                })

                socket.on('finished-job', (data: any) => {
                    let jobId = data.id

                    let i = jobsStorage.findIndex(job => job.id == jobId)
                    if(i != -1) jobsStorage[i].status = JobStatus.FINISHED
                })

                socket.on('failed-job', (data: any) => {
                    let jobId = data.id

                    let i = jobsStorage.findIndex(job => job.id == jobId)
                    if(i != -1) jobsStorage[i].status = JobStatus.FAILED
                })
            })
        }
    }

    /**
     * Connects to the grid
     */
    async connect(): Promise<void> {
        if(this.isMain) {
            this.httpServer!!.listen(8080);
        }
        else if(Config.load()!!.workers.nodes > 0){
            // TODO - address
            this.io_client = io("address", {
                reconnection: false,
                extraHeaders: { },
            })

            this.io_client.on('new-job', (data: any) => {
                let job = Job.fromJSON(data.job)
                Events.getAntennae().emit("new-job", job)
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
        if(this.isMain)
            this.workersIds.push(worker.id)
        else {
            let info = { id: worker.id }
            this.io_client.emit('announce-worker', info)
        }
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    async destroyWorker(worker: Worker): Promise<void> {
        if(this.isMain) {
            let index = this.workersIds.findIndex(id => id == worker.id)
            this.workersIds.splice(index, 1)
        }
        else {
            let info = { id: worker.id }
            this.io_client.emit('destroy-worker', info)
        }
    }

    /**
     * Remove a worker from the grid
     * @param workerId
     */
    async fireWorker(workerId: string): Promise<void> {
        if(!this.isMain) return

        let index = this.workersClients.findIndex(js => {
            let index = js.workersIds.findIndex(id => id == workerId)
            return index !== -1;
        })

        if(index != -1) {
            logger(LoggerTypes.INFO, `Worker fired: ${workerId}`)

            let j = this.workersIds.findIndex((obj: string) => obj === workerId)
            if(j != -1) this.workersIds.splice(j, 1)

            let k = this.workersClients[index].workersIds.findIndex(id => workerId == id)
            if(k != -1) this.workersClients[index].workersIds.splice(k, 1)
        }

        let k = this.workersIds.findIndex(id => workerId == id)
        if(k != -1) this.workersIds.splice(k, 1)
    }

    /**
     * <h1>Scheduler</h1>
     * Push a new job to the grid
     * @param job The job object
     */
    async pushJob(job: Job): Promise<void> {
        jobsStorage.push(job)
    }

    /**
     * <h1>Scheduler</h1>
     * Clears all the jobs from the grid
     */
    async clearAllJobs(): Promise<void> {
        jobsStorage.splice(0, jobsStorage.length)
    }

    /**
     * <h1>Scheduler</h1>
     * Returns a copy array of all the jobs
     */
    async getJobs(): Promise<Array<Job>> {
        return [...jobsStorage]
    }

    /**
     * <h1>Scheduler</h1>
     * Delete a job from the grid based on id
     * @param id
     */
    async deleteJob(id: string): Promise<void> {
        let index = jobsStorage.findIndex((obj: Job) => obj?.id === id)
        if(index !== -1)
            jobsStorage.splice(index, 1)
    }

    /**
     * <h1>Scheduler</h1>, <h1>Grid</h1>
     * Update a job based on id
     * @param job
     */
    async updateJob(job: Job): Promise<void> {
        let index = jobsStorage.findIndex((obj: Job) => obj?.id === job.id)
        if(index !== -1)
            jobsStorage[index] = job
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as finished and update the grid
     * @param job
     */
    async finishJob(job: Job): Promise<void> {
        job.status = JobStatus.FINISHED
        if(this.isMain)
            await this.updateJob(job)
        else
            this.io_client.emit('finish-job', { id: job.id })
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        job.status = JobStatus.FAILED
        if(this.isMain)
            await this.updateJob(job)
        else
            this.io_client.emit('failed-job', { id: job.id })
    }

    /**
     * <h1>Scheduler</h1>
     * Tells all the workers in the network that a job must be done
     * @param job
     */
    async emitJob(job: Job): Promise<void> {
        // Alpha version
        job.emitAttempts++
        await this.updateJob(job)
        Events.getAntennae().emit("new-job", job)

        this.io_server.sockets.emit('new-job', { job: job.toJSON() })
        // Beta version
        // Emit to worker through socket.io
    }
}