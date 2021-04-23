import toolbox from "../modules/toolbox"

export class Config {
    database: object = {
        driver: String,
        config: Object,
    }
    workers = {
        instances: 3
    }

    private static instance: Config

    static load(config: object | string | undefined = undefined): Config{
        if(this.instance == null)
            this.instance = new Config(config)

        return this.instance
    }

    private constructor(config: object | string | undefined) {
        /**
         * Loads an external configuration object and merges the parameters with the default ones.
         */
        if(typeof config === "string"){
            try {
                config = require(config);
            } catch (error) {
                toolbox.termlog("install-error",`Saffron couldn\'t load the configuration file from the path specified.\n${error}\n`)
                throw new Error
            }
        }else if(!config) {
            try {
                config = require("../../saffron.json")
            } catch (error) {
                toolbox.report(error)
                toolbox.termlog("install-error","You did not supply any configuration or the supplied configuration file is improperly configured.")
                throw new Error
            }
        }
        // @ts-ignore
        for(let key: string in config){
            this.database = config[key]
        
        }
    }
}