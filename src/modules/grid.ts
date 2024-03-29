import {Job, JobStatus} from "../components/job";
import type {Worker} from "./worker";
import {Config, ConfigOptions} from "../components/config";
import type {Article} from "../components/article";
import type {Source} from "../components/source";
import {Server as IOServer} from "socket.io"
import {io as IOClient, Socket as IOSocket} from "socket.io-client";
import * as http from "http";
import * as https from "https";
import type {ParserResult} from "../components/types";
import {pack, unpack} from "../utils/serializer.util";
import type {Saffron} from "../index";
import type {ExtensionPair} from "./extensions";

export class Grid {

    readonly isMain: boolean;
    readonly workers: string[];

    declare readonly http_server: http.Server | https.Server;
    declare readonly node: IOServer | IOSocket;

    constructor(private readonly saffron: Saffron) {
        this.isMain = Config.getOption(ConfigOptions.MODE, this.saffron.config) === 'main';
        this.workers = [];

        if (!Config.getOption(ConfigOptions.DISTRIBUTED, this.saffron.config)) return;

        if (this.isMain) {
            if (Config.getOption(ConfigOptions.USE_HTTPS, this.saffron.config))
                this.http_server = https.createServer({
                    key: Config.getOption(ConfigOptions.HTTPS_KEY, this.saffron.config),
                    cert: Config.getOption(ConfigOptions.HTTPS_CERT, this.saffron.config)
                });
            else
                this.http_server = http.createServer();

            this.node = new IOServer(this.http_server, {
                serveClient: false, // No reason to server bundle client files
                connectTimeout: 30 * 1000
            });
        } else {
            const url = Config.getOption(ConfigOptions.USE_HTTPS, this.saffron.config) ? 'https://' : 'http://'
                + Config.getOption(ConfigOptions.HOST, this.saffron.config)
                + `:${Config.getOption(ConfigOptions.PORT, this.saffron.config)}/`;

            this.node = IOClient(url, {
                autoConnect: false,
                reconnection: true,
                reconnectionDelay: 5 * 1000,
                timeout: 15 * 1000,
                key: Config.getOption(ConfigOptions.HTTPS_KEY, this.saffron.config),
                cert: Config.getOption(ConfigOptions.HTTPS_CERT, this.saffron.config),
                auth: {
                    token: Config.getOption(ConfigOptions.AUTH_TOKEN, this.saffron.config)
                }
            });
        }
    }

    emit(eventName: string, ...args: any[]): void {
        if (!Config.getOption(ConfigOptions.DISTRIBUTED, this.saffron.config))
            return;

        if (this.isMain) {
            if (eventName === 'scheduler.job.push') {
                const job: Job = args[0];
                this.node.emit(eventName, pack(job));
            }
        } else {
            if (['worker.job.finished', 'worker.job.failed', 'grid.worker.announced', 'grid.worker.destroyed'].includes(eventName))
                this.node.emit(eventName, ...args);
        }
    }

    /**
     * Connect to grid network.
     */
    connect() {
        if (this.isMain) {
            (<IOServer>this.node).on("connection", socket => {
                const clientAuthToken = socket.handshake.auth.token;
                if (!clientAuthToken || clientAuthToken !== Config.getOption(ConfigOptions.AUTH_TOKEN, this.saffron.config)) {
                    this.saffron.events.emit('grid.node.auth.failed', socket);
                    socket.disconnect();
                    return;
                }

                this.saffron.events.emit('grid.node.connected', socket);
                socket.on("disconnect", () => this.saffron.events.emit('grid.node.disconnected', socket));
                socket.on("worker.job.finished", (jobId: string) => this.saffron.scheduler.changeJobStatus(jobId, JobStatus.FINISHED));
                socket.on("worker.job.failed", (jobId: string) => this.saffron.scheduler.changeJobStatus(jobId, JobStatus.FAILED));

                socket.on("grid.worker.announced", (workerId: string) => {
                    if (!this.workers.find(wId => wId === workerId))
                        this.workers.push(workerId);
                });

                socket.on("grid.worker.destroyed", (workerId: string) => {
                    const index = this.workers.findIndex(id => id === workerId);
                    if (index !== -1) this.workers.splice(index, 1);
                });
            });

            const port: number = Config.getOption(ConfigOptions.PORT, this.saffron.config)
            this.http_server.listen(port, () => this.saffron.events.emit('grid.connection.okay'));
        } else if (Config.getOption(ConfigOptions.WORKER_NODES, this.saffron.config) > 0) {
            this.node.on('connect', () => this.saffron.events.emit('grid.connection.okay'));
            this.node.on('connect_error', reason => this.saffron.events.emit('grid.connection.failed', reason));
            this.node.on('scheduler.job.push', (newJobStr: string) => this.saffron.events.emit("scheduler.job.push", unpack(newJobStr)));

            (<IOSocket>this.node).connect();
        }
    }

    /**
     * <h1>Worker</h1>
     * Initialize a new worker on the grid
     * @param worker
     */
    announceWorker(worker: Worker): void {
        this.workers.push(worker.id)
        this.saffron.events.emit("grid.worker.announced", worker.id);
    }

    /**
     * Remove a worker from the grid
     * @param worker
     */
    destroyWorker(worker: Worker): void {
        const index = this.workers.findIndex(id => id == worker.id);
        this.workers.splice(index, 1);
        this.saffron.events.emit("grid.worker.destroyed", worker.id);
    }

    /**
     * Forcefully remove a worker from the grid
     * @param workerId
     */
    fireWorker(workerId: string): void {
        if (!this.isMain) return;

        const k = this.workers.findIndex(id => workerId == id);
        if (k != -1) this.workers.splice(k, 1);
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
            await this.node.emit('worker.job.finished', job.id);
    }

    /**
     * <h1>Worker</h1>
     * Flags the job as failed and update the grid
     * @param job
     * @param e
     */
    async failedJob(job: Job, e: Error): Promise<void> {
        job.status = JobStatus.FAILED;
        job.errorStack.unshift(e);
        if (this.isMain)
            this.saffron.events.emit("worker.job.failed", job.id);
        else
            await this.node.emit('worker.job.failed', job.id);
    }

    /**
     * Will be called from both the main and sub programs
     * @param source
     * @param result
     */
    async mergeArticles(source: Source, result: ParserResult[]): Promise<void> {
        const tableName = source.tableName || source.name

        let articles: Article[] = [];
        const timestamp = Date.now();
        result.forEach(r => {
            for (const a of r.articles) a.timestamp = timestamp;
            articles.push(...r.articles);
        });

        this.saffron.events.emit("worker.articles.found", articles, tableName); // Can be empty array
        if (articles.length == 0) return;

        this.saffron.events.emit("middleware.before", articles);

        const getExtPair = this.saffron.extensions.startPairCount('articles');
        let pair: ExtensionPair | null;
        while ((pair = getExtPair()) != null) {
            try {
                switch (pair.event) {
                    case 'article.format':
                        for (const i in articles)
                            articles[i] = await pair.callback(articles[i]);
                        break;
                    case 'articles':
                        articles = await pair.callback(articles);
                        break;
                }
            } catch (e) {
                this.saffron.events.emit("middleware.error", pair.event, e);
                return;
            }
        }

        this.saffron.events.emit("middleware.after", articles);

        try {
            await Config.getOption(ConfigOptions.NEW_ARTICLES, this.saffron.config)(tableName, articles);
        } catch (e) {
            // Handle errors saffron cannot handle
            console.log(e);
        }
    }
}