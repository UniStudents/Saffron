import Source from "./source";
import randomId from "../middleware/randomId"
import hash from 'crypto-js/sha256';

interface _extras {
    [key: string]: any
}

export default class Article {
    declare id: string
    declare title: string
    declare content: string
    declare link: string
    declare pubDate: string
    declare timestamp: number
    declare hash: string
    declare extras: _extras
    declare source: {
        id: string
        name: string
    }
    declare attachments: object[]
    declare categories: object[]

    /**
     * Article constructor
     * @param id The article's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if (id !== "")
            this.id = id
        else this.id = randomId("art")
    }

    /**
     * Parse the article class to a json object
     */
    toJSON(): object {
        this.getHash()
        let {id, timestamp, title, source, pubDate, link, content, hash, extras, attachments, categories} = this;
        return {id, timestamp, title, source, link, pubDate, content, extras, hash, attachments, categories}
    }

    /**
     * Parse the article class to a json object
     */
    static fromJSON(json: any): Article {
        const art = new Article(json.id)
        art.timestamp = json.timestamp
        art.title = json.title
        art.source = json.source
        art.link = json.link
        art.pubDate = json.pubDate
        art.content = json.content
        art.extras = json.extras
        art.hash = json.hash
        art.attachments = json.attachments
        art.categories = json.categories
        return art
    }

    /**
     * Return the source class where this article belongs
     */
    getSource(): Source | null {
        return Source.getSourceFrom(this)
    }

    /**
     * Generate and return the hash of the article
     */
    getHash() {
        if (!this.hash)
            this.hash = (hash(`${this.title} ${this.content} ${this.extras?.toString()} ${this.getSource()?.getId()}`)).toString()

        return this.hash
    }
}