/**
 * The class used for the user when an error must be passed to the main saffron from dynamic parsing
 */
export default class Exceptions {
    declare message: string
    declare retry: boolean

    constructor(message: string, retry: boolean) {
        this.message = message
        this.retry = retry
    }
}