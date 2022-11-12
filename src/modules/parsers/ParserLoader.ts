import type {ParserClass} from "../../components/ParserClass";
import {ParserType} from "../../components/ParserClass";
import {HTMLParser} from "./html.parser";
import {RssParser} from "./rss.parser";
import {WordpressV2Parser} from "./wordpress.v2.parser";
import {DynamicParser} from "./dynamic.parser";
import type {Instructions} from "../../components/instructions";
import type {SourceScrape} from "../../components/types";

export class ParserLoader {

    static validateScrapeOptions(parser: ParserType, scrapeOptions?: SourceScrape): void {
        switch (parser) {
            case ParserType.HTML:
                new HTMLParser().validateScrape(scrapeOptions);
                break;
            case ParserType.RSS:
                new RssParser().validateScrape(scrapeOptions);
                break;
            case ParserType.WORDPRESS_V2:
                new WordpressV2Parser().validateScrape(scrapeOptions);
                break;
            case ParserType.DYNAMIC:
                new DynamicParser().validateScrape(scrapeOptions);
                break;
        }
    }

    static assignScrapeInstructions(parser: ParserType, instructions: Instructions, scrape?: SourceScrape): void {
        switch (parser) {
            case ParserType.HTML:
                new HTMLParser().assignInstructions(instructions, scrape);
                break
            case ParserType.RSS:
                new RssParser().assignInstructions(instructions, scrape);
                break
            case ParserType.WORDPRESS_V2:
                new WordpressV2Parser().assignInstructions(instructions, scrape);
                break
            case ParserType.DYNAMIC:
                new DynamicParser().assignInstructions(instructions, scrape);
                break
        }
    }

    static getParser(parserType: ParserType): ParserClass | undefined {
        switch (parserType) {
            case ParserType.HTML:
                return new HTMLParser();
            case ParserType.RSS:
                return new RssParser();
            case ParserType.WORDPRESS_V2:
                return new WordpressV2Parser();
            case ParserType.DYNAMIC:
                return new DynamicParser();
        }
        return;
    }
}