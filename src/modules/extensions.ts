export type PairEvent = 'articles' | 'article.format'

type Pair = {
    event: PairEvent;
    callback: (...args: any[]) => any;
};

export class Extensions {

    private readonly pairs: Pair[];

    constructor() {
        this.pairs = [];
    }

    push(p: Pair) {
        if (!['articles', 'article.format'].includes(p.event))
            throw new Error(`SaffronException ${p.event} is not valid.`);
        this.pairs.push(p);
    }

    startPairCount(): () => (Pair | null) {
        let i = 0;
        const self = this;
        return function getNextPair(): Pair | null {
            if (i === self.pairs.length) return null;
            return self.pairs[i++];
        };
    }
}