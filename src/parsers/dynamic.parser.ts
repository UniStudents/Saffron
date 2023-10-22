import {Parser} from "../components/Parser";
import type {Instructions} from "../components/instructions";
import {Article} from "../components/article";
import type {Utils} from "../components/Utils";
import type {RequestsResult, SourceScrape} from "../components/types";
import type {ScrapeDynamic} from "../components/parser.type";

export class DynamicParser extends Parser {
    validateScrape(scrape?: SourceScrape): void {
        if (typeof scrape !== 'function')
            throw new Error("must be a function");
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        instructions.dynamic = scrape as ScrapeDynamic;
        instructions.dynamicFuncStr = instructions.dynamic.toString();
    }

    async request(utils: Utils): Promise<RequestsResult> {
        return [];
    }

    async parse(response: RequestsResult, utils: Utils): Promise<Article[]> {
        const instructions = utils.source.instructions;
        const scrapeFunc = typeof instructions.dynamic === 'function'
            ? instructions.dynamic
            : eval(instructions.dynamicFuncStr);

        return scrapeFunc(utils, Article);
    }
}