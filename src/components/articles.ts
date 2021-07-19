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
    declare pubDate: Date
    declare timestamp: number
    private declare hash: string
    declare extras: _extras
    declare source: {
        id: string
    }

    /**
     * Article constructor
     * @param id The article's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if(id !== "")
            this.id = id
        else this.id = randomId("art")
    }

    /**
     * Parse the article class to a json object
     */
    toJSON(): object {
        this.getHash()
        let {id, timestamp, title, source, pubDate, content, hash, extras} = this;
        return {id, timestamp, title, source: source, pubDate, content, extras, hash}
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
        if(!this.hash)
            this.hash = (hash(`${this.title} ${this.content} ${this.extras?.toString()} ${this.getSource()?.getId()}`)).toString()

        return this.hash
    }
}