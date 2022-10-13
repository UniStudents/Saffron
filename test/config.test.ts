import Config, {ConfigType} from "../src/components/config"
import {expect} from "chai";

describe('Configuration', function () {
    it('Default configuration', function () {
        // Config
        const c = new Config().config;
        // Expected config
        const ec: Required<ConfigType> = {
            mode: "main",
            database: 'none',
            sources: {
                path: "../../../sources",
                includeOnly: [],
                exclude: []
            },
            workers: {
                nodes: 1, // Start one worker
                jobs: {
                    timeout: 10000
                },
                articles: {
                    amount: 30
                }
            },
            scheduler: {
                jobsInterval: 3600000,
                heavyJobFailureInterval: 86400000,
                checksInterval: 120000,
                randomizeInterval: () => {
                    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing')
                        return 0;

                    const high = 300;
                    const low = 0;

                    const random = Math.floor(Math.random() * (high - low) + low) * 1000;
                    return Math.random() >= 0.5 ? random : -random;
                }
            },
            grid: {
                distributed: false,
                useHTTP: false,
                serverAddress: 'localhost',
                serverPort: 3000
            },
            misc: {
                log: "all"
            }
        }

        expect(c.mode).to.equal(ec.mode);
        expect(c.database).to.equal(ec.database);
        expect(c.sources.path).to.equal(ec.sources.path);
        expect(c.sources.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources.exclude).to.deep.equal(ec.sources.exclude);
        expect(c.workers.nodes).to.equal(ec.workers.nodes);
        expect(c.workers.jobs?.timeout).to.equal(ec.workers.jobs?.timeout);
        expect(c.workers.articles?.amount).to.equal(ec.workers.articles?.amount);
        expect(c.scheduler.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler.checksInterval).to.equal(ec.scheduler.checksInterval);
        expect(c.scheduler.randomizeInterval?.()).to.be.a('number');
        expect(c.grid.distributed).to.equal(ec.grid.distributed);
        expect(c.grid.useHTTP).to.equal(c.grid.useHTTP);
        expect(c.grid.serverAddress).to.equal(c.grid.serverAddress);
        expect(c.grid.serverPort).to.equal(c.grid.serverPort);
        expect(c.grid.authToken).to.equal(c.grid.authToken);
        expect(c.grid.key).to.equal(c.grid.key);
        expect(c.grid.cert).to.equal(c.grid.cert);
        expect(c.misc.log).to.equal(ec.misc.log);
    });

    it('Correct load', function () {
        // Expected/loaded config
        const ec: Required<ConfigType> = {
            mode: "worker",
            database: 'none',
            sources: {
                path: ".",
                includeOnly: ['source.name.one', 'source.name.two'],
                exclude: ['source.name.three']
            },
            workers: {
                nodes: 10, // Start one worker
                jobs: {
                    timeout: 25500
                },
                articles: {
                    amount: 150
                }
            },
            scheduler: {
                jobsInterval: 10000,
                heavyJobFailureInterval: 100000,
                checksInterval: 20500,
                randomizeInterval: () => -500
            },
            grid: {
                distributed: true,
                useHTTP: false,
                serverAddress: '192.168.1.5',
                serverPort: 3000,
                authToken: 'auth-token',
                key: 'my-secure-key',
                cert: 'my-secure-certification'
            },
            misc: {
                log: 'errors'
            }
        }
        // Config
        const c = new Config(ec).config;

        expect(c.mode).to.equal(ec.mode);
        expect(c.database).to.equal(ec.database);
        expect(c.sources.path).to.deep.equal(ec.sources.path);
        expect(c.sources.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources.exclude).to.equal(ec.sources.exclude);
        expect(c.workers.nodes).to.equal(ec.workers.nodes);
        expect(c.workers.jobs?.timeout).to.equal(ec.workers.jobs?.timeout);
        expect(c.workers.articles?.amount).to.equal(ec.workers.articles?.amount);
        expect(c.scheduler.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler.checksInterval).to.equal(ec.scheduler.checksInterval);
        expect(c.scheduler.randomizeInterval!()).to.equal(ec.scheduler.randomizeInterval!())
        expect(c.grid.distributed).to.equal(ec.grid.distributed);
        expect(c.grid.useHTTP).to.equal(c.grid.useHTTP);
        expect(c.grid.serverAddress).to.equal(c.grid.serverAddress);
        expect(c.grid.serverPort).to.equal(c.grid.serverPort);
        expect(c.grid.authToken).to.equal(c.grid.authToken);
        expect(c.grid.key).to.equal(c.grid.key);
        expect(c.grid.cert).to.equal(c.grid.cert);
        expect(c.misc.log).to.equal(ec.misc.log);
    });
});