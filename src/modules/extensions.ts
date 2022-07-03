interface pair {
    event: string,
    callback: (...args: any[]) => any
}

export default class Extensions {

    private static instance: Extensions;
    private declare readonly pairs: pair[];

    private constructor() {
        this.pairs = [];
    }

    static getInstance(): Extensions {
        if (Extensions.instance == null)
            this.instance = new Extensions();

        return Extensions.instance;
    }

    push(p: pair): void {
        if (this.pairs.filter(pr => pr.event == p.event).length > 0)
            throw new Error(`Cannot register an extension event twice. Event '${p.event}' already exists.`);

        this.pairs.push(p);
    }

    startCount(): (() => pair | null) {
        let i = 0;
        return (): pair | null => {
            if (i >= this.pairs.length)
                return null;
            return this.pairs[i++];
        };
    }
}