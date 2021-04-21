declare function require(name:string): any;

let log: Array<any>

// Module imports
import toolbox from "./modules/toolbox"
// This is a centralized array that collects all the logs and errors, so that the report handler can easily collect and report them.


export = {
    initialize: (config: any = undefined) => {
        if(typeof config === "string"){
            try {
                config = require(config);
            } catch (error) {
                toolbox.termlog("Saffron couldn\'t load the configuration file from the path specified.", "install-error")
            }
        }else if(typeof config === "undefined") {
            try {
                config = require("../../saffron.json")
            } catch (error) {
                toolbox.termlog("install-error","You did not supply any configuration. Initialization aborted")
                throw new Error
            }
        }

        setInterval(async () => log = toolbox.report(log), config.reporting_interval || 5000)
        toolbox.termlog("Initialization successful","info")
    },
    start: () => {

    },
    stop: () => {

    },
    on: {

    },
}