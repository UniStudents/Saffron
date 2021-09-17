import Article from "../../../components/articles";
import Database from "../database";

export default class None extends Database {

    async connect(): Promise<boolean> {
        return true
    }

    async onConnectionLost(callback: () => void): Promise<void> {}

    async deleteArticle(src: string, id: string): Promise<void> {}

    async getArticle(src: string, id: string): Promise<Article | undefined> {
        return
    }

    async getArticles(src: string, options: any | null = null): Promise<Array<Article>> {
        return []
    }

    async pushArticle(src: string, article: Article): Promise<string> {
        return ""
    }

    async updateArticle(src: string, article: Article): Promise<void> {}

    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void> {}
}