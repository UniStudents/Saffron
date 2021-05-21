import Source from "./source";
import randomId from "../middleware/randomId"
import {hash} from "argon2"

interface _extras {
    [key: string]: any
}

export default class Article {
    declare id: string
    declare title: string
    declare content: string
    declare link: string
    declare pubDate: Date
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
    async toJSON(): Promise<object> {
        this.getHash()
        let {id, title, source, content, hash} = this;
        return {id, title, source, content, hash}
    }

    /**
     * Return the source class where this article belongs
     */
    getSource(): Source | null {
        return Source.getSourceFromArticle(this)
    }

    /**
     * Generate and return the hash of the article
     */
    async getHash() {
        if(!this.hash)
            this.hash = await hash(`${this.title} ${this.content} ${this.extras.map((thing: any) => thing.toString())}`)

        return this.hash
    }
}