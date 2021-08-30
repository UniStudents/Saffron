export default class Client {

    constructor() {

    }

    async connect(): Promise<void> {

    }

    async disconnect(): Promise<void> {

    }

    async emit(event: string, data: any): Promise<void> {

    }

    on(event: string, callback: (...data: any[]) => void): void {

    }
}