import {ParserClass} from "../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";
import Utils from "../../../../components/utils";
import Database from "../../../database";

export class DynamicParser extends ParserClass {
    validateScrape(scrape: any): void {
        if(typeof scrape !== 'function') throw new Error("DynamicParser: scrape is not a function");
    }

    private static splice (base: string, idx: number, rem: number, str: string): string {
        return base.slice(0, idx) + str + base.slice(Math.abs(rem));
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        let scrapeStr = sourceJson.scrape.toString()

        instructions.endPoint = sourceJson.url
        instructions.scrapeFunction = DynamicParser.splice(scrapeStr
            , scrapeStr.indexOf('(')
            , scrapeStr.indexOf(')') + 1
            , "(Article, utils)")
    }

    async parse(job: Job, alias: string, url: string, amount: number): Promise<Article[]> {
        let instructions = job.getInstructions();
        let parsedArticles: Article[] = [];

        let scrapeFunc = eval(instructions.scrapeFunction)

        let utils = new Utils(url);

        let collection = instructions.getSource().tableName
        if (!collection || collection.length == 0)
            collection = instructions.getSource().name
        if (!collection || collection.length == 0)
            collection = instructions.getSource().getId()

        let articles = await Database.getInstance()!!.getArticles(collection, {pageNo: 1, articlesPerPage: 50});
        utils.isFirstScrape = articles.length === 0;
        utils.isScrapeAfterError = job.attempts !== 0;

        utils.getArticles = (count: number): Article[] => articles.slice(0, count);
        utils.onNewArticle = (article: Article) => {
            article.setSource(instructions.getSource().getId(), instructions.getSource().name);

            if (alias.length !== 0)
                article.pushCategory(alias, [url]);

            articles.unshift(article)
            parsedArticles.push(article);
            utils.getArticles = (count: number): Article[] => [...articles].slice(0, count);
        }

        try {
            await scrapeFunc(Article, utils)
        }
        catch (e: any) {
            throw new Error(`DynamicParserException job failed for ${job.getSource().name}, original error: ${e.message}`);
        }

        return parsedArticles
    }

}