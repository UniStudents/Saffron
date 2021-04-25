import MongoClient from "mongodb";
import Logger from "../../../middleware/logger";
import Article from "../../../components/articles";
import {nanoid} from "nanoid";
import Database from "../database";
import Config from "../../../components/config"

export default class MongoDB extends Database {

    declare client: MongoClient.MongoClient

    async connect(): Promise<boolean> {
        try {
            this.client = await MongoClient.connect(Config.load()!!.database.config.url, {
                "useUnifiedTopology" : true,
                "useNewUrlParser" : true
            })
            return true
        }
        catch (e){
            Logger('install-error', `Database error: ${e.message}.`)
        }

        return false
    }

    async onConnectionLost(callback: () => void): Promise<void> {
        this.client.on('close', callback)
    }

    async deleteArticle(id: string): Promise<void> {
        try {
            await this.client.db('saffron').collection('articles').deleteOne({ id })
        }
        catch (e) {
            Logger('error', `Database error: ${e.message}.`)
        }
    }

    async getArticle(id: string): Promise<Article | null> {
        try {
            return await this.client.db('saffron').collection('articles').findOne({ id })
        }
        catch (e) {
            Logger('error', `Database error: ${e.message}.`)
        }
        return null
    }

    async getArticles(options: object | null = null): Promise<Array<Article> | null> {

        return null
    }

    async pushArticle(article: Article): Promise<string> {
        try {
            let id = article.source.id + "_" + nanoid(10) + Date.now()
            await this.client.db('saffron').collection('articles').insertOne(article.toJSON())
            return id
        }
        catch (e) {
            Logger('error', `Database error: ${e.message}.`)
        }
        return ""
    }

    async  updateArticle(article: Article): Promise<void> {
        try {
            await this.client.db('saffron').collection('articles').updateOne({ id: article.id }, article.toJSON())
        }
        catch (e) {
            Logger('error', `Database error: ${e.message}.`)
        }
    }
}