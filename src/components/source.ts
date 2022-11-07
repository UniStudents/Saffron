import Instructions from "./instructions";
import {ParserType} from "./ParserClass";
import Config, {ConfigOptions} from "./config";
import ParserLoader from "../modules/parsers/ParserLoader";
import {SourceFile} from "./types";


export default class Source {

    declare name: string;
    declare tableName: string;
    declare interval: number;
    declare retryInterval: number;
    declare instructions: Instructions;
    declare extra: any;

    /**
     * Parse and store a source file contents to an array in memory
     * @param source the source file
     * @param config
     */
    static parseSourceFile(source: SourceFile, config: Config | null): Source {
        source.filename = source.filename ?? 'unknown filename';

        let ret = new Source();

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

        if (source.timeout != null && (source.timeout < 0))
            throw new Error(`SourceException [${source.filename}] Field timeout is not valid, requirements(type = number, positive or zero).`);
        instructions.timeout = source.timeout ?? Config.getOption(ConfigOptions.TIMEOUT, config);

        if (source.amount != null && (source.amount <= 0))
            throw new Error(`SourceException [${source.filename}] Field amount is not valid, requirements(type = number, positive).`);
        instructions.amount = source.amount ?? Config.getOption(ConfigOptions.ARTICLE_AMOUNT, config);

        instructions.includeContentAttachments = source.includeContentAttachments ?? Config.getOption(ConfigOptions.INCLUDE_CNT_ATTACHMENTS, config);
        instructions.userAgent = source.userAgent ?? Config.getOption(ConfigOptions.USERAGENT, config);
        instructions.ignoreCertificates = source.ignoreCertificates ?? false;
        instructions.textDecoder = source.encoding ? new TextDecoder(`${source.encoding}`) : new TextDecoder();

        instructions.url = [];
        if (typeof source.url === 'string') {
            if (source.url.length == 0)
                throw new Error(`SourceException [${source.filename}] Field url is not valid, requirements(type = string, not empty).`);
            instructions.url.push({url: source.url, aliases: []});
        } else if (Array.isArray(source.url)) {
            for (const pair of source.url) {
                if (Array.isArray(pair) && pair.length >= 2) {
                    let aliases = pair.slice(0, pair.length - 1);
                    let url = pair[pair.length - 1];

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

        let parserType = ParserType.getFromString(source.type);
        if (parserType === ParserType.UNKNOWN)
            throw new Error(`SourceException [${source.filename}] Field type is not valid, requirements(equals html, rss, dynamic, wordpress-v1, wordpress-v2).`);
        instructions.parserType = parserType;

        try {
            ParserLoader.validateScrapeOptions(parserType, source.scrape);
        } catch (e: any) {
            throw new Error(`SourceException [${source.filename}] Field scrape is not valid, parser error: ${e.message}`);
        }

        ParserLoader.assignScrapeInstructions(parserType, ret.instructions, source);

        return ret;
    }
}