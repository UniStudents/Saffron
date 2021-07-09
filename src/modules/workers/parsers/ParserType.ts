/**
 * The types of parsing
 */
export enum ParserType {
    RSS,
    HTML,
    CUSTOM,
    WORDPRESS,
    UNKNOWN
}

export namespace ParserType {
    /**
     * Translate a string to ParserType enum
     * @param str
     */
    export function getFromString(str: String): ParserType {
        switch(str){
            case "html": return ParserType.HTML
            case "rss": return ParserType.RSS
            case "custom": return ParserType.CUSTOM
            case "wordpress": return ParserType.WORDPRESS
        }

        return ParserType.UNKNOWN
    }
}