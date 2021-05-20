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
    declare id: String;

    private declare static instructions: Array<Instructions>;

    declare source : { id: String; };
    declare url: String;
    declare parserType: ParserType

    declare scrapeOptions: Object;
    declare elementSelector: String;
    declare scrapeFunction: String // just call eval

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
     * Return all the instructions that exist
     * in the instructions Array.
     *
     * @return Array<Instructions>
     */
    static getInstructions(): Array<Instructions> | null {
        if (!this.instructions) return null;

        return this.instructions;
    }

    /**
     * Return the source that variable source refers to.
     *
     * @return Source
     */
    getSource(): Source {
        return Source.getSourceByID(this.source.id);
    }

}