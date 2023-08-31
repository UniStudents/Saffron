import type {Article} from "./article";
import type {Utils} from "./Utils";
import type {AxiosRequestConfig} from "axios";
import type {AxiosResponse} from "axios";

export type InstructionUrl = {
    aliases: string[];
    url: string;
};

export type ParserResult = InstructionUrl & { articles: Article[]; };

export type RequestsResult = AxiosResponse | AxiosResponse[];

export type CallbackVoid = (...args: any[]) => void;

export type HTMLAttribute = {
    attribute: string;
    value: string | null;
    text: string;
};

export type ScrapeDynamic = (utils: Utils, Article: any) => Promise<Article[]>;

export type ScrapeHTML = {
    container: string;
    scriptingEnabled?: boolean;
    skip?: ({
        selector?: string;
        text?: string;
        type?: 'exact' | 'contains'; // Default is 'exact'
    } | {
        position: number;
    })[];
    article: {
        // TODO: Only for categories add link field, to store directly in the categories links array
        [field: 'title' | 'link' | 'content' | 'pubDate' | 'categories' | 'attachments' | 'thumbnail' | string]: {
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

    ignoreCertificates?: boolean;
    delayBetweenRequests?: number;
    axios?: AxiosRequestConfig;

    amount?: number;
    encoding?: string;
    includeContentAttachments?: boolean;
    includeCategoryUrlsIn?: 'categories' | 'extras';

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