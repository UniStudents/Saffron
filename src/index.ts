// Module imports
import Logger from "./modules/logger"
import Database from "./modules/database/index"
import Config from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";

declare function require(name:string): any;

// This is a centralized array that collects all the logs and errors, so that the report handler can easily collect and report them.
let log: Array<any>
    , handlers: { [key: string]: any }
    , loadConfig = {}
    , db: any
    , grid: Grid
    , scheduler: Scheduler

export = {
    /**
     * Initialize saffron with the given configuration file.
     * It will also connect to the database if it is given and add a route to the server instance if it given.
     * @param config The config file path or object
     * @see https://github.com/poiw-org/saffron/wiki
     */
    initialize: async (config: any = undefined) => {
        Logger("info","News and announcements aggregation framework.")

        // Load config file
        Config.load(config)

        // Initialize database
        let database = Database.getInstance()
        if(database == null){
            throw new Error("Database driver is not valid")
        }
        db = database
        await db.connect()
            .then(()=>Logger("step", "Successfully connected to the offload database."))

        // Initialize and start grid
        grid = new Grid(db)
        await grid.connect()
            .then(()=>Logger("step", "The grid module has been initialized. Saffron will now search and connect to other counterpart nodes."))

        // Initialize scheduler
        scheduler = new Scheduler(db)
    },
    /**
     * Starts a Saffron instance.
     */
    start: async () => {
        await scheduler.start()
    },
    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the workers.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     * @param force_stop If true then scheduler will clear all active jobs and stop all the workers. If mode is 'worker' then the worker will abandon the current job.
     */
    stop: async (force_stop: boolean) => {
        await scheduler.stop()
    },
    /**
     * Register a new callback for a specific event.
     * @param event Acceptable values: ['new_article', 'saffron_log']
     * @param callback The callback that will be used to pass the data
     */
    on: (event: string, callback: any) => {
        return
    }
}