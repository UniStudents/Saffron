export type PairEvent = 'articles' | 'article.format'

export type ExtensionPair = {
    event: PairEvent;
    callback: (...args: any[]) => any;
};

export class Extensions {

    private readonly articles: ExtensionPair[];
    // private readonly sources: Pair[];

    constructor() {
        this.articles = [];
        // this.sources = [];
    }

    push(p: ExtensionPair) {
        if (['articles', 'article.format'].includes(p.event))
            this.articles.push(p);
        // else if (['source.before', 'source.after'].includes(p.event))
        //     this.sources.push(p);
        else throw new Error(`SaffronException ${p.event} is not valid.`);
    }

    startPairCount(what: 'articles' /*| 'sources'*/): () => (ExtensionPair | null) {
        let i = 0;
        const it = this[what];
        // let it: Pair[] = [];
        // switch (what) {
        //     case "articles": it = this.articles; break;
        //     case "sources": it = this.sources; break;
        // }
        return function getNextPair(): ExtensionPair | null {
            if (i === it.length) return null;
            return it[i++];
        };
    }
}