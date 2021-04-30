import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import axios, {AxiosResponse} from "axios";
import cheerio from "cheerio";
import https from "https";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";
import Utils from "./Utils";

const httpsAgent = new https.Agent({rejectUnauthorized: false});

interface ArticleImage {
    [key: string]: any
}


export default class HtmlParser {

    private static async request(instructions: Instructions): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {

            let options: object = {
                method: 'get',
                url: instructions.url,
                httpsAgent: httpsAgent
            }

            axios(options).then( (result: AxiosResponse) => {
                resolve(result);
            }).catch( (e) => {
                Logger(LoggerTypes.ERROR,`Request error ${e.message}.`);
            });

        });
    }

    static parse(instructions: Instructions): Map<Number, Article> | null {

        this.request(instructions).then( (response: AxiosResponse) => {
            const cheerioLoad = cheerio.load(response.data);
            let parsedArticles = new Map<Number, Article>();

            cheerioLoad(instructions.elementSelector).each( (index, element)  => {
                let articleData: ArticleImage = {};
                let tmpArticle: Article;

                for (let item in instructions.scrapeOptions) {
                    // @ts-ignore
                    articleData[instructions.scrapeOptions[item].name] = Utils.htmlStrip(cheerioLoad(element).find(item).text());
                }
                tmpArticle = new Article("arc:123ioregu32123");
                tmpArticle.title = articleData.title;
                tmpArticle.pubDate = articleData.pubDate;
                tmpArticle.description = (articleData.description) ? articleData.description : '';
                // toDO find a way for the case of extras.
            })
        });


        return null;
    }
}