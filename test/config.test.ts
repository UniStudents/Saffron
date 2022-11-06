import Config, {ConfigType} from "../src/components/config"
import {expect} from "chai";

describe('Configuration', function () {
    it('Default configuration', function () {
        // Config
        const c = new Config().config;

        // Expected config
        expect(c.mode).to.equal('main');
        expect(c.database).to.equal('none');
        expect(c.sources?.path).to.equal('../../../sources');
        expect(c.sources?.includeOnly).to.deep.equal([]);
        expect(c.sources?.exclude).to.deep.equal([]);
        expect(c.workers?.nodes).to.equal(1);
        expect(c.workers?.jobs?.timeout).to.equal(10000);
        expect(c.workers?.articles?.amount).to.equal(30);
        expect(c.scheduler?.jobsInterval).to.equal(3600000);
        expect(c.scheduler?.heavyJobFailureInterval).to.equal(86400000);
        expect(c.scheduler?.noResponseThreshold).to.equal(2);
        expect(c.scheduler?.randomizeInterval?.()).to.be.a('number');
        expect(c.grid?.distributed).to.equal(false);
        expect(c.grid?.useHTTPS).to.equal(false);
        expect(c.grid?.serverHost).to.equal('127.0.0.1');
        expect(c.grid?.serverPort).to.equal(3000);
        expect(c.grid?.authToken).to.be.undefined;
        expect(c.grid?.key).to.be.undefined;
        expect(c.grid?.cert).to.be.undefined;
        expect(c.misc?.log).to.equal('all');
        expect(c.misc?.eventDelay).to.equal(0);
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
            useHTTPS: false,
            serverHost: '192.168.1.5',
            serverPort: 3000,
            authToken: 'auth-token',
            key: 'my-secure-key',
            cert: 'my-secure-certification'
        },
        misc: {
            log: 'errors',
            eventDelay: 1000
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
        expect(c.grid?.useHTTPS).to.equal(c.grid?.useHTTPS);
        expect(c.grid?.serverHost).to.equal(c.grid?.serverHost);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
        expect(c.misc?.eventDelay).to.equal(ec.misc.eventDelay);
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
                useHTTPS: false,
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
        expect(c.grid?.useHTTPS).to.equal(c.grid?.useHTTPS);
        expect(c.grid?.serverHost).to.equal(c.grid?.serverHost);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
        expect(c.misc?.eventDelay).to.equal(ec.misc.eventDelay);
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
        expect(c.grid?.useHTTPS).to.equal(c.grid?.useHTTPS);
        expect(c.grid?.serverHost).to.equal(c.grid?.serverHost);
        expect(c.grid?.serverPort).to.equal(c.grid?.serverPort);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal(ec.misc.log);
        expect(c.misc?.eventDelay).to.equal(ec.misc.eventDelay);
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
        expect(c.grid?.useHTTPS).to.equal(false);
        expect(c.grid?.serverHost).to.equal(c.grid?.serverHost);
        expect(c.grid?.serverPort).to.equal(1500);
        expect(c.grid?.authToken).to.equal(c.grid?.authToken);
        expect(c.grid?.key).to.equal(c.grid?.key);
        expect(c.grid?.cert).to.equal(c.grid?.cert);
        expect(c.misc?.log).to.equal('errors');
        expect(c.misc?.eventDelay).to.equal(ec.misc.eventDelay);
    });

    it('Saffron mode', function () {
        process.env.SAFFRON_MODE = 'main';

        // Config
        const c = new Config(_c).config;

        expect(c.mode).to.equal('main');
    });
});