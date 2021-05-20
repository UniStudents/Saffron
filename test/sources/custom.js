const {types: {Article, Utils, Exceptions}} = require("../../dist/index")
const utils = new Utils()

module.exports = {
    url: "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html",
    name: "cs.unipi.gr",
    type: "custom",
    retryInterval: 1500,
    scrapeInterval: 3000,
    scrape: async () => {

        return new Exceptions("Error1", "d")
    }
}

/*
Start Scrape 1
Scrape 1 - Success

Move to Scrape 2
Scrape 2 - Success

Move to Scrape 3
Scrape 2 - Return Error

Move to Scrape 4
Scrape 4 - Success

 */