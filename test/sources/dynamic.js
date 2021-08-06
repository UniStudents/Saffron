const {types: {Article, Utils, Exceptions}} = require("../../dist/index")
const utils = new Utils()

module.exports = {
    url: "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html",
    name: "custom-cs.unipi.gr",
    type: "dynamic",
    scrape: async () => {
        const article = new Article()
        article.title = "Hey"
        // ...
        await utils.onNewArticle(article)


        // return new Exceptions("Error1", true)
    }
}