import type {Article} from "./article";

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

export type ScrapeDynamic = () => Promise<Article[]>;
export type ScrapeHTML = {
    container: string;
    // TODO: Add endpoint
    article: {
        [field: 'title' | 'link' | 'content' | 'pubDate' | 'categories' | string]: {
            parent?: string;

            class?: string;
            find?: string[];
            attributes?: string[];
            multiple?: boolean;

            static?: string;

            // TODO: Add doNotIterate at HTML (maybe if container is empty?)
        };
    }
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
    headers?: string;
    ignoreCertificates?: boolean;

    amount?: number;
    encoding?: string;
    includeContentAttachments?: boolean;

    extra?: any;
} & ({
    type: 'dynamic'
    scrape?: ScrapeDynamic;
} | {
    type: 'html'
    scrape?: ScrapeHTML;
} | {
    type: 'rss'
    scrape?: ScrapeRSS;
} | {
    type: 'wordpress-v2'
    scrape?: ScrapeWordPressV2;
});