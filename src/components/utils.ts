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
    getArticles = async (count: number): Promise<Array<Article>> => []

    /**
     * When a new article is found.
     * @param article
     */
    onNewArticle = async (article: Article) => {}

    /**
     * The specified URL.
     */
    declare readonly url: string

    constructor(url: string) {
        this.url = url
    }

}