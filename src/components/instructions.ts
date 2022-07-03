import Source from "./source";
import {ParserType} from "../middleware/ParserType";
import randomId from "../middleware/randomId"
/**
 * The instructions class is used mainly by parsers.
 * Its general use is to provide instructions on how
 * parsers will work during the process of analyzing
 * a web page content.
 */
export default class Instructions {
    declare id: string;

    declare source : { id: string; };
    declare url: (string[])[];
    declare parserType: ParserType;
    declare endPoint: string;
    declare amount: number;
    declare scrapeOptions: any;
    declare elementSelector: string;
    declare scrapeFunction: string;
    declare textDecoder: TextDecoder;
    declare ignoreCertificates: boolean;
    declare extraFields: string[];

    constructor() {
        this.id = randomId("ins");
    }

    /**
     * Return the source that variable source refers to.
     * @return Source
     */
    getSource(): Source {
        return Source.getSourceFrom(this.source.id);
    }
}