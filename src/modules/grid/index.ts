import Job from "../../components/job";
import Events from "../events";
import {JobStatus} from "../../components/JobStatus";
import Worker from "../workers";
import Config from "../../components/config";
import Article from "../../components/article";
import {ConfigOptions} from "../../middleware/ConfigOptions";
import Extensions from "../extensions";
import Source from "../../components/source";
import Scheduler from "../scheduler";
import * as ServerIO from "socket.io"
import * as ClientIO from "socket.io-client";
import * as http from "http";
import * as https from "https";
import {ParserResult} from "../../components/types";
import {pack, unpack} from "../../middleware/serializer";


export default class Grid {

    private static instance: Grid

    private declare readonly isMain: boolean
    private declare readonly workersIds: string[];
    private declare readonly workersClients: { workersIds: string[], socketId: string }[];

    private declare readonly http_s_server: any;
    private declare readonly server: ServerIO.Server;
    private declare readonly client: ClientIO.Socket;

    private constructor() {
        this.isMain = Config.getOption(ConfigOptions.SAFFRON_MODE) === 'main';
        this.workersIds = [];
        this.workersClients = [];

        if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED)) {
            if (typeof Config.getOption(ConfigOptions.GRID_AUTH) !== 'string')
                throw new Error('InvalidAuthException The grid authToken must be type string on distributed: true');
        }

        if (this.isMain) {
            if (Config.getOption(ConfigOptions.GRID_USE_HTTP))
                this.http_s_server = https.createServer({
                    key: Config.getOption(ConfigOptions.GRID_HTTPS_KEY),
                    cert: Config.getOption(ConfigOptions.GRID_HTTPS_CERT)
                });
            else
                this.http_s_server = http.createServer();

            this.server = new ServerIO.Server(this.http_s_server, {
                serveClient: false, // No reason to server bundle client files
                connectTimeout: 30 * 1000,
            });
        } else {
            let url = Config.getOption(ConfigOptions.GRID_USE_HTTP) ? 'http://' : 'https://';
            url += Config.getOption(ConfigOptions.GRID_SERVER_ADDRESS);

            const serverPort = Config.getOption(ConfigOptions.GRID_SERVER_ADDRESS);
            if (serverPort != null) url += `:${serverPort}`;

            this.client = ClientIO.io(url, {
                reconnectionDelay: 5 * 1000,
                timeout: 15 * 1000,
                autoConnect: false,
                auth: {
                    token: Config.getOption(ConfigOptions.GRID_AUTH)
                }
            });
        }
    }

    /**
     * Returns an instance of Grid
     */
    static getInstance(): Grid {
        if (this.instance == null)
            this.instance = new Grid();

        return this.instance;
    }

    emit(eventName: string, ...args: any[]): void {
        if (!Config.getOption(ConfigOptions.GRID_DISTRIBUTED))
            return;

        if (this.isMain) {
            if (eventName === 'scheduler.job.push') {
                let job = args[0];
                this.server.emit(eventName, pack(job));
            }
        } else {
            if (['workers.job.finished', 'workers.job.failed', 'grid.worker.announced', 'grid.worker.destroyed'].includes(eventName))
                this.client.emit(eventName, ...args);
        }
    }

    /**
     * Connect to grid network.
     */
    async connect(): Promise<void> {
        if (this.isMain) {
            if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED)) {
                this.server.on("connection", socket => {
                    const clientAuthToken = socket.handshake.auth.token;
                    if (!clientAuthToken || clientAuthToken !== Config.getOption(ConfigOptions.GRID_AUTH)) {
                        socket.disconnect();
                        return;
                    }

                    Events.emit('grid.node.connected', socket);

                    socket.on("disconnect", () => {
                        Events.emit('grid.node.disconnected', socket);
                    });

                    socket.on("workers.job.finished", jobId => {
                        Scheduler.getInstance().changeJobStatus(jobId, JobStatus.FINISHED);
                    });

                    socket.on("workers.job.failed", jobId => {
                        Scheduler.getInstance().changeJobStatus(jobId, JobStatus.FAILED);
                    });

                    socket.on("grid.worker.announced", id => {
                        this.workersIds.push(id);
                    });

                    socket.on("grid.worker.destroyed", workerId => {
                        let index = this.workersIds.findIndex(id => id === workerId);
                        if (index !== -1)
                            this.workersIds.splice(index, 1);
                    });
                });

                this.http_s_server.listen(Config.getOption(ConfigOptions.GRID_SERVER_PORT));
            }
        } else if (Config.getOption(ConfigOptions.WORKER_NODES) > 0) {
            this.client.on('connect', () => {
                for (const workerId of this.workersIds)
                    Events.emit("grid.worker.announced", workerId);
            });

            this.client.on('scheduler.job.push', (newJob: any) => {
                newJob = unpack(newJob);
                Events.emit("scheduler.job.push", newJob);
            });

            await this.client.connect();
        }
    }

    /**
     * Return all connected workers' ids.
     * This function is used by the scheduler to access all the connected workers.
     */
    getWorkers(): string[] {
        return this.workersIds;
    }

    /**
     * <h1>Worker</h1>
     * Initialize a new worker on the grid
     * @param worker
     */
    announceWorker(worker: Worker): void {
        this.workersIds.push(worker.id)
        Events.emit("grid.worker.announced", worker.id);
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    destroyWorker(worker: Worker): void {
        let index = this.workersIds.findIndex(id => id == worker.id)
        this.workersIds.splice(index, 1)
        Events.emit("grid.worker.destroyed", worker.id)
    }

    /**
     * Forcefully remove a worker from the grid
     * @param workerId
     */
    fireWorker(workerId: string): void {
        if (!this.isMain) return

        let index = this.workersClients.findIndex(js => {
            let index = js.workersIds.findIndex(id => id == workerId)
            return index !== -1;
        })

        if (index != -1) {
            let j = this.workersIds.findIndex((obj: string) => obj === workerId)
            if (j != -1) this.workersIds.splice(j, 1)

            let k = this.workersClients[index].workersIds.findIndex(id => workerId == id)
            if (k != -1) this.workersClients[index].workersIds.splice(k, 1)
        }

        let k = this.workersIds.findIndex(id => workerId == id)
        if (k != -1) this.workersIds.splice(k, 1)
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as finished and update the grid
     * @param job
     */
    async finishedJob(job: Job): Promise<void> {
        job.status = JobStatus.FINISHED;
        if (this.isMain)
            Events.emit('workers.job.finished', job.id);
        else
            await this.client.emit('workers.job.finished', job.id);
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        job.status = JobStatus.FAILED;
        if (this.isMain)
            Events.emit("workers.job.failed", job.id);
        else
            await this.client.emit('workers.job.failed', job.id);
    }

    /**
     * Will be called from both the main and sub programs
     * @param source
     * @param tableName
     * @param result
     */
    async mergeArticles(source: Source, tableName: string, result: ParserResult[]): Promise<void> {
        let articles: Article[] = [];
        result.forEach(res => articles.push(...res.articles));

        Events.emit("workers.articles.found", articles, tableName); // Can be empty array
        if (articles.length == 0) return;

        articles.forEach(article => article.timestamp = Date.now());

        Events.emit("middleware.before", articles);

        let getExtPair = Extensions.getInstance().startCount();
        let pair: any;
        while ((pair = getExtPair()) != null) {
            if (pair.event === 'article.format') {
                for (const i in articles)
                    articles[i] = await pair.callback(articles[i]);
            } else if (pair.event === 'articles') {
                articles = await pair.callback(articles);
            }
        }

        Events.emit("middleware.after", articles);

        // TODO - use result and request each category for separate checks

        let dbArticles: Article[];
        try {
            dbArticles = await Config.getOption(ConfigOptions.DB_GET_ARTICLES)({
                tableName,
                count: articles.length >= 5 ? articles.length * 2 : 10
            });
        } catch (e) {
            Events.emit("database.get.error", source, e);
            return;
        }

        // And then check if they already exist.
        let hashes = dbArticles.map((article: Article) => article.getHash());
        articles = articles.filter((article: Article) => !hashes.includes(article.getHash()));
        Events.emit("workers.articles.new", articles, tableName); // Can be empty array

        try {
            await Config.getOption(ConfigOptions.DB_PUSH_ARTICLES)(articles);
        }  catch (e) {
            Events.emit("database.set.error", source, e);
            return;
        }

        Events.emit("database.set.okay", source, articles);
    }
}