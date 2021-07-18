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
     */
    static async parseFileObject(source: any, addToList: boolean = true): Promise<Source | undefined> {
        // Check if source is valid and return an object for that source
        if (source.url.length == 0) {
            logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Please specify a url. File: ${source.filename}`)
            return
        }
        // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(url)) throw new Error('You specified an invalid url')
        //if (['api', 'portal'].includes(source.type) == false) throw new Error('A source\'s "api" value must be either "api" or "portal"')

        let ret = new Source()
        ret.name = source.name
        ret.scrapeInterval = source.scrapeInterval
        ret.retryInterval = source.retryInterval
        ret.willParse = true // Get from db

        ret.instructions = new Instructions()
        ret.instructions.source = {id: ret.getId()}
        ret.instructions.url = source.url

        let parserType = await ParserType.getFromString(source.type)
        if (parserType === ParserType.UNKNOWN) {
            logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`)
            return
        }

        ret.instructions.parserType = parserType
        switch (parserType) {
            case ParserType.HTML: {
                if (!source.url || !source.name || Object.entries(source.scrape).some((key: any) => key[1].name === undefined)) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`);
                    return
                }

                ret.instructions.elementSelector = source.container;
                ret.instructions.scrapeOptions = source.scrape;
                ret.instructions.endPoint = source.endPoint;
            }
                break
            case ParserType.RSS: {
                if (!source.name || !source.url) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`)
                    return
                }
                if (source.renameFields) {
                    let map = new Map()
                    Object.entries(source.renameFields).forEach(([key, value]) => {
                        map.set(key, value)
                    })
                    ret.instructions.scrapeOptions = {renameFields: map}
                }
            }
                break
            case ParserType.CUSTOM: {
                let scrapeStr = source.scrape.toString()

                let strFunc = splice(scrapeStr
                    , scrapeStr.indexOf('(')
                    , scrapeStr.indexOf(')') + 1
                    , "(Article, utils, Exceptions)")

                ret.instructions.scrapeFunction = strFunc
            }
                break
            case ParserType.WORDPRESS: {
                ret.instructions.endPoint = `${source.url} + ${source.url.endsWith('/') ? '' : '/'}`
                break
            }
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

    private static _sources: Source[] = []

    private declare id: string
    declare name: string
    declare scrapeInterval: number
    declare retryInterval: number
    declare willParse: boolean
    declare instructions: Instructions

    constructor() {
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
}