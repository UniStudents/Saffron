import randomId from "../middleware/randomId"
import {Saffron} from "../index";
import Source from "./source";

export type Attachment = {
    attribute: string;
    value?: string;
    text?: string;
};

export type Category = {
    name: string;
    links: string[];
};

export default class Article {
    declare id: string;
    declare title: string;
    declare content: string;
    declare link: string;
    declare pubDate: string;
    declare timestamp: number;
    declare extras: { [key: string]: any };
    declare source: string;
    declare attachments: Attachment[];
    declare categories: Category[];
    declare thumbnail: string;

    constructor() {
        this.id = randomId("art");
    }

    public getSource(saffron: Saffron): Source {
        return saffron.scheduler.sources.find(s => s.name = this.source)!;
    }

    public addExtra(key: string, value: any) {
        if (typeof this.extras === 'undefined')
            this.extras = {};

        this.extras[key] = value;
    }

    public pushAttachment(attachment: Attachment) {
        if (typeof this.attachments === 'undefined')
            this.attachments = [];

        this.attachments.push(attachment);
    }

    public pushAttachments(attachments: Attachment[]) {
        if (typeof this.attachments === 'undefined')
            this.attachments = [];

        this.attachments.push(...attachments);
    }

    public pushCategory(name: string, links: string[]) {
        if (typeof this.categories === 'undefined')
            this.categories = [];

        this.categories.push({name, links});
    }

    public pushCategories(categories: Category[]) {
        if (typeof this.categories === 'undefined')
            this.categories = [];

        this.categories.push(...categories);
    }
}