const {Article, Utils} = require('@poiw/saffron-utils')

module.exports = {
    baseURL: "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html",
    name: "cs.unipi.gr",
    type: "html",
    retryInterval: 1500,
    scrapeInterval: 3000,
    scrape: () => {

    }
}


//RSS-CONFIG

/*

{
    "url": "https://eclass.uoa.gr/modules/announcements/rss.php?c=AEROSPACE119",
    "name": "UNIPI",
    "type": "rss",
    "retryInterval": 1500,
    "scrapeInterval": 3000,
    "renameFields":{    //Optional  defaults  ["title","link","content","pubDate"]
        "title": "test",
        "pubDate": "publishdate" 
        ...
        ..
        ..
    }
}





/*
{
    "url": "https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html",
    "name": "UNIPI",
    "type": "html",
    "container": ".catItemView",
    "retryInterval": 1500,
    "scrapeInterval": 3000,
    "scrape": {
        ".catItemDateCreated" : {
            "name": "pubDate",
            "attributes": ["value","href"],
            "find" : null,
            "multiple": false
        },
        ".catItemTitle" : {
            "name": "title",
            "find": ["a"],
            "multiple": false
        },
        ".catItemBody" : {
            "name": "body",
            "find": null,
            "multiple": false
        },
        ".catItemLinks": {
            "name": "links",
            "find": [".catItemAttachmentsBlock","li","a"],
            "multiple": true
        }
    }
}
*/