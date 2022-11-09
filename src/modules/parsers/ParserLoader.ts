import {ParserType} from "../../components/ParserClass";
import {HTMLParser} from "./drivers/HTMLParser";
import {RSSParser} from "./drivers/RSSParser";
import {WordpressV2Parser} from "./drivers/WordpressV2Parser";
import {DynamicParser} from "./drivers/DynamicParser";
import type {ParserClass} from "../../components/ParserClass";
import type Instructions from "../../components/instructions";

export default class ParserLoader {

    static validateScrapeOptions(parser: ParserType, scrapeOptions: object): void {
        switch (parser) {
            case ParserType.HTML:
                new HTMLParser().validateScrape(scrapeOptions);
                break;
            case ParserType.RSS:
                new RSSParser().validateScrape(scrapeOptions);
                break;
            case ParserType.WORDPRESS_V2:
                new WordpressV2Parser().validateScrape(scrapeOptions);
                break;
            case ParserType.DYNAMIC:
                new DynamicParser().validateScrape(scrapeOptions);
                break;
        }
    }

    static assignScrapeInstructions(parser: ParserType, instructions: Instructions, sourceJson: object): void {
        switch (parser) {
            case ParserType.HTML:
                new HTMLParser().assignInstructions(instructions, sourceJson);
                break
            case ParserType.RSS:
                new RSSParser().assignInstructions(instructions, sourceJson);
                break
            case ParserType.WORDPRESS_V2:
                new WordpressV2Parser().assignInstructions(instructions, sourceJson);
                break
            case ParserType.DYNAMIC:
                new DynamicParser().assignInstructions(instructions, sourceJson);
                break
        }
    }

    static getParser(parserType: ParserType): ParserClass | undefined {
        switch (parserType) {
            case ParserType.HTML:
                return new HTMLParser();
            case ParserType.RSS:
                return new RSSParser();
            case ParserType.WORDPRESS_V2:
                return new WordpressV2Parser();
            case ParserType.DYNAMIC:
                return new DynamicParser();
        }
        return;
    }
}