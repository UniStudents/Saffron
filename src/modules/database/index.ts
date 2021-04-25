import Database from "./database";
import Config from "../../components/config";
import MongoDB from "./drivers/mongodb"
import Memory from "./drivers/memory"

export default class Driver{
    
    private static instance: Database
    
    static getInstance(): Database | null {
        if(this.instance)
            return this.instance
        
        switch(Config.load()!!.database.driver){
            case "mongodb":
                return new MongoDB()
            case "memory":
                return new Memory()
        }

        return null
    }
}