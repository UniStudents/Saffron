import {io} from "socket.io-client";
import Config from "../../components/config";
import logger from "../../middleware/logger";
import {LoggerTypes} from "../../middleware/LoggerTypes";

export default class Client {
    declare socket: any;

    constructor() {}

    async connect(): Promise<void> {
        this.socket = io(`http://${Config.load()?.grid.address}:${Config.load()?.grid.port}`)
    }

    async disconnect(): Promise<void> {

    }

    async emit(event: string, ...data: any[]): Promise<void> {
        this.socket.emit(event, ...data);
    }

    on(event: string, callback: (...data: any[]) => void): void {
        this.socket.on(event, callback)
    }
}