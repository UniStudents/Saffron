import type Article from "./article";

export type InstructionUrl = {
    aliases: string[];
    url: string;
};

export type ParserResult = InstructionUrl & { articles: Article[]; };

export type CallbackVoid = (...args: any[]) => void;

export type ScrapeDynamic = () => Promise<Article[]>;
export type ScrapeHTML = {
    container: string;
    article: {
        [field: 'title' | 'link' | 'content' | 'pubDate' | 'categories' | string]: {
            class: string | null; // TODO
            find: string[] | null;
            attributes?: string[];
            multiple?: boolean;
        };
    }
};
export type ScrapeRSS = {
    extraFields: string[];
    assignFields: {[assign: string]: string};
};
export type ScrapeWordPressV2 = {
    articles?: {
        include?: string[];
        dates?: {
            gmt?: boolean;
            fallback?: boolean;
        };
        filter?: {
            search?: string | null;
            author?: string | null;
            authorExclude?: string | null;
            after?: string | null;
            before?: string | null;
            slug?: string | null;
            status?: string | null;
            categories?: string | null;
            categoriesExclude?: string | null;
            tags?: string | null;
            tagsExclude?: string | null;
            sticky?: boolean | null;
        };
        thumbnail?: string | null;
    }
};

export type SourceScrape = ScrapeDynamic | ScrapeHTML | ScrapeRSS | ScrapeWordPressV2;

export type SourceFile = {
    filename?: string;

    name: string;
    tableName?: string;
    url: string | string[] | string[][];
    type: 'html' | 'rss' | 'dynamic' | 'wordpress-v2';

    interval?: number;
    retryInterval?: number;

    timeout?: number;
    maxRedirects?: number;
    userAgent?: string;
    ignoreCertificates?: boolean;

    amount?: number;
    encoding?: string;
    includeContentAttachments?: boolean;

    extra?: any;

    scrape?: SourceScrape;
};