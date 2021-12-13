import * as socketio from "socket.io"
import logger from "../../middleware/logger";
import {LoggerTypes} from "../../middleware/LoggerTypes";
import Config from "../../components/config";

export default class Server {
    declare socket: socketio.Server;
    constructor() {
        this.socket = new socketio.Server(Config.load()?.grid?.port || 3000)
        // console.log(this.socket)
        logger(LoggerTypes.STEP, `The incoming WebSocket listener has started on port ${Config.load()?.grid?.port || 3000}`)
        this.socket.on("connection", (details: any)=>{
            logger(LoggerTypes.STEP, "Connected to worker node");
        })
    }

    async listen(): Promise<void> {

    }

    async stop(): Promise<void> {

    }

    async broadcast(event: string, ...data: any[]): Promise<void> {
        this.socket.local.emit(event, ...data);
    }

    on(event: string, callback: (...data: any[]) => void): void {
        this.socket.on(event, callback);
    }
}