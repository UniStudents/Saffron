import type {ParserType} from "./ParserClass";
import type {InstructionUrl, ScrapeDynamic, ScrapeHTML, ScrapeRSS, ScrapeWordPressV2} from "./types";
import type {AxiosRequestConfig} from "axios/index";

/**
 * The instructions class is used mainly by parsers.
 * Its general use is to provide instructions on how
 * parsers will work during the process of analyzing
 * a web page content.
 */
export class Instructions {
    declare url: InstructionUrl[];
    declare parserType: ParserType;

    declare timeout: number;
    declare maxRedirects: number;
    declare headers: { [key: string]: string | string[] };
    declare axios: AxiosRequestConfig;
    declare ignoreCertificates: boolean;
    declare delayBetweenRequests: number;

    declare textDecoder: TextDecoder;
    declare includeContentAttachments: boolean;
    declare amount: number;

    declare html: ScrapeHTML;
    declare rss: ScrapeRSS;
    declare wp: ScrapeWordPressV2;

    declare dynamic: ScrapeDynamic;
    declare dynamicFuncStr: string;
}
