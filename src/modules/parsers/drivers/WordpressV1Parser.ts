import {ParserClass} from "../../../components/ParserClass";
import Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import Utils from "../Utils";

export class WordpressV1Parser extends ParserClass {
    validateScrape(scrape: object): void {}

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        for (let pair of instructions.url) {
            pair.url = `${pair.url}${pair.url.endsWith('/') ? '' : '/'}`
        }
    }

    async parse(utils: Utils): Promise<Article[]> {
        throw new Error(`WordpressParserV1Exception failed [${utils.source.name}] job: not implemented.`);
    }

}