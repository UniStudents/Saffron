import Article from "../../components/articles"
import Extensions from "../extensions";
import Events from "../events";
import Config from "../../components/config";
import {ConfigOptions} from "../../middleware/ConfigOptions";

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
        sort?: { [key: string]: -1 | 1 },
        filter?: any
    }): Promise<Array<Article>>

    /**
     * Add a new article on the database. Unless you know
     * what you are doing, DO NOT use this function to upload
     * new articles. Instead, use mergeArticles().
     * @param src Some string of source distinction.
     * @param article The article object to add to the database
     * @return The article id if it pushed successfully.
     */
    abstract pushArticle(src: string, article: Article): Promise<boolean>

    /**
     * The RECOMMENDED way to push articles to the database.
     * It will try to compare the previous pushed articles with the new ones and upload the ones that their hashes aren't present in the aforementioned articles.
     * @param src Some string of source distinction.
     * @param articles An array of Article objects that are meant to be merged into the database.
     */
    async mergeArticles(src: string, articles: Article[]) {
        Events.emit("workers.articles.found", articles, src); // Can be empty array
        if(articles.length == 0) return;

        Events.emit("middleware.before", articles);

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

        if(Config.getOption(ConfigOptions.DB_DRIVER) === 'none') return;

        Events.emit("middleware.after", articles);

        let urls: string[] = articles[0].getSource().instructions.url.map((url: string[]) => url[0]);
        // if(urls.length > 1) {
        //     for(const url of urls) {
        //         let dbArticles = await this.getArticles(src, {
        //             pageNo: 1,
        //             articlesPerPage: articles.length >= 5 ? articles.length * 2 : 10,
        //             filter: {}
        //         })
        //
        //
        //     }
        //
        //     return;
        // }

        let num = urls.length * articles.length // TODO - temporary until search for every url.
        let dbArticles = await this.getArticles(src, {
            pageNo: 1,
            articlesPerPage: num > 10 ? num : 20
        })

        // And then check if they already exist.
        let hashes = dbArticles.map((article: Article) => article.getHash());
        articles = articles.filter((article: Article) => !hashes.includes(article.getHash()));
        Events.emit("workers.articles.new", articles); // Can be empty array

        for (const article of articles) {
            let added = await this.pushArticle(src, article);
            if (!added) Events.emit("workers.articles.errorOffloading", article);
        }

        return articles;
    }

    abstract insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void>
}
