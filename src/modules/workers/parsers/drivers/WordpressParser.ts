import {ParserClass} from "../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";
import axios, {AxiosRequestConfig} from "axios";
import Utils from "../Utils";
import https from "https";
import {AxiosConfig} from "../../../../components/AxiosConfig";
const httpsAgent = new https.Agent({rejectUnauthorized: false})


export class WordpressParser extends ParserClass {
    validateScrape(scrape: object): void {}

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        for (let pair of instructions.url) {
            if(pair.length == 1)
                pair[0] = `${pair[0]}${pair[0].endsWith('/') ? '' : '/'}`
            else if(pair.length == 2)
                pair[1] = `${pair[1]}${pair[1].endsWith('/') ? '' : '/'}`

        }
    }

    async parse(job: Job, alias: string, url: string, amount: number): Promise<Article[]> {
        let instructions = job.getInstructions();

        let categoriesUrl = `${url}wp-json/wp/v2/categories/`;
        let postsUrl = `${url}wp-json/wp/v2/posts/`;

        let categories: any, posts: any[];

        let config: (AxiosConfig)  = {
            timeout: instructions.getSource().timeout
        }
        if(instructions["ignoreCertificates"]) config.httpsAgent = httpsAgent

        try {
            categories = (await axios.get(categoriesUrl, (config as AxiosRequestConfig)))?.data
            posts = (await axios.get(postsUrl, (config as AxiosRequestConfig)))?.data
        } catch (e: any) {
            throw new Error(`WordpressParserException job failed for ${instructions.getSource().name}, original error: ${e.message}`);
        }

        let articles: Article[] = [];

        const parsedCategories = Array.isArray(categories) ? categories.map((category: any) => {
            let links: string[] = []

            for (let href of category._links.self)
                links.push(Utils.htmlStrip(href.href, false))
            for (let href of category._links.collection)
                links.push(Utils.htmlStrip(href.href, false))
            for (let href of category._links.about)
                links.push(Utils.htmlStrip(href.href, false))
            for (let href of category._links['wp:post_type'])
                links.push(Utils.htmlStrip(href.href, false))

            return {
                id: category.id,
                description: Utils.htmlStrip(category.description, false),
                name: Utils.htmlStrip(category.name, false),
                links
            }
        }) : []

        let count = 0
        for (let p of posts) {
            if (count >= instructions.amount) continue;
            count++;

            const article = new Article()
            article.setSource(instructions.getSource().getId(), instructions.getSource().name);
            article.setTitle(Utils.htmlStrip(p.title.rendered, false));
            article.setContent(p.content.rendered);
            article.setLink(Utils.htmlStrip(p.link, false));
            article.setPubDate(Utils.htmlStrip(p.date));
            article.pushAttachments(Utils.extractLinks(article.content));

            for (let cId of p.categories) {
                let cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat) article.pushCategory(cat.name, cat.links);
            }

            articles.push(article)
        }

        return articles;
    }

}