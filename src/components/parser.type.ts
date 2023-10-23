type ArticleFields = 'title' | 'content' | 'link' | 'pubDate' | 'categories' | 'attachments' | 'thumbnail' | string;
type HtmlSkipOptions = {
    selector?: string;
    text?: string;
    type?: 'exact' | 'contains'; // Default is 'exact'
} | {
    position: number;
};
type JsonSkipOptions = {
    find?: (string | number)[]; // In case condition is matched in nested item
    text?: string;
    type?: 'exact' | 'contains'; // Default is 'exact'
} | {
    position: number;
};

export type ScrapeDynamic = {
    implementation: string;
};

export type ScrapeHTML = {
    container: string;
    scriptingEnabled?: boolean;
    skip?: HtmlSkipOptions[];
    article: {
        [field: ArticleFields]: {
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
        pagination?: {
            page?: number; // page
            size?: number; // per_page
        };
        thumbnail?: string;
    };
};

export type ScrapeJSON = {
    container: (string | number)[];
    skip?: JsonSkipOptions[];
    article: {
        [field: ArticleFields]: {
            parent?: string;
            find?: (string | number)[];
            static?: string;
        };
    };
};

export type ScrapeXML = {
    container: (string | number)[];
    skip?: JsonSkipOptions[];
    article: {
        [field: ArticleFields]: {
            parent?: string;
            find?: (string | number)[];
            static?: string;
        };
    };
    unpairedTags?: string[];
};