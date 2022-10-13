export type PairEvent = 'articles' | 'article.format'

type Pair = {
    event: PairEvent;
    callback: (...args: any[]) => any;
};

export default class Extensions {

    private declare readonly pairs: Pair[];

    constructor() {
        this.pairs = [];
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