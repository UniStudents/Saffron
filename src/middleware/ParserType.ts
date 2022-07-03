/**
 * The types of parsing
 */
export enum ParserType {
    RSS,
    HTML,
    DYNAMIC,
    WORDPRESS_V1,
    WORDPRESS_V2,
    UNKNOWN
}

export namespace ParserType {
    /**
     * Translate a string to ParserType enum
     * @param str
     */
    export function getFromString(str: string): ParserType {
        switch (str) {
            case "html":
                return ParserType.HTML
            case "rss":
                return ParserType.RSS
            case "dynamic":
                return ParserType.DYNAMIC
            case "wordpress-v1":
                return ParserType.WORDPRESS_V1
            case "wordpress":
            case "wordpress-v2":
                return ParserType.WORDPRESS_V2
            default:
                return ParserType.UNKNOWN
        }
    }

    export function toString(type: ParserType): string {
        switch (type) {
            case ParserType.HTML:
                return "html"
            case ParserType.RSS:
                return "rss"
            case ParserType.DYNAMIC:
                return "dynamic"
            case ParserType.WORDPRESS_V1:
                return "wordpress-v1"
            case ParserType.WORDPRESS_V2:
                return "wordpress-v2"
            default:
                return "unknown"
        }
    }
}