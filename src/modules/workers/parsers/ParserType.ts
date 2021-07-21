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
    export function getFromString(str: string): ParserType {
        switch(str){
            case "html": return ParserType.HTML
            case "rss": return ParserType.RSS
            case "custom": return ParserType.CUSTOM
            case "wordpress": return ParserType.WORDPRESS
            default: return ParserType.UNKNOWN
        }
    }

    export function toString(type: ParserType): string {
        switch (type){
            case ParserType.HTML: return "html"
            case ParserType.RSS: return "rss"
            case ParserType.CUSTOM: return "custom"
            case ParserType.WORDPRESS: return "wordpress"
            default: return "unknown"
        }
    }
}