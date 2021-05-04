import MongoClient from "mongodb";
import Logger from "../../../middleware/logger";
import {LoggerTypes} from "../../../middleware/LoggerTypes"
import Article from "../../../components/articles";
import {nanoid} from "nanoid";
import Database from "../database";
import Config from "../../../components/config"
import Worker from "../../workers/index";

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
            Logger(LoggerTypes.INSTALL_ERROR, `Database error: ${e.message}.`)
        }

        return false
    }

    async onConnectionLost(callback: () => void): Promise<void> {
        this.client.on('close', callback)
    }

    async deleteArticle(id: string): Promise<void> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection('articles').deleteOne({ id })
        }
        catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }

    async getArticle(id: string): Promise<Article | undefined> {
        try {
            return await this.client.db(Config.load()!!.database.config.name).collection('articles').findOne({ id })
        }
        catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return undefined
    }

    async getArticles(options: object | null = null): Promise<Array<Article>> {

        return []
    }

    async pushArticle(article: Article): Promise<string> {
        try {
            let id = article.source.id + "_" + nanoid(10) + Date.now()
            await this.client.db(Config.load()!!.database.config.name).collection('articles').insertOne(article.toJSON())
            return id
        }
        catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return ""
    }

    async updateArticle(article: Article): Promise<void> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection('articles').updateOne({ id: article.id }, article.toJSON())
        }
        catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }

    async getWorkers(): Promise<Worker[]> {
        try {
            return await this.client.db(Config.load()!!.database.config.name).collection('workers').find({}).toArray()
        }
        catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
        return []
    }

    async announceWorker(worker: Worker): Promise<void> {
        try {
            await this.client.db(Config.load()!!.database.config.name).collection('workers').insertOne(worker.toJSON())
        }
        catch (e) {
            Logger(LoggerTypes.ERROR, `Database error: ${e.message}.`)
        }
    }
}