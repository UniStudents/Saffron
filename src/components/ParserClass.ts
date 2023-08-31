import type {Instructions} from "./instructions";
import type {Article} from "./article";
import type {Utils} from "./Utils";
import type {AxiosResponse} from "axios";
import type {RequestsResult} from "./types";

export abstract class ParserClass {

    /**
     * A function that will validate if the scrape field is correct
     */
    abstract validateScrape(scrape: object): void

    /**
     * A function that will take the validated scrape function and set the instructions properly.
     */
    abstract assignInstructions(instructions: Instructions, sourceJson: object): void

    abstract request(utils: Utils): Promise<RequestsResult>

    abstract parse(result: RequestsResult, utils: Utils): Promise<Article[]>
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
            case "wordpress-v2":
                return ParserType.WORDPRESS_V2
            default:
                return ParserType.UNKNOWN
        }
    }
}