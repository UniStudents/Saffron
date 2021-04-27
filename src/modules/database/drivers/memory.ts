import Article from "../../../components/articles";
import Database from "../database";
import Worker from "../../workers/index";

export default class Memory extends Database {

    async connect(): Promise<boolean> {
        return  true
    }

    async onConnectionLost(callback: () => void): Promise<void> {
        return
    }

    async deleteArticle(id: string): Promise<void> {
        return
    }

    async getArticle(id: string): Promise<Article | null> {
        return null
    }

    async getArticles(options: object | null = null): Promise<Array<Article> | null> {
        return null
    }

    async pushArticle(article: Article): Promise<string> {
        return ""
    }

    async  updateArticle(article: Article): Promise<void> {
        return
    }

    async getWorkers(): Promise<Worker[] | null> {
        return []
    }

    async announceWorker(worker: Worker): Promise<void> {
        return
    }
}