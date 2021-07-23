import Article from "../../../components/articles";
import Database from "../database";
import Worker from "../../workers/index";

export default class Memory extends Database {

    articles: Article[] = [];

    async connect(): Promise<boolean> {
        return true
    }

    async onConnectionLost(callback: () => void): Promise<void> {
        return
    }

    async deleteArticle(id: string): Promise<void> {
        let index = this.articles.findIndex((obj: Article) => obj.id === id)
        if(index !== -1)
            delete this.articles[index]
    }

    async getArticle(id: string): Promise<Article | undefined> {
        return this.articles.find((obj: Article) => obj.id === id)
    }

    async getArticles(options: any | null = null): Promise<Array<Article>> {
        let _articles = this.articles
        if(options.source) _articles = _articles.filter(async (article: Article) => await article?.getSource()?.getId() === options.source.id)

        return [..._articles]
    }

    async pushArticle(article: Article): Promise<string> {
        this.articles.push(article)
        return article.id
    }

    async updateArticle(article: Article): Promise<void> {
        let index = this.articles.findIndex((obj: Article) => obj.id === article.id)
        if(index !== -1)
            this.articles[index] = article
    }

    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void>{
        return 
    }
}