export enum ParserType {
    RSS,
    HTML,
    XML,
    CUSTOM,
    UNKNOWN
}

export namespace ParserType {
    export function getFromString(str: String): ParserType {
        switch(str){
            case "html": return ParserType.HTML
            case "rss": return ParserType.RSS
            case "xml": return ParserType.XML
            case "custom": return ParserType.CUSTOM
        }

        return ParserType.UNKNOWN
    }
}