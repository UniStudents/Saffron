import Parser from "rss-parser";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes";
import Utils from "./Utils";


export default class rssParser{
    private static requested_fields : String[] = ["title","link","content","pubDate"]
    private static parser_timout: number = 5000
    /**
     This function finds the RSS fields that are not
     contained in the requested_fields array and returns
     a new array that contains the corrected names of the
     fields.
     *
     * @returns {Promise<[]>}
     * @param fields
     **/
    private static async generateRenamedFields(fields: Map<string,string>) : Promise<Array<String[]>>{
        let array: Array<String[]> = []
        fields.forEach((value: string, key: string) => {
            if (this.requested_fields.some(item => item === key)) {
                array.push([key,value]);
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
    public static async rssParser(url: string, amount: number = 10, renameFields: Map<string, string> = new Map<string, string>()){
        let dataJson = {}; // there is where the returned data are stored.
        let customFieldsKeys = await Array.from(renameFields.keys());
        let parser: Parser = await this.generateParser(renameFields)
        return await parser.parseURL(url).then(feed =>{
            let count = 0
            feed.items.forEach(item => {
                // @ts-ignore
                //Initializing json object
                dataJson[count] = {}
                //Skipping all the renamed fields
                this.requested_fields.forEach(field =>{
                    if(customFieldsKeys.some(item => item === field)) return
                    //@ts-ignore
                    dataJson[count][field] = item[field] ? Utils.htmlStrip(item[field]) : null;
                })
                //Adds all the renamed fields as renamed on the result json
                customFieldsKeys.forEach(customField => {
                    //@ts-ignore
                    dataJson[count][renameFields.get(customField)] = item[customField] ? Utils.htmlStrip(item[customField]) : null
                })
                count++
            })
            return dataJson
        }).catch(e=>{
            Logger(LoggerTypes.ERROR,`RSS parser error ${e.message}.`);
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
    private static async generateParser(renameFields: Map<string, string>): Promise<Parser>{
        let customFields = await this.generateRenamedFields(renameFields);
        return new Parser({
            // define the request headers.
            timeout: this.parser_timout,
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


}


