import Source from "./source";
import Instructions from "./instructions";
import randomId from "../middleware/randomId"
interface _extras {
    [key: string]: any
}

export default class Article {
    declare id: string
    declare title: string
    declare description: string
    declare link: string
    declare pubDate: string
    declare extras: _extras
    declare instructions: Instructions;
    declare source: {
        id: string
    }

    constructor() {
        this.id = randomId("art")

    }

    async toJSON(): Promise<object> {
        let {id, title, source, description} = this;
        console.table({id, title, source, description})
        return {id, title, source, description}
    }

    getSource(): Source | null {
        // toDO find the source by id.
        return null;
    }

    getInstructions(): Instructions {
        return this.instructions;
    }
}