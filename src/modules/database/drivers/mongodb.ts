import MongoClient from "mongodb";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes"
import Article from "../../../components/articles";
import Database from "../database";
import Config from "../../../components/config"

export default class MongoDB extends Database {

    declare client: MongoClient.MongoClient

    async connect(): Promise<boolean> {
        try {
            this.client = await MongoClient.connect(Config.load()!!.database.config.url, {
                "useUnifiedTopology": true,
                "useNewUrlParser": true
            })
            Logger(LoggerTypes.DEBUG, "Testing database connection")

            return true
        } catch (e) {
            Logger(LoggerTypes.INSTALL_ERROR, `Database error: ${e.message}.`)
        }

        return false
    }

    async onConnectionLost(callback: () => void): Promise<void> {
        this.client.on('close', callback)
    }

    async deleteArticle(src: string, id: string): Promise<void> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection(src).deleteOne({id})
        } catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }

    async getArticle(src: string, id: string): Promise<Article | undefined> {
        try {
            return await this.client.db(Config.load()!!.database.config.name).collection(src).findOne({id})
        } catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return undefined
    }

    async getArticles(src: string, options: object | null = null): Promise<Array<Article>> {
        try {
            let _articles = await this.client.db(Config.load()!!.database.config.name).collection(src).find().toArray()
            return _articles.map((_article: Article) => {
                let article = new Article()

                for (let key in _article) { // @ts-ignore
                    article[key] = _article[key]
                }
                return article

            })
        } catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return []
    }

    async pushArticle(src: string, article: Article): Promise<string> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection(src).insertOne(await article.toJSON())
            return article.id
        } catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return ""
    }

    async updateArticle(src: string, article: Article): Promise<void> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection(src).updateOne({id: article.id}, await article.toJSON())
        } catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }

    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void> {
        await this.client.db(Config.load()!!.database.config.name).collection('grid').updateOne({id}, {
            id, publicIP, privateIP, encryptionKey
        }, {upsert: true})
    }
}