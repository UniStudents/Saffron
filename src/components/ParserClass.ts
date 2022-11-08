import type Instructions from "./instructions";
import type Article from "./article";
import type Utils from "../modules/parsers/Utils";

export abstract class ParserClass {

    abstract validateScrape(scrape: object): void

    abstract assignInstructions(instructions: Instructions, sourceJson: object): void

    abstract parse(utils: Utils): Promise<Article[]>
}

/**
 * The types of parsing
 */
export enum ParserType {
    RSS = 'rss',
    HTML = 'html',
    DYNAMIC = 'dynamic',
    WORDPRESS_V1 = 'wordpress-v1',
    WORDPRESS_V2 = 'wordpress-v2',
    UNKNOWN = 'unknown'
}

export namespace ParserType {
    /**
     * Translate a string to ParserType enum
     * @param str
     */
    export function getFromString(str: string): ParserType {
        switch (str) {
            case "html":
                return ParserType.HTML
            case "rss":
                return ParserType.RSS
            case "dynamic":
                return ParserType.DYNAMIC
            case "wordpress-v1":
                return ParserType.WORDPRESS_V1
            case "wordpress":
            case "wordpress-v2":
                return ParserType.WORDPRESS_V2
            default:
                return ParserType.UNKNOWN
        }
    }
}