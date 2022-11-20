import {Config, ConfigOptions, ConfigType} from "./components/config"
import {Scheduler} from "./modules/scheduler";
import {Grid} from "./modules/grid";
import {Events} from "./modules/events";
import {Worker} from "./modules/worker";
import {Job} from "./components/job"
import {Source} from "./components/source"
import {Extensions, PairEvent} from "./modules/extensions";
import type {ParserResult, SourceFile} from "./components/types";

export class Saffron {
    declare config: Config;
    declare scheduler: Scheduler;
    declare grid: Grid;
    declare workers: Worker[];

    readonly events: Events;
    readonly extensions: Extensions;

    constructor() {
        this.events = new Events(this);
        this.extensions = new Extensions();
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param obj The json object of the source file.
     * @throws if there is a problem parsing or scraping.
     */
    static async parse(obj: SourceFile): Promise<ParserResult[]> {
        const source = Source.parseSourceFile(obj, null);
        const job = new Job(source, '', 0, null);
        return await Worker.parse(job);
    }

    /**
     * Initialize saffron with the given configuration file.
     * It will also connect to the database if it is given and add a route to the server instance if it given.
     * @param config The config file path or object
     * @param discardOldConfig
     */
    initialize(config?: Partial<ConfigType>
        & { production?: Partial<ConfigType> }
        & { development?: Partial<ConfigType> }
        & { testing?: Partial<ConfigType> }, discardOldConfig: boolean = false) {
        // Load config file
        if (this.config == null || discardOldConfig)
            this.config = new Config(config);
        else this.config.initializeConfig(config);

        this.events.registerLogListeners(this.config);
        this.events.emit('title');

        // Initialize and start grid
        this.grid = new Grid(this);
        if (Config.getOption(ConfigOptions.DISTRIBUTED, this.config))
            this.grid.connect();

        // Initialize worker
        const nodes = Config.getOption(ConfigOptions.WORKER_NODES, this.config);
        this.workers = [];
        if (Array.isArray(nodes)) {
            if ((new Set(nodes)).size !== nodes.length)
                throw new Error("worker.nodes cannot have duplicates names");

            for (const n of nodes)
                this.workers.push(new Worker(this, n));
        } else {
            for (let i = 0; i < nodes; i++)
                this.workers.push(new Worker(this));
        }

        // Initialize scheduler
        if (Config.getOption(ConfigOptions.MODE, this.config) === 'main')
            this.scheduler = new Scheduler(this);
    }

    /**
     * Starts a Saffron instance.
     * If reset is set to false, it will not read source folder and no new jobs will not be generated.
     * @param reset Defaults to true
     */
    async start(reset: boolean = true) {
        for (const worker of this.workers)
            worker.start();

        if (Config.getOption(ConfigOptions.MODE, this.config) === 'main')
            await this.scheduler.start(reset);

        this.events.emit("start");
    }

    /** Stops the saffron instance */
    stop() {
        if (Config.getOption(ConfigOptions.MODE, this.config) === 'main')
            this.scheduler.stop();

        for (const worker of this.workers)
            worker.stop();

        this.events.emit("stop");
    }

    /** Register a new event */
    on(event: string, cb: (...args: any[]) => void) {
        this.events.on(event, cb);
    }

    /** Append a new middleware to the queue */
    use(event: PairEvent, callback: (...args: any[]) => any): void {
        this.extensions.push({event, callback});
    }
}