export default class Utils {
    private _isFirstTime = true;
    public get isFirstTime() : boolean { return this._isFirstTime }
    resetFirstTime() { this._isFirstTime = true }
}