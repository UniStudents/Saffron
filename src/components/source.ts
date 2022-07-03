import Job from "../components/job";
import Instructions from "./instructions";
import {ParserType} from "../middleware/ParserType";
import Article from "./articles";
import Config from "./config";
import ParserLoader from "../modules/parsers/ParserLoader";
import {ConfigOptions} from "../middleware/ConfigOptions";


export default class Source {

    static _sources: Source[] = [];

    /**
     * Parse and store a source file contents to an array in memory
     * @param source the source file
     */
    static fileToSource(source: any): Source {
        source.filename = source.filename ? source.filename : source.name ? source.name : '[unknown filename]';

        let ret = new Source();

        // Source name
        if (!source.name || source.name.length < 3)
            throw new Error(`SourceException: ${source.filename}: name: is not valid, must be type string with a least 3 characters.`);
        ret.name = source.name;

        // Source tableName
        if (source.tableName && (typeof source.tableName !== 'string' || source.tableName.length < 3))
            throw new Error(`SourceException: ${source.filename}: tableName: is not valid, must be type string with a least 3 characters.`);
        if (["saffron", "config", "workers"].includes(source.tableName))
            throw new Error(`SourceException: ${source.filename}: tableName: is blacklisted.`);
        ret.tableName = source.tableName;

        if (source.interval && (typeof source.interval != 'number' || source.interval < 0))
            throw new Error(`SourceException: ${source.filename}: interval: is not valid, must be a positive number.`);
        ret.interval = source.interval;

        if (source.retryInterval && (typeof source.retryInterval != 'number' || source.retryInterval < 0))
            throw new Error(`SourceException: ${source.filename}: retryInterval: is not valid, must be a positive number.`);
        ret.retryInterval = source.retryInterval;

        if (source.timeout && (typeof source.timeout != 'number' || source.timeout < 0))
            throw new Error(`SourceException: ${source.filename}: timeout: is not valid, must be a positive number.`);
        ret.timeout = source.timeout ? source.timeout : Config.getOption(ConfigOptions.REQUEST_TIMEOUT)

        // If it is not one time scrape:
        ret.instructions = new Instructions()
        ret.instructions.source = {id: ret.getId()}

        if (source.amount && (typeof source.amount != 'number' || source.amount < 0))
            throw new Error(`SourceException: ${source.filename}: amount: is not valid, must be a positive number.`);
        ret.instructions.amount = source.amount ? source.amount : Config.getOption(ConfigOptions.ARTICLE_AMOUNT)

        if (typeof source.ignoreCertificates !== 'undefined' && typeof source.ignoreCertificates !== 'boolean')
            throw new Error(`SourceException: ${source.filename}: ignoreCertificates: is not valid, must be boolean.`);
        ret.instructions.ignoreCertificates = source.ignoreCertificates ? source.ignoreCertificates : false;

        if (typeof source.encoding !== 'undefined' && typeof source.encoding !== 'string')
            throw new Error(`SourceException: ${source.filename}: encoding: is not valid, must be string value.`);
        ret.instructions.textDecoder = source.encoding ? new TextDecoder(`${source.encoding}`) : new TextDecoder();

        ret.extra = source.extra;

        ret.instructions.url = [];
        if (typeof source.url === 'string') {
            if (source.url.length == 0)
                throw new Error(`SourceException: ${source.filename}: url: is not valid, url cannot be empty.`);
            ret.instructions.url.push([source.url]);
        }
        else if (Array.isArray(source.url)) {
            for (const pair of source.url) {
                if(Array.isArray(pair) && pair.length == 2) {
                    let alias = pair[0];
                    let url = pair[1];

                    if(typeof alias !== 'string' || alias.trim() === '')
                        throw new Error(`SourceException: ${source.filename}: url: is not valid, invalid alias '${alias}'.`);

                    if(typeof url !== 'string' || url.trim() === '')
                        throw new Error(`SourceException: ${source.filename}: url: is not valid, invalid url '${url}'.`);

                    ret.instructions.url.push([url, alias]);
                }
                else if(typeof pair === 'string' || ((Array.isArray(pair) && pair.length == 1))) {
                    let url: any = pair;
                    if(Array.isArray(pair)) url = pair[0];

                    ret.instructions.url.push([url]);
                }
                else throw new Error(`SourceException: ${source.filename}: url: is not valid, error during parsing pair: ${pair}.`);
            }
        }
        else throw new Error(`SourceException: ${source.filename}: url: is not valid, must be a string type or an array.`)

        let parserType = ParserType.getFromString(source.type)
        if (parserType === ParserType.UNKNOWN)
            throw new Error(`SourceException: ${source.filename}: type: is not valid.`);
        ret.instructions.parserType = parserType;

        try {
            ParserLoader.validateScrapeOptions(parserType, source.scrape);
        }
        catch (e: any) {
            throw new Error(`SourceException: ${source.filename}: invalid scrape method, parser error: ${e.message}`);
        }

        ParserLoader.assignScrapeInstructions(parserType, ret.instructions, source);

        return ret
    }

    static pushSource(source: Source) {
        this._sources.push(source);
    }

    /**
     * Return a copy array of the sources
     */
    static getSources(): Source[] {
        return this._sources
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

    private declare id: string;
    declare name: string;
    declare tableName: string;
    declare interval: number;
    declare retryInterval: number;
    declare timeout: number;
    declare instructions: Instructions;
    declare extra: any;

    constructor() {}

    /**
     * Generate and return the id of the source
     */
    getId(): string {
        if (!this.id)
            this.id = `src_${this.name}`;
        return this.id;
    }
}