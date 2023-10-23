import {Article, DynamicSourceFile, RequestsResult, Utils} from "../src/index";
import {RssParser} from "../src/parsers/rss.parser";

export class Dynamic1 extends DynamicSourceFile {
    name(): string {
        return "dynamic-1";
    }

    request(utils: Utils): Promise<RequestsResult> {
        return utils.get(utils.url);
    }

    async parse(result: RequestsResult, utils: Utils): Promise<Article[]> {
        utils.source.instructions.rss = {
            assignFields: {},
            extraFields: []
        };

        return new RssParser().parse(result, utils);
    }
}

export class Dynamic2 extends DynamicSourceFile {
    name(): string {
        return "dynamic-2";
    }

    request(utils: Utils): Promise<RequestsResult> {
        throw new Error('Error1')
    }

    async parse(result: RequestsResult, utils: Utils): Promise<Article[]> {
        throw new Error('Error1')
    }
}