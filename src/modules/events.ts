import EventEmitter from "events"

export default class Events {

    private static antennae: any

    /**
     * Return the event emitter
     */
    static getAntennae():any {
        if (Events.antennae == null) Events.antennae = new EventEmitter()
        return Events.antennae
    }

}