module.exports = {
    baseURL: "https://www.csd.uoc.gr/CSD/index.jsp?content=announcements",
    type: "portal",
    endpoint: '/csd.uoc.gr',
    scrape: {
        settings: {
        },
        onLoad: (browser, webkit) => {
            // etc: Sign-in and redirect to announcements page
            return browser
        },
        articles: {
            loadNext: (browser, webkit) => {
                // if not next return undefined
                return browser
            },
            get: {
                title: (browser, webkit) => {
                    return browser.findElement()
                },
                date: (browser, webkit) => {
                    return browser.findElement()
                },
                body: (browser, webkit) => {
                    return browser.findElement()
                }
            }
        }
    }
}