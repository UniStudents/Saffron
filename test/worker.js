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
        sources: {
            path: "/test/sources",
            exclude: ["custom-cs.unipi.gr", "wordpress-cs.unipi.gr", "rss-cs.unipi.gr"]
        },
        scheduler: {
            jobsInterval: 10000,
            heavyJobFailureInterval: 86400000,
            checksInterval: 5000
        },
        mode: process.env.MODE || "main",
        workers: {
            nodes: 3,
            job: {
                timeout: 5000
            },
            articles: {
                amount: 30
            }
        },
        grid:{
            distributed: true,
            address: "192.168.2.9",
            port: 3000
        }
    }
}

(async () => {

    let errors = []

    try {
        await saffron.initialize(config)
        await saffron.start()

        // saffron.on("workers.articles.found", (articles)=>{
        //     console.log(articles)
        //
        // })
    } catch (error) {
        errors.push(error)
    }

    if(process.env.NODE_ENV === "testing") setTimeout(() => {
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
