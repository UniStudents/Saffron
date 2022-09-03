require('dotenv').config();
const Saffron = require('../dist/index').default;
const loggerTypes = require('../dist/components/LoggerTypes');
const util = require("util");
const logger = require('../dist/middleware/logger').default;

Error.stackTraceLimit = 200;

const config = {
    misc: {
        log: 'all'
    },
    sources: {
        path: "/test/sources",
        // includeOnly: ['geo.hua.gr'],
        // exclude: ["custom-cs.unipi.gr"],
    },
    scheduler: {
        jobsInterval: 10000,
        heavyJobFailureInterval: 86400000,
        checksInterval: 5000,
    },
    mode: process.env.MODE || "main",
    workers: {
        nodes: 1,
        jobs: {
            timeout: 10000,
        },
        articles: {
            amount: 30,
        }
    },
    grid: {
        distributed: false,
    }
};

let errors = [];
const saffron = new Saffron();

saffron.on("workers.articles.found", (articles, src) => {
    // console.log('articles.found', src, articles.length);
    // console.log(util.inspect(articles, {showHidden: false, depth: null, colors: true}));
});

saffron.on('workers.parsers.error', errors.push.bind(errors));
saffron.on('workers.job.failed', job => {
    console.log(job)
})

;(async () => {
    try {
        await saffron.initialize(config);
        await saffron.start();
    } catch (error) {
        errors.push(error);
    }

    if (process.env.NODE_ENV === "testing")
        setTimeout(() => {
            if (errors.length > 0) {
                logger(loggerTypes.LoggerTypes.ERROR, `Saffron failed at runtime. The CI workflow will be terminated. The errors that occured where the following: \n\n${errors}\n\n`);
                process.exit(1);
            } else {
                logger(loggerTypes.LoggerTypes.STEP, `Saffron doesn\'t show any signs of malfunction with this commit.\n`);
                process.exit(0);
            }
        }, 15000);
})();
