import {Article, Job, Saffron} from "../src";
import {expect} from "chai";

describe('Integration', function () {

    // Variables storing useful data
    const _articles: { [tableName: string]: Article[] } = {};
    const _events: { [event: string]: any[] } = {};

    // Run program here
    const saffron = new Saffron();
    before(function () {
        this.timeout(20000); // 20 sec
        return new Promise(async resolve => {
            // Register events
            saffron.on("*", (event, ...args: any[]) => {
                if (!Array.isArray(_events[event]))
                    _events[event] = [];
                _events[event].push(...args);
            });

            saffron.on('scheduler.job.finished', (job: Job) => {
                // A hack to not run a source twice for this integration
                job.source.interval = 120000; // Change interval to 120 seconds
            });

            // Initialize saffron
            saffron.initialize({
                mode: 'main',
                misc: {
                    log: 'none',
                    eventDelay: 0
                },
                workers: {
                    nodes: 1,
                    axios: {
                        timeout: 2000,
                        headers: {
                            userAgent: 'User-Agent'
                        }
                    },
                    articles: {
                        amount: 5
                    }
                },
                grid: {
                    distributed: true,
                    authToken: '12345',
                    serverPort: 5000
                },
                scheduler: {
                    jobsInterval: 5000,
                    heavyJobFailureInterval: 10000,
                    noResponseThreshold: 1,
                    randomizeInterval: () => 0
                },
                sources: {
                    path: './test/sources',
                    includeOnly: [],
                    exclude: []
                },
                newArticles: (tableName, articles) => {
                    if (!Array.isArray(_articles[tableName]))
                        _articles[tableName] = [];
                    _articles[tableName].push(...articles);
                }
            });

            await saffron.start(true);
            setTimeout(() => {
                saffron.stop();
                resolve(true);
            }, 15000); // Make sure all jobs have finished at exactly one time
        });
    });

    // Test the results
    it('Expected articles', function () {
        expect(_events['worker.articles.found'].length).to.be.a('number');

        let count = 0;
        for (const tableName in _articles)
            count += _articles[tableName].length;

        // times 5 articles per source (except dynamic which returns 1)
        expect(count).to.equal((Object.keys(_articles).length - 1) * 5 + 1);
    });

    it('Simple events', function () {
        expect(_events['title'].length).to.equal(0);
        expect(_events['start'].length).to.equal(0);
        expect(_events['stop'].length).to.equal(0);
    });

    it('No errors', function () {
        expect(_events['scheduler.job.failed']).to.be.undefined;
        expect(_events['grid.connection.failed']).to.be.undefined;
        expect(_events['grid.node.auth.failed']).to.be.undefined;
        expect(_events['worker.job.failed']).to.be.undefined;
        expect(_events['scheduler.path.error']).to.be.undefined;
        expect(_events['scheduler.sources.error']).to.be.undefined;
        expect(_events['grid.connection.failed']).to.be.undefined;
        expect(_events['worker.parsers.error']).to.be.undefined;
        expect(_events['middleware.error']).to.be.undefined;
    });

    it('Expected grid behaviour', function () {
        expect(_events['grid.connection.okay'].length).to.equal(0);
        expect(_events['grid.node.connected']).to.be.undefined;
        expect(_events['grid.node.disconnected']).to.be.undefined;
        expect(_events['grid.worker.announced'].length).to.equal(1);
        expect(_events['grid.worker.destroyed'].length).to.equal(1);
        expect(_events['worker.job.finished'].length).to.equal(saffron.scheduler.sources.length);
    });

    it('Expected scheduler behaviour', function () {
        const source_s = saffron.scheduler.sources.length;

        expect(_events['scheduler.sources.new'][0].length).to.equal(source_s);
        expect(_events['scheduler.job.new'].length).to.be.greaterThan(source_s); // At least source_s jobs where created
        expect(_events['scheduler.job.finished'].length).to.equal(source_s);
        expect(_events['scheduler.job.reincarnate']).to.be.undefined;
        expect(_events['scheduler.job.worker.replace']).to.be.undefined;
        expect(_events['scheduler.job.push'].length).to.equal(source_s);
    });

    after(function () {
        saffron.grid.node.close();
    })
});