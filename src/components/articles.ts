import Source from "./source";

interface _extras {
    [key: string]: any
}

export default class Article {
    declare id: string
    declare title: string
    declare description: string
    declare extras: _extras


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