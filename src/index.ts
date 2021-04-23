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
    /**
     * Initialize saffron with the given configuration file.
     * It will also connect to the database if it is given and add a route to the server instance if it given.
     * @param config The config file path or object
     * @see https://github.com/poiw-org/saffron/wiki
    */
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
    /**
     * Starts a Saffron instance.
     */
    start: () => {

    },
    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the workers.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     * @param force_stop If true then scheduler will clear all active jobs and stop all the workers. If mode is 'worker' then the worker will abandon the current job.
     */
    stop: (force_stop: boolean) => {

    },
    /**
     * Register a new callback for a specific event.
     * @param event Acceptable values: ['new_article', 'saffron_log']
     * @param callback The callback that will be used to pass the data
     */
    on: (event: string, callback: any) => {
        handlers[event] = callback
    }
}