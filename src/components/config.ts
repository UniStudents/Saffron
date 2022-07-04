import _ from "lodash"
import {ConfigOptions} from "../middleware/ConfigOptions";
import Article from "./articles";

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
    };
    grid: {
        distributed: false;
    } | {
        distributed: true;
        serverAddress: string;
        serverPort?: number;
        authToken: string;
        useHTTP: false;
    } | {
        distributed: true;
        serverAddress: string;
        serverPort?: number;
        authToken: string;
        useHTTP: true;
        key: any;
        cert: any;
    };
    misc: {
        log?: 'all' | 'info' | 'errors' | 'none';
    };
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
            checksInterval: 120000
        },
        grid: {
            distributed: false,
            // For default values on false
            // @ts-ignore
            serverPort: 3000,
            useHTTP: false
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