import type {Article} from "./article";
import type {AxiosRequestConfig, AxiosResponse} from "axios";
import type {ScrapeDynamic, ScrapeHTML, ScrapeJSON, ScrapeRSS, ScrapeWordPressV2, ScrapeXML} from "./parser.type";
import type {DynamicSourceFile} from "./DynamicSourceFile";
import type {Source} from "./source";

export type ConfigType = {
    mode: 'main' | 'worker'; // TODO: Add mode debug - Will act as main, and will verbose a lot of data
    newArticles: ((tableName: string, articles: Article[]) => void) | ((tableName: string, articles: Article[]) => Promise<void>);
    sources: Partial<{
        path: string;
        scanSubFolders: boolean;
        dynamicSourceFiles: DynamicSourceFile[];
        loader: (filepath: string) => Promise<any>;
        includeOnly: string[];
        exclude: string[];
    }>;
    workers: Partial<{
        nodes: number | string[];
        delayBetweenRequests?: number;
        axios: AxiosRequestConfig | ((source: Source) => Promise<AxiosRequestConfig>);
        preprocessor: (responses: RequestsResult, source: Source) => Promise<RequestsResult>;
        articles: Partial<{
            amount: number;
            includeContentAttachments: boolean;
            includeCategoryUrlsIn: 'categories' | 'extras';
        }>;
    }>;
    scheduler: Partial<{
        jobsInterval: number,
        // TODO: Add function to calculate retry interval
        heavyJobFailureInterval: number,
        noResponseThreshold: number;
        randomizeInterval: () => number;
    }>;
    grid: Partial<{
        distributed: boolean;
        useHTTPS: boolean;

        serverHost: string;
        serverPort: number;
        authToken: string;
        key: any;
        cert: any;
    }>;
    misc: Partial<{
        log: 'all' | 'info' | 'errors' | 'none';
        eventDelay: number;
    }>;
}

export type MergedConfig = Partial<ConfigType> & {
    production?: Partial<ConfigType>;
    development?: Partial<ConfigType>
    testing?: Partial<ConfigType>
};

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

export type SourceScrape =
    ScrapeDynamic
    | ScrapeHTML
    | ScrapeRSS
    | ScrapeWordPressV2
    | ScrapeJSON
    | ScrapeXML
    | undefined;

export type SourceFile = {
    filename?: string;

    name: string;
    tableName?: string;
    url: string | string[] | string[][];

    interval?: number;
    retryInterval?: number;

    ignoreCertificates?: boolean; // This is not removed, as we cannot mention https.Agent inside a json file
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