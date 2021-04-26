import Database from "./database";
import Job from "../components/job";
import Events from "./events";

let dummyStorage: Job[] = [],
    events = Events.getAntennae()

export default class Grid {

    private static instance: Grid

    static getInstance(): Grid {
        if(this.instance == null)
            this.instance = new Grid()

        return this.instance
    }

    declare offload: Database

    private constructor() {
        this.offload = Database.getInstance()!!
    }

    async connect(): Promise<void> {
        // connect with other workers or scheduler
    }

    async pushJob(job: Job): Promise<void> {
        // Scheduler to push a new job
        dummyStorage.push(job)
        events.emit("new-job", job)
    }

    async clearAllJobs(): Promise<void> {

    }

    async getJobs(): Promise<Array<Job> | null> {
        // Scheduler for checking if the job exists so not to create a duplicate

        return null
    }

    async getJob(id: string): Promise<Job | null> {
        // For scheduler to get a job with specific id
        return null
    }

    async deleteJob(id: string): Promise<void> {
        // for scheduler to delete a job with specific id
    }

    async finishJob(job_id: string): Promise<void> {
        // worker finished the job
    }
}