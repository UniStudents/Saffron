import Article from "../../../components/articles";
import Database from "../database";
import Worker from "../../workers/index";
import randomId from "../../../middleware/randomId";

export default class Memory extends Database {

    articles: Article[] = [];
    workers: Worker[] = [];

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

    async getArticles(options: object | null = null): Promise<Array<Article>> {
        return []
    }

    async pushArticle(article: Article): Promise<string> {
        let id = randomId("art")
        article.id = id
        this.articles.push(article)
        return id
    }

    async updateArticle(article: Article): Promise<void> {
        let index = this.articles.findIndex((obj: Article) => obj.id === article.id)
        if(index !== -1)
            this.articles[index] = article
    }

    async getWorkers(): Promise<Worker[]> {
        return this.workers
    }

    async announceWorker(worker: Worker): Promise<void> {
        this.workers.push(worker)
    }
}