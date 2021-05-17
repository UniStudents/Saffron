import Job from "../components/job";
import {Logger} from "mongodb";
import randomId from "../middleware/randomId";
import instructions from "./instructions";
export default class Source {

    static async parseFileObject(source: any): Promise<void> {
        // Check if source is valid and return an object for that source
        console.log(source.baseURL, source[0]);

        if (source.baseURL.length == 0) throw new Error('Please specify a baseURL.')
        // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(baseURL)) throw new Error('You specified an invalid baseURL')
        //if (['api', 'portal'].includes(source.type) == false) throw new Error('A source\'s "api" value must be either "api" or "portal"')

        let ret = new Source(randomId("src"))
        ret.intervalBetweenScans = source.intervalBetweenNewScan

        Source._sources.push(ret)
    }

    static getSources(): Array<Source> {
        return this._sources
    }

    static getSourceFromJob(job: Job): Source {
        return this._sources.find((source: Source) => { return source.id === job!!.source.id })!!
    }

    static getSourceByID(id: String): Source {
        return this._sources.find((source: Source) => source.id === id)!!;
    }

    private static _sources: Source[] = []

    declare id: string
    declare intervalBetweenScans: number
    declare instructions: instructions

    constructor(id: string) {
        this.id = id
    }
}