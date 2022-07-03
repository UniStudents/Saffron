import Payload from "./payload.entity";
import Job from "../../components/job";
import Article from "../../components/articles";
import Source from "../../components/source";

export const Unpack = (payload: Payload): Job | Article | Source | object => {
    let chunk: any;

    switch (payload.title){
        case "Object":
            return payload.payload;
        case "Job":
            (payload.payload as any).prototype = Job.prototype;
            return payload.payload;
        case "Article":
            (payload.payload as any).prototype = Article.prototype;
            return payload.payload;
        case "Source":
            (payload.payload as any).prototype = Source.prototype;
            return payload.payload;
        default:
            new Error(`The transformer module received a payload that couldn\'t be unpacked: \n ${payload}`)
    }
    return {}
};

export const Pack = (payload: Job | Article | Source | object): Payload => {
    let chunk: Payload = {
        title: payload.constructor['name'] || "Object",
        // @ts-ignore
        payload: payload.toJSON() || payload
    }

    console.log(chunk)
    return chunk
}