// const {Article, Utils} = require('@poiw/saffron-utils')

module.exports = {
    url: "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html",
    name: "cs.unipi.gr",
    type: "custom",
    retryInterval: 1500,
    scrapeInterval: 3000,
    scrape: () => {
        console.log('hey')
    }
}