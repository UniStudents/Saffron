import {ParserClass} from "../../../components/ParserClass";
import type Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import type Utils from "../Utils";
import type {ScrapeDynamic, SourceScrape} from "../../../components/types.js";

export class DynamicParser extends ParserClass {
    validateScrape(scrape?: SourceScrape): void {
        if (typeof scrape !== 'function') throw new Error("scrape is not a function");
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        instructions.dynamic = scrape as ScrapeDynamic;
        instructions.dynamicFuncStr = instructions.dynamic.toString();
    }

    async parse(utils: Utils): Promise<Article[]> {
        let instructions = utils.source.instructions;
        let scrapeFunc = typeof instructions.dynamic === 'function'
            ? instructions.dynamic
            : eval(instructions.dynamicFuncStr);

        return scrapeFunc(utils, Article);
    }
}