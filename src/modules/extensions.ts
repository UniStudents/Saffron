type Pair = {
    event: string;
    callback: (...args: any[]) => any;
};

export default class Extensions {

    private static instance: Extensions;
    private declare readonly pairs: Pair[];

    private constructor() {
        this.pairs = [];
    }

    static getInstance(): Extensions {
        if (Extensions.instance == null)
            this.instance = new Extensions();

        return Extensions.instance;
    }

    push(p: Pair): void {
        if (!['articles', 'article.format'].includes(p.event))
            throw new Error(`Event ${p.event} is not valid.`);
        this.pairs.push(p);
    }

    startPairCount(): (() => Pair | null) {
        let i = 0;
        const self = this;
        return function getNextPair(): Pair | null {
            if (i >= self.pairs.length)
                return null;
            return self.pairs[i++];
        };
    }
}