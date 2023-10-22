import {type Parser, ParserType} from "./Parser";
import {HTMLParser} from "../parsers/html.parser";
import {RssParser} from "../parsers/rss.parser";
import {WordpressV2Parser} from "../parsers/wordpress.v2.parser";
import {DynamicParser} from "../parsers/dynamic.parser";
import type {Instructions} from "./instructions";
import type {SourceScrape} from "./types";
import {JSONParser} from "../parsers/JSON.parser";
import {XMLParser} from "../parsers/XML.parser";

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
            case ParserType.JSON:
                new JSONParser().validateScrape(scrapeOptions);
                break;
            case ParserType.XML:
                new XMLParser().validateScrape(scrapeOptions);
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
            case ParserType.JSON:
                new JSONParser().assignInstructions(instructions, scrape);
                break;
            case ParserType.XML:
                new XMLParser().assignInstructions(instructions, scrape);
                break;
        }
    }

    static getParser(parserType: ParserType): Parser | undefined {
        switch (parserType) {
            case ParserType.HTML:
                return new HTMLParser();
            case ParserType.RSS:
                return new RssParser();
            case ParserType.WORDPRESS_V2:
                return new WordpressV2Parser();
            case ParserType.DYNAMIC:
                return new DynamicParser();
            case ParserType.JSON:
                return new JSONParser();
            case ParserType.XML:
                return new XMLParser();
        }
        return;
    }
}