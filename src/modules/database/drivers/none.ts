import Article from "../../../components/articles";
import Database from "../database";

export default class None extends Database {

    async connect(): Promise<void> {}

    async getArticles(src: string, options: any | null = null): Promise<Array<Article>> {
        return []
    }

    async pushArticle(src: string, article: Article): Promise<string> {
        return ""
    }

    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void> {}
}