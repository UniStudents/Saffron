import {ParserClass} from "../../components/ParserClass";
import type {Instructions} from "../../components/instructions";
import {Article} from "../../components/article";
import Parser from "rss-parser";
import type {Utils} from "../../components/Utils";
import type {RequestsResult, ScrapeRSS, SourceScrape} from "../../components/types";
import type {AxiosResponse} from "axios";

export class RssParser extends ParserClass {

    validateScrape(scrape?: SourceScrape): void {
        // This exists only for typescript, it is not valid and will not run at runtime.
        scrape = scrape as ScrapeRSS;

        if (typeof scrape !== 'undefined') {
            if (typeof scrape !== 'object' || Array.isArray(scrape))
                throw new Error("must be a JSON object");

            if (typeof scrape.extraFields !== 'undefined' && !Array.isArray(scrape.extraFields))
                throw new Error('extraFields must be an array of string');

            if (typeof scrape.assignFields !== 'undefined' && (typeof scrape.assignFields !== 'object' || Array.isArray(scrape.assignFields)))
                throw new Error('assignFields must be a JSON object');
        }
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        scrape = scrape as ScrapeRSS;

        scrape = scrape ?? {};
        scrape.assignFields ??= {};
        scrape.extraFields ??= [];

        instructions.rss = scrape;
    }

    request(utils: Utils): Promise<RequestsResult> {
        return utils.get(utils.url);
    }

    async parse(response: RequestsResult, utils: Utils): Promise<Article[]> {
        const instructions = utils.source.instructions;

        const assignFields = instructions.rss.assignFields;
        const extraFields = instructions.rss.extraFields;

        // Default fields & extra fields
        const requestFields: string[] = ["title", "link", "content", "pubDate", "categories", "media:thumbnail", 'media:content', ...extraFields];
        const parser = new Parser({
            customFields: {
                // Make sure to request all the mentioned fields
                item: requestFields
            }
        });

        const feed = await parser.parseString((response as AxiosResponse).data);

        const parsedArticles: Article[] = [];
        let count = 0;
        for (const item of feed.items) {
            if (count >= instructions.amount) break;
            count++;

            // Initializing json object
            const data: any = {};

            // Copy all requested fields except the ones inside the assignFields keys
            for (const field of requestFields) {
                if (!Object.keys(assignFields).includes(field) && item[field] !== undefined)
                    data[field] = item[field];
            }

            // Assign all renamed fields to data object
            for (const customField in assignFields) {
                data[customField] = item[assignFields[customField]];
            }

            const article = new Article();

            article.title = utils.cleanupHTMLText(data["title"] ?? "", true);
            article.content = utils.cleanupHTMLText(data["content"] ?? "", false);
            article.pubDate = utils.cleanupHTMLText(data["pubDate"] ?? "", false);
            article.link = utils.cleanupHTMLText(data["link"] ?? "", false);
            article.thumbnail = data["thumbnail"]
                ?? this.getUrlFromMedia(data, 'media:thumbnail')
                ?? this.getUrlFromMedia(data, 'media:content');

            data.categories?.forEach((c: string) => article.pushCategory(c, []));

            if (utils.source.instructions.includeContentAttachments)
                article.pushAttachments(utils.extractLinks(article.content));

            // Assign remaining fields too extra
            Object.keys(data).forEach(key => {
                if (!Object.keys(article).some(v => v === key))
                    article.addExtra(key, data[key]);
            });

            parsedArticles.push(article);
        }

        return parsedArticles;
    }

    private getUrlFromMedia(data: any, key: string): string | null {
        return data[key]?.['$']?.['url'];
    }
}