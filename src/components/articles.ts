import Source from "./source";
import Instructions from "./instructions";
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
    declare hash: string
    declare extras: _extras
    declare instructions: Instructions;
    declare source: {
        id: string
    }

    constructor() {
        this.id = randomId("art")

    }

    async toJSON(): Promise<object> {
        this.getHash()
        let {id, title, source, content, hash} = this;
        return {id, title, source, content: content, hash}
    }

    getSource(): Source | null {
        // toDO find the source by id.
        return null;
    }

    async getHash() {
        if(!this.hash) this.hash = await hash(`${this.title} ${this.content} ${this.extras.map((thing: any) => thing.toString())}`)

        return this.hash

    }

    getInstructions(): Instructions {
        return this.instructions;
    }
}