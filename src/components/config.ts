import Logger from "../middleware/logger"
import {LoggerTypes} from "../middleware/LoggerTypes"
import _ from "lodash"
import path from "path"

interface _type {
    [key: string]: any
}

export default class Config {
    _config: _type = {
        database: {
            driver: "memory",
            config: {}
        },
        sources: {
            path: "../../../sources",
            includeOnly: [],
            excluded: []
        },
        mode: "main",
        workers: {
            nodes: 1, // Start one workers
            jobs: {
                timeout: 5000,
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
            if(Array.isArray(o))
                return s ? s : o
            else if (typeof o == 'object')
                return this.mergeObject(s, o)
            return s ? s : o
        })
    }

    /**
     * Loads an external configuration object and merges the parameters with the default ones.
     */
    static load(config: _type | string | undefined = undefined): _type {
        if (!this.instance)
            this.instance = new Config(config)

        return this.instance._config
    }

    private constructor(config: _type | string | undefined) {
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
                //@ts-ignore
                if (config.production) //this._config = _.mergeWith({}, this._config, config.production, (o, s) => s ? s : o)
                    //@ts-ignore
                    this._config = this.mergeObject(config.production, this._config)
                break
            case "development":
                //@ts-ignore
                if (config.development) // this._config = _.mergeWith({}, this._config, config.development, (o, s) => s ? s : o)
                    //@ts-ignore
                    this._config = this.mergeObject(config.development, this._config)
                break
            case "testing":
                //@ts-ignore
                if (config.testing) //this._config = _.mergeWith({}, this._config, config.testing, (o, s) => s ? s : o)
                    //@ts-ignore
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
}