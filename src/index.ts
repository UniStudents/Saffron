import Config, {ConfigType} from "./components/config"
import Scheduler from "./modules/scheduler";
import Grid from "./modules/grid";
import Events from "./modules/events";
import Worker from "./modules/workers";
import Article from "./components/article";
import Utils from "./modules/parsers/Utils";
import Job from "./components/job"
import Source from "./components/source"
import Instructions from "./components/instructions";
import {ConfigOptions} from "./middleware/ConfigOptions";
import Extensions from "./modules/extensions";
import {ParserResult} from "./components/types";


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
    async initialize(config?: Partial<ConfigType>) {
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
            this.scheduler = Scheduler.getInstance();

        // Event for workers
        Events.on("start", () => {
            for (let worker of this.workers) {
                // TODO - Start worker on new node thread - https://nodejs.org/api/worker_threads.html
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
     * @param keepPreviousSession If you want to start and stop the saffron without interrupting the schedule
     * you can set keepPreviousSession to true.
     */
    async start(keepPreviousSession: boolean = false) {
        Events.emit("start", keepPreviousSession);
    }

    /**
     * Stops the saffron instance
     * If mode equals 'main' then the scheduler will stop giving jobs to the workers.
     * else if mode equals 'worker' then the worker will stop getting future jobs and disconnect from the main saffron instance.
     */
    async stop() {
        Events.emit("stop")
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
     * Assign an extension function.
     * @param event The event of the function.
     * @param callback The callback function that will be called.
     */
    use(event: string, callback: (...args: any[]) => any): void {
        Extensions.getInstance().push({event, callback})
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    static async parse(sourceJson: object): Promise<ParserResult[]> {
        let source: Source = await Source.fileToSource(sourceJson);
        source.instructions.getSource = (): Source => source;

        let job = Job.createJob(source.getId(), '', 0);
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions;

        return await Worker.parse(job);
    }

    /**
     * Get current source files.
     * By editing the result of this function the main sources will be edited as well.
     */
    getSources(): Source[] {
        return Source.getSources();
    }

    /**
     * Get current jobs.
     * By editing the result of this function the jobs will be edited as well.
     */
    getJobs(): Job[] {
        if(this.scheduler != null)
            return this.scheduler.getJobs();
        throw new Error('Scheduler is not initialized. Set mode main to get active jobs');
    }

    /**
     * Replace the current running jobs.
     * @param jobs
     */
    replaceCurrentJobs(jobs: Job[]) {
        this.scheduler.replaceCurrentJobs(jobs);
    }
};

export {Article, Utils};