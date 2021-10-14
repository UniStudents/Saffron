import Parser from "rss-parser";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";
import Utils from "./Utils";
import Article from "../../../components/articles";
import Instructions from "../../../components/instructions";
import Config from "../../../components/config";


export default class rssParser {
    private static requested_fields: String[] = ["title", "link", "content", "pubDate", "categories"]

    /**
     This function finds the RSS fields that are not
     contained in the requested_fields array and returns
     a new array that contains the corrected names of the
     fields.
     *
     * @returns {Promise<[]>}
     * @param fields
     **/
    private static async generateRenamedFields(fields: Map<string, string>): Promise<Array<String[]>> {
        let array: Array<String[]> = []
        fields.forEach((value: string, key: string) => {
            if (this.requested_fields.some(item => item === key)) {
                array.push([key, value]);
            }
        })
        return array;
    }

    /**
     *
     Takes a url as argument an the number,
     of announcements. and an optional map
     that is be able to change some fields from rss.
     As a result of these operations, a json is returned
     which contains all the necessary data that they we
     will use.
     *
     * @param url
     * @param amount
     * @param renameFields
     */
    public static async rssParser(url: string, amount: number = 10, renameFields: Map<string, string> = new Map<string, string>()) {
        let dataJson: any = {}; // there is where the returned data are stored.
        let customFieldsKeys = Array.from(renameFields.keys());
        let parser: Parser = await this.generateParser(renameFields)
        return await parser.parseURL(url).then(feed => {
            let count = 0
            feed.items.forEach(item => {
                // console.log(item)
                //Initializing json object
                dataJson[count] = {} as any
                //Skipping all the renamed fields
                this.requested_fields.forEach(field => {
                    if (customFieldsKeys.some(item => item === field)) return
                    dataJson[count][field.toString()] = item[field.toString()] ? item[field.toString()] : null;
                })
                //Adds all the renamed fields as renamed on the result json
                customFieldsKeys.forEach(customField => {
                    dataJson[count][renameFields.get(customField)!!] = item[customField] ? item[customField] : null
                })
                count++
            })

            return dataJson
        }).catch(e => {
            Logger(LoggerTypes.ERROR, `RSS parser error ${e.message}.`);
        })
    }

    /**
     * Creates the parser object
     * that is able to parse
     * given rss data
     *
     * @param renameFields
     * @private
     */
    private static async generateParser(renameFields: Map<string, string>): Promise<Parser> {
        let customFields = await this.generateRenamedFields(renameFields);
        return new Parser({
            // define the request headers.
            timeout: Config.load().workers.jobs.timeout,
            headers: {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0'},
            // define requests options.
            requestOptions: {
                rejectUnauthorized: false
            },
            // a few custom fields.
            customFields: {
                // @ts-ignore
                item: customFields
            }
        });
    }

    private static async mapArticles(articles: any, alias: string | undefined, url: string, renameFields: Map<string, string>, instructions: Instructions): Promise<Array<Article>> {
        let parsedArticles: Array<Article> = [];

        Array.from(new Map(Object.entries(articles)).values()).forEach((article: any) => {
            let tmpArticle = new Article()

            tmpArticle.source = {
                id: instructions.getSource().getId(),
                name: instructions.getSource().name
            }

            tmpArticle.title = Utils.htmlStrip(article.hasOwnProperty("title") ? article["title"] :
                renameFields.get("title") && article.hasOwnProperty(renameFields.get("title")!) ? article[renameFields.get("title")!] : "")

            let content = article.hasOwnProperty("content") ? article["content"] :
                renameFields.get("content") && article.hasOwnProperty(renameFields.get("content")!) ? article[renameFields.get("content")!] : ""

            tmpArticle.content = content

            tmpArticle.pubDate = article.hasOwnProperty("pubDate") ? article["pubDate"] :
                renameFields.get("pubDate") && article.hasOwnProperty(renameFields.get("pubDate")!) ? article[renameFields.get("pubDate")!] : ""

            tmpArticle.link = article.hasOwnProperty("link") ? article["link"] :
                renameFields.get("link") && article.hasOwnProperty(renameFields.get("link")!) ? article[renameFields.get("link")!] : ""

            tmpArticle.attachments = Utils.extractLinks(content)

            tmpArticle.categories = []
            if (article.categories)
                article.categories.forEach((c: any) => tmpArticle.categories.push({name: c}))

            if (alias)
                tmpArticle.categories.push({name: alias, links: [url]})

            //Add extras
            tmpArticle.extras = {}
            //Find remaining values
            let remain = this.unAssign(article, this.requested_fields)
            new Map(Object.entries(remain)).forEach((value, key) => {
                tmpArticle.extras[key] = value;
            })

            //Return value
            parsedArticles.push(tmpArticle)
        })
        // console.log(util.inspect(parsedArticles, false, null, true))

        return parsedArticles
    }


    /**
     * Returns an array of articles based on rssParser function results
     * @param instructions
     * @param amount The amount of articles that wil be returned
     * @param renameFields
     * @return Array<Article> The articles.
     */
    public static async parse(instructions: Instructions, amount: number = 10, renameFields: Map<string, string> = new Map<string, string>()): Promise<Array<Article> | undefined> {
        let parsedArticles: Array<Article> = [];

        if (typeof instructions.url == 'string') {
            let articles = await this.rssParser(instructions.url, amount, renameFields)
            if (!articles) return

            parsedArticles.push(...(await this.mapArticles(articles, undefined, instructions.url, renameFields, instructions)))
        } else {
            for (const pair of instructions.url) {
                let articles = await this.rssParser(pair[1], amount, renameFields)
                if (!articles) continue

                parsedArticles.push(...(await this.mapArticles(articles, pair[0], pair[1], renameFields, instructions)))
            }
        }

        return parsedArticles
    }

    /**
     * Function that returns object without specified fields
     * @param target
     * @param source
     * @private
     */
    private static unAssign(target: any, source: any) {
        source.forEach((key: any) => {
            delete target[key];
        });
        return target
    };


}


