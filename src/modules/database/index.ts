import Database from "./database"
import Config from "../../components/config"
import MongoDB from "./drivers/mongodb"
import Memory from "./drivers/memory"
import None from "./drivers/none";
import {ConfigOptions} from "../../middleware/ConfigOptions";

export default class Driver {
    
    private static instance: Database

    /**
     * Return an instance of the database.
     */
    static getInstance(): Database | undefined {
        if(!this.instance)
            switch(Config.getOption(ConfigOptions.DB_DRIVER)){
                case "mongodb":
                    this.instance =  new MongoDB()
                    break
                case "memory":
                    this.instance = new Memory()
                    break
                case "none":
                    this.instance = new None()
            }

        return this.instance
    }
}