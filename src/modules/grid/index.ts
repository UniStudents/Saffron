import Database from "../database";
import Job from "../../components/job";
import Events from "../events";
import {JobStatus} from "../../components/JobStatus";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import Worker from "../workers";

// For alpha version
let jobsStorage: Job[] = [],
    workers: Worker[] = []

// For beta version
let workerClients: { id: string; socket: Socket }[] = [];

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

    private declare readonly httpServer
    private declare io: Server

    private constructor() {
        this.httpServer = createServer()
        this.io = new Server(this.httpServer, { });

        this.io.on("connection", (socket: Socket) => {
            const workerId = socket.request.headers['id']

            if(typeof workerId != 'string')
                return socket.disconnect()

            if(workerId.length === 0)
                return socket.disconnect()

            workerClients.push({id: workerId, socket})

            socket.on('disconnect', () => {
                let index = workerClients.findIndex((obj: any) => obj?.id === workerId)
                if(index != -1)
                    delete workerClients[index]
            })

            socket.on('finished-job', (data: any) => {

            })

            socket.on('failed-job', (data: any) => {

            })
        })
    }

    /**
     * Connects to the grid
     */
    async connect(): Promise<void> {
        // this.httpServer.listen(8080);
    }

    /**
     * <h1>Scheduler</h1>
     * Return all workers
     */
    async getWorkers(): Promise<Worker[]> {
        // Alpha version
        return [...workers];

        // Beta version
        // Return a Array<Worker> instance with worker ids
    }

    /**
     * <h1>Worker</h1>
     * Initialize a new worker on the grid
     * @param worker
     */
    async announceWorker(worker: Worker): Promise<void> {
        // Alpha version
        workers.push(worker)

        // Beta version
        // From socket.io-client it will connect to main saffron
        // If worker is running with main saffron then do not connect through socket.io
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    async destroyWorker(worker: Worker): Promise<void> {
        // Alpha version
        let index = workers.findIndex((obj: Worker) => obj?.id === worker.id)
        if(index !== -1)
            workers.splice(index, 1)

        // Beta version
        // From socket.io-client it will disconnect to main saffron
        // If worker is running with main saffron then do not disconnect through socket.io
    }

    /**
     * Remove a worker from the grid
     * @param workerId
     */
    async fireWorker(workerId: string): Promise<void> {
        // Alpha version
        let index = workers.findIndex((obj: Worker) => obj?.id === workerId)
        if(index !== -1)
            workers.splice(index, 1)

        // Beta version
        // From socket.io-client it will disconnect to main saffron
        // If worker is running with main saffron then do not disconnect through socket.io
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
        // Alpha version
        job.status = JobStatus.FINISHED
        await this.updateJob(job)

        // Beta version
        // If not with main saffron the send trough socket.io
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        // Alpha version
        job.status = JobStatus.FAILED
        await this.updateJob(job)

        // Beta version
        // If not with main saffron the send trough socket.io
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

        // Beta version
        // Emit to worker through socket.io
    }
}