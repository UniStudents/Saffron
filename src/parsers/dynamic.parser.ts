import {Parser} from "../components/Parser";
import type {Instructions} from "../components/instructions";
import type {Article} from "../components/article";
import type {Utils} from "../components/Utils";
import type {RequestsResult, SourceScrape} from "../components/types";
import type {ScrapeDynamic} from "../components/parser.type";

export class DynamicParser extends Parser {
    validateScrape(s?: SourceScrape): void {
        // This exists only for typescript, it is not valid and will not run at runtime.
        const scrape = s as ScrapeDynamic;

        if (typeof scrape !== 'object' || Array.isArray(scrape))
            throw new Error("must be a JSON object");

        if (typeof scrape.implementation !== 'string' || scrape.implementation.length === 0)
            throw new Error(`implementation must be non empty string`);
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        instructions.dynamic = scrape as ScrapeDynamic;
    }

    request(utils: Utils): Promise<RequestsResult> {
        return utils.dynamicSourceFile.request(utils);
    }

    parse(response: RequestsResult, utils: Utils): Promise<Article[]> {
        return utils.dynamicSourceFile.parse(response, utils);
    }
}