import {ParserClass} from "../ParserClass";
import Instructions from "../../../../components/instructions";
import Job from "../../../../components/job";
import Article from "../../../../components/articles";
import https from "https";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import Logger from "../../../../middleware/logger";
import {LoggerTypes} from "../../../../middleware/LoggerTypes";
import {reject} from "lodash";
import cheerio from "cheerio";
import Utils from "../Utils";
import {AxiosConfig} from "../../../../components/AxiosConfig";

const httpsAgent = new https.Agent({rejectUnauthorized: false})
interface ArticleImage { [key: string]: any }

export class HTMLParser extends ParserClass {

    validateScrape(scrape: any): string {
        let value = Object.entries(scrape.article).some((key: any) => key[1].class === undefined || key === undefined);

        if(value)
            return ""
            // TODO
        else return "HTMLParserSourceException error message"
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        instructions.elementSelector = sourceJson.scrape.container;
        instructions.scrapeOptions = sourceJson.scrape.article;
        instructions.endPoint = sourceJson.scrape.endPoint;
    }

    private static async request(url: string, timeout: number,instructions: Instructions): Promise<AxiosResponse> {
        return new Promise((resolve) => {

            let config : AxiosConfig = {
                method: 'get',
                url,
                httpsAgent: httpsAgent,
                timeout
            }

            if(instructions["ignoreCertificates"]) config.httpsAgent = httpsAgent
            axios((config as AxiosRequestConfig)).then((result: AxiosResponse) => {
                resolve(result)
            }).catch((e: any) => {
                let message = `HTMLParserException error during request, original error ${e.message}`
                Logger(LoggerTypes.ERROR, `${message}`)
                reject(new Error(message))
            })

        })
    }

    /**
     * This method returns an object that contains
     * the requested attributes.
     *
     * @param location The location  ( depth ) in the html content we are currently on.
     * @param dataStoredAt From which point should we get the data.
     * @param attributesArr The array that contains the information that helps to get the appropriate attributes.
     * @param endPoint The endpoint of the specific site ( e.g https://example.com ).
     */
    private static attributes(location: cheerio.Cheerio,
                              dataStoredAt: string,
                              attributesArr: Array<string>): Array<Object> | null {

        return attributesArr.filter(item => location.find(dataStoredAt).attr(item)).map(item => {
            return {
                attribute: item, //attribute
                value: (location.find(dataStoredAt).attr(item)) ? location.find(dataStoredAt).attr(item) : "", //value_of__requested_attribute
                text: (location.find(dataStoredAt).text()) ? location.find(dataStoredAt).text() : "", //tag value
            }
        })
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
     * @param endPoint The endpoint of the specific site ( e.g https://example.com ).
     * @private
     */
    private static getData(instructions: Array<string>,
                           htmlContent: cheerio.Root,
                           currArticle: cheerio.Element,
                           htmlClass: string,
                           multiple: Boolean = false,
                           hasAttributes: Boolean = false,
                           attributesArr: Array<string>,
                           endPoint: string): Array<String | Object> | String {

        let results: Array<String | Object> = new Array<String | Object>()
        let tmpElement = htmlContent(currArticle).find(htmlClass)
        let tmpArray: Array<string> | null
        let finalLocation: cheerio.Cheerio
        let finalData: cheerio.Cheerio
        let dataStoredAt: string
        let tmp

        if (multiple) {
            // save the point where the data is stored.
            dataStoredAt = (instructions)? instructions[instructions.length - 1] : htmlClass
            tmpArray = (instructions)? instructions.slice(0, instructions.length - 1) : [];
        } else {
            tmpArray = []
            dataStoredAt = (instructions)? instructions[instructions.length - 1] : htmlClass
        }


        // going deeper into the html content.
        tmpArray.forEach((value) => {
            tmpElement = htmlContent(tmpElement).find(value)
        })

        // We are at the location of the information we want.
        finalLocation = htmlContent(tmpElement)
        if (multiple) {
            // In case we want to get more than one piece of information.
            // We get all the information. ( e.g each link of the article ).
            finalLocation.each((index, element) => {
                // We upload the information ( e.g the link of the article ).
                finalData = htmlContent(element)

                if (!hasAttributes) {
                    // If we do not want to get the attributes, then we just get the information found in the location stored in the variable dataStoredAt.
                    if (finalData.find(dataStoredAt).text() === '') return

                    results.push(finalData.find(dataStoredAt).text())
                } else {
                    tmp = HTMLParser.attributes(finalData, dataStoredAt, attributesArr);
                    if (tmp) {
                        tmp.map( (object : Object) => {
                            results.push(object);
                        });
                    }
                }
            })
        } else {
            if (hasAttributes) {
                tmp = HTMLParser.attributes(finalLocation, dataStoredAt, attributesArr)
                if (tmp) {
                    tmp.map( (object: Object) => {
                        results.push(object)
                    })
                }

                return results
            }
            // If it is to get only one piece of information, then we simply take the text from the point where we are ( which will be the point where the information is ).
            return finalLocation.text()
        }

        return results
    }

    static async parse2(alias: string | undefined, url: string, instructions: Instructions, amount: Number = 10): Promise<Article[]> {
        let parsedArticles: Article[] = []

        await HTMLParser.request(url, instructions.getSource().requestTimeout,instructions)
            .then((response: AxiosResponse) => {
                const cheerioLoad: cheerio.Root = cheerio.load(response.data)

                // for each article.
                cheerioLoad(instructions.elementSelector).each((index, element) => {

                    if (index === amount) return

                    let articleData: ArticleImage = {}
                    let tmpArticle: Article
                    let basicData = ["title", "pubDate", "content", "attachments", "link"] // Exp. If you remove the title, then the title is going to be on the extra information of each article.
                    let options: any = instructions.scrapeOptions

                    // for each option. The options provided by instructions.
                    for (let item in options) {
                        if (options.hasOwnProperty(item) && options[item].find) {
                            if (!options[item].attributes)
                                articleData[item] = HTMLParser.getData(options[item].find, cheerioLoad, element, options[item].class, options[item].multiple, false, [], "")
                            else
                                articleData[item] = HTMLParser.getData(options[item].find, cheerioLoad, element, options[item].class, options[item].multiple, true, options[item].attributes, instructions.endPoint)
                        } else
                            articleData[item] = cheerioLoad(element).find(options[item].class).text()
                    }

                    //Utility to merge other items with the basic Data of the article
                    for (let item in options) {
                        if(options[item].hasOwnProperty("parent") && options[item] !== "attachments"){
                           if(articleData.hasOwnProperty(options[item].parent)) articleData[options[item].parent] += articleData[item]
                        }else{
                           if(Array.isArray(articleData[options[item]])) articleData[options[item].parent].push(...((articleData[item]) ? articleData[item] : []))
                        }
                    }
                    // It stores the article data to an instance of Article class.
                    tmpArticle = new Article()
                    tmpArticle.source = {
                        id: instructions.getSource().getId(),
                        name: instructions.getSource().name
                    }
                    tmpArticle.link = (Array.isArray(articleData.link) && articleData.link[0]?.value)? articleData.link[0].value : ''
                    tmpArticle.title = (articleData.title) ? Utils.htmlStrip(articleData.title) : ''
                    tmpArticle.pubDate = (articleData.pubDate) ? Utils.htmlStrip(articleData.pubDate) : ''

                    let content = (articleData.content) ? articleData.content : ''
                    tmpArticle.content = content
                    tmpArticle.attachments = []
                    tmpArticle.categories = []
                    if(!alias && articleData.hasOwnProperty("category")){
                        tmpArticle.categories.push({name: articleData["category"], links: [url]})
                    }

                    tmpArticle.attachments.push(...((articleData.attachments) ? articleData.attachments : []))
                    tmpArticle.attachments.push(...Utils.extractLinks(content))
                    tmpArticle.extras = {}

                    if (alias)
                        tmpArticle.categories.push({name: alias, links: [url]})

                    // for each extra data. Data that are not described in the baseData variable.
                    Object.entries(articleData).forEach((extra) => {
                        if (basicData.indexOf(extra[0]) !== -1) return
                        if (extra[1] === '') return

                        tmpArticle.extras[extra[0]] = extra[1]
                    })

                    if (tmpArticle.title === '') return

                    parsedArticles.push(tmpArticle)
                })
            })
            .catch((e: any) => {
                throw new Error(`HTMLParserException job failed for ${instructions.getSource().name}, original error: ${e.message}`)
            })
        return parsedArticles
    }

    async parse(job: Job, alias: string, url: string): Promise<Article[]> {
        let instructions = job.getInstructions();
        let amount = 10;

        return await HTMLParser.parse2(alias, url, instructions, amount)
    }
}