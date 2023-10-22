import {Instructions} from "./instructions";
import {ParserType} from "./Parser";
import {Config, ConfigOptions} from "./config";
import type {SourceFile} from "./types";
import {ParserLoader} from "./ParserLoader";

export class Source {

    declare name: string;
    declare tableName: string;
    declare interval: number;
    declare retryInterval: number;
    declare instructions: Instructions;
    declare extra: any;

    static async parseSourceFile(source: SourceFile, config: Config | null): Promise<Source> {
        source.filename = source.filename ?? 'static file';

        const ret = new Source();

        // Source name
        if (source.name == null || source.name.length < 3)
            throw new Error(`SourceException [${source.filename}] Field name is not valid, requirements(type = string, length >= 3).`);
        ret.name = source.name;

        // Source tableName
        if (source.tableName != null && (source.tableName.length < 3 || ["saffron", "config", "workers"].includes(source.tableName)))
            throw new Error(`SourceException [${source.filename}] Field tableName  is not valid, requirements(type = string, length >= 3, != saffron, != workers, != config).`);
        ret.tableName = source.tableName!;

        if (source.interval != null && (source.interval < 0))
            throw new Error(`SourceException [${source.filename}] Field interval is not valid, requirements(type = number, positive or zero).`);
        ret.interval = source.interval ?? Config.getOption(ConfigOptions.JOB_INT, config);

        if (source.retryInterval != null && (source.retryInterval < 0))
            throw new Error(`SourceException [${source.filename}] Field retryInterval is not valid, requirements(type = number, positive or zero).`);
        ret.retryInterval = source.retryInterval ?? Config.getOption(ConfigOptions.JOB_INT, config) / 2;

        ret.extra = source.extra;

        const instructions = new Instructions();
        ret.instructions = instructions;

        if (source.delayBetweenRequests != null && (source.delayBetweenRequests < 0))
            throw new Error(`SourceException [${source.filename}] Field delayBetweenRequests is not valid, requirements(type = number, positive or zero).`);
        instructions.delayBetweenRequests = source.delayBetweenRequests ?? Config.getOption(ConfigOptions.DELAY_BETWEEN_REQUESTS, config);

        if (source.amount != null && (source.amount <= 0))
            throw new Error(`SourceException [${source.filename}] Field amount is not valid, requirements(type = number, positive).`);
        instructions.amount = source.amount ?? Config.getOption(ConfigOptions.ARTICLE_AMOUNT, config);

        instructions.ignoreCertificates = source.ignoreCertificates ?? false;
        instructions.includeContentAttachments = source.includeContentAttachments ?? Config.getOption(ConfigOptions.INCLUDE_CNT_ATTACHMENTS, config);

        if (source.includeCategoryUrlsIn != undefined && source.includeCategoryUrlsIn !== 'categories' && source.includeCategoryUrlsIn !== 'extras')
            throw new Error('SourceException [${source.filename}] Field includeCategoryUrlsIn is not valid, requirements(type = string, =categories, =extras)');
        instructions.includeCategoryUrlsIn = source.includeCategoryUrlsIn ?? Config.getOption(ConfigOptions.INCLUDE_CAT_URL, config);

        instructions.textDecoder = source.encoding ? new TextDecoder(source.encoding) : new TextDecoder();

        instructions.preprocessor = Config.getOption(ConfigOptions.PREPROCESSOR, config);

        instructions.url = [];
        if (typeof source.url === 'string') {
            if (source.url.length == 0)
                throw new Error(`SourceException [${source.filename}] Field url is not valid, requirements(type = string, not empty).`);
            instructions.url.push({url: source.url, aliases: []});
        } else if (Array.isArray(source.url)) {
            for (const pair of source.url) {
                if (Array.isArray(pair) && pair.length >= 2) {
                    const aliases = pair.slice(0, pair.length - 1);
                    const url = pair[pair.length - 1];

                    aliases.forEach(alias => {
                        if (alias.trim() === '')
                            throw new Error(`SourceException [${source.filename}] At field url, field alias is not valid, requirements(type = string, not empty, not whitespace).`);
                    });

                    if (typeof url !== 'string' || url.trim() === '')
                        throw new Error(`SourceException [${source.filename}] At field url, field url is not valid, requirements(type = string, not empty not whitespace).`);

                    instructions.url.push({url, aliases});
                } else if (typeof pair === 'string' || ((Array.isArray(pair) && pair.length == 1))) {
                    let url: any = pair;
                    if (Array.isArray(pair)) url = pair[0];

                    instructions.url.push({url, aliases: []});
                } else
                    throw new Error(`SourceException [${source.filename}] Field url is not valid, requirements(type = string[] | string[][]).`);
            }
        } else
            throw new Error(`SourceException [${source.filename}] Field url is not valid, requirements(type = string | string[] | string[][]).`);

        const parserType = ParserType.getFromString(source.type);
        if (parserType === ParserType.UNKNOWN)
            throw new Error(`SourceException [${source.filename}] Field type is not valid, requirements(equals html, rss, dynamic, wordpress-v2, api).`);
        instructions.parserType = parserType;

        try {
            ParserLoader.validateScrapeOptions(parserType, source.scrape);
        } catch (e: any) {
            e.message = `SourceException [${source.filename}] scrape: ${e.message}`
            throw e;
        }

        ParserLoader.assignScrapeInstructions(parserType, ret.instructions, source.scrape);

        // Run at the end, so we can have access to all data defined above
        const axiosConfig = Config.getOption(ConfigOptions.AXIOS_REQUEST_CONFIG, config);
        instructions.axios = source.axios ?? (typeof axiosConfig === 'function' ? await axiosConfig(source) : axiosConfig);

        return ret;
    }
}