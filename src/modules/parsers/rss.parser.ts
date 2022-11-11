import {ParserClass} from "../../components/ParserClass";
import type Instructions from "../../components/instructions";
import Article from "../../components/article";
import Parser from "rss-parser";
import type Utils from "./Utils";
import type {ScrapeRSS, SourceScrape} from "../../components/types";

export class RssParser extends ParserClass {

    validateScrape(scrape?: SourceScrape): void {
        // This exists only for typescript, it is not valid and will not run at runtime.
        scrape = scrape as ScrapeRSS;

        if ((scrape)?.extraFields ? !Array.isArray(scrape.extraFields) : false) throw new Error('extraFields is not an array.');

        if (scrape?.assignFields && (typeof scrape.assignFields !== 'object' || Array.isArray(scrape.assignFields)))
            throw new Error('assignFields is not a JSON object.');
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        scrape = scrape as ScrapeRSS;

        scrape = scrape ?? {};
        scrape.assignFields ??= {};
        scrape.extraFields ??= [];

        instructions.rss = scrape;
    }

    async parse(utils: Utils): Promise<Article[]> {
        const instructions = utils.source.instructions;

        const assignFields = instructions.rss.assignFields;
        const extraFields = instructions.rss.extraFields;

        // Default fields & extra fields
        const requestFields: string[] = ["title", "link", "content", "pubDate", "categories", ...extraFields];

        const parser = new Parser({
            timeout: utils.source.instructions.timeout,
            maxRedirects: utils.source.instructions.maxRedirects,
            headers: {
                'User-Agent': utils.source.instructions.userAgent
            },
            requestOptions: {
                rejectUnauthorized: !utils.source.instructions.ignoreCertificates
            },
            customFields: {
                // Make sure to request all the mentioned fields
                item: requestFields
            }
        });

        let feed = await parser.parseURL(utils.url);

        const parsedArticles: Article[] = [];
        let count = 0;
        for (const item of feed.items) {
            if (count >= instructions.amount) break;
            count++;

            // Initializing json object
            const data: any = {};

            // Copy all requested fields except the ones inside the assignFields keys
            for (const field of requestFields) {
                if(!Object.keys(assignFields).includes(field))
                    data[field] = item[field] ?? null;
            }

            // Assign all renamed fields to data object
            for (const customField in assignFields)
                data[customField] = item[assignFields[customField]] ?? null;

            let article = new Article();

            article.title = utils.cleanupHTMLText(data["title"] ?? "", true);
            article.content = utils.cleanupHTMLText(data["content"] ?? "", false);
            article.pubDate = utils.cleanupHTMLText(data["pubDate"] ?? "", false);
            article.link = utils.cleanupHTMLText(data["link"] ?? "", false);
            data.categories?.forEach((c: string) => article.pushCategory(c, []));

            if(utils.source.instructions.includeContentAttachments)
                article.pushAttachments(utils.extractLinks(article.content));

            // Assign remaining fields too extra
            Object.keys(data).forEach(key => {
                if(!Object.keys(article).some(v => v === key))
                    article.addExtra(key, data[key]);
            });

            parsedArticles.push(article);
        }

        return parsedArticles;
    }
}