import Article from "./articles";
import Source from "./source";
import Job from "./job";
import Worker from "../modules/workers";
import Instructions from "./instructions";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import https from "https";
import {AxiosConfig} from "./AxiosConfig";

const httpsAgent = new https.Agent({rejectUnauthorized: false})

export default class Utils {

    /**
     * True if the previous scrape returned exception.
     */
    public isScrapeAfterError = false;
    /**
     * The specified URL.
     */
    public declare url: string;
    public declare instructions: Instructions;

    constructor() {
    }

    request(options: AxiosRequestConfig): Promise<AxiosResponse> {
        if (this.instructions["ignoreCertificates"])
            options.httpsAgent = httpsAgent;
        return axios.request(options);
    }

    get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        if(!options) options = {};
        options.url = url;
        options.method = "GET";
        return this.request(options);
    }

    post(url: string, data: any, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        if(!options) options = {};
        options.url = url;
        options.method = "POST";
        options.data = data;
        return this.request(options);
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    async parse(sourceJson: object): Promise<Article[]> {
        let source: Source = await Source.fileToSource(sourceJson)
        source.instructions.getSource = (): Source => source;

        let job = new Job()
        job.source = {id: source.getId()}
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions

        return await Worker.parse(job);
    }

}