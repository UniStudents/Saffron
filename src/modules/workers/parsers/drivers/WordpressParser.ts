import {ParserClass} from "../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";
import axios, {AxiosRequestConfig} from "axios";
import Logger from "../../../../middleware/logger";
import {LoggerTypes} from "../../../../middleware/LoggerTypes";
import Utils from "../Utils";
import https from "https";
import {AxiosConfig} from "../../../../components/AxiosConfig";
const httpsAgent = new https.Agent({rejectUnauthorized: false})


export class WordpressParser extends ParserClass {
    validateScrape(scrape: object): string {
        return "";
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        instructions.url = `${sourceJson.url}${(sourceJson.url.endsWith('/')) ? '' : '/'}`
    }

    async parse(job: Job, alias: string, url: string): Promise<Article[]> {
        let instructions = job.getInstructions();

        let categoriesUrl = `${url}wp-json/wp/v2/categories/`;
        let postsUrl = `${url}wp-json/wp/v2/posts/`;

        let categories: any, posts: any;

        let config: (AxiosConfig)  = {
            timeout: instructions.getSource().requestTimeout
        }
        if(instructions["ignoreCertificates"]) config.httpsAgent = httpsAgent

        try {
            categories = (await axios.get(categoriesUrl, (config as AxiosRequestConfig)))?.data
            posts = (await axios.get(postsUrl, (config as AxiosRequestConfig)))?.data
        } catch (e: any) {
            let message = `WordpressParserException error during request, original error: ${e.message}`;
            Logger(LoggerTypes.ERROR, message);
            throw new Error(message);
        }

        let articles: Article[] = [];

        const parsedCategories = Array.isArray(categories) ? categories.map((category: any) => {
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
        }) : []

        for (let p of posts) {
            const article = new Article()
            article.title = Utils.htmlStrip(p.title.rendered, false).toString()

            let content = p.content.rendered
            article.content = content

            article.link = Utils.htmlStrip(p.link, false).toString()
            article.pubDate = Utils.htmlStrip(p.date)
            article.source = {
                id: instructions.getSource().getId(),
                name: instructions.getSource().name
            }
            article.attachments = Utils.extractLinks(content)

            article.categories = []
            for (let cId of p.categories) {
                let cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat)
                    article.categories.push(cat)
            }

            articles.push(article)
        }

        return articles;
    }

}