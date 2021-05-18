import Database from "../database";
import Job from "../../components/job";
import Events from "../events";
import {JobStatus} from "../../components/JobStatus";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    // ...
});

io.on("connection", (socket: Socket) => {
    // ...
});

httpServer.listen(8080);

let dummyStorage: Job[] = [],
    events = Events.getAntennae()

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

    private constructor() {}

    /**
     * Connects to the grid
     */
    async connect(): Promise<void> {

    }

    /**
     * <h1>Scheduler</h1>
     * Push a new job to the grid
     * @param job The job object
     */
    async pushJob(job: Job): Promise<void> {
        dummyStorage.push(job)
    }

    /**
     * <h1>Scheduler</h1>
     * Clears all the jobs from the grid
     */
    async clearAllJobs(): Promise<void> {
        dummyStorage.splice(0, dummyStorage.length)
    }

    /**
     * <h1>Scheduler</h1>
     * Returns an array of all the jobs
     */
    async getJobs(): Promise<Array<Job>> {
        return dummyStorage
    }

    /**
     * <h1>Scheduler</h1>
     * Returns a specific job based on id
     * @param id
     */
    async getJob(id: string): Promise<Job | undefined> {
        return dummyStorage.find((obj: Job) => obj?.id === id)
    }

    /**
     * <h1>Scheduler</h1>
     * Delete a job from the grid based on id
     * @param id
     */
    async deleteJob(id: string): Promise<void> {
        let index = dummyStorage.findIndex((obj: Job) => obj?.id === id)
        if(index !== -1)
            dummyStorage.splice(index, 1)
    }

    /**
     * <h1>Scheduler</h1>, <h1>Grid</h1>
     * Update a job based on id
     * @param job
     */
    async updateJob(job: Job): Promise<void> {
        let index = dummyStorage.findIndex((obj: Job) => obj?.id === job.id)
        if(index !== -1)
            dummyStorage[index] = job
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as finished and update the grid
     * @param job
     */
    async finishJob(job: Job): Promise<void> {
        job.status = JobStatus.FINISHED
        await this.updateJob(job)
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        job.status = JobStatus.FAILED
        await this.updateJob(job)
    }

    /**
     * <h1>Scheduler</h1>
     * Tells all the workers in the network that a job must be done
     * @param job
     */
    async emitJob(job: Job): Promise<void> {
        job.emitAttempts++
        await this.updateJob(job)
        Events.getAntennae().emit("new-job", job)
    }
}