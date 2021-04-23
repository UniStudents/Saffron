import toolbox from "../../modules/toolbox"
import  { Config }  from "../../components/config"
import { Article } from "../../components/articles"

import MongoClient from 'mongodb'
import {nanoid} from "nanoid";

let config = Config.load()

abstract class Database {

    /**
     * Connect to database
     */
    abstract connect(): Promise<boolean>

    /**
     * If connection is lost with database.
     * @param callback The callback that will be fired.
     */
    abstract onConnectionLost(callback: () => void): Promise<void>

    /**
     * Get an array of articles.
     * @param options See documentation
     * @see https://github.com/poiw-org/saffron/wiki
     */
    abstract getArticles(options: object | null): Promise<Array<Article>| null>

    /**
     * Return an article based on id or null if it is not found
     * @param id The article's id
     */
    abstract getArticle(id: string): Promise<Article | null>

    /**
     * Add a new article on the database
     * @param article The article object to add
     */
    abstract pushArticle(article: Article): Promise<string>

    /**
     * Update an article based on article.id and override all the other values
     * @param article The article object that will be updated
     */
    abstract updateArticle(article: Article): Promise<void>

    /**
     * Delete a specific article.
     * @param id The id of the article that will be deleted
     */
    abstract deleteArticle(id: string): Promise<void>

    static getInstance(): Database | null {
        switch(config.database.driver){
            case "mongodb":
                return new MongoDB()
        }

        return null
    }
}

class MongoDB extends Database {

    declare client: MongoClient.MongoClient

    async connect(): Promise<boolean> {
        try {
            this.client = await MongoClient.connect(config.database.config.url, {
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

export { Database }