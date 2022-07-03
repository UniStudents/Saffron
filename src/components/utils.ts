import Article from "./articles";
import Source from "./source";
import Job from "./job";
import Worker from "../modules/workers";
import Instructions from "./instructions";

export default class Utils {

    /**
     * True if the previous scrape returned exception.
     */
    public isScrapeAfterError = false;
    /**
     * The specified URL.
     */
    declare readonly url: string;

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    parse = async (sourceJson: object): Promise<Article[]> => {
        let source: Source = await Source.fileToSource(sourceJson)
        source.instructions.getSource = (): Source => source;

        let job = new Job()
        job.source = {id: source.getId()}
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions

        return await Worker.parse(job);
    }

    constructor(url: string) {
        this.url = url;
    }

}