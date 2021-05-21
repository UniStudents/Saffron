import Logger from "../middleware/logger"
import {LoggerTypes} from "../middleware/LoggerTypes"
import _ from "lodash"
import path from "path"

interface _type {
    [key: string]: any
}
export default class Config{
    _config: _type = {
        database:{
            driver: "",
            config: {}
        },
        sources:{
            path: "../../../sources"
        },
        mode: "main",
        workers: {
            nodes: 3 // Start three workers
        },
        scheduler: {
            intervalBetweenJobs: 60 * 60 * 1000,
            heavyJobFailureInterval: 86400000
        },
        grid: {
            distributed: false
        },
        misc: {
            log: "info"
        }
    }

    public static isHydrated: boolean = false
    private static instance: Config

    /**
     * Loads an external configuration object and merges the parameters with the default ones.
     */
    static load(config: _type | string | undefined = undefined): _type{
        if(!this.instance)
            this.instance = new Config(config)

        return this.instance._config
    }

    private constructor(config: _type | string | undefined) {
        if(typeof config === "string"){
            try {
                if(path.isAbsolute(config))
                    config = require(config);
                else
                    config = require((config.startsWith('./') ? '.' : '../') + config)
                } catch (error) {
                    Logger(LoggerTypes.INSTALL_ERROR, `Saffron couldn\'t load the configuration file from the path specified.\n${error}\n`)
                throw new Error
            }
        }else if(!config) {
            try {
                config = require("../../saffron.json")
            } catch (error) {
                Logger(LoggerTypes.INSTALL_ERROR,"You did not supply any configuration or the supplied configuration file is improperly configured.")
                throw new Error
            }
        }

        this._config = _.mergeWith({}, this._config, config, (o, s) => s ? s : o)

        switch(process.env.NODE_ENV){
            case "production":
                //@ts-ignore
                if(config.production) this._config = _.mergeWith({}, this._config, config.production, (o, s) => s ? s : o)
                break
            case "development":
                //@ts-ignore
                if(config.development) this._config = _.mergeWith({}, this._config, config.development, (o, s) => s ? s : o)
                break
            case "testing":
                //@ts-ignore
                if(config.testing) this._config = _.mergeWith({}, this._config, config.testing, (o, s) => s ? s : o)
                break
            default:

        }

        delete this._config.development
        delete this._config.production
        delete this._config.testing

        Config.isHydrated = true
    }
}