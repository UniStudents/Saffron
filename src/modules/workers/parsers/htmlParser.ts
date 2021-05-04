import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import axios, {AxiosResponse} from "axios";
import cheerio from "cheerio";
import https from "https";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";
import Utils from "./Utils";
import randomId from "../../../middleware/randomId";
import Source from "../../../components/source";

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

    static async parse(instructions: Instructions, amount: Number = 10): Promise<Map<Number, Article>> {

        let parsedArticles = new Map<Number, Article>();

        await HtmlParser.request(instructions).then( (response: AxiosResponse) => {
            const cheerioLoad = cheerio.load(response.data);

            cheerioLoad(instructions.elementSelector).each(  (index, element)  => {
                let articleData: ArticleImage = {};
                let tmpArticle: Article;
                let basicData = ["title", "pubDate", "description"];
                let options = instructions.scrapeOptions;

                for (let item in options) {
                    // @ts-ignore
                    articleData[options[item].name] = Utils.htmlStrip(cheerioLoad(element).find(item).text());

                    // @ts-ignore
                    if (options[item].name === "links" && articleData[options[item].name].split(" ").length > 1) {
                        // @ts-ignore
                        articleData[options[item].name] = articleData[options[item].name].split(" ");
                    }
                }
                tmpArticle = new Article(randomId("arc"));
                //tmpArticle.source.id = instructions.getSource().id;
                tmpArticle.title = articleData.title;
                tmpArticle.pubDate = articleData.pubDate;
                tmpArticle.description = articleData.description;
                tmpArticle.extras = {};


                for (let extra in articleData) {

                    if (basicData.indexOf(extra) === -1) {
                        if (articleData[extra] === '') continue;

                        tmpArticle.extras[extra] = articleData[extra];
                    }
                }

                if (tmpArticle.title === '') return;

                parsedArticles.set(index, tmpArticle);
            });
        });

        return parsedArticles;
    }
}