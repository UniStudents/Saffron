import Config from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";
import Events from "./modules/events";
import Worker from "./modules/workers";
import Article from "./components/articles";
import Utils from "./components/utils";
import Job from "./components/job"
import Source from "./components/source"
import Instructions from "./components/instructions";
import {ConfigOptions} from "./middleware/ConfigOptions";
import Extensions from "./modules/extensions";


export default class Saffron {

    private declare scheduler: Scheduler;
    private declare workers: Worker[];

    constructor() {
    }

    /**
     * Initialize saffron with the given configuration file.
     * It will also connect to the database if it is given and add a route to the server instance if it given.
     * @param config The config file path or object
     * @see https://saffron.poiw.org
     */
    async initialize(config: any = undefined) {
        // Load config file
        Config.load(config);

        Events.registerLogListeners();
        Events.emit('title');

        // Initialize and start grid
        if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED)) {
            try {
                await Grid.getInstance().connect();
                Events.emit('grid.connection.okay');
            } catch (e) {
                return Events.emit('grid.connection.failed', e);
            }
        }

        // Initialize workers
        this.workers = [];
        let workersSize = Config.getOption(ConfigOptions.WORKER_NODES);
        for (let i = 0; i < workersSize; i++)
            this.workers.push(new Worker());

        // Initialize scheduler
        if (Config.getOption(ConfigOptions.SAFFRON_MODE) === 'main')
            this.scheduler = new Scheduler();

        // Event for workers
        Events.on("start", () => {
            for (let worker of this.workers) {
                // TODO - Start worker on new node thread
                worker.start();
            }
        })

        Events.on("stop", (force: boolean) => {
            for (let worker of this.workers)
                worker.stop(force);
        })
    }

    /**
     * Starts a Saffron instance.
     */
    async start() {
        Events.emit("start")
    }

    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the workers.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     * @param force If true then scheduler will clear all active jobs and stop all the workers. If mode is 'worker' then the worker will abandon the current job.
     */
    async stop(force: boolean) {
        Events.emit("stop", force)
    }

    /**
     * Register a new event
     * @param event The name of the event
     * @param cb The callback that will send the data
     */
    async on(event: string, cb: (...args: any[]) => void) {
        Events.on(event, cb)
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    async parse(sourceJson: object): Promise<Article[]> {
        let source: Source = await Source.fileToSource(sourceJson)
        source.instructions.getSource = (): Source => source;

        let job = new Job()
        job.source = {id: source.getId()}
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions

        return await Worker.parse(job);
    }

    /**
     * Assign an extension function.
     * @param event The event of the function.
     * @param callback The callback function that will be called.
     */
    use(event: string, callback: (...args: any[]) => any): void {
        Extensions.getInstance().push({event, callback})
    }
};

export {Article, Utils};