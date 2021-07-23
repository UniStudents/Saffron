import Source from "./source";
import {JobStatus} from "./JobStatus";
import randomId from "../middleware/randomId"
import Instructions from "../components/instructions"

export default class Job {
    declare id: string
    declare source: {
        id: string
    }
    declare nextRetry: number
    declare attempts: number
    declare emitAttempts: number
    declare status: JobStatus
    declare worker: {
        id: string
    }

    /**
     * Job constructor
     * @param id The job's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if (id !== "")
            this.id = id
        else this.id = randomId("job")

        this.attempts = 0
        this.emitAttempts = 0
    }

    /**
     * Return the source class for the issued job
     */
    getSource(): Source {
        return Source.getSourceFrom(this)
    }

    /**
     * Return the instructions of the source where this job is issued
     */
    getInstructions(): Instructions {
        return this.getSource().instructions
    }

    toJSON(): any {
        return {
            id: this.id,
            source: this.getSource().toJSON(),
            worker: {
                id: this.worker.id
            }
        }
    }

    static fromJSON(json: any): Job {
        let job = new Job(json.id)
        job.source = { id: json.source.id }

        // Add source to list
        let index = Source._sources.findIndex(s => s.getId() === json.source.id)
        if(index == -1)
            Source._sources.push(Source.fromJSON(json.source))
        else Source._sources[index] = Source.fromJSON(json.source)

        job.worker = json.worker

        return job
    }
}