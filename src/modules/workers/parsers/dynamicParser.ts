import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import Utils from "../../../components/utils";
import Exceptions from "../../../components/exceptions";
import Job from "../../../components/job";
import Database from "../../database";

export default class DynamicParser {

    /**
     * This method uses a custom function made from the user
     * and returns a map containing the requested announcements.
     *
     * @param job The job instance
     * @param instructions How does the parser gonna parse the html content.
     * @return Array<Article> The articles.
     */
    public static async parse(job: Job, instructions: Instructions): Promise<Array<Article> | object> {
        let parsedArticles: Array<Article> = [];

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

            let articles = await Database.getInstance()!!.getArticles(collection, {source: job.getSource()})
            utils.isFirstScrape = articles.length === 0
            utils.isScrapeAfterError = job.attempts !== 0

            utils.getArticles = (count: number): Array<Article> => articles.slice(0, count)
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

                parsedArticles.unshift(article)
                utils.getArticles = (count: number): Array<Article> => [...parsedArticles, ...articles].slice(0, count)
            }

            let result: Exceptions | undefined = await scrapeFunc(Article, utils, Exceptions)

            if (result) return {errorMessage: result.message}
        }

        return parsedArticles
    }
}