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
    }

    async clearAllJobs(): Promise<void> {
        dummyStorage.splice(0, dummyStorage.length)
    }

    async getJobs(): Promise<Array<Job>> {
        // Scheduler for checking if the job exists so not to create a duplicate
        return dummyStorage
    }

    async getJob(id: string): Promise<Job | undefined> {
        // For scheduler to get a job with specific id
        return dummyStorage.find((obj: Job) => obj.id === id)
    }

    async deleteJob(id: string): Promise<void> {
        // for scheduler to delete a job with specific id
        let index = dummyStorage.findIndex((obj: Job) => obj.id === id)
        if(index !== -1)
            delete dummyStorage[index]
    }

    async finishJob(job_id: string): Promise<void> {
        // worker finished the job
    }
}