// Module imports
import Logger from "./middleware/logger"
import Database from "./modules/database/index"
import Config from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";
import Events from "./modules/events";
import Worker from "./modules/workers";

declare function require(name:string): any;

// This is a centralized array that collects all the logs and errors, so that the report handler can easily collect and report them.
let log: Array<any>
    , handlers: { [key: string]: any }
    , loadConfig = {}
    , db: any
    , grid: any
    , scheduler: Scheduler
    , antennae = Events.getAntennae()
    , workers: Worker[] = []

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
        grid = Grid.getInstance();
        await grid.connect()
            .then(()=>Logger("step", "The grid module has been initialized. Saffron will now search and connect to other counterpart nodes."))

        // Initialize scheduler
        if(Config.load().mode === 'main')
            scheduler = new Scheduler()

        // Initialize workers
        let workersSize = Config.load().workers.nodes
        for(let i = 0; i < workersSize; i++){
            workers.push(new Worker())
        }

        // Event for workers
        antennae.on("start", () => {
            for(let worker of workers)
                worker.start()
        })
        antennae.on("stop", (force: boolean) => {
            for(let worker of workers)
                worker.stop(force)
        })
    },
    /**
     * Starts a Saffron instance.
     */
    start: async () => antennae.emit("start"),
    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the workers.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     * @param force If true then scheduler will clear all active jobs and stop all the workers. If mode is 'worker' then the worker will abandon the current job.
     */
    stop: async (force: boolean) => antennae.emit("stop", force),
    /**
     * Register a new callback for a specific event.
     * @param event The event
     * @param callback The callback that will be used to pass the data
     */
    on: antennae.on
}