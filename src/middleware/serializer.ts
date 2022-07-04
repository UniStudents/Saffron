import Article from "../components/article";
import Source from "../components/source";
import Job from "../components/job";
import Instructions from "../components/instructions";

export class Serializer {
    declare types: any[];

    constructor(types: any[]) {
        this.types = types;
    }

    serialize(object: any) {
        let idx = this.types.findIndex((e) => {
            return e.name == object.constructor.name
        });
        if (idx == -1) throw "type  '" + object.constructor.name + "' not initialized";

        const entries = Object.entries(object);
        return JSON.stringify([idx, entries]);
    }

    deserialize(str: string) {
        let array = JSON.parse(str);
        let object = new this.types[array[0]]();
        array[1].map((e: any) => {
            object[e[0]] = e[1];
        });
        return object;
    }
}

export function pack(data: any): string {
    const serializer = new Serializer([Article, Source, Job, Instructions]);
    return serializer.serialize(data);
}

export function unpack(str: string): any {
    const serializer = new Serializer([Article, Source, Job, Instructions]);
    return serializer.deserialize(str);
}