import {Db, MongoClient} from "mongodb";
import Article from "../../../components/articles";
import Database from "../database";
import Config from "../../../components/config"
import {ConfigOptions} from "../../../middleware/ConfigOptions";
import Events from "../../events";

export default class MongoDB extends Database {

    declare client: MongoClient;
    declare db: Db

    constructor() {
        super();
        this.client = new MongoClient(Config.getOption(ConfigOptions.DB_CONFIG).url)
    }

    async connect(): Promise<void> {
        await this.client.connect();
        this.db = this.client.db(Config.getOption(ConfigOptions.DB_CONFIG).name);

        // Establish and verify connection
        await this.db.command({ping: 1});
    }

    async getArticles(src: string, options?: {
        pageNo?: number,
        articlesPerPage?: number,
        sort?: { [key: string]: -1 | 1 },
        filter?: any
    }): Promise<Array<Article>> {
        try {
            if (!options) {
                return (await this.db.collection(src).find().toArray())
                    .map((_article: object) => Article.fromJSON(_article))
            }

            let opts: any = {
                pageNo: options.pageNo ? options.pageNo : 1,
                articlesPerPage: options.articlesPerPage ? options.articlesPerPage : 20,
                sort: options.sort ? options.sort : {"_id": -1},
                filter: options.filter ? options.filter : {}
            }

            let _articles = await this.db.collection(src)
                .find({})
                .sort(opts.sort)
                .skip((opts.pageNo - 1) * opts.articlesPerPage)
                .limit(opts.articlesPerPage)
                .toArray()

            return _articles.map((_article: object) => Article.fromJSON(_article))

        } catch (e: any) {
            Events.emit('database.operation.error', 'getArticles', e);
        }
        return []
    }

    async pushArticle(src: string, article: Article): Promise<boolean> {
        try {
            article.timestamp = Date.now()
            await this.db.collection(src).insertOne(await article.toJSON())
            return true
        } catch (e: any) {
            Events.emit('database.operation.error', 'pushArticle', e);
        }
        return false;
    }

    async insertGridNode(id: string, publicIP: object, privateIP: string, encryptionKey: string): Promise<void> {
        await this.db.collection('grid').updateOne({id}, {
            id, publicIP, privateIP, encryptionKey
        }, {upsert: true})
    }
}