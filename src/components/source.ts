import Job from "../components/job";
import Instructions from "./instructions";
import {ParserType} from "../modules/workers/parsers/ParserType";
import logger from "../middleware/logger";
import {LoggerTypes} from "../middleware/LoggerTypes";
import Article from "./articles";
import hash from 'crypto-js/sha256';
import Config from "./config";
import ParserLoader from "../modules/workers/parsers/ParserLoader";


export default class Source {

    /**
     * Parse and store a source file contents to an array in memory
     * @param source the source file
     * @param isStatic If is called by static function or the scheduler.
     */
    static async parseFileObject(source: any, isStatic: boolean = false): Promise<Source> {
        let ret = new Source();

        if (!source.name || source.name.length < 3) {
            let message = `SourceException: ${source.filename}: name: is not valid, must be type string with a least 3 characters.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }
        ret.name = source.name;

        if (["saffron", "config", "workers"].includes(source.collection_name)) {
            let message = `SourceException: ${source.filename}: collection_name: is blacklisted.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }
        if (source.collection_name && (typeof source.collection_name !== 'string' || source.collection_name.length < 3)) {
            let message = `SourceException: ${source.filename}: collection_name: is not valid, must be type string with a least 3 characters.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }
        ret.collection_name = source.collection_name;

        if (source.scrapeInterval && (typeof source.scrapeInterval != 'number' || source.scrapeInterval < 0)) {
            let message = `SourceException: ${source.filename}: scrapeInterval: is not valid, must be a positive number.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }
        ret.scrapeInterval = source.scrapeInterval;

        if (source.retryInterval && (typeof source.retryInterval != 'number' || source.retryInterval < 0)) {
            let message = `SourceException: ${source.filename}: retryInterval: is not valid, must be a positive number.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }
        ret.retryInterval = source.retryInterval;

        if (source.requestTimeout && (typeof source.requestTimeout != 'number' || source.requestTimeout < 0)) {
            let message = `SourceException: ${source.filename}: requestTimeout: is not valid, must be a positive number.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }

        // If it is not one time scrape:
        ret.requestTimeout = source.requestTimeout ? source.requestTimeout : (!isStatic ? Config.load().workers.jobs.requestTimeout : 5000)
        ret.instructions = new Instructions()
        ret.instructions.source = {id: ret.getId()}
        ret.instructions.amount = source.amount ? source.amount : (!isStatic ? Config.load().workers.jobs.amount : 10)


        if (source.hasOwnProperty("ignoreCertificates"))
            ret.instructions.ignoreCertificates = source.ignoreCertificates;
        else
            ret.instructions.ignoreCertificates = false

        if(source.hasOwnProperty("extraFields"))
            ret.instructions.extraFields = source.extraFields
        else
            ret.instructions.extraFields = []


        if(source.hasOwnProperty("extra"))
            ret.extra = source.extra;

        ret.instructions.url = [];
        if (typeof source.url === 'string') {
            if (source.url.length == 0) {
                let message = `SourceException: ${source.filename}: url: is not valid, url cannot be empty.`;
                logger(LoggerTypes.INSTALL_ERROR, message)
                throw new Error(message);
            }
            ret.instructions.url.push([source.url]);
        }
        else if (Array.isArray(source.url)) {
            for (const pair of source.url) {
                if(Array.isArray(pair) && pair.length == 2) {
                    let alias = pair[0];
                    let url = pair[1];

                    if(typeof alias !== 'string' || alias.trim() === '') {
                        let message = `SourceException: ${source.filename}: url: is not valid, invalid alias '${alias}'.`;
                        logger(LoggerTypes.INSTALL_ERROR, message);
                        throw new Error(message);
                    }

                    if(typeof url !== 'string' || url.trim() === '') {
                        let message = `SourceException: ${source.filename}: url: is not valid, invalid url '${url}'.`;
                        logger(LoggerTypes.INSTALL_ERROR, message);
                        throw new Error(message);
                    }

                    ret.instructions.url.push([url, alias]);
                }
                else if(typeof pair === 'string' || ((Array.isArray(pair) && pair.length == 1))) {
                    let url: any = pair;
                    if(Array.isArray(pair)) url = pair[0];

                    ret.instructions.url.push([url]);
                }
                else {
                    let message = `SourceException: ${source.filename}: url: is not valid, error during parsing pair: ${pair}.`;
                    logger(LoggerTypes.INSTALL_ERROR, message);
                    throw new Error(message);
                }
            }
        }
        else {
            let message = `SourceException: ${source.filename}: url: is not valid, must be a string type or an array.`;
            logger(LoggerTypes.INSTALL_ERROR, message)
            throw new Error(message);
        }

        let parserType = await ParserType.getFromString(source.type)
        if (parserType === ParserType.UNKNOWN) {
            let message = `SourceException: ${source.filename}: type: is not valid.`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }
        ret.instructions.parserType = parserType;

        try {
            ParserLoader.validateScrapeOptions(parserType, source.scrape);
        }
        catch (e: any) {
            let message = `SourceException: ${source.filename}: invalid scrape method, parser error: ${e.message}`;
            logger(LoggerTypes.INSTALL_ERROR, message);
            throw new Error(message);
        }

        ParserLoader.validateScrapeInstructions(parserType, ret.instructions, source);

        if(!isStatic)
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
    declare requestTimeout: number
    declare instructions: Instructions
    declare extra: any

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
            instructions: this.instructions.toJSON(),
            extra: this.extra
        }
    }

    static fromJSON(json: any): Source {
        let source = new Source(json.id)
        source.name = json.name
        source.collection_name = json.collection_name
        source.scrapeInterval = json.scrapeInterval
        source.retryInterval = json.retryInterval
        source.instructions = Instructions.fromJSON(json.instructions)
        source.extra = json.extra

        return source
    }
}