import _ from "lodash"
import Article from "./article";

export type ConfigType = {
    mode: 'main' | 'worker';
    database: {
            pushArticles: (articles: Article[]) => Promise<void>;
        getArticles: (opts: {
            tableName: string;
            count: number;
        }) => Promise<Article[]>;
    };
    sources: {
        path: string;
        includeOnly?: string[];
        exclude?: string[];
    };
    workers: {
        nodes?: number;
        jobs?: {
            timeout?: number;
        };
        articles: {
            amount?: number;
        };
    };
    scheduler: {
        jobsInterval?: number,
        heavyJobFailureInterval?: number,
        checksInterval?: number;
        randomizeInterval?: () => number;
    };
    grid: {
        distributed: false;
    } | {
        distributed: true;
        useHTTP: false;

        serverAddress: string;
        serverPort?: number;
        authToken: string;
    } | {
        distributed: true;
        useHTTP: true;

        serverAddress: string;
        serverPort?: number;
        authToken: string;
        key: any;
        cert: any;
    };
    misc: {
        log?: 'all' | 'info' | 'errors' | 'none';
    };
}

export enum ConfigOptions {
    SOURCES_PATH = 'sources.path',
    SOURCES_INCLUDE_ONLY = 'sources.includeOnly',
    SOURCES_EXCLUDE = 'sources.exlude',
    SAFFRON_MODE = 'mode',
    WORKER_NODES = 'worker.nodes',
    REQUEST_TIMEOUT = 'worker.request.timeout',
    ARTICLE_AMOUNT = 'worker.article.amount',
    SCHEDULER_JOB_INT = 'scheduler.job.interval',
    SCHEDULER_JOB_HEAVY_INT = 'scheduler.job.heavyInterval',
    SCHEDULER_CHECKS_INT = 'scheduler.job.checkInterval',
    SCHEDULER_RANDOMIZER = 'scheduler.job.randomizer',
    GRID_DISTRIBUTED = 'grid.distributed',
    GRID_SERVER_ADDRESS = 'grid.server.address',
    GRID_SERVER_PORT = 'grid.server.port',
    GRID_AUTH = 'grid.auth',
    GRID_USE_HTTP = 'grid.use_http',
    GRID_HTTPS_KEY = 'grid.https.key',
    GRID_HTTPS_CERT = 'grid.https.cert',
    MISC_LOG_LEVEL = 'misc.log',
    DB_PUSH_ARTICLES = 'db.articles.push',
    DB_GET_ARTICLES = 'db.articles.get'
}

export default class Config {
    private static instance: Config
    _config: ConfigType = {
        mode: "main",
        database: {
            pushArticles: async (articles: Article[]): Promise<void> => undefined,
            getArticles: async (opts: any): Promise<Article[]> => [],
        },
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
                amount: 10
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
            serverPort: 3000
        },
        misc: {
            log: "all"
        }
    }

    private constructor(config?: Partial<ConfigType> | {
        production: Partial<ConfigType>;
    } | {
        development: Partial<ConfigType>;
    } | {
        testing: Partial<ConfigType>;
    }) {
        this._config = this.mergeObject(config, this._config);

        switch (process.env.NODE_ENV) {
            case "production":
                if ((config as any).production)
                    this._config = this.mergeObject((config as any).production, this._config);
                break;
            case "development":
                if ((config as any).development)
                    this._config = this.mergeObject((config as any).development, this._config);
                break;
            case "testing":
                if ((config as any).testing)
                    this._config = this.mergeObject((config as any).testing, this._config);
                break;
            default:
        }

        if (process.env.SAFFRON_MODE && ["main", "worker"].includes(process.env.SAFFRON_MODE))
            this._config.mode = process.env.SAFFRON_MODE as any;
    }

    /**
     * Loads an external configuration object and merges the parameters with the default ones.
     */
    static load(config?: Partial<ConfigType>): any {
        if (!this.instance)
            this.instance = new Config(config)

        return this.instance._config
    }

    static getOption(option: ConfigOptions): any {
        let isStatic: boolean = this.instance == null;

        switch (option) {
            case ConfigOptions.SAFFRON_MODE:
                return !isStatic ? Config.load().mode : "main";

            case ConfigOptions.SOURCES_PATH:
                return !isStatic ? Config.load().sources.path : '../../../sources';
            case ConfigOptions.SOURCES_INCLUDE_ONLY:
                return !isStatic ? Config.load().sources.includeOnly : [];
            case ConfigOptions.SOURCES_EXCLUDE:
                return !isStatic ? Config.load().sources.exclude : [];

            case ConfigOptions.WORKER_NODES:
                return !isStatic ? Config.load().workers.nodes : 1;
            case ConfigOptions.REQUEST_TIMEOUT:
                return !isStatic ? Config.load().workers.jobs.timeout : 10000;

            case ConfigOptions.ARTICLE_AMOUNT:
                return !isStatic ? Config.load().workers.articles.amount : 10;

            case ConfigOptions.SCHEDULER_JOB_INT:
                return !isStatic ? Config.load().scheduler.jobsInterval : 3600000;
            case ConfigOptions.SCHEDULER_JOB_HEAVY_INT:
                return !isStatic ? Config.load().scheduler.heavyJobFailureInterval : 86400000;
            case ConfigOptions.SCHEDULER_CHECKS_INT:
                return !isStatic ? Config.load().scheduler.checksInterval : 120000;
            case ConfigOptions.SCHEDULER_RANDOMIZER:
                return !isStatic ? Config.load().scheduler.randomizeInterval : () => 0;

            case ConfigOptions.GRID_DISTRIBUTED:
                return !isStatic ? Config.load().grid.distributed : false;
            case ConfigOptions.GRID_SERVER_ADDRESS:
                return !isStatic ? Config.load().grid.serverAddress : 'localhost';
            case ConfigOptions.GRID_SERVER_PORT:
                return !isStatic ? Config.load().grid.serverPort : 3000;
            case ConfigOptions.GRID_AUTH:
                return !isStatic ? Config.load().grid.authToken : undefined;
            case ConfigOptions.GRID_USE_HTTP:
                return !isStatic ? Config.load().grid.useHTTP : false;
            case ConfigOptions.GRID_HTTPS_KEY:
                return !isStatic ? Config.load().grid.key : undefined;
            case ConfigOptions.GRID_HTTPS_CERT:
                return !isStatic ? Config.load().grid.cert : undefined;

            case ConfigOptions.MISC_LOG_LEVEL:
                return !isStatic ? Config.load().misc.log : "all";

            case ConfigOptions.DB_PUSH_ARTICLES:
                return !isStatic ? Config.load().database.pushArticles : (articles: Article[]) => undefined;
            case ConfigOptions.DB_GET_ARTICLES:
                return !isStatic ? Config.load().database?.getArticles : (opts: any) => [];
        }
    }

    private mergeObject(src: any, original: object): any {
        return _.mergeWith({}, original, src, (o, s) => {
            if (Array.isArray(o))
                return s ? s : o
            else if (typeof o == 'object')
                return this.mergeObject(s, o)
            return s ? s : o
        })
    }
}