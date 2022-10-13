import _ from "lodash"
import Article from "./article";

export type ConfigType = {
    mode: 'main' | 'worker';
    database?: {
        pushArticles: (articles: Article[]) => Promise<void>;
        getArticles: (opts: {
            tableName: string;
            count: number;
        }) => Promise<Article[]>;
    } | 'none';
    sources: {
        path?: string;
        includeOnly?: string[];
        exclude?: string[];
    };
    workers: {
        nodes?: number;
        userAgent?: string;
        jobs?: {
            timeout?: number;
        };
        articles?: {
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
        distributed: boolean;
        useHTTP?: boolean;

        serverAddress?: string;
        serverPort?: number;
        authToken?: string;
        key?: any;
        cert?: any;
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
    WORKER_USERAGENT = 'worker.useragent',
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
    DB_IS_INITIALIZED = 'db.initialized',
    DB_PUSH_ARTICLES = 'db.articles.push',
    DB_GET_ARTICLES = 'db.articles.get'
}

export default class Config {
    readonly config: ConfigType = {
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
    };

    constructor(config?: Partial<ConfigType> | {
        production: Partial<ConfigType>;
    } | {
        development: Partial<ConfigType>;
    } | {
        testing: Partial<ConfigType>;
    }) {
        this.config = this.mergeObject(config, this.config);

        switch (process.env.NODE_ENV) {
            case "production":
                if ((config as any).production)
                    this.config = this.mergeObject((config as any).production, this.config);
                break;
            case "development":
                if ((config as any).development)
                    this.config = this.mergeObject((config as any).development, this.config);
                break;
            case "testing":
                if ((config as any).testing)
                    this.config = this.mergeObject((config as any).testing, this.config);
                break;
            default:
        }

        if (process.env.SAFFRON_MODE && ["main", "worker"].includes(process.env.SAFFRON_MODE))
            this.config.mode = process.env.SAFFRON_MODE as any;
    }

    static getOption(option: ConfigOptions, config: Config | null): any {
        switch (option) {
            case ConfigOptions.SAFFRON_MODE:
                return config ? config.config.mode : "main";

            case ConfigOptions.SOURCES_PATH:
                return config ? config.config.sources.path : '../../../sources';
            case ConfigOptions.SOURCES_INCLUDE_ONLY:
                return config ? config.config.sources.includeOnly : [];
            case ConfigOptions.SOURCES_EXCLUDE:
                return config ? config.config.sources.exclude : [];

            case ConfigOptions.WORKER_NODES:
                return config ? config.config.workers.nodes : 1;
            case ConfigOptions.WORKER_USERAGENT:
                return config ? config.config.workers.userAgent : undefined;
            case ConfigOptions.REQUEST_TIMEOUT:
                return config ? config.config.workers.jobs?.timeout : 10000;

            case ConfigOptions.ARTICLE_AMOUNT:
                return config ? config.config.workers.articles?.amount : 30;

            case ConfigOptions.SCHEDULER_JOB_INT:
                return config ? config.config.scheduler.jobsInterval : 3600000;
            case ConfigOptions.SCHEDULER_JOB_HEAVY_INT:
                return config ? config.config.scheduler.heavyJobFailureInterval : 86400000;
            case ConfigOptions.SCHEDULER_CHECKS_INT:
                return config ? config.config.scheduler.checksInterval : 120000;
            case ConfigOptions.SCHEDULER_RANDOMIZER:
                return config ? config.config.scheduler.randomizeInterval : () => 0;

            case ConfigOptions.GRID_DISTRIBUTED:
                return config ? config.config.grid.distributed : false;
            case ConfigOptions.GRID_SERVER_ADDRESS:
                return config ? config.config.grid?.serverAddress : 'localhost';
            case ConfigOptions.GRID_SERVER_PORT:
                return config ? config.config.grid.serverPort : 3000;
            case ConfigOptions.GRID_AUTH:
                return config ? config.config.grid.authToken : undefined;
            case ConfigOptions.GRID_USE_HTTP:
                return config ? config.config.grid.useHTTP : false;
            case ConfigOptions.GRID_HTTPS_KEY:
                return config ? config.config.grid.key : undefined;
            case ConfigOptions.GRID_HTTPS_CERT:
                return config ? config.config.grid.cert : undefined;

            case ConfigOptions.MISC_LOG_LEVEL:
                return config ? config.config.misc.log : "all";

            case ConfigOptions.DB_IS_INITIALIZED:
                return config ? config.config.database != undefined && config.config.database !== 'none' : false;
            case ConfigOptions.DB_PUSH_ARTICLES:
                // @ts-ignore
                return config ? config.config.database?.pushArticles : (articles: Article[]) => undefined;
            case ConfigOptions.DB_GET_ARTICLES:
                // @ts-ignore
                return config ? config.config.database?.getArticles : (opts: any) => [];
        }
    }

    private mergeObject(src: any, original: object): any {
        return _.mergeWith({}, original, src, (o, s) => {
            if (typeof o == 'object' && !Array.isArray(o))
                return this.mergeObject(s, o);
            return s != null ? s : o;
        });
    }
}