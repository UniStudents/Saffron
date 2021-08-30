import Job from "../components/job";
import Instructions from "./instructions";
import {ParserType} from "../modules/workers/parsers/ParserType";
import logger from "../middleware/logger";
import {LoggerTypes} from "../middleware/LoggerTypes";
import Article from "./articles";
import hash from 'crypto-js/sha256';

const splice = function (base: string, idx: number, rem: number, str: string): string {
    return base.slice(0, idx) + str + base.slice(Math.abs(rem));
};

export default class Source {

    /**
     * Parse and store a source file contents to an array in memory
     * @param source
     * @param addToList
     */
    static async parseFileObject(source: any, addToList: boolean = true): Promise<Source | object> {

        let ret = new Source()

        // TODO - Add event emitters here too.
        if (!source.name || source.name.length < 3) {
            logger(LoggerTypes.INSTALL_ERROR, "Source name is not valid. Must be a string with at least 3 characters.")
            return {
                filename: source.filename,
                errorField: 'name',
                message: "Source name is not valid. Must be type string with a least 3 characters."
            }
        }
        ret.name = source.name

        if (["saffron", "config", "workers"].includes(source.collection_name)) {
            logger(LoggerTypes.INSTALL_ERROR, "Source collection name is blacklisted.")
            return {
                filename: source.filename,
                errorField: 'collection_name',
                message: "Source collection name is blacklisted. Must not be 'saffron', 'config' or 'workers'."
            }
        }
        if (source.collection_name && (typeof source.collection_name !== 'string' || source.collection_name.length < 3)) {
            logger(LoggerTypes.INSTALL_ERROR, "Source collection_name is not valid. Must be type string with at least 3 characters.")
            return {
                filename: source.filename,
                errorField: 'collection_name',
                message: "Source collection_name is not valid. Must be type string with at least 3 characters."
            }
        }
        ret.collection_name = source.collection_name

        if (source.scrapeInterval && (typeof source.scrapeInterval != 'number' || source.scrapeInterval < 0)) {
            logger(LoggerTypes.INSTALL_ERROR, "Source scrapeInterval is not valid. Must be a positive number.")
            return {
                filename: source.filename,
                errorField: 'scrapeInterval',
                message: "Source scrapeInterval is not valid. Must be a positive number."
            }
        }
        ret.scrapeInterval = source.scrapeInterval

        if (source.retryInterval && (typeof source.retryInterval != 'number' || source.retryInterval < 0)) {
            logger(LoggerTypes.INSTALL_ERROR, "Source retryInterval is not valid. Must be a positive number.")
            return {
                filename: source.filename,
                errorField: 'retryInterval',
                message: "Source retryInterval is not valid. Must be a positive number."
            }
        }
        ret.retryInterval = source.retryInterval

        ret.instructions = new Instructions()
        ret.instructions.source = {id: ret.getId()}

        if (typeof source.url === 'string') {
            if (source.url.length == 0) {
                logger(LoggerTypes.INSTALL_ERROR, "Source url is not valid. Must be a string type or an array.")
                return {
                    filename: source.filename,
                    errorField: 'url',
                    message: "Source url is not valid. Must be a string type or an array."
                }
            }

            ret.instructions.url = source.url
        } else if (Array.isArray(source.url)) {
            ret.instructions.url = []
            for (const pair of source.url) {
                if (typeof pair[0] !== 'string' || pair[0].length == 0) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Invalid alias: ${pair[0]}. File: ${source.filename}`)
                    return {
                        filename: source.filename,
                        errorField: 'url',
                        message: "Source url has an invalid alias/url pair. Invalid part: alias: " + pair[0]
                    }
                }
                if (typeof pair[1] !== 'string' || pair[1].length == 0) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Invalid alias: ${pair[0]}. File: ${source.filename}`)
                    return {
                        filename: source.filename,
                        errorField: 'url',
                        message: "Source url has an invalid alias/url pair. Invalid part: url: " + pair[1]
                    }
                }

                ret.instructions.url.push([pair[0], pair[1]])
            }
        } else {
            logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Invalid url. File: ${source.filename}`)
            return {
                filename: source.filename,
                errorField: 'url',
                message: "Source url is invalid type."
            }
        }


        let parserType = await ParserType.getFromString(source.type)
        if (parserType === ParserType.UNKNOWN) {
            logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect type. File: ${source.filename}`)
            return {
                filename: source.filename,
                errorField: 'type',
                message: "Source type is invalid."
            }
        }

        ret.instructions.parserType = parserType
        switch (parserType) {
            case ParserType.HTML: {
                if (Object.entries(source.scrape.article).some((key: any) => key[1].class === undefined || key === undefined)) {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect scrape.article options. File: ${source.filename}`);
                    return {
                        filename: source.filename,
                        errorField: 'scrape.article',
                        message: "Source scrape article contains undefined objects."
                    }
                }

                ret.instructions.elementSelector = source.scrape.container;
                ret.instructions.scrapeOptions = source.scrape.article;
                ret.instructions.endPoint = source.scrape.endPoint;
            }
                break
            case ParserType.RSS: {
                ret.instructions.scrapeOptions = {}
                if (source.renameFields) {

                    let map = new Map()
                    Object.entries(source.renameFields).forEach(([key, value]) => {
                        map.set(key, value)
                    })
                    ret.instructions.scrapeOptions.renameFields = map
                }
            }
                break
            case ParserType.DYNAMIC: {
                let scrapeStr = source.scrape.toString()

                if (typeof source.scrape != 'function') {
                    logger(LoggerTypes.INSTALL_ERROR, `Error parsing source file. Incorrect scrape function options. File: ${source.filename}`);
                    return {
                        filename: source.filename,
                        errorField: 'scrape',
                        message: "Source scrape function contains errors."
                    }
                }

                ret.instructions.endPoint = source.url
                ret.instructions.scrapeFunction = splice(scrapeStr
                    , scrapeStr.indexOf('(')
                    , scrapeStr.indexOf(')') + 1
                    , "(Article, utils, Exceptions)")
            }
                break
            case ParserType.WORDPRESS: {
                ret.instructions.url = `${source.url}${(source.url.endsWith('/')) ? '' : '/'}`
            }
                break
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
    declare collection_name: string
    declare scrapeInterval: number
    declare retryInterval: number
    declare instructions: Instructions

    constructor(id: string = "") {
        if (id !== "") this.id = id
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
            collection_name: this.collection_name,
            scrapeInterval: this.scrapeInterval,
            retryInterval: this.retryInterval,
            instructions: this.instructions.toJSON()
        }
    }

    static fromJSON(json: any): Source {
        let source = new Source(json.id)
        source.name = json.name
        source.collection_name = json.collection_name
        source.scrapeInterval = json.scrapeInterval
        source.retryInterval = json.retryInterval
        source.instructions = Instructions.fromJSON(json.instructions)

        return source
    }
}