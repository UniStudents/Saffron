declare function require(name:string): any;

let log: Array<any>,
    handlers: {
            [key: string]: any
        }

// Module imports
import toolbox from "./modules/toolbox"
// This is a centralized array that collects all the logs and errors, so that the report handler can easily collect and report them.

let loadConfig = {

}


export = {
    initialize: (config: any = undefined) => {
        toolbox.termlog("info","News and announcements aggregation framework.")

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
                toolbox.termlog("install-error","You did not supply any configuration. Initialization aborted")
                throw new Error
            }
        }

        setInterval(async () => log = handlers.log && log ? handlers.report(log) : [], config.reporting_interval || 1000)
    },
    start: () => {

    },
    stop: () => {

    },
    on: (event: string, callback: any) => {
        handlers[event] = callback
    }
}