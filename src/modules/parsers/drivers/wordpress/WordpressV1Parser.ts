import {ParserClass} from "../../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";

export class WordpressV1Parser extends ParserClass {
    validateScrape(scrape: object): void {}

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        for (let pair of instructions.url) {
            if(pair.length == 1)
                pair[0] = `${pair[0]}${pair[0].endsWith('/') ? '' : '/'}`
            else if(pair.length == 2)
                pair[1] = `${pair[1]}${pair[1].endsWith('/') ? '' : '/'}`

        }
    }

    async parse(job: Job, alias: string, url: string, amount: number): Promise<Article[]> {
        throw new Error(`WordpressParserV1Exception job failed because it is not implemented yet.`);
    }

}