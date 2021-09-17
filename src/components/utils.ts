import Article from "./articles";
import Source from "./source";
import Job from "./job";
import Worker from "../modules/workers";

export default class Utils {

    /**
     * True if source file does not have any articles on the database, false otherwise.
     */
    public isFirstScrape = true;

    /**
     * True if the previous scrape returned exception.
     */
    public isScrapeAfterError = false;

    /**
     * Get all the articles in database.
     * @param count
     */
    getArticles = (count: number): Array<Article> => []

    /**
     * When a new article is found.
     * @param article
     */
    onNewArticle = (article: Article) => {
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param fileContents
     */
    parse = async (fileContents: string) => {
        let source: Source | object = await Source.parseFileObject(fileContents, false)
        if (!(source instanceof Source)) return source

        source.instructions.getSource = (): Source => source as Source;

        let job = new Job()
        job.source = {id: source.getId()}
        job.getSource = (): Source => source as Source;
        let articles = await Worker.parse(source.instructions, new Job())

        if (Array.isArray(articles)) {
            for (const article of articles)
                article.getSource = (): Source => source as Source;
        }

        return articles;
    }

    /**
     * The specified URL.
     */
    declare readonly url: string

    constructor(url: string) {
        this.url = url
    }

}