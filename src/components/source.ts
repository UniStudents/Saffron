import Job from "../components/job";
import {Logger} from "mongodb";
import randomId from "../middleware/randomId";
export default class Source {

    static async parseFileObject(source: any): Promise<void> {
        // Check if source is valid and return an object for that source

        if (!source.baseURL) throw new Error('Please specify a baseURL.')
        // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(baseURL)) throw new Error('You specified an invalid baseURL')
        if (!['api', 'portal'].includes(source.type)) throw new Error('A source\'s "api" value must be either "api" or "portal"')

        let ret = new Source(randomId("src"))
        ret.intervalBetweenNewScan = source.intervalBetweenNewScan

        Source._sources.push(ret)
    }

    static getSources(): Array<Source> {
        return this._sources
    }

    static getSourceFromJob(job: Job): Source {
        return this._sources.find((source: Source) => { return source.id === job!!.source.id })!!
    }

    private static _sources: Source[] = []

    declare id: string
    declare intervalBetweenNewScan: number
    declare instructions: object

    constructor(id: string) {
        this.id = id
    }
}