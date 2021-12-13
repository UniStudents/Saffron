import Logger from "../middleware/logger"
import {LoggerTypes} from "../middleware/LoggerTypes"
import _ from "lodash"
import path from "path"
import {ConfigOptions} from "../middleware/ConfigOptions";


export default class Config {
    _config: { [key: string]: any } = {
        database: {
            driver: "none",
            config: {}
        },
        sources: {
            path: "../../../sources",
            includeOnly: [],
            excluded: []
        },
        mode: "main",
        workers: {
            nodes: 1, // Start one worker
            jobs: {
                timeout: 10000,
                amount: 10
            }
        },
        scheduler: {
            intervalBetweenJobs: 3600000,
            heavyJobFailureInterval: 86400000,
            intervalBetweenChecks: 120000
        },
        grid: {
            distributed: false
        },
        misc: {
            log: "all"
        }
    }

    public static isHydrated: boolean = false
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
    static load(config?: object | string): any {
        if (!this.instance)
            this.instance = new Config(config)

        return this.instance._config
    }

    private constructor(config: any) {
        if (typeof config === "string") {
            try {
                if (path.isAbsolute(config))
                    config = require(config);
                else
                    config = require((config.startsWith('./') ? '.' : '../') + config)
            } catch (error: any) {
                Logger(LoggerTypes.INSTALL_ERROR, `Saffron couldn\'t load the configuration file from the path specified.\n${error}\n`)
                throw new Error(error)
            }
        } else if (!config) {
            try {
                config = require("../../saffron.json")
            } catch (error: any) {
                Logger(LoggerTypes.INSTALL_ERROR, "You did not supply any configuration or the supplied configuration file is improperly configured.")
                throw new Error(error)
            }
        }

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

        if (process.env.SAFFRON_MODE && ["main", "worker"].includes(process.env.SAFFRON_MODE)) {
            this._config.mode = process.env.SAFFRON_MODE
        }

        delete this._config.development
        delete this._config.production
        delete this._config.testing

        Config.isHydrated = true
    }

    static getOption(option: ConfigOptions): any {
        let isStatic: boolean = false;
        try {Config.load()}
        catch (e) {
            isStatic = true;
        }

        switch (option) {
            case ConfigOptions.DB_DRIVER:
                return !isStatic ? Config.load().database.driver : "memory";
            case ConfigOptions.DB_CONFIG:
                return !isStatic ? Config.load().database.config : {};
            case ConfigOptions.SOURCES_PATH:
                return !isStatic ? Config.load().sources.path : '../../../sources';
            case ConfigOptions.SOURCES_INCLUDE_ONLY:
                return !isStatic ? Config.load().sources.includeOnly : [];
            case ConfigOptions.SOURCES_EXCLUDE:
                return !isStatic ? Config.load().sources.excluded : [];
            case ConfigOptions.SAFFRON_MODE:
                return !isStatic ? Config.load().mode : "main";
            case ConfigOptions.WORKER_NODES:
                return !isStatic ? Config.load().workers.nodes : 1;
            case ConfigOptions.REQUEST_TIMEOUT:
                return !isStatic ? Config.load().workers.jobs.timeout : 10000;
            case ConfigOptions.ARTICLE_AMOUNT:
                return !isStatic ? Config.load().workers.jobs.amount : 10;
            case ConfigOptions.SCHEDULER_JOB_INT:
                return !isStatic ? Config.load().scheduler.intervalBetweenJobs : 3600000;
            case ConfigOptions.SCHEDULER_JOB_HEAVY_INT:
                return !isStatic ? Config.load().scheduler.heavyJobFailureInterval : 86400000;
            case ConfigOptions.SCHEDULER_CHECKS_INT:
                return !isStatic ? Config.load().scheduler.intervalBetweenChecks : 120000;
            case ConfigOptions.GRID_DISTRIBUTED:
                return !isStatic ? Config.load().grid.distributed : false;
            case ConfigOptions.MISC_LOG_LEVEL:
                return !isStatic ? Config.load().misc.log : "all";
        }
    }
}