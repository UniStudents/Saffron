import {ParserClass} from "../../../components/ParserClass";
import type Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import type Utils from "../Utils";

export class DynamicParser extends ParserClass {
    validateScrape(scrape: any): void {
        if (typeof scrape !== 'function') throw new Error("SourceException scrape is not a function");
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        let scrapeStr = sourceJson.scrape.toString();

        instructions.scrapeFunction = sourceJson.scrape;
        instructions.scrapeFunctionStr = scrapeStr;
    }

    async parse(utils: Utils): Promise<Article[]> {
        let instructions = utils.source.instructions;
        let scrapeFunc = typeof instructions.scrapeFunction === 'function'
            ? instructions.scrapeFunction
            : eval(instructions.scrapeFunctionStr);

        return await scrapeFunc(utils, Article);
    }
}