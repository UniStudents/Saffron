require('dotenv').config()
console.log(process.env.MONGO_URL)
const saffron = require('../dist/index');

(async() => {
    await saffron.initialize({
        database:
            process.env.MONGO_URL ? {
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
            intervalBetweenJobs: 140
        },
        development: {
            scheduler: {
                intervalBetweenJobs: 130
            }
        }
    })

    // saffron.on("start", () => console.log('saffron started'))

    await saffron.start()
})()
