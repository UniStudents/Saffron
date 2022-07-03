import _ from "lodash"
import {ConfigOptions} from "../middleware/ConfigOptions";
import Article from "./articles";

export default class Config {
    _config: { [key: string]: any } = {
        mode: "main",
        database: {
            pushArticles: async (articles: Article[]): Promise<void> => {

            },
            getArticles: async (opts: {
                tableName: string;
            }): Promise<any[]> => {
                return [];
            }
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
            distributed: false
        },
        misc: {
            log: "all"
        }
    }

    private static instance: Config

    private mergeObject(src: any, original: object): object {
        return _.mergeWith({}, original, src, (o, s) => {
            if (Array.isArray(o))
                return s ? s : o
            else if (typeof o == 'object')
                return this.mergeObject(s, o)
            return s ? s : o
        })
    }

    /**
     * Loads an external configuration object and merges the parameters with the default ones.
     */
    static load(config?: object): any {
        if (!this.instance)
            this.instance = new Config(config)

        return this.instance._config
    }

    private constructor(config?: any) {
        this._config = this.mergeObject(config, this._config)

        switch (process.env.NODE_ENV) {
            case "production":
                if (config.production)
                    this._config = this.mergeObject(config.production, this._config)
                break
            case "development":
                if (config.development)
                    this._config = this.mergeObject(config.development, this._config)
                break
            case "testing":
                if (config.testing)
                    this._config = this.mergeObject(config.testing, this._config)
                break
            default:

        }

        if (process.env.SAFFRON_MODE && ["main", "worker"].includes(process.env.SAFFRON_MODE))
            this._config.mode = process.env.SAFFRON_MODE
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
            case ConfigOptions.GRID_PORT:
                return !isStatic ? Config.load().grid.port : 3000;

            case ConfigOptions.MISC_LOG_LEVEL:
                return !isStatic ? Config.load().misc.log : "all";

            case ConfigOptions.DB_PUSH_ARTICLES:
                return !isStatic ? Config.load().database.pushArticles : (articles: Article[]) => {};
            case ConfigOptions.DB_GET_ARTICLES:
                return !isStatic ? Config.load().database?.getArticles : (opts: any) => [];
        }
    }
}