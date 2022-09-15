import Article from "../components/article";
import Source from "../components/source";
import Job from "../components/job";
import Instructions from "../components/instructions";

const types = [Article, Source, Job, Instructions, TextDecoder, Object, Array, Function];

export class Serializer {
    declare types: any[];

    constructor(types: any[]) {
        this.types = types;
    }

    serialize(object: any): string {
        return JSON.stringify(this._serialize(object));
    }

    deserialize(str: string): any {
        return this._deserialize(JSON.parse(str));
    }

    _serialize(object: any): object {
        if(!(object instanceof Object)) return object;

        let i = this.types.findIndex(e => e.name == object.constructor.name);
        if (i == -1) throw "Type '" + object.constructor.name + "' is not supported for serialization";

        return {
            index: i,
            entries: Object.entries(object).map(entry => {
                return [entry[0], this._serialize(entry[1])];
            })
        };
    }

    _deserialize(data: any): any {
        if(data !== Object(data)) return data;

        const obj = new this.types[data.index]();
        data.entries.map((entry: any) => obj[entry[0]] = this._deserialize(entry[1]));
        return obj;
    }
}

export function pack(data: any): string {
    const serializer = new Serializer(types);
    return serializer.serialize(data);
}

export function unpack(str: string): any {
    const serializer = new Serializer(types);
    return serializer.deserialize(str);
}