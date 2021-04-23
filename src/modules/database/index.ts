import toolbox from "../../modules/toolbox"
import { Article } from "../../components/articles"

import MongoClient from 'mongodb'
import { nanoid } from 'nanoid'

abstract class Database {
    declare config: object

    protected constructor(config: object) {
        this.config = config
    }

    abstract connect(): Promise<boolean>
    abstract onConnectionLost(callback: () => void): Promise<void>
    abstract getArticles(options: object): Promise<Array<Article>| null>
    abstract getArticle(article_id: string): Promise<Article | null>
    abstract pushArticle(article: Article): Promise<string>
    abstract updateArticle(article: Article): Promise<void>
    abstract deleteArticle(article_id: string): Promise<void>
}

class MongoDB extends Database {

    declare client: MongoClient.MongoClient

    constructor(config: object) { super(config) }

    async connect(): Promise<boolean> {
        try {
            // @ts-ignore
            this.client = await MongoClient.connect(this.config.database.url, {
                "useUnifiedTopology" : true,
                "useNewUrlParser" : true
            })
            return true
        }
        catch (e){
            toolbox.termlog('install-error', `Database error: ${e.message}.`)
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
            toolbox.termlog('error', `Database error: ${e.message}.`)
        }
    }

    async getArticle(id: string): Promise<Article | null> {
        try {
            return await this.client.db('saffron').collection('articles').findOne({ id })
        }
        catch (e) {
            toolbox.termlog('error', `Database error: ${e.message}.`)
        }
        return null
    }

    async getArticles(options: object): Promise<Array<Article> | null> {
        return null
    }

    async pushArticle(article: Article): Promise<string> {
        try {
            let id = article.source.id + "_" + nanoid(10) + Date.now()
            await this.client.db('saffron').collection('articles').insertOne(article.toJSON())
            return id
        }
        catch (e) {
            toolbox.termlog('error', `Database error: ${e.message}.`)
        }
        return ""
    }

    async  updateArticle(article: Article): Promise<void> {
        try {
            await this.client.db('saffron').collection('articles').updateOne({ id: article.id }, article.toJSON())
        }
        catch (e) {
            toolbox.termlog('error', `Database error: ${e.message}.`)
        }
    }

}

export default {
    MongoDB
}