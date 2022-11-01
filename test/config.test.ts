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
                noResponseThreshold: 2,
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
        expect(c.sources?.path).to.equal(ec.sources.path);
        expect(c.sources?.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources?.exclude).to.deep.equal(ec.sources.exclude);
        expect(c.workers?.nodes).to.equal(ec.workers.nodes);
        expect(c.workers?.jobs?.timeout).to.equal(ec.workers.jobs?.timeout);
        expect(c.workers?.articles?.amount).to.equal(ec.workers.articles?.amount);
        expect(c.scheduler?.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler?.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler?.noResponseThreshold).to.equal(ec.scheduler.noResponseThreshold);
        expect(c.scheduler?.randomizeInterval?.()).to.be.a('number');
        expect(c.grid?.distributed).to.equal(ec.grid.distributed);
        expect(c.grid?.useHTTP).to.equal(c.grid?.useHTTP);
        expect(c.grid?.serverAddress).to.equal(c.grid?.serverAddress);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
    });

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
            noResponseThreshold: 2,
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
    };

    it('Correct load', function () {
        const c = new Config(ec).config;

        expect(c.mode).to.equal(ec.mode);
        expect(c.database).to.equal(ec.database);
        expect(c.sources?.path).to.equal(ec.sources.path);
        expect(c.sources?.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources?.exclude).to.deep.equal(ec.sources.exclude);
        expect(c.workers?.nodes).to.equal(ec.workers.nodes);
        expect(c.workers?.jobs?.timeout).to.equal(ec.workers.jobs?.timeout);
        expect(c.workers?.articles?.amount).to.equal(ec.workers.articles?.amount);
        expect(c.scheduler?.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler?.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler?.noResponseThreshold).to.equal(ec.scheduler.noResponseThreshold);
        expect(c.scheduler?.randomizeInterval!()).to.equal(ec.scheduler.randomizeInterval!())
        expect(c.grid?.distributed).to.equal(ec.grid.distributed);
        expect(c.grid?.useHTTP).to.equal(c.grid?.useHTTP);
        expect(c.grid?.serverAddress).to.equal(c.grid?.serverAddress);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
    });

    const _c: Partial<ConfigType> & {
        production?: Partial<ConfigType>;
    } & {
        development?: Partial<ConfigType>;
    } & {
        testing?: Partial<ConfigType>;
    } = {
        ...ec,
        production: {
            mode: 'main',
            database: {
                pushArticles: async articles => {},
                getArticles: async (opts) => []
            },
            workers: {
                nodes: 5,
                jobs: {

                },
                articles: {
                    amount: 100
                }
            }
        },
        development: {
            database: {
                pushArticles: async articles => {},
                getArticles: async (opts) => []
            },
            workers: {
                nodes: 1,
                jobs: {
                    timeout: 100
                }
            },
            sources: {
                path: './../sources'
            }
        },
        testing: {
            grid: {
                distributed: true,
                useHTTP: false,
                serverPort: 1500
            },
            misc: {
                log: 'errors'
            }
        }
    }

    it('Production environment load', function () {
        process.env.NODE_ENV = 'production';

        // Config
        const c = new Config(_c).config;

        expect(c.mode).to.equal('main');
        expect((<any>c.database).pushArticles).to.be.a('function');
        expect((<any>c.database).getArticles).to.be.a('function');
        expect(c.sources?.path).to.equal(ec.sources.path);
        expect(c.sources?.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources?.exclude).to.deep.equal(ec.sources.exclude);
        expect(c.workers?.nodes).to.equal(5);
        expect(c.workers?.jobs?.timeout).to.equal(ec.workers.jobs?.timeout);
        expect(c.workers?.articles?.amount).to.equal(100);
        expect(c.scheduler?.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler?.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler?.noResponseThreshold).to.equal(ec.scheduler.noResponseThreshold);
        expect(c.scheduler?.randomizeInterval!()).to.equal(ec.scheduler.randomizeInterval!())
        expect(c.grid?.distributed).to.equal(ec.grid.distributed);
        expect(c.grid?.useHTTP).to.equal(c.grid?.useHTTP);
        expect(c.grid?.serverAddress).to.equal(c.grid?.serverAddress);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
    });

    it('Development environment load', function () {
        process.env.NODE_ENV = 'development';

        // Config
        const c = new Config(_c).config;

        expect(c.mode).to.equal(ec.mode);
        expect((<any>c.database).pushArticles).to.be.a('function');
        expect((<any>c.database).getArticles).to.be.a('function');
        expect(c.sources?.path).to.equal('./../sources');
        expect(c.sources?.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources?.exclude).to.deep.equal(ec.sources.exclude);
        expect(c.workers?.nodes).to.equal(1);
        expect(c.workers?.jobs?.timeout).to.equal(100);
        expect(c.workers?.articles?.amount).to.equal(ec.workers?.articles?.amount);
        expect(c.scheduler?.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler?.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler?.noResponseThreshold).to.equal(ec.scheduler.noResponseThreshold);
        expect(c.scheduler?.randomizeInterval!()).to.equal(ec.scheduler.randomizeInterval!())
        expect(c.grid?.distributed).to.equal(ec.grid.distributed);
        expect(c.grid?.useHTTP).to.equal(c.grid?.useHTTP);
        expect(c.grid?.serverAddress).to.equal(c.grid?.serverAddress);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
    });

    it('Testing environment load', function () {
        process.env.NODE_ENV = 'testing';

        // Config
        const c = new Config(_c).config;

        expect(c.mode).to.equal(ec.mode);
        expect(c.database).to.equal(ec.database);
        expect(c.sources?.path).to.equal(ec.sources.path);
        expect(c.sources?.includeOnly).to.deep.equal(ec.sources.includeOnly);
        expect(c.sources?.exclude).to.deep.equal(ec.sources.exclude);
        expect(c.workers?.nodes).to.equal(ec.workers.nodes);
        expect(c.workers?.jobs?.timeout).to.equal(ec.workers.jobs?.timeout);
        expect(c.workers?.articles?.amount).to.equal(ec.workers.articles?.amount);
        expect(c.scheduler?.jobsInterval).to.equal(ec.scheduler.jobsInterval);
        expect(c.scheduler?.heavyJobFailureInterval).to.equal(ec.scheduler.heavyJobFailureInterval);
        expect(c.scheduler?.noResponseThreshold).to.equal(ec.scheduler.noResponseThreshold);
        expect(c.scheduler?.randomizeInterval!()).to.equal(ec.scheduler.randomizeInterval!())
        expect(c.grid?.distributed).to.equal(true);
        expect(c.grid?.useHTTP).to.equal(false);
        expect(c.grid?.serverAddress).to.equal(c.grid?.serverAddress);
        expect(c.grid?.serverPort).to.equal(1500);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal('errors');
    });

    it('Saffron mode', function () {
        process.env.SAFFRON_MODE = 'main';

        // Config
        const c = new Config(_c).config;

        expect(c.mode).to.equal('main');
    });
});