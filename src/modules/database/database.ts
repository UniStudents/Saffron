import Article from "../../components/articles"
import Extensions from "../extensions";
import Events from "../events";

export default abstract class Database {

    /**
     * Connect to database
     */
    abstract connect(): Promise<void>

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
     * Add a new article on the database. Unless you know
     * what you are doing, DO NOT use this function to upload
     * new articles. Instead, use mergeArticles().
     * @param src Some string of source distinction.
     * @param article The article object to add to the database
     * @return The article id if it pushed successfully.
     */
    abstract pushArticle(src: string, article: Article): Promise<string>

    /**
     * The RECOMMENDED way to push articles to the database.
     * It will try to compare the previous pushed articles with the new ones and upload the ones that their hashes aren't present in the aforementioned articles.
     * @param src Some string of source distinction.
     * @param articles An array of Article objects that are meant to be merged into the database.
     */
    async mergeArticles(src: string, articles: Article[]) {
        // if(articles.length > 0)
        Events.emit("workers.articles.found", articles, src)

        let getExtPair = Extensions.getInstance().startCount();
        let pair: any;
        while ((pair = getExtPair()) != null) {
            if(pair.event === 'article.format') {
                for (const i in articles)
                    articles[i] = await pair.callback(articles[i]);
            }
            else if(pair.event === 'articles.sort') {
                articles = await pair.callback(articles);
            }
        }

        let dbArticles = await this.getArticles(src, {
            pageNo: 1,
            articlesPerPage: articles.length >= 5 ? articles.length * 2 : 10
        })

        // And then check if they already exist.
        let hashes = dbArticles.map((article: Article) => article.getHash())
        articles = articles.filter((article: Article) => !hashes.includes(article.getHash()))
        if (articles.length > 0)
            Events.emit("workers.articles.new", articles);

        for (const article of articles) {
            let id = await this.pushArticle(src, article)
            if (id == "") Events.emit("workers.articles.errorOffloading", article.toJSON())
        }

        return articles
    }

    abstract insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void>
}
