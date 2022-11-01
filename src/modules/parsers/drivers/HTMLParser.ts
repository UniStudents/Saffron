import {ParserClass} from "../../../components/ParserClass";
import Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import {AxiosResponse} from "axios";
import cheerio from "cheerio";
import Utils from "../Utils";

interface ArticleImage {
    [key: string]: any
}

export class HTMLParser extends ParserClass {

    static async request(instructions: Instructions, utils: Utils): Promise<Article[]> {
        let response: AxiosResponse;
        try {
            response = await utils.get(utils.url, {
                timeout: utils.source.instructions.timeout,
                responseType: 'arraybuffer',
                responseEncoding: 'binary'
            });
        } catch (e: any) {
            throw new Error(`HTMLParserException job failed for ${utils.source.name}, original error: ${e.message}`)
        }

        let parsedArticles: Article[] = [];
        const cheerioLoad: cheerio.Root = cheerio.load(instructions.textDecoder.decode(response.data));
        cheerioLoad(`${instructions.elementSelector}`).each((index, element) => {
            if (index >= instructions.amount) return;

            let articleData: ArticleImage = {};
            // Exp. If you remove the title, then the title is going to be on the extra information of each article.
            let basicData = ["title", "pubDate", "content", "attachments", "link", "category"];
            let options: any = instructions.scrapeOptions;

            // for each option. The options provided by instructions.
            for (let item in options) {
                if (options.hasOwnProperty(item) && !options[item].find && !options[item].multiple && !options[item].attributes)
                    articleData[item] = cheerioLoad(element).find(options[item].class).text();
                else if (options.hasOwnProperty(item)) {
                    if (!options[item].attributes)
                        articleData[item] = HTMLParser.getData(options[item].find, cheerioLoad, element, options[item].class,
                            options[item].multiple, false, []);
                    else
                        articleData[item] = HTMLParser.getData(options[item].find, cheerioLoad, element, options[item].class,
                            options[item].multiple, true, options[item].attributes);
                }
            }

            // Utility to merge other items with the basic Data of the article
            for (let item in options) {
                if (options[item].hasOwnProperty("parent") && options[item] !== "attachments") {
                    if (articleData.hasOwnProperty(options[item].parent))
                        articleData[options[item].parent] += articleData[item];
                } else {
                    if (Array.isArray(articleData[options[item]]))
                        articleData[options[item].parent].push(...((articleData[item]) ? articleData[item] : []));
                }
            }

            const tmpArticle = new Article();
            if (Array.isArray(articleData.link) && articleData.link[0]?.value)
                tmpArticle.link = articleData.link[0].value;
            else if (articleData.link)
                tmpArticle.link = articleData.link;

            if (Array.isArray(articleData.title) && articleData.title[0]?.value)
                tmpArticle.title = utils.cleanupHTMLText(articleData.title[0].value);
            else if (articleData.title)
                tmpArticle.title = articleData.title;

            if (Array.isArray(articleData.pubDate) && articleData.pubDate[0]?.value)
                tmpArticle.pubDate = utils.cleanupHTMLText(articleData.pubDate[0].value);
            else if (articleData.pubDate)
                tmpArticle.pubDate = articleData.pubDate;

            if (Array.isArray(articleData.content) && articleData.content[0]?.value)
                tmpArticle.content = utils.cleanupHTMLText(articleData.content[0].value);
            else if (articleData.content)
                tmpArticle.content = articleData.content;

            if (articleData.hasOwnProperty("category")) {
                if (Array.isArray(articleData["category"]))
                    articleData["category"].forEach(category => tmpArticle.pushCategory(category, [utils.url]));
                else
                    tmpArticle.pushCategory(articleData["category"], [utils.url]);
            }

            tmpArticle.pushAttachments(articleData.attachments ? articleData.attachments : []);
            tmpArticle.pushAttachments(utils.extractLinks(tmpArticle.content))

            tmpArticle.pushCategories(utils.aliases.map(alias => {
                return {
                    name: alias,
                    links: [utils.url]
                };
            }));

            // for each extra data. Data that are not described in the baseData variable.
            Object.entries(articleData).forEach((extra) => {
                if (basicData.indexOf(extra[0]) !== -1) return;
                if (extra[1] === '') return;

                tmpArticle.addExtra(extra[0], extra[1]);
            });

            if (tmpArticle.title === '') return;
            parsedArticles.push(tmpArticle);
        });

        return parsedArticles
    }

    /**
     * This method returns an object that contains the requested attributes.
     *
     * @param location The location  ( depth ) in the html content we are currently on.
     * @param dataStoredAt From which point should we get the data.
     * @param attributesArr The array that contains the information that helps to get the appropriate attributes.
     */
    private static attributes(location: cheerio.Cheerio, dataStoredAt: string, attributesArr: Array<string>): Array<Object> | null {
        // Search into same element if Instructions(Find = null) and class is the same
        if (!dataStoredAt || dataStoredAt.length == 0) {
            return attributesArr.filter(item => location.attr(item)).map(item => {
                return {
                    attribute: item, //attribute
                    value: (location.attr(item)) ? location.attr(item) : "", //value_of__requested_attribute
                    text: (location.text()) ? location.text() : "", //tag value
                };
            });
        }

        return attributesArr.filter(item => location.find(dataStoredAt).attr(item)).map(item => {
            return {
                attribute: item, //attribute
                value: (location.find(dataStoredAt).attr(item)) ? location.find(dataStoredAt).attr(item) : "", //value_of__requested_attribute
                text: (location.find(dataStoredAt).text()) ? location.find(dataStoredAt).text() : "", //tag value
            };
        });
    }

    /**
     * This method goes step by step inside to a point in the
     * given html content, and tries to get the information
     * found in that point.
     *
     * @param instructions The instructions that helped to find how deep we will go into html.
     * @param htmlContent The html content we received from cheerio.
     * @param currArticle The article we are currently accessing.
     * @param htmlClass The css class that takes us as close as possible to the piece we want.
     * @param multiple Indicates whether the parser should get more than one item ( e.g link ) from the article we access.
     * @param hasAttributes Indicates whether we should take any attributes from the article.
     * @param attributesArr The array that contains the information that helps to get the appropriate attributes.
     * @private
     */
    private static getData(instructions: Array<string>,
                           htmlContent: cheerio.Root,
                           currArticle: cheerio.Element,
                           htmlClass: string,
                           multiple: Boolean = false,
                           hasAttributes: Boolean = false,
                           attributesArr: Array<string>): Array<String | Object> | String {

        let results: Array<String | Object> = new Array<String | Object>();
        let tmpArray: Array<string> | null;
        let dataStoredAt: string;

        if (multiple) {
            // save the point where the data is stored.
            dataStoredAt = (instructions && instructions.length >= 1) ? instructions[instructions.length - 1] : "";
            tmpArray = instructions ? instructions.slice(0, instructions.length - 1) : [];
        } else {
            tmpArray = []
            dataStoredAt = (instructions && instructions.length >= 1) ? instructions[instructions.length - 1] : "";
        }


        // going deeper into the html content.
        let tmpElement = htmlContent(currArticle).find(htmlClass);
        tmpArray.forEach(value => tmpElement = htmlContent(tmpElement).find(value));

        // We are at the location of the information we want.
        const finalLocation = htmlContent(tmpElement);
        if (multiple) {
            // In case we want to get more than one piece of information.
            // We get all the information. ( e.g each link of the article ).
            finalLocation.each((index, element) => {
                // We upload the information ( e.g the link of the article ).
                const finalData = htmlContent(element)

                if (!hasAttributes) {
                    // If we do not want to get the attributes, then we just get the information found in the location stored in the variable dataStoredAt.
                    if (dataStoredAt.length >= 1 && finalData.find(dataStoredAt).text() === '') return
                    if (dataStoredAt.length < 1 && finalData.text() === '') return

                    if (dataStoredAt)
                        results.push(finalData.find(dataStoredAt).text());
                    else
                        results.push(finalData.text());
                } else {
                    const tmp = HTMLParser.attributes(finalData, dataStoredAt, attributesArr);
                    if (tmp) {
                        tmp.forEach((object: Object) => {
                            results.push(object);
                        });
                    }
                }
            });
        } else {
            if (hasAttributes) {
                const tmp = HTMLParser.attributes(finalLocation, dataStoredAt, attributesArr);
                if (tmp)
                    tmp.forEach((object: Object) => {
                        results.push(object)
                    });
                return results;
            }

            // If it is to get only one piece of information, then we simply take the text from the point where
            // we are (which will be the point where the information is).
            return finalLocation.text()
        }

        return results;
    }

    validateScrape(scrape: any): void {
        let value = Object.entries(scrape.article).some((key: any) => key === undefined || key[1].class === undefined);
        if (value) throw new Error("HTMLParserSourceException found empty key or key with no class.")
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        instructions.elementSelector = sourceJson.scrape.container;
        instructions.scrapeOptions = sourceJson.scrape.article;
    }

    async parse(utils: Utils): Promise<Article[]> {
        let instructions = utils.source.instructions;
        return await HTMLParser.request(instructions, utils)
    }
}