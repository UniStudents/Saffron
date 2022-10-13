import Job, {JobStatus} from "../../components/job";
import Worker from "../worker";
import Config, {ConfigOptions} from "../../components/config";
import Article from "../../components/article";
import Source from "../../components/source";
import * as ServerIO from "socket.io"
import * as ClientIO from "socket.io-client";
import * as http from "http";
import * as https from "https";
import {ParserResult} from "../../components/types";
import {pack, unpack} from "../../middleware/serializer";
import {Saffron} from "../../index.js";


export default class Grid {

    private declare readonly isMain: boolean;
    private declare readonly workersIds: string[];

    private declare readonly http_s_server: any;
    private declare readonly server: ServerIO.Server;
    private declare readonly client: ClientIO.Socket;

    constructor(private readonly saffron: Saffron) {
        this.isMain = Config.getOption(ConfigOptions.SAFFRON_MODE, this.saffron.config) === 'main';
        this.workersIds = [];

        if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED, this.saffron.config)) {
            if (typeof Config.getOption(ConfigOptions.GRID_AUTH, this.saffron.config) !== 'string')
                throw new Error('InvalidAuthException The grid authToken must be type string on distributed: true');
        }

        if (this.isMain) {
            if (Config.getOption(ConfigOptions.GRID_USE_HTTP, this.saffron.config))
                this.http_s_server = https.createServer({
                    key: Config.getOption(ConfigOptions.GRID_HTTPS_KEY, this.saffron.config),
                    cert: Config.getOption(ConfigOptions.GRID_HTTPS_CERT, this.saffron.config)
                });
            else
                this.http_s_server = http.createServer();

            this.server = new ServerIO.Server(this.http_s_server, {
                serveClient: false, // No reason to server bundle client files
                connectTimeout: 30 * 1000,
            });
        } else {
            let url = Config.getOption(ConfigOptions.GRID_USE_HTTP, this.saffron.config) ? 'http://' : 'https://';
            url += Config.getOption(ConfigOptions.GRID_SERVER_ADDRESS, this.saffron.config);

            const serverPort = Config.getOption(ConfigOptions.GRID_SERVER_ADDRESS, this.saffron.config);
            if (serverPort != null) url += `:${serverPort}`;

            this.client = ClientIO.io(url, {
                reconnectionDelay: 5 * 1000,
                timeout: 15 * 1000,
                autoConnect: false,
                auth: {
                    token: Config.getOption(ConfigOptions.GRID_AUTH, this.saffron.config)
                }
            });
        }
    }

    emit(eventName: string, ...args: any[]): void {
        if (!Config.getOption(ConfigOptions.GRID_DISTRIBUTED, this.saffron.config))
            return;

        if (this.isMain) {
            if (eventName === 'scheduler.job.push') {
                let job: Job = args[0];
                this.server.emit(eventName, pack(job));
            }
        } else {
            if (['worker.job.finished', 'worker.job.failed', 'grid.worker.announced', 'grid.worker.destroyed'].includes(eventName))
                this.client.emit(eventName, ...args);
        }
    }

    /**
     * Connect to grid network.
     */
    async connect(): Promise<void> {
        if (this.isMain) {
            if (Config.getOption(ConfigOptions.GRID_DISTRIBUTED, this.saffron.config)) {
                this.server.on("connection", socket => {
                    const clientAuthToken = socket.handshake.auth.token;
                    if (!clientAuthToken || clientAuthToken !== Config.getOption(ConfigOptions.GRID_AUTH, this.saffron.config)) {
                        socket.disconnect();
                        return;
                    }

                    this.saffron.events.emit('grid.node.connected', socket);

                    socket.on("disconnect", () => {
                        this.saffron.events.emit('grid.node.disconnected', socket);
                    });

                    socket.on("worker.job.finished", jobId => {
                        this.saffron.scheduler.changeJobStatus(jobId, JobStatus.FINISHED);
                    });

                    socket.on("worker.job.failed", jobId => {
                        this.saffron.scheduler.changeJobStatus(jobId, JobStatus.FAILED);
                    });

                    socket.on("grid.worker.announced", id => {
                        if(!this.workersIds.find(wId => wId === id))
                            this.workersIds.push(id);
                    });

                    socket.on("grid.worker.destroyed", workerId => {
                        let index = this.workersIds.findIndex(id => id === workerId);
                        if (index !== -1)
                            this.workersIds.splice(index, 1);
                    });
                });

                this.http_s_server.listen(Config.getOption(ConfigOptions.GRID_SERVER_PORT, this.saffron.config));
            }
        } else if (Config.getOption(ConfigOptions.WORKER_NODES, this.saffron.config) > 0) {
            this.client.on('connect', () => {
                for (const workerId of this.workersIds)
                    this.saffron.events.emit("grid.worker.announced", workerId);
            });

            this.client.on('scheduler.job.push', (newJobStr: string) => {
                let newJob: Job = unpack(newJobStr);
                this.saffron.events.emit("scheduler.job.push", newJob);
            });

            await this.client.connect();
        }
    }

    /**
     * Return all connected worker' ids.
     * This function is used by the scheduler to access all the connected worker.
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
        this.saffron.events.emit("grid.worker.announced", worker.id);
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    destroyWorker(worker: Worker): void {
        let index = this.workersIds.findIndex(id => id == worker.id);
        this.workersIds.splice(index, 1);
        this.saffron.events.emit("grid.worker.destroyed", worker.id);
    }

    /**
     * Forcefully remove a worker from the grid
     * @param sourceId
     * @param workerId
     */
    fireWorker(sourceId: string, workerId: string): void {
        if (!this.isMain) return;

        let k = this.workersIds.findIndex(id => workerId == id);
        if (k != -1) this.workersIds.splice(k, 1);
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as finished and update the grid
     * @param job
     */
    async finishedJob(job: Job): Promise<void> {
        job.status = JobStatus.FINISHED;
        if (this.isMain)
            this.saffron.events.emit('worker.job.finished', job.id);
        else
            await this.client.emit('worker.job.finished', job.id);
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     */
    async failedJob(job: Job): Promise<void> {
        job.status = JobStatus.FAILED;
        if (this.isMain)
            this.saffron.events.emit("worker.job.failed", job.id);
        else
            await this.client.emit('worker.job.failed', job.id);
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

        articles.forEach(article => article.timestamp = Date.now());

        this.saffron.events.emit("worker.articles.found", articles, tableName); // Can be empty array
        if (articles.length == 0) return;

        this.saffron.events.emit("middleware.before", articles);

        let getExtPair = this.saffron.extensions.startPairCount();
        let pair: any = {};

        while ((pair = getExtPair()) != null) {
            try {
                if (pair.event === 'article.format') {
                    for (const i in articles)
                        articles[i] = await pair.callback(articles[i]);
                } else if (pair.event === 'articles') {
                    articles = await pair.callback(articles);
                }
            } catch (e) {
                this.saffron.events.emit("middleware.error", pair.event, e);
                return;
            }
        }

        this.saffron.events.emit("middleware.after", articles);

        // Do not do database checks if there is no database
        if(!Config.getOption(ConfigOptions.DB_IS_INITIALIZED, this.saffron.config)) return;

        // TODO - use result and request each category for separate checks

        let dbArticles: Article[];
        try {
            dbArticles = await Config.getOption(ConfigOptions.DB_GET_ARTICLES, this.saffron.config)({
                tableName,
                count: articles.length >= 5 ? articles.length * 2 : 10
            });
        } catch (e) {
            this.saffron.events.emit("database.get.error", source, e);
            return;
        }

        // And then check if they already exist.
        let hashes = dbArticles.map((article: Article) => article.getHash());
        articles = articles.filter((article: Article) => !hashes.includes(article.getHash()));
        this.saffron.events.emit("worker.articles.new", articles, tableName); // Can be empty array

        const toSaveArticles = articles.map(a => {
            return {
                ...a,
                source_id: a.source.id,
                source: undefined
            };
        });

        try {
            await Config.getOption(ConfigOptions.DB_PUSH_ARTICLES, this.saffron.config)(toSaveArticles);
        }  catch (e) {
            this.saffron.events.emit("database.set.error", source, e);
            return;
        }

        this.saffron.events.emit("database.set.okay", source, articles);
    }
}