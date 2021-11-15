import {ParserType} from "./ParserType";
import {HTMLParser} from "./drivers/HTMLParser";
import {RSSParser} from "./drivers/RSSParser";
import {WordpressParser} from "./drivers/WordpressParser";
import {DynamicParser} from "./drivers/DynamicParser";
import {ParserClass} from "./ParserClass";
import Instructions from "../../../components/instructions";

export default class ParserLoader {

    static validateScrapeOptions(parser: ParserType, scrapeOptions: object): string {
        switch (parser) {
            case ParserType.HTML:
                return new HTMLParser().validateScrape(scrapeOptions);
            case ParserType.RSS:
                return new RSSParser().validateScrape(scrapeOptions);
            case ParserType.WORDPRESS:
                return new WordpressParser().validateScrape(scrapeOptions);
            case ParserType.DYNAMIC:
                return new DynamicParser().validateScrape(scrapeOptions);
            default:
                return "Invalid parser.";
        }
    }

    static validateScrapeInstructions(parser: ParserType, instructions: Instructions, sourceJson: object): void {
        switch (parser) {
            case ParserType.HTML:
                new HTMLParser().assignInstructions(instructions, sourceJson);
                break
            case ParserType.RSS:
                new RSSParser().assignInstructions(instructions, sourceJson);
                break
            case ParserType.WORDPRESS:
                new WordpressParser().assignInstructions(instructions, sourceJson);
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
            case ParserType.WORDPRESS:
                return new WordpressParser();
            case ParserType.DYNAMIC:
                return new DynamicParser();
        }
    }
}