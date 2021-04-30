import Source from "./source";
import {ParserType} from "../modules/workers/parsers/ParserType";

/**
 * The instructions class is used mainly by parsers.
 * Its general use is to provide instructions on how
 * parsers will work during the process of analyzing
 * a web page content.
 */
export default class Instructions {
    private declare static instructions: Array<Instructions>;
    declare source : {
        id: string
    }
    declare id: string;
    declare url: string;
    declare endPoint: string;
    declare scrapeOptions: object;
    declare elementSelector: string;
    declare sourceType: string;
    declare parserType: ParserType

    /**
     * @param id instruction id.
     */
    constructor(id: string) {
        this.id = id;
    }

    /**
     * We return a Map which contains all the options
     * that a parser needs.
     *
     * @return Map<string, object>
     */
    getOptions(): Map<string, object> | null {
        if (!this.scrapeOptions) return null;

        return new Map<string, object>(Object.entries(this.scrapeOptions));
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
     * @return object
     */
    getSource(): object {
        return this.source;
    }

}