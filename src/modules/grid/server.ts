// import sock
export default class Server {

    constructor() {

    }

    async listen(): Promise<void> {

    }

    async stop(): Promise<void> {

    }

    async emit(who: any, event: string, data: any): Promise<void> {

    }

    async broadcast(event: string, data: any): Promise<void> {

    }

    on(event: string, callback: (...data: any[]) => void): void {

    }
}