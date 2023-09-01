import type {ParserType} from "./ParserClass";
import type {InstructionUrl, ScrapeDynamic, ScrapeHTML, ScrapeRSS, ScrapeWordPressV2} from "./types";
import type {AxiosRequestConfig} from "axios";
import type {RequestsResult} from "./types";
import type {Source} from "./source";

/**
 * The instructions class is used mainly by parsers.
 * Its general use is to provide instructions on how
 * parsers will work during the process of analyzing
 * a web page content.
 */
export class Instructions {
    declare url: InstructionUrl[];
    declare parserType: ParserType;

    declare axios: AxiosRequestConfig;
    declare preprocessor: (responses: RequestsResult, source: Source) => Promise<RequestsResult>;
    declare ignoreCertificates: boolean;
    declare delayBetweenRequests: number;

    declare textDecoder: TextDecoder;
    declare includeContentAttachments: boolean;
    declare includeCategoryUrlsIn: 'categories' | 'extras';
    declare amount: number;

    declare html: ScrapeHTML;
    declare rss: ScrapeRSS;
    declare wp: ScrapeWordPressV2;

    declare dynamic: ScrapeDynamic;
    declare dynamicFuncStr: string;
}
