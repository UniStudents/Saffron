import {io} from "socket.io-client";
import Config from "../../components/config";
import logger from "../../middleware/logger";
import {LoggerTypes} from "../../middleware/LoggerTypes";

export default class Client {
    declare socket: any;

    constructor() {}


    async connect(): Promise<void> {
        this.socket = io(`http://${Config.load()?.grid.address}:${Config.load()?.grid.port}`)

        this.socket.on("connect", (details: any)=>{
            logger(LoggerTypes.STEP, "A socket has been established with the main node");
        })
    }

    async disconnect(): Promise<void> {

    }

    async emit(event: string, data: any): Promise<void> {

    }

    on(event: string, callback: (...data: any[]) => void): void {

    }
}