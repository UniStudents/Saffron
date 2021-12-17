import DatabaseLoader from "./modules/database/index"
import Config from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";
import Events from "./modules/events";
import Worker from "./modules/workers";

import Article from "./components/articles";
import Utils from "./components/utils";

import Job from "./components/job"
import Source from "./components/source"
import Extensions from "./modules/extensions";
import Instructions from "./components/instructions";
import Database from "./modules/database/database";
import {ConfigOptions} from "./middleware/ConfigOptions";

let db: Database
    , scheduler: Scheduler
    , workers: Worker[] = []

export = {
    /**
     * Initialize saffron with the given configuration file.
     * It will also connect to the database if it is given and add a route to the server instance if it given.
     * @param config The config file path or object
     * @see https://saffron.poiw.org
     */
    initialize: async (config: any = undefined) => {
        Events.registerLogListeners();
        Events.emit('title');

        // Load config file
        Config.load(config);

        // Initialize database
        let database = DatabaseLoader.getInstance();
        if (database == null)
            return Events.emit('database.driver.error')

        db = database;
        try {
            await db.connect()
            Events.emit('database.connection.okay')
        }
        catch (e) {
            return Events.emit('database.connection.failed')
        }

        // Initialize and start grid
        if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED)) {
            try {
                await Grid.getInstance().connect();
                Events.emit('grid.connection.okay');
            }
            catch (e) {
                return Events.emit('grid.connection.failed', e);
            }
        }

        // Initialize workers
        let workersSize = Config.getOption(ConfigOptions.WORKER_NODES);
        for (let i = 0; i < workersSize; i++)
            workers.push(new Worker());

        // Initialize scheduler
        if (Config.getOption(ConfigOptions.SAFFRON_MODE) === 'main')
            scheduler = new Scheduler();

        // Event for workers
        Events.on("start", () => {
            for (let worker of workers) {
                // TODO - Start worker on new node thread
                worker.start();
            }
        })

        Events.on("stop", (force: boolean) => {
            for (let worker of workers)
                worker.stop(force);
        })
    },

    /**
     * Starts a Saffron instance.
     */
    start: async () => Events.emit("start"),

    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the workers.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     * @param force If true then scheduler will clear all active jobs and stop all the workers. If mode is 'worker' then the worker will abandon the current job.
     */
    stop: async (force: boolean) => Events.emit("stop", force),

    /**
     * Register a new event
     * @param event The name of the event
     * @param cb The callback that will send the data
     */
    on: async (event: string, cb: (...args: any[]) => void) => Events.on(event, cb),

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    async parse(sourceJson: object): Promise<Article[]> {
        let source: Source = await Source.parseFileObject(sourceJson, true)
        source.instructions.getSource = (): Source => source;

        let job = new Job()
        job.source = {id: source.getId()}
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions

        return await Worker.parse(job);
    },

    /**
     * Assign an extension function.
     * @param event The event of the function.
     * @param callback The callback function that will be called.
     */
    use(event: string, callback: (...args: any[]) => any): void {
        Extensions.getInstance().push({event, callback})
    },

    /**
     * Returns all the articles.
     * @param src The collection name that the articles are saved.
     * @param options The options that will be applied.
     */
    async getArticles(src: string, options?: {
        pageNo?: number,
        articlesPerPage?: number,
        sort?: { [key: string]: -1 | 1 }
    }): Promise<Article[]> {
        return await DatabaseLoader.getInstance()!!.getArticles(src, options)
    },

    types: {Article, Utils}
}