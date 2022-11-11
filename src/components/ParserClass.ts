import type Instructions from "./instructions";
import type Article from "./article";
import type Utils from "../modules/parsers/Utils";

export abstract class ParserClass {

    /**
     * A function that will validate if the scrape field is correct
     */
    abstract validateScrape(scrape: object): void

    /**
     * A function that will take the validated scrape function and set the instructions properly.
     */
    abstract assignInstructions(instructions: Instructions, sourceJson: object): void

    abstract parse(utils: Utils): Promise<Article[]>
}

export enum ParserType {
    RSS = 'rss',
    HTML = 'html',
    DYNAMIC = 'dynamic',
    WORDPRESS_V2 = 'wordpress-v2',
    UNKNOWN = 'unknown'
}

export namespace ParserType {
    export function getFromString(str: string): ParserType {
        switch (str) {
            case "html":
                return ParserType.HTML
            case "rss":
                return ParserType.RSS
            case "dynamic":
                return ParserType.DYNAMIC
            case "wordpress":
            case "wordpress-v2":
                return ParserType.WORDPRESS_V2
            default:
                return ParserType.UNKNOWN
        }
    }
}