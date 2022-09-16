import {ParserClass} from "../ParserClass";
import Instructions from "../../../components/instructions";
import Job from "../../../components/job";
import Article from "../../../components/article";
import randomId from "../../../middleware/randomId";
import Utils from "../Utils";

export class DynamicParser extends ParserClass {
    validateScrape(scrape: any): void {
        if (typeof scrape !== 'function') throw new Error("DynamicParser: scrape is not a function");
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        let scrapeStr = sourceJson.scrape.toString();

        instructions.endPoint = sourceJson.url
        instructions.scrapeFunction = sourceJson.scrape;
        instructions.scrapeFunctionStr = scrapeStr;
    }

    async parse(job: Job, utils: Utils): Promise<Article[]> {
        let instructions = job.getInstructions();
        let scrapeFunc = typeof instructions.scrapeFunction === 'function'
            ? instructions.scrapeFunction
            : eval(instructions.scrapeFunctionStr);

        let articles: Article[];
        try {
            articles = await scrapeFunc(utils, Article);
        } catch (e: any) {
            const err =  new Error(`DynamicParserException job failed for ${job.getSource().name}, original error: ${e.message}`);
            err.stack = e.stack
            throw err;
        }

        articles.forEach(article => {
            article.id = randomId("art")
            article.setSource(instructions.getSource().getId(), instructions.getSource().name);
            article.getSource = job.getSource;

            article.pushCategories(utils.aliases.map((alias: string) => {
                return {
                    name: alias,
                    links: [utils.url]
                };
            }));
        });

        return articles;
    }
}