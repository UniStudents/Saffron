import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import Job from "../../../components/job";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";
import axios from "axios"
import Utils from "./Utils";


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

        let categories: any, posts: any
        try {
            categories = (await axios.get(categoriesUrl))?.data
            posts = (await axios.get(postsUrl))?.data
        } catch (e) {
            Logger(LoggerTypes.ERROR, `Request error ${e.message}.`);
            return
        }

        const parsedCategories = categories.map((category: any) => {
            let links = []

            for (let href of category._links.self)
                links.push(Utils.htmlStrip(href.href, false).toString())
            for (let href of category._links.collection)
                links.push(Utils.htmlStrip(href.href, false).toString())
            for (let href of category._links.about)
                links.push(Utils.htmlStrip(href.href, false).toString())
            for (let href of category._links['wp:post_type'])
                links.push(Utils.htmlStrip(href.href, false).toString())

            return {
                id: category.id,
                description: Utils.htmlStrip(category.description, false).toString(),
                name: Utils.htmlStrip(category.name, false).toString(),
                links
            }
        })

        for (let p of posts) {
            const article = new Article()
            article.title = Utils.htmlStrip(p.title.rendered, false).toString()
            article.content = Utils.htmlStrip(p.content.rendered, false).toString()
            article.link = Utils.htmlStrip(p.link, false).toString()
            article.pubDate = new Date(Utils.htmlStrip(p.date).toString())
            article.timestamp = Date.now()
            article.source = {id: instructions.source.id}

            if (!article.extras)
                article.extras = {
                    categories: []
                }

            for (let cId of p.categories) {
                let cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat)
                    article.extras.categories.push(cat)
            }

            parsedArticles.push(article)
        }

        return parsedArticles
    }
}