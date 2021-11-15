import Instructions from "../../../components/instructions";
import Job from "../../../components/job";
import Article from "../../../components/articles";

export abstract class ParserClass {

    abstract validateScrape(scrape: object): string

    abstract assignInstructions(instructions: Instructions, sourceJson: object): void

    abstract parse(job: Job): Promise<Article[]>
}