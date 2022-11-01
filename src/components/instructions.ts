import {ParserType} from "./ParserClass";
import {InstructionUrl} from "./types";

/**
 * The instructions class is used mainly by parsers.
 * Its general use is to provide instructions on how
 * parsers will work during the process of analyzing
 * a web page content.
 */
export default class Instructions {
    declare url: InstructionUrl[];
    declare parserType: ParserType;

    declare timeout: number;
    declare amount: number;
    declare userAgent: string;
    declare textDecoder: TextDecoder;
    declare ignoreCertificates: boolean;

    // HTML Parser
    declare scrapeOptions: any;
    declare elementSelector: string;

    // Dynamic Parser
    declare scrapeFunction: any;
    declare scrapeFunctionStr: string;

    // RSS parser
    declare extraFields: string[];

}