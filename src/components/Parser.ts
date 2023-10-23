import type {Instructions} from "./instructions";
import type {Article} from "./article";
import type {Utils} from "./Utils";
import cheerio from "cheerio";
import type {RequestsResult, SourceScrape} from "./types";

export abstract class Parser {

    // Exp. If you remove the title, then the title is going to be on the extra information of each article.
    protected static readonly BASIC_DATA = ["title", "pubDate", "content", "attachments", "link", "categories", "thumbnail"];

    /**
     * A function that will validate if the scrape field is correct
     */
    abstract validateScrape(scrape?: SourceScrape): void

    /**
     * A function that will take the validated scrape function and set the instructions properly.
     */
    abstract assignInstructions(instructions: Instructions, scrape?: SourceScrape): void

    abstract request(utils: Utils): Promise<RequestsResult>

    abstract parse(result: RequestsResult, utils: Utils): Promise<Article[]>

    protected parseField(data: string | any[]): string | null {
        if (Array.isArray(data) && data[0])
            return data[0];
        else {
            return data as any;
        }
    }

    protected parseHTMLField(utils: Utils, data: string | any[], excessive: boolean): string | null {
        let ret;
        if (Array.isArray(data) && data[0]?.value)
            ret = data[0].value;
        else if (typeof data === 'string')
            ret = data;
        return ret ? utils.cleanupHTMLText(ret, excessive) : ret;
    }

    protected getJsonNode(root: object | null | undefined, key: string | number): any | null | undefined {
        if (!root || !root.hasOwnProperty(key)) {
            return undefined;
        }
        return root[key];
    }

    protected isSkippedJSONNode(skipOpts: any[], child: object, index: number): boolean {
        const skip = skipOpts;
        if (!skip) return false;

        for (const s of skip) {
            if (this._isSkippedJsonNode(s, child, index))
                return true;
        }

        return false;
    }

    protected isSkippedHTMLNode(utils: Utils, instructions: Instructions, cheerioLoad: cheerio.Root, element: cheerio.Element, index: number): boolean {
        const skip = instructions.html.skip;
        if (!skip) return false;

        const load = cheerioLoad(element);
        for (const s of skip) {
            if (this._isSkippedHTMLNode(utils, s, load, index))
                return true;
        }

        return false;
    }

    private _isSkippedJsonNode(s: any, child: object, index: number): boolean {
        const {
            find, text, type,
            position
        } = s;

        if (find !== undefined) {
            let root: any = child;
            for (const key of find) {
                root = this.getJsonNode(root, key);
            }

            if (text !== undefined) {
                if (type === undefined || type === 'exact')
                    return root === text;
                else if (type === 'contains') {
                    if (typeof root === 'string' || Array.isArray(root)) {
                        return root.includes(text);
                    }
                }
            }

            return false;
        } else if (text !== undefined) {
            if (type === undefined || type === 'exact')
                return child === text;
            else if (type === 'contains') {
                if (typeof child === 'string' || Array.isArray(child)) {
                    return child.includes(text);
                }
            }
        } else if (position !== undefined) {
            return index == position || `${position}` == `${index}`;
        }

        return false;
    }

    private _isSkippedHTMLNode(utils: Utils, s: any, load: cheerio.Cheerio, index: number): boolean {
        const {
            selector, text, type,
            position
        } = s;

        if (selector !== undefined) {
            const child = load.find(selector);
            if (child.html() == null) return false;

            if (text !== undefined) {
                if (type === undefined || type === 'exact')
                    return utils.cleanupHTMLText(child.text(), false) === text;
                else if (type === 'contains')
                    return child.text().includes(text);
            }

            return true;
        } else if (text !== undefined) {
            // text exists and selector does not exist
            if (type === undefined || type === 'exact')
                return utils.cleanupHTMLText(load.text(), false) === text;
            else if (type === 'contains')
                return load.text().includes(text);
        } else if (position !== undefined) {
            return index === position;
        }

        return false;
    }
}

export enum ParserType {
    RSS = 'rss',
    HTML = 'html',
    DYNAMIC = 'dynamic',
    WORDPRESS_V2 = 'wordpress-v2',
    JSON = 'json',
    XML = 'xml',
    UNKNOWN = 'unknown'
}

export namespace ParserType {
    export function getFromString(str: string): ParserType {
        switch (str) {
            case "html":
                return ParserType.HTML;
            case "rss":
                return ParserType.RSS;
            case "dynamic":
                return ParserType.DYNAMIC;
            case "wordpress-v2":
                return ParserType.WORDPRESS_V2;
            case "json":
                return ParserType.JSON;
            case "xml":
                return ParserType.XML;
            default:
                return ParserType.UNKNOWN;
        }
    }
}