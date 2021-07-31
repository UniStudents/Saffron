// Module imports
import Logger from "./middleware/logger"
import {LoggerTypes} from "./middleware/LoggerTypes"
import Database from "./modules/database/index"
import Config from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";
import Events from "./modules/events";
import Worker from "./modules/workers";

import Article from "./components/articles";
import Utils from "./components/utils";
import Exceptions from "./components/exceptions";

import Job from "./components/job"
import Source from "./components/source"

declare function require(name: string): any;

// This is a centralized array that collects all the logs and errors, so that the report handler can easily collect and report them.
let db: any
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
        Logger(LoggerTypes.TITLE, "Simple Abstract Framework For the Retrieval Of News")

        // Load config file
        Config.load(config)

        // Initialize database
        let database = Database.getInstance()
        if (database == null) {
            Logger(LoggerTypes.INSTALL_ERROR, "Database driver is not valid")
        }
        db = database
        await db.connect()
            .then(() => Logger(LoggerTypes.STEP, "Successfully connected to the offload database."))

        // Initialize and start grid
        if (Config.load().grid.distributed) {
            grid = Grid.getInstance();
            await grid.connect()
                .then(() => Logger(LoggerTypes.STEP, "The grid module has been initialized. Saffron will now search and connect to other counterpart nodes."))
        }

        // Initialize workers
        let workersSize = Config.load().workers.nodes
        for (let i = 0; i < workersSize; i++)
            workers.push(new Worker())

        // Initialize scheduler
        if (Config.load().mode === 'main')
            scheduler = new Scheduler()
        else
            Logger(LoggerTypes.INFO, "This instance has been initialized as a WORKER node.")

        // Event for workers
        antennae.on("start", () => {
            for (let worker of workers) {
                // TODO - Start worker on new thread
                worker.start()
            }
        })

        antennae.on("stop", (force: boolean) => {
            for (let worker of workers)
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
     * Register a new event
     * @param event The name of the event
     * @param data The callback that will send the data
     */
    on: async (event: string, data: any) => antennae.on(event, data),

    /**
     * Get a source file and return an array of the parsed articles
     * @param fileContents
     */
    async parse(fileContents: any): Promise<Array<Article> | undefined> {
        let source = await Source.parseFileObject(fileContents, true)
        if (!source) return

        return Worker.parse(source.instructions, new Job())
    },

    types: {Article, Utils, Exceptions}
}