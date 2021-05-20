export enum ParserType {
    RSS,
    HTML,
    CUSTOM,
    UNKNOWN
}

export namespace ParserType {
    export function getFromString(str: String): ParserType {
        switch(str){
            case "html": return ParserType.HTML
            case "rss": return ParserType.RSS
            case "custom": return ParserType.CUSTOM
        }

        return ParserType.UNKNOWN
    }
}