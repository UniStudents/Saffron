require('dotenv').config()
const saffron = require('../dist/index');
const loggerTypes = require('../dist/middleware/LoggerTypes')
const logger = require('../dist/middleware/logger').default
const util = require("util");
let config = {}
try {
    config = require("./saffron.json")
} catch (e) {
    config = {
        database:
            process.env.MONGO_URL && true ? {
                driver: "mongodb",
                config: {
                    url: process.env.SAFFRON_TESTING == "DOCKER_COMPOSE_LOCAL" ? "mongodb://mongo:27017" : process.env.MONGO_URL,
                    name: 'saffron-sandbox'
                }
            } : {driver: "memory"},
        sources: {
            path: "/test/sources"
        },
        scheduler: {
            intervalBetweenJobs: 10000,
            heavyJobFailureInterval: 86400000,
            intervalBetweenChecks: 5000
        }
    }
}

(async () => {

    let errors = []

    try {
        await saffron.initialize(config)
        await saffron.start()
    } catch (error) {
        errors.push(error)
    }

    setTimeout(() => {
        if(errors.length > 0) {
            logger(loggerTypes.LoggerTypes.ERROR,`Saffron failed at runtime. The CI workflow will be terminated. The errors that occured where the following: \n\n${errors}\n\n`)
            process.exit(1)
        }else{
            logger(loggerTypes.LoggerTypes.STEP,`Saffron doesn\'t show any signs of malfunction with this commit.\n`);
            process.exit(0)
        }
    }, 15000)
    // saffron.on("new-articles-pushed", articles=> console.log("new-articles",articles))
})()
