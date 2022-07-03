import * as socketio from "socket.io"
import Config from "../../components/config";
import {ConfigOptions} from "../../middleware/ConfigOptions";

export default class Server {
    declare socket: socketio.Server;

    constructor() {
        this.socket = new socketio.Server(Config.getOption(ConfigOptions.GRID_PORT))
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