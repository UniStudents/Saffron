import EventEmitter from "events"

export default class Events {

    private static antennae: any

    static getAntennae():any {
        if (Events.antennae == null) Events.antennae = new EventEmitter()
        return Events.antennae
    }

}