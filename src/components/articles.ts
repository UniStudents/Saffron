import Source from "./source";

export default class Article {
    declare id: string
    declare source: Source

    constructor(id: string) {
        this.id = id
    }

    async toJSON(): Promise<object> {
        return {}
    }
}