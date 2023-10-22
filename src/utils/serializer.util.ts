import {Article} from "../components/article";
import {Source} from "../components/source";
import {Job} from "../components/job";
import {Instructions} from "../components/instructions";

const types = [Article, Source, Job, Instructions, TextDecoder, Object, Array, Function, Error];

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
        if (!(object instanceof Object)) return object;

        const index = this.types.findIndex(e => e.name == object.constructor.name);
        if (index == -1)
            throw new Error(`SerializerException Type '${object.constructor.name}' is not supported for serialization`);

        return {
            index,
            entries: Object.entries(object).map(([key, value]) => ([key, this._serialize(value)]))
        };
    }

    _deserialize(data: any): any {
        if (data !== Object(data)) return data;

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