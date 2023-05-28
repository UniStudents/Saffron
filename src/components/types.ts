import type {Article} from "./article";
import type {Utils} from "../modules/parsers/Utils";
import type {AxiosRequestConfig} from "axios";

export type InstructionUrl = {
    aliases: string[];
    url: string;
};

export type ParserResult = InstructionUrl & { articles: Article[]; };

export type CallbackVoid = (...args: any[]) => void;

export type HTMLAttribute = {
    attribute: string;
    value: string | null;
    text: string;
};

export type ScrapeDynamic = (utils: Utils, Article: any) => Promise<Article[]>;

export type ScrapeHTML = {
    container: string;
    skip?: ({
        selector?: string;
        text?: string;
        type?: 'exact' | 'contains'; // Default is 'exact'
    } | {
        position: number;
    })[];
    article: {
        [field: 'title' | 'link' | 'content' | 'pubDate' | 'categories' | string]: {
            parent?: string;

            class?: string;
            find?: string[];
            attributes?: string[];
            multiple?: boolean;

            static?: string;
        };
    };
};

export type ScrapeRSS = {
    extraFields: string[];
    assignFields: { [assign: string]: string };
};

export type ScrapeWordPressV2 = {
    paths?: {
        posts?: string;
        categories?: string;
    };
    articles?: {
        include?: string[];
        dates?: {
            gmt?: boolean;
            fallback?: boolean;
        };
        filter?: {
            search?: string;
            author?: string;
            authorExclude?: string;
            after?: string;
            before?: string;
            slug?: string;
            status?: string;
            categories?: string;
            categoriesExclude?: string;
            tags?: string;
            tagsExclude?: string;
            sticky?: boolean;
        };
        thumbnail?: string;
    };
};

export type SourceScrape = ScrapeDynamic | ScrapeHTML | ScrapeRSS | ScrapeWordPressV2 | undefined;

export type SourceFile = {
    filename?: string;

    name: string;
    tableName?: string;
    url: string | string[] | string[][];

    interval?: number;
    retryInterval?: number;

    timeout?: number;
    maxRedirects?: number;
    headers?: { [key: string]: string | string[] };
    ignoreCertificates?: boolean;
    delayBetweenRequests?: number;
    axios?: AxiosRequestConfig;

    amount?: number;
    encoding?: string;
    includeContentAttachments?: boolean;

    extra?: any;
} & ({
    type: 'dynamic'
    scrape: ScrapeDynamic;
} | {
    type: 'html'
    scrape: ScrapeHTML;
} | {
    type: 'rss'
    scrape?: ScrapeRSS;
} | {
    type: 'wordpress-v2'
    scrape?: ScrapeWordPressV2;
});