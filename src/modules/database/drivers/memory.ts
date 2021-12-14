import Article from "../../../components/articles";
import Database from "../database";

export default class Memory extends Database {

    articles: Article[] = [];

    async connect(): Promise<void> {}

    async getArticles(src: string, options: any | null = null): Promise<Array<Article>> {
        let _articles = this.articles
        if (options.source) _articles = _articles.filter(async (article: Article) => await article?.getSource()?.getId() === options.source.id)

        return [..._articles]
    }

    async pushArticle(src: string, article: Article): Promise<boolean> {
        this.articles.push(article)
        return true
    }
    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void> {
        return
    }
}