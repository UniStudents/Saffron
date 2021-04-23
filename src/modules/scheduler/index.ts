import {Database} from "../database";

export class Scheduler {

    declare offLoadDB: Database

    constructor(offLoadDB: Database) {
        this.offLoadDB = offLoadDB
    }

    async start(): Promise<void> {
        
    }
}