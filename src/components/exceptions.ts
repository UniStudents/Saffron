export default class Exceptions {
    declare message: string
    declare retry: boolean

    constructor(message: string, retry: boolean) {
        this.message = message
        this.retry = retry
    }
}