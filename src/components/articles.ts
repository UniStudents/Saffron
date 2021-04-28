import Source from "./source";

export default class Article {
    declare id: string
    declare source: {
        id: string
    }

    constructor(id: string) {
        this.id = id
    }

    async toJSON(): Promise<object> {
        return {}
    }
}