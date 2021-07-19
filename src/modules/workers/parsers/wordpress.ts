import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import Job from "../../../components/job";
import logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";
import axios, {AxiosResponse} from "axios"
import Logger from "../../../middleware/logger";


export default class WordpressParser {

    /**
     * This method uses a custom function made from the user
     * and returns a map containing the requested announcements.
     *
     * @param job The job instance
     * @param instructions How does the parser gonna parse the html content.
     * @param amount How much article to withdraw.
     * @return Array<Article> The articles.
     */
    public static async parse(job: Job, instructions: Instructions, amount: Number = 10): Promise<Array<Article> | undefined> {
        let parsedArticles: Array<Article> = [];

        let categoriesUrl = instructions.url + 'wp-json/wp/v2/categories/'
        let postsUrl = instructions.url + 'wp-json/wp/v2/posts/'

        // TODO - may return error
        let categories: any, posts: any

        try {
            categories = (await axios.get(categoriesUrl))?.data
            posts = (await axios.get(postsUrl))?.data
        }
        catch (e) {
            Logger(LoggerTypes.ERROR,`Request error ${e.message}.`);
            return
        }

        for (let p of posts) {
            const article = new Article()
            article.title = p.title.rendered
            article.content = p.content.rendered
            article.link = p.link
            article.pubDate = new Date(p.date)
            article.timestamp = Date.now()
            article.source = { id: instructions.source.id }

            if(!article.extras)
                article.extras = {
                    categories: []
                }

            let cats = p.categories

            for (let cId of cats) {
                let cat = categories.find((c: any) => c.id == cId)

                let links = []

                for(let href of cat._links.self)
                    links.push(href.href)
                for(let href of cat._links.collection)
                    links.push(href.href)
                for(let href of cat._links.about)
                    links.push(href.href)
                for(let href of cat._links['wp:post_type'])
                    links.push(href.href)

                article.extras.categories.push({
                    id: cat.id,
                    description: cat.description,
                    name: cat.name,
                    links
                })
            }
        }

        return parsedArticles
    }
}