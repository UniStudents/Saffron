import Job from "../components/job";
import Instructions from "./instructions";
import {ParserType} from "../modules/workers/parsers/ParserType";
import logger from "../middleware/logger";
import {LoggerTypes} from "../middleware/LoggerTypes";
import Article from "./articles";
import hash from 'crypto-js/sha256';


const fs = require('fs');

const splice = function (base: string, idx: number, rem: number, str: string): string {
    return base.slice(0, idx) + str + base.slice(Math.abs(rem));
};

export default class Source {

    /**
     * Parse and store a source file contents to an array in memory
     * @param source
     * @param addToList
     */
    static async parseFileObject(source: any, addToList: boolean = true): Promise<Source | undefined> {
        let ret = new Source()
        ret.name = source.name
        ret.scrapeInterval = source.scrapeInterval
        ret.retryInterval = source.retryInterval
        ret.willParse = true // Get from db

        ret.instructions = new Instructions()
        ret.instructions.source = {id: ret.getId()}

        if(typeof source.url === 'string') {
            ret.instructions.url = source.url
        }
        else if(Array.isArray(source.url)) {
            ret.instructions.url = []
            for(const pair of source.url){
                if(typeof pair[0] !== 'string' || pair[0].length == 0) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Invalid alias: ${pair[0]}. File: ${source.filename}`)
                    return
                }

                ret.instructions.url.push([pair[0], pair[1]])
            }
        }
        else {
            logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Invalid url. File: ${source.filename}`)
            return
        }


        let parserType = await ParserType.getFromString(source.type)
        if (parserType === ParserType.UNKNOWN) {
            logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`)
            return
        }

        ret.instructions.parserType = parserType
        switch (parserType) {
            case ParserType.HTML: {
                if (!source.url || !source.name || Object.entries(source.scrape.article).some((key: any) => key[1].class === undefined || key === undefined)) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`);
                    return
                }

                ret.instructions.elementSelector = source.scrape.container;
                ret.instructions.scrapeOptions = source.scrape.article;
                ret.instructions.endPoint = source.scrape.endPoint;
            }
                break
            case ParserType.RSS: {
                if (!source.name || !source.url) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`)
                    return
                }
                ret.instructions.scrapeOptions = {}
                if (source.renameFields) {
                    let map = new Map()
                    Object.entries(source.renameFields).forEach(([key, value]) => {
                        map.set(key, value)
                    })
                    ret.instructions.scrapeOptions.renameFields = map
                }
            } break
            case ParserType.CUSTOM: {
                let scrapeStr = source.scrape.toString()

                ret.instructions.endPoint = source.url
                ret.instructions.scrapeFunction = splice(scrapeStr
                    , scrapeStr.indexOf('(')
                    , scrapeStr.indexOf(')') + 1
                    , "(Article, utils, Exceptions)")
            } break
            case ParserType.WORDPRESS: {
                if(typeof source.url !== 'string') {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Invalid url: ${source.url}. File: ${source.filename}`)
                    return
                }

                ret.instructions.url = `${source.url}${(source.url.endsWith('/')) ? '' : '/' }`
            } break
        }

        if (addToList)
            this._sources.push(ret)

        return ret
    }

    /**
     * Return a copy array of the sources
     */
    static getSources(): Array<Source> {
        return [...this._sources]
    }

    /**
     * Return the source class based on job, article or source id
     * @param from
     */
    static getSourceFrom(from: Job | Article | string): Source {
        if (from instanceof Job)
            return this._sources.find((source: Source) => {
                return source.getId() === from.source?.id
            })!!
        else if (from instanceof Article)
            return this._sources.find((source: Source) => {
                return source.getId() === from.source?.id
            })!!

        return this._sources.find((source: Source) => source.getId() === from)!!
    }

    static _sources: Source[] = []

    private declare id: string
    declare name: string
    declare scrapeInterval: number
    declare retryInterval: number
    declare willParse: boolean
    declare instructions: Instructions

    constructor(id: string = "") {
        if(id !== "") this.id = id
    }

    /**
     * Locks the source file so it will not issue a new job until it is unlocked
     */
    lock() {
        this.willParse = false
    }

    /**
     * Generate and return the id of the source
     */
    getId(): string {
        if (!this.id)
            this.id = 'src_' + hash(this.name).toString().substr(0, 47)
        return this.id
    }

    toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            scrapeInterval: this.scrapeInterval,
            retryInterval: this.retryInterval,
            willParse: this.willParse,
            instructions: this.instructions.toJSON()
        }
    }

    static fromJSON(json: any): Source {
        let source = new Source(json.id)
        source.name = json.name
        source.scrapeInterval = json.scrapeInterval
        source.retryInterval = json.retryInterval
        source.willParse = json.willParse
        source.instructions = Instructions.fromJSON(json.instructions)

        return source
    }
}