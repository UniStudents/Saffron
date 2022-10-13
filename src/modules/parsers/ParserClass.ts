import Instructions from "../../components/instructions";
import Job from "../../components/job";
import Article from "../../components/article";
import Utils from "./Utils";

export abstract class ParserClass {

    abstract validateScrape(scrape: object): void

    abstract assignInstructions(instructions: Instructions, sourceJson: object): void

    abstract parse(utils: Utils): Promise<Article[]>
}