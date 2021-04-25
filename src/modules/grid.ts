import Database from "./database";
import Job from "../components/job";

export default class Grid {

    declare offLoadDB: Database

    constructor(offLoadDb: Database) {
        this.offLoadDB = offLoadDb
    }

    async connect() {
        // connect with other workers or scheduler
    }

    async pushJob(job: Job): Promise<void> {
        // Scheduler to push a new job
    }

    async getJobs(): Promise<Array<Job> | null> {
        // Scheduler for checking if the job exists so not to create a duplicate

        return null
    }

    async reserve(): Promise<Job | null> {
        // Worker to reserve a job that is assigned to it

        return null
    }

    async onNewJob(callback: () => any): Promise<void> {
        // For workers so they can be notified to call reserve for a new job
    }

    async finishJob(id: string): Promise<void> {
        // worker finished the job
    }
}