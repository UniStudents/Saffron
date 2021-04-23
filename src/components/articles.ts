import { Source } from "./source";

export class Article {
    declare id: string
    declare source: Source

    constructor(id: string) {
        this.id = id
    }

    async toJSON(): Promise<object> {
        return {}
    }
}