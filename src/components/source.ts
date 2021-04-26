
export default class Source {

    static async parseFileObject(source: any): Promise<Source> {
        // Check if source is valid and return an object for that source

        if (!source.baseURL) throw new Error('Please specify a baseURL.')
        // if(new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(/\S*)?$').test(baseURL)) throw new Error('You specified an invalid baseURL')
        if (!['api', 'portal'].includes(source.type)) throw new Error('A source\'s "api" value must be either "api" or "portal"')

        let ret = new Source('source-id')
        ret.intervalBetweenNewScan = source.intervalBetweenNewScan

        return ret
    }

    declare id: string
    declare intervalBetweenNewScan: number

    constructor(id: string) {
        this.id = id
    }
}