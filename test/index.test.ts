describe("Saffron", function () {
    // Start server
    require("./abc_webserver.test");

    require("./config.test");
    require("./jobs.test");
    require("./sources.test");
    require("./other.test");
    require("./parsers.wordpress.test");
    require("./parsers.json.test");
    require("./parsers.xml.test");
    require("./parsers.rss.test");
    require("./parsers.html.test");
    require("./parsers.dynamic.test");
    require("./scheduler.test");
    require("./grid.test");
    require("./integration.test");
});