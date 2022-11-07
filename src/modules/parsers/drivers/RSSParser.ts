import {ParserClass} from "../../../components/ParserClass";
import Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import Parser from "rss-parser";
import Utils from "../Utils";

export class RSSParser extends ParserClass {

    validateScrape(scrape: any): void {
        if (!scrape) return;

        if (scrape.extraFields ? !Array.isArray(scrape.extraFields) : false) throw new Error('SourceException extraFields is not an array.');

        if (scrape.renameFields && (typeof scrape.renameFields !== 'object' || Array.isArray(scrape.renameFields)))
            throw new Error('SourceException renameFields is not a JSON object.');
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        instructions.scrapeOptions = {};
        instructions.extraFields = [];

        if (!sourceJson.scrape) return;

        if (sourceJson.scrape.renameFields) {
            let map = new Map();
            Object.entries(sourceJson.scrape.renameFields).forEach(([key, value]) => {
                map.set(key, value)
            });
            instructions.scrapeOptions.renameFields = map;
        }

        instructions.extraFields = sourceJson.scrape.extraFields ? sourceJson.scrape.extraFields : [];
    }

    async parse(utils: Utils): Promise<Article[]> {
        let instructions = utils.source.instructions;

        // Rename fields
        let renameFields: Map<string, string> = new Map<string, string>()
        if (instructions.scrapeOptions.hasOwnProperty("renameFields"))
            renameFields = instructions.scrapeOptions.renameFields

        let articles = await RSSParser.rssParser(instructions, utils, renameFields);
        return await RSSParser.mapArticles(articles, utils, renameFields);
    }

    private static requested_fields: String[] = ["title", "link", "content", "pubDate", "categories"]

    /**
     *
     Takes a url as argument an the number,
     of announcements. and an optional map
     that is be able to change some fields from rss.
     As a result of these operations, a json is returned
     which contains all the necessary data that they we
     will use.
     *
     * @param instructions
     * @param utils
     * @param renameFields
     */
    public static async rssParser(instructions: Instructions, utils: Utils, renameFields: Map<string, string> = new Map<string, string>()) {
        if (instructions.extraFields && instructions.extraFields.length >= 1)
            await instructions.extraFields.forEach(extraField => this.requested_fields.push(extraField))

        let feed;
        try {
            feed = await RSSParser.generateParser(utils, renameFields).parseURL(utils.url);
        } catch (e: any) {
            throw new Error(`RSSParserException job failed for ${utils.source.name}, original error ${e.message}`);
        }

        let dataJson: any = {}; // there is where the returned data are stored.
        let customFieldsKeys = Array.from(renameFields.keys());
        let count = 0;

        feed.items.forEach(item => {
            if (count >= instructions.amount) return;

            // console.log(item)
            //Initializing json object
            dataJson[count] = {};

            //Skipping all the renamed fields
            this.requested_fields.forEach(field => {
                if (customFieldsKeys.some(item => item === field)) return
                dataJson[count][field.toString()] = item[field.toString()] ? item[field.toString()] : null;
            });

            //Adds all the renamed fields as renamed on the result json
            customFieldsKeys.forEach(customField => {
                dataJson[count][renameFields.get(customField)!!] = item[customField] ? item[customField] : null
            });

            count++;
        });

        return dataJson;
    }

    /**
     This function finds the RSS fields that are not
     contained in the requested_fields array and returns
     a new array that contains the corrected names of the
     fields.
     *
     * @returns {Promise<[]>}
     * @param fields
     **/
    private static generateRenamedFields(fields: Map<string, string>): string[][] {
        let array: string[][] = [];
        fields.forEach((value: string, key: string) => {
            if (this.requested_fields.some(item => item === key))
                array.push([key, value]);
        });

        return array;
    }

    /**
     * Creates the parser object
     * that is able to parse
     * given rss data
     *
     * @param utils
     * @param renameFields
     * @private
     */
    private static generateParser(utils: Utils, renameFields: Map<string, string>): Parser {
        return new Parser({
            // define the request headers.
            timeout: utils.source.instructions.timeout,
            headers: {
                'User-Agent': utils.source.instructions.userAgent
            },
            // define requests options.
            requestOptions: {
                rejectUnauthorized: !utils.source.instructions.ignoreCertificates
            },
            // a few custom fields.
            customFields: {
                item: this.generateRenamedFields(renameFields)
            }
        });
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
        return target;
    };

    private static async mapArticles(articles: any, utils: Utils, renameFields: Map<string, string>): Promise<Array<Article>> {
        let parsedArticles: Array<Article> = [];

        Object.values(articles).forEach((article: any) => {
            let tmpArticle = new Article();

            tmpArticle.title = utils.cleanupHTMLText(article.hasOwnProperty("title")
                ? article["title"]
                : renameFields.get("title") && article.hasOwnProperty(renameFields.get("title")!) ? article[renameFields.get("title")!] : ""
            );

            tmpArticle.content = article.hasOwnProperty("content")
                ? article["content"]
                : renameFields.get("content") && article.hasOwnProperty(renameFields.get("content")!) ? article[renameFields.get("content")!] : "";

            tmpArticle.pubDate = article.hasOwnProperty("pubDate")
                ? article["pubDate"]
                : renameFields.get("pubDate") && article.hasOwnProperty(renameFields.get("pubDate")!) ? article[renameFields.get("pubDate")!] : "";

            tmpArticle.link = article.hasOwnProperty("link")
                ? article["link"]
                : renameFields.get("link") && article.hasOwnProperty(renameFields.get("link")!) ? article[renameFields.get("link")!] : "";

            tmpArticle.pushAttachments(utils.extractLinks(tmpArticle.content));

            if (article.categories)
                article.categories.forEach((c: any) => tmpArticle.pushCategory(c, []));

            tmpArticle.pushCategories(utils.aliases.map(alias => {
                return {
                    name: alias,
                    links: [utils.url]
                };
            }));

            //Find remaining values
            let remain = RSSParser.unAssign(article, this.requested_fields);
            new Map(Object.entries(remain)).forEach((value, key) => {
                tmpArticle.addExtra(key, value);
            });

            parsedArticles.push(tmpArticle);
        });

        return parsedArticles;
    }

}