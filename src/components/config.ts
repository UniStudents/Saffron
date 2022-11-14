import _ from "lodash"
import type {Article} from "./article";

export type ConfigType = {
    mode: 'main' | 'worker';
    newArticles: ((tableName: string, articles: Article[]) => void) | ((tableName: string, articles: Article[]) => Promise<void>);
    sources: Partial<{
        path: string;
        includeOnly: string[];
        exclude: string[];
    }>;
    workers: Partial<{
        nodes: number | string[];
        requests: Partial<{
            timeout: number;
            headers: {[key: string]: string | string[]};
            maxRedirects: number;
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
    HEADERS = 6,
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
    INCLUDE_CNT_ATTACHMENTS = 23,
    MAX_REDIRECTS = 23
}

const defaultConfig: ConfigType = {
    mode: "main",
    newArticles: (tableName, articles) => {
    },
    sources: {
        path: "./sources",
        includeOnly: [],
        exclude: []
    },
    workers: {
        nodes: 1, // Start one worker
        requests: {
            timeout: 10000,
            headers: {},
            maxRedirects: 5
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

export class Config {
    config: ConfigType = _.cloneDeep(defaultConfig);

    constructor(config?: Partial<ConfigType> & {
        production?: Partial<ConfigType>;
    } & {
        development?: Partial<ConfigType>;
    } & {
        testing?: Partial<ConfigType>;
    }) {
        this.initializeConfig(config);
    }

    static getOption(option: ConfigOptions, config: Config | null): any {
        const conf = config?.config ?? defaultConfig;
        
        switch (option) {
            case ConfigOptions.MODE:
                return conf.mode;

            case ConfigOptions.SOURCES_PATH:
                return conf.sources?.path;
            case ConfigOptions.SOURCES_INCLUDE_ONLY:
                return conf.sources?.includeOnly;
            case ConfigOptions.SOURCES_EXCLUDE:
                return conf.sources?.exclude;

            case ConfigOptions.WORKER_NODES:
                return conf.workers?.nodes;
            case ConfigOptions.HEADERS:
                return conf.workers?.requests?.headers;
            case ConfigOptions.TIMEOUT:
                return conf.workers?.requests?.timeout;
            case ConfigOptions.MAX_REDIRECTS:
                return conf.workers?.requests?.maxRedirects;

            case ConfigOptions.ARTICLE_AMOUNT:
                return conf.workers?.articles?.amount;
            case ConfigOptions.INCLUDE_CNT_ATTACHMENTS:
                return conf.workers?.articles?.includeContentAttachments;

            case ConfigOptions.JOB_INT:
                return conf.scheduler?.jobsInterval;
            case ConfigOptions.JOB_HEAVY_INT:
                return conf.scheduler?.heavyJobFailureInterval;
            case ConfigOptions.INT_RANDOMIZER:
                return conf.scheduler?.randomizeInterval;
            case ConfigOptions.NO_RESPONSE_THR:
                return conf.scheduler?.noResponseThreshold;

            case ConfigOptions.DISTRIBUTED:
                return conf.grid?.distributed;
            case ConfigOptions.HOST:
                return conf.grid?.serverHost;
            case ConfigOptions.PORT:
                return conf.grid?.serverPort;
            case ConfigOptions.AUTH_TOKEN:
                return conf.grid?.authToken;
            case ConfigOptions.USE_HTTPS:
                return conf.grid?.useHTTPS;
            case ConfigOptions.HTTPS_KEY:
                return conf.grid?.key;
            case ConfigOptions.HTTPS_CERT:
                return conf.grid?.cert;

            case ConfigOptions.LOG_LEVEL:
                return conf.misc?.log;
            case ConfigOptions.EVENT_DELAY:
                return conf.misc?.eventDelay;
            case ConfigOptions.NEW_ARTICLES:
                return conf.newArticles;
        }
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

    private mergeObject(src: any, original: object): any {
        return _.mergeWith({}, original, src, (o, s) => {
            if (typeof o == 'object' && !Array.isArray(o))
                return this.mergeObject(s, o);
            return s != null ? s : o;
        });
    }
}