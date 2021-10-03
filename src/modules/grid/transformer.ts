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
            return Job.fromJSON(payload.payload)
        case "Article":
            return Article.fromJSON(payload.payload)
        case "Source":
            return Source.fromJSON(payload.payload)
        default:
            new Error(`The transformer module received a payload that could not unpacked: \n ${payload}`)
    }
    return {}
};

export const Pack = (payload: Job | Article | Source | object): Payload => {
    let chunk: Payload = {
        title: payload.constructor['name'] || "Object",
        // @ts-ignore
        payload: payload.toJSON() || payload
    }

    return chunk
}