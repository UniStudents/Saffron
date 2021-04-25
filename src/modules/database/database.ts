import Article from "../../components/articles"

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
    abstract getArticles(options: object | null): Promise<Array<Article>| null>

    /**
     * Return an article based on id or null if it is not found
     * @param id The article's id
     */
    abstract getArticle(id: string): Promise<Article | null>

    /**
     * Add a new article on the database
     * @param article The article object to add
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
}
