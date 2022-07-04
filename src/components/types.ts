import Article from "./articles";

export type ParserResult = {
    aliases: string[];
    url: string;
    articles: Article[];
};