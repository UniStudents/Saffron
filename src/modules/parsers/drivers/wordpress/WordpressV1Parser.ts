import {ParserClass} from "../../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";
import Utils from "../../Utils";

export class WordpressV1Parser extends ParserClass {
    validateScrape(scrape: object): void {}

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        for (let pair of instructions.url) {
            pair.url = `${pair.url}${pair.url.endsWith('/') ? '' : '/'}`
        }
    }

    async parse(job: Job, utils: Utils): Promise<Article[]> {
        throw new Error(`WordpressParserV1Exception job failed because it is not implemented yet.`);
    }

}