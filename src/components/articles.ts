import Source from "./source";
import randomId from "../middleware/randomId"
import hash from 'crypto-js/sha256';

export type Attachment = {
    attribute: string;
    value?: string;
    text?: string;
};

export default class Article {
    declare id: string;
    declare title: string;
    declare content: string;
    declare link: string;
    declare pubDate: string;
    declare timestamp: number;
    declare hash: string;
    declare extras: {[key: string]: any};
    declare source: {
        id: string;
        name: string;
    };
    declare attachments: object[];
    declare categories: object[];
    declare thumbnail: string;

    /**
     * Article constructor
     * @param id The article's id (Optional, auto-generated)
     */
    constructor(id: string = "") {
        if (id !== "")
            this.id = id
        else this.id = randomId("art")
    }

    /**
     * Parse the article class to a json object
     */
    toJSON(): object {
        this.getHash()
        let {id, timestamp, title, source, pubDate, link, content, hash, extras, attachments, categories} = this;
        return {id, timestamp, title, source, link, pubDate, content, extras, hash, attachments, categories}
    }

    /**
     * Parse the article class to a json object
     */
    static fromJSON(json: any): Article {
        const art = new Article(json.id);
        art.timestamp = json.timestamp;
        art.title = json.title;
        art.source = json.source;
        art.link = json.link;
        art.pubDate = json.pubDate;
        art.content = json.content;
        art.extras = json.extras;
        art.hash = json.hash;
        art.attachments = json.attachments;
        art.categories = json.categories;
        art.thumbnail = json.thumbnail;
        return art

    }

    /**
     * Return the source class where this article belongs
     */
    getSource(): Source {
        return Source.getSourceFrom(this)
    }

    /**
     * Generate and return the hash of the article
     */
    getHash() {
        if (!this.hash)
            this.hash = (hash(`${this.title} ${this.content} ${this.extras?.toString()} ${this.source.id}`)).toString();

        return this.hash;
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
        if(typeof this.extras === 'undefined')
            this.extras = {};

        this.extras[key] = value;
    }

    public setSource(id: string, name: string) {
        this.source = {id, name};
    }

    public pushAttachment(attachment: Attachment) {
        if(typeof this.attachments === 'undefined')
            this.attachments = [];

        this.attachments.push(attachment);
    }

    public pushAttachments(attachments: Attachment[]) {
        if(typeof this.attachments === 'undefined')
            this.attachments = [];

        this.attachments.push(...attachments);
    }

    public pushCategory(name: string, links: string[]) {
        if(typeof this.categories === 'undefined')
            this.categories = [];

        this.categories.push({name, links});
    }

    public pushCategories(categories: {name: string, links: string[]}[]) {
        if(typeof this.categories === 'undefined')
            this.categories = [];

        this.categories.push(...categories);
    }
}