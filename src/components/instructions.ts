import {ParserType} from "./ParserType";
import {InstructionUrl} from "./types.js";

/**
 * The instructions class is used mainly by parsers.
 * Its general use is to provide instructions on how
 * parsers will work during the process of analyzing
 * a web page content.
 */
export default class Instructions {
    declare url: InstructionUrl[];
    declare parserType: ParserType;
    declare endPoint: string;
    declare amount: number;
    declare scrapeOptions: any;
    declare elementSelector: string;
    declare scrapeFunction: any;
    declare scrapeFunctionStr: string;
    declare textDecoder: TextDecoder;
    declare ignoreCertificates: boolean;
    declare extraFields: string[];
}