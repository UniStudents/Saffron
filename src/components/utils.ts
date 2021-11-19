import Article from "./articles";
import Source from "./source";
import Job from "./job";
import Worker from "../modules/workers";
import Instructions from "./instructions";

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
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    parse = async (sourceJson: object): Promise<Article[]> => {
        let source: Source = await Source.parseFileObject(sourceJson, true)
        source.instructions.getSource = (): Source => source as Source;

        let job = new Job()
        job.source = {id: source.getId()}
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions

        return await Worker.parse(job);
    }

    /**
     * The specified URL.
     */
    declare readonly url: string

    constructor(url: string) {
        this.url = url
    }

}