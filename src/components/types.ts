import type {Article} from "./article";
import type {AxiosRequestConfig, AxiosResponse} from "axios";
import type {ScrapeDynamic, ScrapeHTML, ScrapeRSS, ScrapeWordPressV2, ScrapeXML} from "./parser.type";
import type {ScrapeJSON} from "./parser.type";

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

export type SourceScrape = ScrapeDynamic | ScrapeHTML | ScrapeRSS | ScrapeWordPressV2 | ScrapeJSON | ScrapeXML | undefined;

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
} | {
    type: 'json'
    scrape?: ScrapeJSON;
} | {
    type: 'xml'
    scrape?: ScrapeXML;
});