import Article from "./article";

export type InstructionUrl = {
    aliases: string[];
    url: string;
};

export type ParserResult = InstructionUrl & { articles: Article[]; };

export type CallbackVoid = (...args: any[]) => void;

export type SourceFile = {
    filename?: string;

    name: string;
    tableName?: string;
    url: string | string[] | string[][];
    type: 'html' | 'rss' | 'dynamic' | 'wordpress-v2';

    interval?: number;
    retryInterval?: number;
    timeout?: number;

    userAgent?: string;
    ignoreCertificates?: boolean;
    amount?: number;
    encoding?: string;

    extra?: any;

    scrape?: any;
};