import {ParserClass} from "../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";
import Utils from "../../../../components/utils";
import Database from "../../../database";
import Logger from "../../../../middleware/logger";
import {LoggerTypes} from "../../../../middleware/LoggerTypes";

export class DynamicParser extends ParserClass {
    validateScrape(scrape: any): string {
        let value = typeof scrape != 'function'
        if(value)
            return ""
        else return "DynamicParser: scrape is not a function"
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

    async parse(job: Job): Promise<Article[]> {
        let instructions = job.getInstructions();
        let articles: Article[] = [];

        let scrapeFunc = eval(instructions.scrapeFunction)

        let urls: (string[])[] = []
        if (typeof instructions.url !== 'string')
            urls = instructions.url
        else urls.push(["", instructions.url])

        for (const pair of urls) {
            let utils = new Utils(pair[1]);

            let collection = instructions.getSource().collection_name
            if (!collection || collection.length == 0)
                collection = instructions.getSource().name
            if (!collection || collection.length == 0)
                collection = instructions.getSource().getId()

            let articles = await Database.getInstance()!!.getArticles(collection, {pageNo: 1, articlesPerPage: 100})
            utils.isFirstScrape = articles.length === 0
            utils.isScrapeAfterError = job.attempts !== 0

            utils.getArticles = (count: number): Article[] => articles.slice(0, count)
            utils.onNewArticle = (article: Article) => {
                article.source = {
                    id: job.getSource().getId(),
                    name: job.getSource().name
                }

                if (!article.extras) article.extras = {}

                if (pair[0].length !== 0)
                    article.extras = {
                        categories: [
                            {name: pair[0], links: [pair[1]]}
                        ]
                    }

                articles.unshift(article)
                utils.getArticles = (count: number): Article[] => [...articles, ...articles].slice(0, count)
            }

            try {
                await scrapeFunc(Article, utils)
            }
            catch (e: any) {
                let message = `DynamicParserException error during parsing, original ${e.message}`;
                Logger(LoggerTypes.ERROR, message);
                throw new Error(message);
            }
        }

        return articles
    }

}