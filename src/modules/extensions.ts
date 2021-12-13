interface pair {
    event: string,
    callback: (...args: any[]) => any
}

export default class Extensions {

    private static instance: Extensions

    static getInstance(): Extensions {
        if (Extensions.instance == null)
            this.instance = new Extensions()

        return Extensions.instance
    }

    private declare pairs: pair[]

    private constructor() {
        this.pairs = []
    }

    push(p: pair): void {
        if (this.pairs.filter(pr => pr.event == p.event).length > 0)
            throw new Error(`Cannot register an extension event twice. Event '${p.event}' already exists.`)

        this.pairs.push(p)
    }

    startCount(): (() => pair | null) {
        let i = 0;
        return (): pair | null => {
            if (i >= this.pairs.length) return null;
            let pair = this.pairs[i];
            i++;
            return pair;
        };
    }

    hasEvent(event: string): boolean {
        return this.pairs.findIndex(p => p.event == event) != -1
    }

    async callEvent(event: String, ...data: any[]): Promise<any> {
        return await this.pairs.find(p1 => p1.event == event)!!.callback(...data)
    }
}