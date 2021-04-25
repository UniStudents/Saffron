import Logger from "../modules/logger"
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
        }
    }
    
    public static isHydrated: boolean = false
    private static instance: Config

    static load(config: object | string | undefined = undefined): _type{
        if(this.instance == null)
            this.instance = new Config(config)

        return this.instance._config
    }

    private constructor(config: object | string | undefined) {
        /**
         * Loads an external configuration object and merges the parameters with the default ones.
         */
        if(typeof config === "string"){
            try {
                if(path.isAbsolute(config))
                    config = require(config);
                else
                    config = require((config.startsWith('./') ? '.' : '../') + config)
                } catch (error) {
                    Logger("install-error",`Saffron couldn\'t load the configuration file from the path specified.\n${error}\n`)
                throw new Error
            }
        }else if(!config) {
            try {
                config = require("../../saffron.json")
            } catch (error) {
                Logger("install-error","You did not supply any configuration or the supplied configuration file is improperly configured.")
                throw new Error
            }
        }
        this._config = _.mergeWith({}, this._config, config, (o, s) => s ? s : o)
        console.log(this._config);
        
        Config.isHydrated = true
    }
}