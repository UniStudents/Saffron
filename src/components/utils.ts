export default class Utils {
    private _isFirstScrape = true;
    public get isFirstScrape() : boolean { return this._isFirstScrape }
    resetFirstTime() { this._isFirstScrape = true }

    private _isScrapeAfterError = false;
    public get isScrapeAfterError() : boolean { return this._isScrapeAfterError }

    public getArticles(count: number) {}

    static ScrapeError = class {
        declare message: string
        declare retry: boolean

        constructor(message: string, retry: boolean) {
            this.message = message
            this.retry = retry
        }
    }
}