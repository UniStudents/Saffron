import Article from "../../components/articles"
import Grid from "../grid";
import Extensions from "../extensions";

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
     * @param src Some string of source distinction.
     * @param options See documentation
     * @see https://github.com/poiw-org/saffron/wiki
     */
    abstract getArticles(src: string, options?: {
        pageNo?: number,
        articlesPerPage?: number,
        sort?: { [key: string]: -1 | 1 }
    }): Promise<Array<Article>>

    /**
     * Return an article based on id or null if it is not found
     * @param src Some string of source distinction.
     * @param id The article's id
     */
    abstract getArticle(src: string, id: string): Promise<Article | undefined>

    /**
     * Add a new article on the database. Unless you know
     * what you are doing, DO NOT use this function to upload
     * new articles. Instead, use mergeArticles().
     * @param src Some string of source distinction.
     * @param article The article object to add to the database
     * @return The article id if it pushed successfully.
     */
    abstract pushArticle(src: string, article: Article): Promise<string>

    /**
     * Update an article based on article.id and override all the other values
     * @param src Some string of source distinction.
     * @param article The article object that will be updated
     */
    abstract updateArticle(src: string, article: Article): Promise<void>

    /**
     * Delete a specific article.
     * @param src Some string of source distinction.
     * @param id The id of the article that will be deleted
     */
    abstract deleteArticle(src: string, id: string): Promise<void>

    /**
     * The RECOMMENDED way to push articles to the database.
     * It will try to compare the previous pushed articles with the new ones and upload the ones that their hashes aren't present in the aforementioned articles.
     * @param src Some string of source distinction.
     * @param articles An array of Article objects that are meant to be merged into the database.
     */
    async mergeArticles(src: string, articles: Article[]) {
        await Grid.getInstance().onFoundArticles(articles)

        // First edit the articles
        if (Extensions.getInstance().hasEvent("article.format")) {
            for (const article of articles) {
                let formattedArticle = await Extensions.getInstance().callEvent("article.format", article)

                if (!(formattedArticle instanceof Article))
                    throw new Error("Extension article.format does not return article class.")

                // Override - Except hash
                article.id = formattedArticle.id
                article.source = formattedArticle.source
                article.timestamp = formattedArticle.timestamp
                article.title = formattedArticle.title
                article.content = formattedArticle.content
                article.link = formattedArticle.link
                article.pubDate = formattedArticle.pubDate
                article.extras = formattedArticle.extras
                article.attachments = formattedArticle.attachments
                article.categories = formattedArticle.categories
            }
        }

        // check for sort
        let sort: any = {"timestamp": 1}
        if (Extensions.getInstance().hasEvent("articles.sort")) {
            let result = await Extensions.getInstance().callEvent("articles.sort", articles)

            let keys = Object.keys(result)
            if (keys.length !== 2 || !keys.includes("articles"))
                throw new Error("Extension articles.sort does not return a valid object.")

            if (!Array.isArray(result.articles))
                throw new Error("Extension articles.sort does not return articles array of articles.")

            for (let article of result.articles)
                if (!(article instanceof Article))
                    throw new Error("Extension articles.sort does not return articles array of articles.")

            articles = result.articles

            let field = keys.filter(k => k !== 'articles')[0]
            let order = result[field]
            if (order !== -1 && order !== 1)
                throw new Error("Extension articles.sort does not return a valid sort field order.")

            sort = {field: order}
        }

        // First edit the articles
        if (Extensions.getInstance().hasEvent("article.hash")) {
            for (const article of articles) {
                let newHash = await Extensions.getInstance().callEvent("article.hash", article)

                if (typeof newHash != "string")
                    throw new Error("Extension article.hash does not return string type.")

                // Override - Except hash
                article.hash = newHash
            }
        }

        let dbArticles = await this.getArticles(src, {
            pageNo: 1,
            articlesPerPage: articles.length >= 5 ? articles.length * 2 : 10,
            sort
        })

        // And then check if they already exist.
        let hashes = dbArticles.map((article: Article) => article.getHash())
        articles = articles.filter((article: Article) => !hashes.includes(article.getHash()))
        if (articles.length > 0) await Grid.getInstance().onNewArticles(articles)

        for (const article of articles) {
            let id = await this.pushArticle(src, article)
            if (id == "") await Grid.getInstance().onFailedUploadingArticle(article)
        }


        return articles
    }

    abstract insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void>
}
