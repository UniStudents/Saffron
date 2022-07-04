import Instructions from "../../components/instructions";
import Job from "../../components/job";
import Article from "../../components/articles";
import Utils from "./Utils";

export abstract class ParserClass {

    abstract validateScrape(scrape: object): void

    abstract assignInstructions(instructions: Instructions, sourceJson: object): void

    abstract parse(job: Job, utils: Utils): Promise<Article[]>
}