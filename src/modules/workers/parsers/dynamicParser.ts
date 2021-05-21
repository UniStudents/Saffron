import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import Utils from "../../../components/utils";
import Exceptions from "../../../components/exceptions";
import Job from "../../../components/job";
import Database from "../../database";
import logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";

export default class DynamicParser {

    /**
     * This method uses a custom function made from the user
     * and returns a map containing the requested announcements.
     *
     * @param job The job instance
     * @param instructions How does the parser gonna parse the html content.
     * @param amount How much article to withdraw.
     * @return Array<Article> The articles.
     */
    public static async parse(job: Job, instructions: Instructions, amount: Number = 10): Promise<Array<Article>> {
        let parsedArticles: Array<Article> = [];

        let scrapeFunc = eval(instructions.scrapeFunction)
        let utils = new Utils();

        let articles = await Database.getInstance()!!.getArticles({source: job.getSource()})
        utils.isFirstScrape = articles.length === 0
        utils.isScrapeAfterError = job.attempts !== 0

        utils.getArticles = async (count: number): Promise<Array<Article>> => articles.slice(0, count)
        utils.onNewArticle = async (article: Article) => {
            parsedArticles.unshift(article)
            utils.getArticles = async (count: number): Promise<Array<Article>> => [...parsedArticles, ...articles].slice(0, count)
        }

        let result: Exceptions | undefined = await scrapeFunc(Article, utils, Exceptions)

        if(result){
            if(!result.retry) job.getSource().lock()
            logger(LoggerTypes.ERROR, `Dynamic parser scraping returned error: ${result.message}`)
            parsedArticles.unshift(new Article("error"))
        }

        return parsedArticles
    }
}