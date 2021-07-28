import Article from "./articles";

export default class Utils {

    /**
     * True if source file does not have any articles on the database, false otherwise.
     */
    public isFirstScrape = true;

    /**
     * True if the previous scrape returned exception.
     */
    public isScrapeAfterError = false;

    /**
     * Get all the articles in database.
     * @param count
     */
    getArticles = (count: number): Array<Article> => []

    /**
     * When a new article is found.
     * @param article
     */
    onNewArticle = (article: Article) => {
    }

    /**
     * The specified URL.
     */
    declare readonly url: string

    constructor(url: string) {
        this.url = url
    }

}