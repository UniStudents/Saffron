import Config, {ConfigOptions, ConfigType} from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";
import Events from "./modules/events";
import Worker from "./modules/worker";
import Article from "./components/article";
import Utils from "./modules/parsers/Utils";
import Job from "./components/job"
import Source from "./components/source"
import Instructions from "./components/instructions";
import Extensions, {PairEvent} from "./modules/extensions";
import {ParserResult, SourceFile} from "./components/types";


class Saffron {
    declare config: Config;
    declare scheduler: Scheduler;
    declare grid: Grid;
    declare events: Events;
    declare extensions: Extensions;
    declare workers: Worker[];

    constructor() {
        this.events = new Events(this);
        this.extensions = new Extensions();
    }

    /**
     * Initialize saffron with the given configuration file.
     * It will also connect to the database if it is given and add a route to the server instance if it given.
     * @param config The config file path or object
     * @param discardOldConfig
     * @see https://saffron.poiw.org
     */
    async initialize(config?: Partial<ConfigType>
        & { production?: Partial<ConfigType> }
        & { development?: Partial<ConfigType> }
        & { testing?: Partial<ConfigType> }, discardOldConfig: boolean = false) {
        // Load config file
        if(this.config == null || discardOldConfig)
            this.config = new Config(config);
        else this.config.initializeConfig(config);

        if(Config.getOption(ConfigOptions.WORKER_NODES, this.config) < 1)
            throw new Error("SaffronError Nodes must be at least 1.");

        this.events.registerLogListeners(this.config);
        this.events.emit('title');

        // Initialize and start grid
        this.grid = new Grid(this);
        if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED, this.config)) {
            try {
                await this.grid.connect();
                this.events.emit('grid.connection.okay');
            } catch (e) {
                this.events.emit('grid.connection.failed', e);
                return;
            }
        }

        // Initialize worker
        this.workers = [];
        let nodes = Config.getOption(ConfigOptions.WORKER_NODES, this.config);
        for (let i = 0; i < nodes; i++)
            this.workers.push(new Worker(this));

        // Initialize scheduler
        if (Config.getOption(ConfigOptions.SAFFRON_MODE, this.config) === 'main')
            this.scheduler = new Scheduler(this);
    }

    /**
     * Starts a Saffron instance.
     * you can set keepPreviousSession to true.
     *
     * If reset is set to false, it will not read sources' folder and no new jobs will not be generated.
     * @param reset
     */
    async start(reset: boolean = true) {
        for (let worker of this.workers) {
            // TODO - Start worker on new node thread - https://nodejs.org/api/worker_threads.html
            worker.start();
        }

        if (Config.getOption(ConfigOptions.SAFFRON_MODE, this.config) === 'main')
            await this.scheduler.start(reset);

        this.events.emit("start");
    }

    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the worker.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     */
    stop() {
        if (Config.getOption(ConfigOptions.SAFFRON_MODE, this.config) === 'main')
            this.scheduler.stop();

        for (let worker of this.workers)
            worker.stop();

        this.events.emit("stop");
    }

    /**
     * Register a new event
     * @param event The name of the event
     * @param cb The callback that will send the data
     */
    on(event: string, cb: (...args: any[]) => void) {
        this.events.on(event, cb);
    }

    /**
     * Assign an extension function.
     * @param event The event of the function.
     * @param callback The callback function that will be called.
     */
    use(event: PairEvent, callback: (...args: any[]) => any): void {
        this.extensions.push({event, callback});
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    static async parse(sourceJson: SourceFile): Promise<ParserResult[]> {
        let source = Source.parseSourceFile(sourceJson, null);
        let job = new Job(source, '', 0, null);
        return await Worker.parse(job);
    }
}

export default Saffron;
export {Article, Utils, ConfigType, Job, Source, Instructions, Saffron};
