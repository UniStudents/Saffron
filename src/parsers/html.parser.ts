import {Parser} from "../components/Parser";
import type {Instructions} from "../components/instructions";
import {Article} from "../components/article";
import type {AxiosResponse} from "axios";
import cheerio from "cheerio";
import type {Utils} from "../components/Utils";
import type {HTMLAttribute, RequestsResult, SourceScrape} from "../components/types";
import type {ScrapeHTML} from "../components/parser.type";

export class HTMLParser extends Parser {

    validateScrape(scrape?: SourceScrape): void {
        // This exists only for typescript, it is not valid and will not run at runtime.
        scrape = scrape as ScrapeHTML;

        if (typeof scrape !== 'object' || Array.isArray(scrape))
            throw new Error("must be a JSON object");

        if (typeof scrape.container !== 'string')
            throw new Error("container must be a string");

        if (typeof scrape.scriptingEnabled !== 'undefined' && typeof scrape.scriptingEnabled !== 'boolean')
            throw new Error("scriptingEnabled must be a boolean");

        if (typeof scrape.article !== 'object' || Array.isArray(scrape.article))
            throw new Error("article must be JSON object");

        if (scrape.skip !== undefined && !Array.isArray(scrape.skip))
            throw new Error("skip must be an array");
        for (const index in scrape.skip ?? []) {
            const item = scrape.skip![index];
            if (typeof item !== 'object')
                throw new Error(`skip.${index} must be an object`);
            const keys = Object.keys(item);
            const {
                selector, text, type,
                position
            } = (<any>item);

            if (keys.includes('selector') || keys.includes('text')) {
                if (keys.includes('position'))
                    throw new Error(`skip.${index}.position cannot be together with "selector" or "text"`);

                if (selector !== undefined && typeof selector !== 'string')
                    throw new Error(`skip.${index}.selector must be a string`);
                if (text !== undefined && typeof text !== 'string')
                    throw new Error(`skip.${index}.text must be a string`);

                if (keys.includes('type') && type !== 'exact' && type !== 'contains')
                    throw new Error(`skip.${index}.type must be a "exact" or "contains"`);
            } else if (keys.includes('position')) {
                if (typeof position !== 'number' || position < 0)
                    throw new Error(`skip.${index}.position must be a zero or positive number`);
            } else
                throw new Error(`skip.${index} contains illegal fields`);
        }

        const articleKeys = Object.keys(scrape.article);

        if ((new Set(articleKeys)).size !== articleKeys.length)
            throw new Error("article cannot have duplicates keys");

        for (const key of Object.keys(scrape.article)) {
            const options = scrape.article[key];

            if (typeof options.parent !== 'string' && options.parent !== undefined)
                throw new Error(`article.${key}.parent must be string`);

            if (typeof options.class !== 'string' && options.class !== undefined)
                throw new Error(`article.${key}.class must be string`);

            if (options.find !== undefined && (!Array.isArray(options.find) || options.find.some(a => typeof a !== 'string')))
                throw new Error(`article.${key}.find must be string array`);

            if (options.attributes !== undefined && (!Array.isArray(options.attributes) || options.attributes.some(a => typeof a !== 'string')))
                throw new Error(`article.${key}.attributes must be string array`);

            if (typeof options.multiple !== 'boolean' && options.multiple !== undefined)
                throw new Error(`article.${key}.multiple must be boolean`);

            if (typeof options.static !== 'string' && options.static !== undefined)
                throw new Error(`article.${key}.static must be string`);

            // If static exists, then except parent all fields must not be defined
            if (options.static !== undefined) {
                if (options.class !== undefined || options.find !== undefined || options.attributes !== undefined || options.multiple !== undefined)
                    throw new Error(`article.${key}: when the static key is defined the keys class, find, attributes and multiple must not be defined`);
            }
            // At least one field must be mentioned
            else if (options.class === undefined && options.find === undefined && options.attributes === undefined && options.multiple === undefined)
                throw new Error(`article.${key} at least one option must be defined`);
        }
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        instructions.html = scrape as ScrapeHTML;
    }

    request(utils: Utils): Promise<RequestsResult> {
        return utils.get(utils.url);
    }

    async parse(response: RequestsResult, utils: Utils): Promise<Article[]> {
        const instructions = utils.source.instructions;

        const parsedArticles: Article[] = [];
        const cheerioLoad: cheerio.Root = cheerio.load((response as AxiosResponse).data, {
            // @ts-ignore
            scriptingEnabled: instructions.html.scriptingEnabled
        });
        cheerioLoad(`${instructions.html.container}`).each((index, element) => {
            if (parsedArticles.length >= instructions.amount) return;
            if (this.isSkippedHTMLNode(utils, instructions, cheerioLoad, element, index)) return;

            const articleData: Record<string, any> = {};
            const options = instructions.html.article;

            // Get data for each option
            for (const item in options) {
                const opts = options[item];

                if (opts.static !== undefined) {
                    articleData[item] = opts.static;
                    continue;
                }

                const _class = opts.class ?? undefined;
                const find = opts.find ?? [];
                const multiple = opts.multiple ?? false;
                const attributes = opts.attributes ?? [];

                if (find.length == 0 && !multiple && attributes.length == 0)
                    articleData[item] = cheerioLoad(element).find(opts.class!).text();
                else
                    articleData[item] = this.getData(cheerioLoad, element, multiple, attributes, find, _class);
            }

            // Utility to merge fields with parent
            for (const item in options) {
                const parent = options[item].parent;
                if (!parent) continue;

                // Parent is string
                if (typeof articleData[parent] === 'string') {
                    // Parent (string) - Child (string)
                    if (typeof articleData[item] === 'string')
                        articleData[parent] += articleData[item];
                    // Parent (string) - Child (array)
                    else if (Array.isArray(articleData[item]))
                        articleData[parent] += articleData[item].reduce((acc, curr) => acc + curr.value, '');
                } else if (Array.isArray(articleData[parent])) {
                    // Parent (array) - Child (string)
                    if (typeof articleData[item] === 'string')
                        articleData[parent].push(...(articleData[item] ? [articleData[item]] : []));
                    // Parent (array) - Child (array)
                    else if (Array.isArray(articleData[item]))
                        articleData[parent].push(...(articleData[item] ? articleData[item] : []));
                }
            }

            const article = new Article();
            article.title = this.parseHTMLField(utils, articleData.title, true);
            article.content = this.parseHTMLField(utils, articleData.content, false);
            article.pubDate = this.parseHTMLField(utils, articleData.pubDate, false);
            article.thumbnail = this.parseHTMLField(utils, articleData.thumbnail, false);
            article.link = this.parseHTMLField(utils, articleData.link, false);

            if (articleData.categories) {
                if (Array.isArray(articleData.categories))
                    articleData.categories.forEach(category => article.pushCategory(utils.cleanupHTMLText(category, true), [utils.url]));
                else
                    article.pushCategory(utils.cleanupHTMLText(articleData.categories, true), [utils.url]);
            }

            article.pushAttachments(articleData.attachments ?? []);
            if (instructions.includeContentAttachments)
                article.pushAttachments(utils.extractLinks(article.content))

            // For each extra data. Data that are not described in the baseData variable.
            Object.entries(articleData).forEach(extra => {
                if (HTMLParser.BASIC_DATA.includes(extra[0]) || !extra[1]) return;
                article.addExtra(extra[0], extra[1]);
            });

            parsedArticles.push(article);
        });

        return parsedArticles;
    }

    private attributes(location: cheerio.Cheerio, attributesArr: string[]): HTMLAttribute[] {
        // Search into same element if Instructions(Find = null) and class is the same
        return attributesArr.filter(item => location.attr(item)).map(item => {
            return {
                attribute: item, //attribute
                value: location.attr(item) ?? null, //value_of__requested_attribute
                text: location.text(), //tag value
            };
        });
    }

    private getData(htmlContent: cheerio.Root, currArticle: cheerio.Element,
                    multiple: boolean, attributes: string[], find: string[],
                    htmlClass?: string | null): (string | HTMLAttribute)[] | string {

        // Save the point where the data is stored.
        const dataStoredAt: string = find.length > 0 ? find[find.length - 1] : "";

        // Going deeper into the html content.
        let tmpElement = htmlContent(currArticle);
        if (htmlClass) tmpElement = tmpElement.find(htmlClass);
        if (multiple) find.slice(0, find.length - 1).forEach(value => tmpElement = htmlContent(tmpElement).find(value));

        // We are at the location of the information we want.
        let finalLocation = htmlContent(tmpElement);

        // We only take one item, so return the text from the current location
        if (!multiple && attributes.length == 0)
            return finalLocation.text();

        if (multiple) {
            const results: (string | HTMLAttribute)[] = [];
            finalLocation.each((index, element) => {
                let location = htmlContent(element);
                if (dataStoredAt.length != 0)
                    location = location.find(dataStoredAt);

                if (attributes.length != 0) {
                    this.attributes(location, attributes).forEach((object: HTMLAttribute) => results.push(object));
                    return;
                }

                const text = location.text();
                if (text !== '') results.push(text);
            });

            return results;
        }

        // if (attributes.length != 0)
        if (dataStoredAt.length != 0)
            finalLocation = finalLocation.find(dataStoredAt);
        return this.attributes(finalLocation, attributes);
    }
}