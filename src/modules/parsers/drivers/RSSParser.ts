import {ParserClass} from "../ParserClass";
import Instructions from "../../../components/instructions";
import Job from "../../../components/job";
import Article from "../../../components/articles";
import Parser from "rss-parser";
import Utils from "../Utils";


export class RSSParser extends ParserClass {

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
     * @param url
     * @param amount
     * @param renameFields
     */
    public static async rssParser(instructions: Instructions, url: string, amount: number = 10, renameFields: Map<string, string> = new Map<string, string>()) {
        let dataJson: any = {}; // there is where the returned data are stored.
        let customFieldsKeys = Array.from(renameFields.keys());
        let parser: Parser = await RSSParser.generateParser(instructions, renameFields)
        if (instructions.extraFields && instructions.extraFields.length >= 1)
            await instructions.extraFields.forEach(extraField => this.requested_fields.push(extraField))
        return await parser.parseURL(url).then(feed => {
            let count = 0
            feed.items.forEach(item => {

                if (count >= amount) return

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
        }).catch((e: any) => {
            throw new Error(`RSSParserException job failed for ${instructions.getSource().name}, original error ${e.message}`);
        })
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
    private static async generateRenamedFields(fields: Map<string, string>): Promise<string[][]> {
        let array: string[][] = []
        fields.forEach((value: string, key: string) => {
            if (this.requested_fields.some(item => item === key)) {
                array.push([key, value]);
            }
        })
        return array;
    }

    /**
     * Creates the parser object
     * that is able to parse
     * given rss data
     *
     * @param instructions
     * @param renameFields
     * @private
     */
    private static async generateParser(instructions: Instructions, renameFields: Map<string, string>): Promise<Parser> {
        let customFields = await this.generateRenamedFields(renameFields);
        return new Parser({
            // define the request headers.
            timeout: instructions.getSource().timeout,
            headers: {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0'},
            // define requests options.
            requestOptions: {
                rejectUnauthorized: instructions["ignoreCertificates"]
            },
            // a few custom fields.
            customFields: {
                item: customFields
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
        return target
    };

    private static async mapArticles(articles: any, aliases: string[], url: string,
                                     renameFields: Map<string, string>, instructions: Instructions): Promise<Array<Article>> {
        let parsedArticles: Array<Article> = [];

        Array.from(new Map(Object.entries(articles)).values()).forEach((article: any) => {
            let tmpArticle = new Article()

            tmpArticle.setSource(instructions.getSource().getId(), instructions.getSource().name);
            tmpArticle.setTitle(Utils.htmlStrip(article.hasOwnProperty("title")
                ? article["title"]
                : renameFields.get("title") && article.hasOwnProperty(renameFields.get("title")!) ? article[renameFields.get("title")!] : ""
            ));

            tmpArticle.setContent(article.hasOwnProperty("content")
                ? article["content"]
                : renameFields.get("content") && article.hasOwnProperty(renameFields.get("content")!) ? article[renameFields.get("content")!] : ""
            );

            tmpArticle.setPubDate(article.hasOwnProperty("pubDate")
                ? article["pubDate"]
                : renameFields.get("pubDate") && article.hasOwnProperty(renameFields.get("pubDate")!) ? article[renameFields.get("pubDate")!] : ""
            );

            tmpArticle.setLink(article.hasOwnProperty("link")
                ? article["link"]
                : renameFields.get("link") && article.hasOwnProperty(renameFields.get("link")!) ? article[renameFields.get("link")!] : "");

            tmpArticle.pushAttachments(Utils.extractLinks(tmpArticle.content))

            if (article.categories)
                article.categories.forEach((c: any) => tmpArticle.pushCategory(c, []));

            tmpArticle.pushCategories(aliases.map(alias => {
                return {
                    name: alias,
                    links: [url]
                };
            }));

            //Find remaining values
            let remain = RSSParser.unAssign(article, this.requested_fields)
            new Map(Object.entries(remain)).forEach((value, key) => {
                tmpArticle.addExtra(key, value);
            })

            parsedArticles.push(tmpArticle)
        })

        return parsedArticles
    }

    validateScrape(scrape: any): void {
        if (!scrape) return

        if (!(scrape.extraFields ? Array.isArray(scrape.extraFields) : true)) throw new Error('RSSParserSourceException extraFields is not an array.');

        if (scrape.renameFields && (typeof scrape.renameFields !== 'object' || Array.isArray(scrape.renameFields)))
            throw new Error('RSSParserSourceException renameFields is not a JSON object.');
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        instructions.scrapeOptions = {};
        instructions.extraFields = [];

        if (!sourceJson.scrape) return;

        if (sourceJson.scrape.renameFields) {
            let map = new Map()
            Object.entries(sourceJson.scrape.renameFields).forEach(([key, value]) => {
                map.set(key, value)
            })
            instructions.scrapeOptions.renameFields = map
        }

        instructions.extraFields = sourceJson.scrape.extraFields ? sourceJson.scrape.extraFields : [];
    }

    async parse(job: Job, aliases: string[], url: string, amount: number): Promise<Article[]> {
        let instructions = job.getInstructions();

        // Rename fields
        let renameFields: Map<string, string> = new Map<string, string>()
        if (instructions.scrapeOptions.hasOwnProperty("renameFields"))
            renameFields = instructions.scrapeOptions.renameFields

        let articles = await RSSParser.rssParser(instructions, url, amount, renameFields);
        return await RSSParser.mapArticles(articles, aliases, url, renameFields, instructions);
    }

}