import type {Utils} from "./Utils";
import type {RequestsResult} from "./types";
import type {Article} from "./article";

export abstract class DynamicSourceFile {
    /**
     * This method will return the name of the current implementation.
     */
    public abstract name(): string;

    /**
     * This method will do all the necessary requests to retrieve all the data from the internet.
     * @param utils The Utils class contains all the necessary information for the source file alongside the request functions
     * @return An instance of AxiosResponse (or an array of them).
     */
    public abstract request(utils: Utils): Promise<RequestsResult>;

    /**
     * This method will parse the result of the responses returned from the `request` method.
     * @param result The responses returned from the `request` method.
     * @param utils The Utils class contains all the necessary information for the source file alongside the instructions for parsing (if any).
     */
    public abstract parse(result: RequestsResult, utils: Utils): Promise<Article[]>;
}