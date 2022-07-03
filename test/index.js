require('dotenv').config();
const Saffron = require('../dist/index').default;
const loggerTypes = require('../dist/middleware/LoggerTypes');
const util = require("util");
const logger = require('../dist/middleware/logger').default;

let config = {}
try {
    config = require("./saffron.json");
} catch (e) {
    config = {
        misc: {
            log: 'all'
        },
        sources: {
            path: "/test/sources",
            // includeOnly: ['geo.hua.gr'],
            // exclude: ["custom-cs.unipi.gr"]
        },
        scheduler: {
            jobsInterval: 10000,
            heavyJobFailureInterval: 86400000,
            checksInterval: 5000
        },
        mode: process.env.MODE || "main",
        workers: {
            nodes: 1,
            jobs: {
                timeout: 10000
            },
            articles: {
                amount: 30
            }
        },
        grid: {
            mode: "auto" || "manual",
            // Following options are optional during auto mode
            address: "192.168.2.9",
            port: 3001,
            keypair: {
                bits: "2048",
                privateKey: "-----BEGIN RSA PRIVATE KEY-----MIIEoQIBAAKCAQBecuykL8bSQlUxGxpU574Xh4HSyoTFqlxVc7dok3InXQ0wpchv8WjbWWEcfJPRLXc9zdixrRSRWIUeBC+Jlsl1nbtpz30769Fnw6ZGvjW9DCn/NYdZv5N5zw0gfapYyZkFWt3gAwbXRoVzYwbPEOMmVBZzLS9ZyZraSWYRy9OfcFYL16L5ma7/0LwdBRxaR80lVGj3a+kECKH7AQoKAV/r55oOa6puCZmxAkWmhwaTyfb9q+OqkBEVffsmPyfgKno2cXoiWTur2+OmAbwdD6EmVf61z4wrBDiCX91ZiqNIlnt2k95MmZ/m+AeImbyEUPLY4JuzbcIgKWhU6HizSCupAgMBAAECggEADYAwA2gw620/8D0HjotxyLs9+3unbvnjKPPZi8FH2AidEg8gj5/adUBZeVD1cDknilYaW4t6HSyiGqBOi0Ral81sNLvMEvyqekKlSgd2dwd+GVT1fAa+dfL61WIhL3/ht7o9bQABwlP6T3wgRQkM7zWl3+Ddm+ANmpZTWMfiADBKF89TS2dM2nTJgJijWY4lFM3BUAWyPHuPXeRe8ZUpssw0xT2rFoKx/8uzsGbQT0prIc2u2KxHz8MzGT0vkOtb40mUeWFyo/4Avk7oTigjIRYd3becgpHmmcZuLHB1kzOX+D4GFPaQpJ/CyZkTU5FPqK7mwRUnq7Tkr1rnt/C9gQKBgQCkDAiLnAwh0s9+SSKHLCHU0elYPgtrBrGEcGYHQMg65Dz1gUDLkKAEiH7fFx5GedU4s1YYNmng6Z1RDkJJHTJovtk43v1sonffkpyg6aYiytE9+aPG1meVbkNlFn8+V/hf3knDrim8CCisdYpjfkJMR2Qk+vSR3mxu7b0Bqyhz3QKBgQCTY+WGISTTva8m8cbt4O+SXrVySbDhnoVbXsex9C2v2kBoLHjoXqznEkb3nAVCqtMCmhuf/nKw03lmM4aTm/mvkF4cBHQvFE3OZZq0iAEtp5AmSXdZ7h/GZNyimFei7U5x1/YzdaW8Nq7MR9wOkTBys6E06t3zPT26i0CyMvXQPQKBgHSZsQE6e00XQDBs30Pg1HMmeIsmHouGCGswUPTa0Pc6/zEpG9sVAwf11OfQ0M4bDrjsj0dKddtNcWoJjofVXt0gudk4djzfBgE9fmLJcDLOogdBB23vO1T1OKYDZZH0iS/rGdciVbu2uOJL8X9iYNFC9SVr0qZTyBLYnD0xYOFpAoGAZmCTQ3GuNO2ixfhW51DA1/i1LCeHl5AWrXrOVwt22JlO9408hpuMmgyWAtP6y24Al+QXoDCL1ctundDYf5tt+cbbt7ZYRYNi8CSfKxr1RpMHi7CoGG1Q4OuaXc5XwTH4tRb/SotDjdKl4/teHTg4YNPo++rQNG6re/HSBHVlTTkCgYAcjsqnL0xlbOHeC8780ubfc6eTuP+XfAEySoBbCmemEHfJw/Zxy1JoOwr66CsY1dPTp0YSPuxgQ+QcJ+YzWzgH32ToK14Cntn4V92kJbEd71S1S8n1E4iYyOULp9Gp6BQdQIWqGvyQsgLzdItDhLNJOO12hxi1D0CJCtl/Tmz8yg==-----END RSA PRIVATE KEY-----",
                publicKey: "-----BEGIN PUBLIC KEY-----MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBecuykL8bSQlUxGxpU574Xh4HSyoTFqlxVc7dok3InXQ0wpchv8WjbWWEcfJPRLXc9zdixrRSRWIUeBC+Jlsl1nbtpz30769Fnw6ZGvjW9DCn/NYdZv5N5zw0gfapYyZkFWt3gAwbXRoVzYwbPEOMmVBZzLS9ZyZraSWYRy9OfcFYL16L5ma7/0LwdBRxaR80lVGj3a+kECKH7AQoKAV/r55oOa6puCZmxAkWmhwaTyfb9q+OqkBEVffsmPyfgKno2cXoiWTur2+OmAbwdD6EmVf61z4wrBDiCX91ZiqNIlnt2k95MmZ/m+AeImbyEUPLY4JuzbcIgKWhU6HizSCupAgMBAAE=-----END PUBLIC KEY-----"
            }
        }
    }
}


(async () => {
    Error.stackTraceLimit = 200;
    let errors = []
    const saffron = new Saffron();

    try {
        await saffron.initialize(config)
        await saffron.start()

        saffron.on("workers.articles.found", (articles, src) => {
            console.log('articles.found')
            console.log(src, articles.length)
            console.log(util.inspect(articles, {showHidden: false, depth: null, colors: true}));
        });

        // saffron.on("workers.articles.new", (articles, src) => {
        //     console.log('articles.new')
        //     console.log(src, articles.length);
        //     console.log(util.inspect(articles, {showHidden: false, depth: null, colors: true}));
        // });

        saffron.on("middleware.before", (articles) => {
            // console.log('middleware.before')
            // console.log(util.inspect(articles, {showHidden: false, depth: null, colors: true}));
        });

        saffron.on("middleware.after", (articles) => {
            // console.log('middleware.after')
            // console.log(util.inspect(articles, {showHidden: false, depth: null, colors: true}));
        });
    } catch (error) {
        errors.push(error)
    }

    if (process.env.NODE_ENV === "testing") setTimeout(() => {
        if (errors.length > 0) {
            logger(loggerTypes.LoggerTypes.ERROR, `Saffron failed at runtime. The CI workflow will be terminated. The errors that occured where the following: \n\n${errors}\n\n`);
            process.exit(1);
        } else {
            logger(loggerTypes.LoggerTypes.STEP, `Saffron doesn\'t show any signs of malfunction with this commit.\n`);
            process.exit(0);
        }
    }, 15000)
    //saffron.on("new-articles-pushed", articles=> console.log("new-articles",articles))
})()
