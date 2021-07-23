import Source from "./source";
import {ParserType} from "../modules/workers/parsers/ParserType";
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
    declare url: string | (string[])[];
    declare parserType: ParserType;
    declare endPoint: string;
    declare scrapeOptions: Object;
    declare elementSelector: string;
    declare scrapeFunction: string

    /**
     * @param id instruction id.
     */
    constructor() {
        this.id = randomId("ins")
    }

    /**
     * We return a Map which contains all the options
     * that a parser needs.
     *
     * @return Map<String, Object>
     */
    getOptions(): Map<String, Object> | null {
        if (!this.scrapeOptions) return null;

        return new Map<String, Object>(Object.entries(this.scrapeOptions));
    }

    /**
     * Return the source that variable source refers to.
     * @return Source
     */
    getSource(): Source {
        return Source.getSourceFrom(this.source.id);
    }

    toJSON(): any {
        return {
            id: this.id,
            source: this.source,
            url: this.url,
            parserType: ParserType.toString(this.parserType),
            endPoint: this.endPoint,
            scrapeOptions: this.scrapeOptions,
            elementSelector: this.elementSelector,
            scrapeFunction: this.scrapeFunction
        }
    }

    static fromJSON(json: any): Instructions {
        let inst = new Instructions()
        inst.id = json.id
        inst.source = json.source
        inst.url = json.url
        inst.parserType = ParserType.getFromString(json.parserType)
        inst.endPoint = json.endPoint
        inst.scrapeOptions = json.scrapeOptions
        inst.elementSelector = json.elementSelector
        inst.scrapeFunction = json.scrapeFunction

        return inst
    }

}