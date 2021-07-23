import Instructions from "../../../components/instructions"
import Article from "../../../components/articles"
import axios, {AxiosResponse} from "axios"
import cheerio, {Cheerio} from "cheerio"
import https from "https"
import Logger from "../../../middleware/logger"
import {LoggerTypes} from "../../../middleware/LoggerTypes"
import Utils from "./Utils"
import {Element} from "domhandler"

const httpsAgent = new https.Agent({rejectUnauthorized: false})

interface ArticleImage {
    [key: string]: any
}


export default class HtmlParser {

    private static async request(url: string): Promise<AxiosResponse> {
        return new Promise((resolve) => {

            let options: object = {
                method: 'get',
                url,
                httpsAgent: httpsAgent
            }

            axios(options).then( (result: AxiosResponse) => {
                resolve(result)
            }).catch( (e) => {
                Logger(LoggerTypes.ERROR,`Request error ${e.message}.`)
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
    private static attributes(location: Cheerio,
                              dataStoredAt: string,
                              attributesArr: Array<string>,
                              endPoint: string): Object | null {
        let obj: any = {}

        if (Utils.htmlStrip(location.find(dataStoredAt).text()) === '') return null

        let valueIndex: number = (attributesArr.includes("value"))? attributesArr.indexOf("value"): 1
        let tagIndex: number = (valueIndex === 1)? 0 : 1

        if (attributesArr.includes("value")) {
            obj = { value: Utils.htmlStrip(location.find(dataStoredAt).text()) }
            
            obj[attributesArr[tagIndex]] = (attributesArr.includes("href"))? endPoint+location.find(dataStoredAt).attr(attributesArr[attributesArr.length-1]) : location.find(dataStoredAt).attr(attributesArr[attributesArr.length-1])
        }
        else obj[attributesArr[tagIndex]] = (attributesArr.includes("href"))? endPoint+location.find(dataStoredAt).attr(attributesArr[attributesArr.length-1]) : location.find(dataStoredAt).attr(attributesArr[attributesArr.length-1])

        return obj
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
    private static findMultiple(instructions: Array<string>,
                                htmlContent: cheerio.Root,
                                currArticle: Element,
                                htmlClass: string,
                                multiple: Boolean = false,
                                hasAttributes: Boolean = false,
                                attributesArr: Array<string>,
                                endPoint: string): Array<String | Object> | String {

        let results: Array<String | Object> = new Array<String | Object>()
        let tmpElement = htmlContent(currArticle).find(htmlClass)
        let tmpArray: Array<string> | null
        let finalLocation: Cheerio
        let finalData: Cheerio
        let dataStoredAt: string


        if (multiple) {
            // save the point where the data is stored.
            dataStoredAt = instructions[instructions.length-1]
            tmpArray = instructions.slice(0, instructions.length-1)
        }
        else
            tmpArray = instructions

        // going deeper into the html content.
        tmpArray.forEach( (value) => {
            tmpElement = htmlContent(tmpElement).find(value)
        })

        // We are at the location of the information we want.
        finalLocation = htmlContent(tmpElement)
        if (multiple) {
            // In case we want to get more than one piece of information.
            // We get all the information. ( e.g each link of the article ).
            finalLocation.each( (index, element) => {
                // We upload the information ( e.g the link of the article ).
                finalData = htmlContent(element)

                if (!hasAttributes) {
                    // If we do not want to get the attributes, then we just get the information found in the location stored in the variable dataStoredAt.
                    if (Utils.htmlStrip(finalData.find(dataStoredAt).text()) === '') return

                    results.push(Utils.htmlStrip(finalData.find(dataStoredAt).text()))
                }
                else {
                    let tmp = HtmlParser.attributes(finalData, dataStoredAt, attributesArr, endPoint)
                    if (tmp) results.push(tmp)
                }
            })
        }
        else {
            // If it is to get only one piece of information, then we simply take the text from the point where we are ( which will be the point where the information is ).
            return Utils.htmlStrip(finalLocation.text())
        }

        return results
    }

    static async parse2(alias: string|undefined, url: string, instructions: Instructions, amount: Number = 10): Promise<Array<Article>> {
        let parsedArticles: Array<Article> = []

        await HtmlParser.request(url)
            .then((response: AxiosResponse) => {
                const cheerioLoad: cheerio.Root = cheerio.load(response.data)

                // for each article.
                cheerioLoad(instructions.elementSelector).each((index, element) => {

                    if (index === amount) return

                    let articleData: ArticleImage = {}
                    let tmpArticle: Article
                    let basicData = ["title", "pubDate", "content"] // Exp. If you remove the title, then the title is going to be on the extra information of each article.
                    let options: any = instructions.scrapeOptions

                    // for each option. The options provided by instructions.
                    for (let item in options) {
                        if (options.hasOwnProperty(item) && options[item].class[0] !== '.') options[item].class = "." + options[item].class.slice(0, -1);

                        if (options.hasOwnProperty(item) && options[item].find) {
                            if (!options[item].attributes)
                                articleData[item] = HtmlParser.findMultiple(options[item].find, cheerioLoad, element, options[item].class, options[item].multiple, false, [], "")
                            else
                                articleData[item] = HtmlParser.findMultiple(options[item].find, cheerioLoad, element, options[item].class, options[item].multiple, true, options[item].attributes, instructions.endPoint)
                        }
                        else articleData[item] = Utils.htmlStrip(cheerioLoad(element).find(options[item].class).text())
                    }
                    // It stores the article data to an instance of Article class.
                    tmpArticle = new Article()
                    tmpArticle.source = {id: instructions.getSource().getId()}
                    tmpArticle.title = (articleData.title)? articleData.title : ''
                    tmpArticle.pubDate = (articleData.pubDate)? articleData.pubDate : ''
                    tmpArticle.content = (articleData.content)? articleData.content : ''
                    tmpArticle.extras = {}

                    if(alias)
                        tmpArticle.extras.categories = [{name: alias, links: [url]}]

                    // for each extra data. Data that are not described in the baseData variable.
                    Object.entries(articleData).forEach( (extra) => {
                        if (basicData.indexOf(extra[0]) !== -1) return
                        if (extra[1] === '') return

                        tmpArticle.extras[extra[0]] = extra[1]
                    })

                    if (tmpArticle.title === '') return

                    parsedArticles.push(tmpArticle)
                })
            })
        return parsedArticles
    }

    /**
     * This method analyzes the content of an html
     * page and returns a map containing the requested
     * announcements.
     *
     * @param instructions How does the parser gonna parse the html content.
     * @param amount How much article to withdraw.
     * @return Array<Article> The articles.
     */
    static async parse(instructions: Instructions,
                       amount: Number = 10): Promise<Array<Article>> {

        let parsedArticles: Array<Article> = []

        if(typeof instructions.url == 'string')
            parsedArticles.push(...(await this.parse2(undefined, instructions.url, instructions, amount)))
        else {
            for(const pair of instructions.url)
                parsedArticles.push(...(await this.parse2(pair[0], pair[1], instructions, amount)))
        }

        return parsedArticles
    }
}