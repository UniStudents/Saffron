import Instructions from "../../../components/instructions";
import Article from "../../../components/articles";
import axios, {AxiosResponse} from "axios";
import cheerio, {Cheerio, CheerioAPI} from "cheerio";
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

    private static findMultiple(instructions: Array<string>, htmlContent: CheerioAPI, currArticle: Element, htmlClass: string, multiple: Boolean = false): Array<String> {

        let results: Array<String> = new Array<String>();
        let tmpElement = htmlContent(currArticle).find(htmlClass);
        let tmpArray: Array<string> | null = null;
        let finalData: Cheerio;
        let dataStoredAt: string;

        if (multiple) {
            dataStoredAt = instructions[instructions.length-1];
            tmpArray = instructions.slice(0, instructions.length-1);
        }
        else {
            tmpArray = instructions;
        }

        tmpArray.forEach( (value) => {
            tmpElement = htmlContent(tmpElement).find(value);
        });

        finalData = htmlContent(tmpElement);
        if (multiple) {
            finalData.each( (index, element) => {
                results.push(Utils.htmlStrip(finalData.find(dataStoredAt).text()));
            })
        }
        else {
            results.push(Utils.htmlStrip(finalData.text()));
        }

        return results;
    }

    /**
     * This method analyzes the content of an html
     * page and returns a map containing the requested
     * announcements.
     *
     * @param instructions How does the parser gonna parse the html content.
     * @param amount How much article to withdraw.
     * @return Map<Number,Article> The articles.
     */
    static async parse(instructions: Instructions, amount: Number = 10): Promise<Map<Number, Article>> {

        let parsedArticles = new Map<Number, Article>();

        await HtmlParser.request(instructions).then( (response: AxiosResponse) => {
            const cheerioLoad = cheerio.load(response.data);

            // for each article.
            cheerioLoad(instructions.elementSelector).each((index, element) => {

                if (index === amount) return;

                let articleData: ArticleImage = {};
                let tmpArticle: Article;
                let basicData = ["title", "pubDate", "description"]; // Exp. If you remove the title, then the title is going to be on the extra information of each article.
                let options = instructions.scrapeOptions;

                // for each option. The options provided by instructions.
                for (let item in options) {
                    //@ts-ignore
                    if (options.hasOwnProperty(item) && options[item].find) {
                        //@ts-ignore
                        articleData[options[item].name] = HtmlParser.findMultiple(options[item].find, cheerioLoad, element, item, options[item].multiple);
                    }
                    else {
                        //@ts-ignore
                        articleData[options[item].name] = Utils.htmlStrip(cheerioLoad(element).find(item).text());
                    }

                }
                // It stores the article data to an instance of Article class.
                tmpArticle = new Article();
                //tmpArticle.source.id = instructions.getSource().id;
                tmpArticle.title = articleData.title;
                tmpArticle.pubDate = articleData.pubDate;
                tmpArticle.description = articleData.description;
                tmpArticle.extras = {};

                // for each extra data. Data that are not described in the baseData variable.
                for (let extra in articleData) {

                    if (basicData.indexOf(extra) === -1) {
                        if (articleData[extra] === '') continue;

                        tmpArticle.extras[extra] = articleData[extra];
                    }
                }

                if (tmpArticle.title === '') return;

                console.log(tmpArticle);
                parsedArticles.set(index, tmpArticle);
            });
        });

        return parsedArticles;
    }
}