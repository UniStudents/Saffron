/**
 * The class used for the user when an error must be passed to the main saffron from dynamic parsing
 */
export default class Exceptions {
    declare message: string

    constructor(message: string) {
        this.message = message
    }
}