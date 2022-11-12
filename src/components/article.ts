import type {Saffron} from "../index";
import type {Source} from "./source";

export type Attachment = {
    attribute: string;
    value?: string;
    text?: string;
};

export type Category = {
    name: string;
    links: string[];
};

export class Article {
    declare title: string | null;
    declare content: string | null;
    declare link: string | null;
    declare pubDate: string | null;
    declare timestamp: number;
    declare extras: { [key: string]: any };
    declare source: string;
    declare attachments: Attachment[];
    declare categories: Category[];
    declare thumbnail: string | null;

    constructor() {
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