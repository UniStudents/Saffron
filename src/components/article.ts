import randomId from "../middleware/randomId"

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
        this.id = randomId("art")
    }

    /**
     * Generate and return the hash of the article
     */
    getHash() {
        return `${this.link}:${this.title}`;
    }

    public setThumbnail(thumbnail: string) {
        this.thumbnail = thumbnail;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setContent(content: string) {
        this.content = content;
    }

    public setLink(link: string) {
        this.link = link;
    }

    public setPubDate(pubDate: string) {
        this.pubDate = pubDate;
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