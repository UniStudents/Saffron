import _ from "lodash"
import type Article from "./article";

export type ConfigType = {
    mode: 'main' | 'worker';
    newArticles: ((tableName: string, articles: Article[]) => void) | ((tableName: string, articles: Article[]) => Promise<void>);
    sources: Partial<{
        path: string;
        includeOnly: string[];
        exclude: string[];
    }>;
    workers: Partial<{
        nodes: number;
        userAgent: string;
        jobs: Partial<{
            timeout: number;
            // TODO: Add max-redirects option
        }>;
        articles: Partial<{
            amount: number;
            includeContentAttachments: boolean;
        }>;
    }>;
    scheduler: Partial<{
        jobsInterval: number,
        heavyJobFailureInterval: number,
        noResponseThreshold: number;
        randomizeInterval: () => number;
    }>;
    grid: Partial<{
        distributed: boolean;
        useHTTPS: boolean;

        serverHost: string;
        serverPort: number;
        authToken: string;
        key: any;
        cert: any;
    }>;
    misc: Partial<{
        log: 'all' | 'info' | 'errors' | 'none';
        eventDelay: number;
    }>;
}

export enum ConfigOptions {
    SOURCES_PATH = 0,
    SOURCES_INCLUDE_ONLY = 1,
    SOURCES_EXCLUDE = 3,
    MODE = 4,
    WORKER_NODES = 5,
    USERAGENT = 6,
    TIMEOUT = 7,
    ARTICLE_AMOUNT = 8,
    JOB_INT = 9,
    JOB_HEAVY_INT = 10,
    NO_RESPONSE_THR = 11,
    INT_RANDOMIZER = 12,
    DISTRIBUTED = 13,
    HOST = 14,
    PORT = 15,
    AUTH_TOKEN = 16,
    USE_HTTPS = 17,
    HTTPS_KEY = 18,
    HTTPS_CERT = 19,
    LOG_LEVEL = 20,
    EVENT_DELAY = 21,
    NEW_ARTICLES = 22,
    INCLUDE_CNT_ATTACHMENTS = 23
}

export default class Config {
    config: ConfigType = {
        mode: "main",
        newArticles: (tableName, articles) => {},
        sources: {
            path: "./sources",
            includeOnly: [],
            exclude: []
        },
        workers: {
            // TODO: Allow nodes to take an array of strings instead of number which will be the names of the workers (instead of auto generated ids)
            nodes: 1, // Start one worker
            userAgent: 'saffron',
            jobs: {
                timeout: 10000
            },
            articles: {
                amount: 30,
                includeContentAttachments: true
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
            useHTTPS: false,
            serverHost: '127.0.0.1',
            serverPort: 3000
        },
        misc: {
            log: "all",
            eventDelay: 0
        }
    };

    constructor(config?: Partial<ConfigType> & {
        production?: Partial<ConfigType>;
    } & {
        development?: Partial<ConfigType>;
    } & {
        testing?: Partial<ConfigType>;
    }) {
        this.initializeConfig(config);
    }

    initializeConfig(config?: Partial<ConfigType> & {
        production?: Partial<ConfigType>;
    } & {
        development?: Partial<ConfigType>;
    } & {
        testing?: Partial<ConfigType>;
    }) {
        // To avoid overriding user's object
        config = _.cloneDeep(config);

        this.config = this.mergeObject(config, this.config);

        switch (process.env.NODE_ENV) {
            case "production":
                if ((config as any).production)
                    this.config = this.mergeObject(config!.production, this.config);
                break;
            case "development":
                if ((config as any).development)
                    this.config = this.mergeObject(config!.development, this.config);
                break;
            case "testing":
                if ((config as any).testing)
                    this.config = this.mergeObject(config!.testing, this.config);
                break;
        }

        if (process.env.SAFFRON_MODE && ["main", "worker"].includes(process.env.SAFFRON_MODE))
            this.config.mode = <any>process.env.SAFFRON_MODE;
    }

    static getOption(option: ConfigOptions, config: Config | null): any {
        switch (option) {
            case ConfigOptions.MODE:
                return config ? config.config.mode : "main";

            case ConfigOptions.SOURCES_PATH:
                return config ? config.config.sources?.path : '../../../sources';
            case ConfigOptions.SOURCES_INCLUDE_ONLY:
                return config ? config.config.sources?.includeOnly : [];
            case ConfigOptions.SOURCES_EXCLUDE:
                return config ? config.config.sources?.exclude : [];

            case ConfigOptions.WORKER_NODES:
                return config ? config.config.workers?.nodes : 1;
            case ConfigOptions.USERAGENT:
                return config ? config.config.workers?.userAgent : 'saffron';
            case ConfigOptions.TIMEOUT:
                return config ? config.config.workers?.jobs?.timeout : 10000;

            case ConfigOptions.ARTICLE_AMOUNT:
                return config ? config.config.workers?.articles?.amount : 30;
            case ConfigOptions.INCLUDE_CNT_ATTACHMENTS:
                return config ? config.config.workers?.articles?.includeContentAttachments : true;

            case ConfigOptions.JOB_INT:
                return config ? config.config.scheduler?.jobsInterval : 3600000;
            case ConfigOptions.JOB_HEAVY_INT:
                return config ? config.config.scheduler?.heavyJobFailureInterval : 86400000;
            case ConfigOptions.INT_RANDOMIZER:
                return config ? config.config.scheduler?.randomizeInterval : () => 0;
            case ConfigOptions.NO_RESPONSE_THR:
                return config ? config.config.scheduler?.noResponseThreshold : 2;

            case ConfigOptions.DISTRIBUTED:
                return config ? config.config.grid?.distributed : false;
            case ConfigOptions.HOST:
                return config ? config.config.grid?.serverHost : '127.0.0.1';
            case ConfigOptions.PORT:
                return config ? config.config.grid?.serverPort : 3000;
            case ConfigOptions.AUTH_TOKEN:
                return config ? config.config.grid?.authToken : undefined;
            case ConfigOptions.USE_HTTPS:
                return config ? config.config.grid?.useHTTPS : false;
            case ConfigOptions.HTTPS_KEY:
                return config ? config.config.grid?.key : undefined;
            case ConfigOptions.HTTPS_CERT:
                return config ? config.config.grid?.cert : undefined;

            case ConfigOptions.LOG_LEVEL:
                return config ? config.config.misc?.log : "all";
            case ConfigOptions.EVENT_DELAY:
                return config ? config.config.misc?.eventDelay : 0;
            case ConfigOptions.NEW_ARTICLES:
                return config ? config.config.newArticles : (tableName, articles) => {};
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