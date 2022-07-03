import {ParserClass} from "../ParserClass";
import Instructions from "../../../components/instructions";
import Job from "../../../components/job";
import Article from "../../../components/articles";
import Utils from "../../../components/utils";
import randomId from "../../../middleware/randomId";

export class DynamicParser extends ParserClass {
    private static splice(base: string, idx: number, rem: number, str: string): string {
        return base.slice(0, idx) + str + base.slice(Math.abs(rem));
    }

    validateScrape(scrape: any): void {
        if (typeof scrape !== 'function') throw new Error("DynamicParser: scrape is not a function");
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        let scrapeStr = sourceJson.scrape.toString()

        instructions.endPoint = sourceJson.url
        instructions.scrapeFunction = DynamicParser.splice(scrapeStr
            , scrapeStr.indexOf('(')
            , scrapeStr.indexOf(')') + 1
            , "(Article, utils)")
    }

    async parse(job: Job, aliases: string[], url: string, amount: number): Promise<Article[]> {
        let instructions = job.getInstructions();
        let scrapeFunc = eval(instructions.scrapeFunction)
        let utils = new Utils();

        utils.url = url;
        utils.isScrapeAfterError = job.attempts !== 0;
        utils.instructions = instructions;

        let articles: Article[];
        try {
            articles = await scrapeFunc(Article, utils)
        } catch (e: any) {
            throw new Error(`DynamicParserException job failed for ${job.getSource().name}, original error: ${e.message}`);
        }

        articles.forEach(article => {
            article.id = randomId("art")
            article.setSource(instructions.getSource().getId(), instructions.getSource().name);
            article.getSource = job.getSource;

            article.pushCategories(aliases.map(alias => {
                return {
                    name: alias,
                    links: [url]
                };
            }));
        });

        return articles;
    }
}