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
        } catch (e: any) {
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

        } catch (e: any) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }

    async getArticle(src: string, id: string): Promise<Article | undefined> {
        try {
            return await this.client.db(Config.load()!!.database.config.name).collection(src).findOne({id})

        } catch (e: any) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return undefined
    }

    async getArticles(src: string, options?: {
        pageNo?: number,
        articlesPerPage?: number,
        sort?: { [key: string]: -1 | 1 }
    }): Promise<Array<Article>> {
        try {
            if (!options) {
                return (await this.client.db(Config.load()!!.database.config.name).collection(src).find().toArray())
                    .map((_article: Article) => Article.fromJSON(_article))
            }

            let opts = {
                pageNo: options.pageNo ? options.pageNo : 1,
                articlesPerPage: options.articlesPerPage ? options.articlesPerPage : 10,
                sort: options.sort ? options.sort : {"timestamp": -1},
            }

            let _articles = await this.client.db(Config.load()!!.database.config.name).collection(src)
                .find()
                .sort(opts.sort)
                .skip((opts.pageNo - 1) * opts.articlesPerPage)
                .limit(opts.articlesPerPage)
                .toArray()

            return _articles.map((_article: Article) => Article.fromJSON(_article))

        } catch (e: any) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return []
    }

    async pushArticle(src: string, article: Article): Promise<string> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection(src).insertOne(await article.toJSON())
            return article.id
        } catch (e: any) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return ""
    }

    async updateArticle(src: string, article: Article): Promise<void> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection(src).updateOne({id: article.id}, await article.toJSON())
        } catch (e: any) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }

    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void> {
        await this.client.db(Config.load()!!.database.config.name).collection('grid').updateOne({id}, {
            id, publicIP, privateIP, encryptionKey
        }, {upsert: true})
    }
}