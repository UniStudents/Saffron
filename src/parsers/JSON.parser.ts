import {Parser} from "../components/Parser";
import type {Instructions} from "../components/instructions";
import type {RequestsResult, SourceScrape} from "../components/types";
import type {Utils} from "../components/Utils";
import {Article} from "../components/article";
import type {ScrapeJSON} from "../components/parser.type";
import type {AxiosResponse} from "axios";

export class JSONParser extends Parser {
    validateScrape(s?: SourceScrape): void {
        // This exists only for typescript, it is not valid and will not run at runtime.
        const scrape = s as ScrapeJSON;

        if (typeof scrape !== 'object' || Array.isArray(scrape))
            throw new Error("must be a JSON object");

        if (scrape.container !== undefined && (!Array.isArray(scrape.container) || scrape.container.some(a => typeof a !== 'string' && typeof a !== 'number')))
            throw new Error(`container must be a string/number array`);

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
                find, text, type,
                position
            } = (<any>item);

            if (keys.includes('find') || keys.includes('text')) {
                if (keys.includes('position'))
                    throw new Error(`skip.${index}.position cannot be together with "selector" or "text"`);

                if (find !== undefined && (!Array.isArray(find) || find.some(a => typeof a !== 'string' && typeof a !== 'number')))
                    throw new Error(`skip.${index}.find must be a string/number array`);
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

            if (options.find !== undefined && (!Array.isArray(options.find) || options.find.some(a => typeof a !== 'string' && typeof a !== 'number')))
                throw new Error(`article.${key}.find must be string/number array`);

            if (typeof options.static !== 'string' && options.static !== undefined)
                throw new Error(`article.${key}.static must be string`);

            // If static exists, then except parent all fields must not be defined
            if (options.static !== undefined) {
                if (options.find !== undefined)
                    throw new Error(`article.${key}: when the static key is defined the key find must not be defined`);
            }
            // At least one field must be mentioned
            else if (options.find === undefined)
                throw new Error(`article.${key} at least one option must be defined`);
        }
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        instructions.json = scrape as ScrapeJSON;
    }

    async request(utils: Utils): Promise<RequestsResult> {
        return utils.get(utils.url);
    }

    async parse(result: RequestsResult, utils: Utils): Promise<Article[]> {
        const instructions = utils.source.instructions;
        const response = result as AxiosResponse;

        let root = JSON.parse(response.data);
        for (const key of instructions.json.container) {
            root = this.getJsonNode(root, key);
        }

        const articles: Article[] = [];
        for (const index in root) {
            if (articles.length >= instructions.amount) continue;

            const child = root[index];
            if (this.isSkippedJSONNode(instructions.json.skip!, child, index as any)) continue;

            const articleData: Record<string, any> = {};
            const options = instructions.json.article;

            // Get data for each option
            for (const key in options) {
                const opts = options[key];

                if (opts.static !== undefined) {
                    articleData[key] = opts.static;
                    continue;
                }

                let nested = root[index];
                for (const key of opts.find ?? []) {
                    nested = this.getJsonNode(nested, key);
                }

                articleData[key] = nested;
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
            article.title = this.parseField(articleData.title);
            article.content = this.parseField(articleData.content);
            article.link = this.parseField(articleData.link);
            article.pubDate = this.parseField(articleData.pubDate);
            article.thumbnail = this.parseField(articleData.thumbnail);

            if (articleData.categories) {
                if (Array.isArray(articleData.categories))
                    articleData.categories.forEach(category => article.pushCategory(category, [utils.url]));
                else
                    article.pushCategory(articleData.categories, [utils.url]);
            }

            article.pushAttachments(articleData.attachments ?? []);

            // For each extra data. Data that are not described in the baseData variable.
            Object.entries(articleData).forEach(extra => {
                if (JSONParser.BASIC_DATA.includes(extra[0]) || !extra[1]) return;
                article.addExtra(extra[0], extra[1]);
            });

            articles.push(article);
        }

        return articles;
    }
}