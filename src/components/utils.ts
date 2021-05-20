import Article from "./articles";

export default class Utils {
    /**
     * True if source file does not have any articles on the database, false otherwise
     */
    public isFirstScrape = true;

    /**
     * True if the previous scrape returned exception
     */
    public isScrapeAfterError = false;

    /**
     *
     * @param count
     */
    getArticles = async (count: number): Promise<Array<Article>> => []
}