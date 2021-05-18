import Job from "../components/job";
import randomId from "../middleware/randomId";
import Instructions from "./instructions";
import hashCode from "../middleware/hashCode";
import {ParserType} from "../modules/workers/parsers/ParserType";
import logger from "../middleware/logger";
import {LoggerTypes} from "../middleware/LoggerTypes";

const fs = require('fs');

const splice = function (base: string, idx: number, rem: number, str: string): string {
    return base.slice(0, idx) + str + base.slice(idx + Math.abs(rem));
};

export default class Source {

    static async parseFileObject(source: any): Promise<void> {
        // Check if source is valid and return an object for that source
        if (source.url.length == 0)
            return logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Please specify a url. File: ${source.filename}`)
        // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(url)) throw new Error('You specified an invalid url')
        //if (['api', 'portal'].includes(source.type) == false) throw new Error('A source\'s "api" value must be either "api" or "portal"')

        let ret = new Source()
        ret.scrapeInterval = source.scrapeInterval
        ret.retryInterval = source.retryInterval

        ret.instructions = new Instructions()
        ret.instructions.source = { id: `src_${hashCode(source.name)}` }
        ret.instructions.url = source.url

        let parserType = ParserType.getFromString(source.type)
        if(parserType === ParserType.UNKNOWN)
            return logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`)

        ret.instructions.parserType = parserType
        switch (parserType) {
            case ParserType.HTML: {

            } break
            case ParserType.RSS: {

            } break
            case ParserType.XML: {

            } break
            case ParserType.CUSTOM: {
                let scrapeStr = source.scrape.toString()

                let scrape = splice(scrapeStr
                        , scrapeStr.indexOf('(')
                        , scrapeStr.indexOf(')') + 1
                        , "(Article, Utils)")

                ret.instructions.scrapeFunction = '(' + scrape + ')();'
            } break
        }

        this._sources.push(ret)
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
    declare scrapeInterval: number
    declare retryInterval: number
    declare instructions: Instructions

    constructor() {
        this.id = randomId("wkr")
    }
}