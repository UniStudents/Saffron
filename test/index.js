require('dotenv').config()
const saffron = require('../dist/index');
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
    await saffron.initialize(config)

    // saffron.on("start", () => console.log('saffron started'))

    saffron.use("article.format", (article) => {
        article.title += " - Title"
        article.extras.puDateMillis = parseDate(article.pubDate)
        return article
    })

    saffron.use("articles.sort", (articles) => {
        // Do some custom article sort

        return {
            articles,
            "extras.pubDateMillis": 1
        }
    })

    await saffron.start()

    // saffron.on("new-articles-pushed", articles=> console.log("new-articles",articles))
})()
