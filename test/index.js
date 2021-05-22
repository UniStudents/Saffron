require('dotenv').config()
const saffron = require('../dist/index');


(async() => {
    await saffron.initialize({
        database:
            process.env.MONGO_URL && true ? {
                driver: "mongodb",
                config: {
                    url: process.env.MONGO_URL,
                    name: 'saffron-sandbox'
                }
            } : {driver: "memory"},
        sources:{
            path: "/test/sources"
        },
        scheduler: {
            intervalBetweenJobs: 140,
            heavyJobFailureInterval: 86400000
        },
        development: {
            scheduler: {
                intervalBetweenJobs: 130
            }
        }
    })

    // saffron.on("start", () => console.log('saffron started'))

    await saffron.start()

    // saffron.on("new-articles-pushed", articles=> console.log("new-articles",articles))
})()
