import Article from "../../components/articles"
import Worker from "../workers/index";

export default abstract class Database {

    /**
     * Connect to database
     */
    abstract connect(): Promise<boolean>

    /**
     * If connection is lost with database.
     * @param callback The callback that will be fired.
     */
    abstract onConnectionLost(callback: () => void): Promise<void>

    /**
     * Get an array of articles.
     * @param options See documentation
     * @see https://github.com/poiw-org/saffron/wiki
     */
    abstract getArticles(options: object | null): Promise<Array<Article>>

    /**
     * Return an article based on id or null if it is not found
     * @param id The article's id
     */
    abstract getArticle(id: string): Promise<Article | undefined>

    /**
     * Add a new article on the database. Unless you know
     * what you are doing, DO NOT use this function to upload
     * new articles. Instead, use mergeArticles().
     * @param article The article object to add to the database
     */
    abstract pushArticle(article: Article): Promise<string>

    /**
     * Update an article based on article.id and override all the other values
     * @param article The article object that will be updated
     */
    abstract updateArticle(article: Article): Promise<void>

    /**
     * Delete a specific article.
     * @param id The id of the article that will be deleted
     */
    abstract deleteArticle(id: string): Promise<void>

    /**
     * The RECOMMENDED way to push articles to the database.
     * It will try to compare the previous pushed articles with the new ones and upload the ones that their hashes aren't present in the aforementioned articles.
     * @param articles An array of Article objects that are meant to be merged into the database.
     */
    async mergeArticles(articles: Article[]){
        let dbArticles = await this.getArticles({
            sortBy: "date",
            count: articles.length * 2
        })

        let hashes = dbArticles.map((article: Article) => article.getHash())
        articles = articles.filter((article: Article) => !hashes.includes(article.getHash()))

        await articles.forEach((article: Article) => this.pushArticle(article))

        return articles
    }
}
