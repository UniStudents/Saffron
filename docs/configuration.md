# Configuration

Each saffron instance need a configuration file. Below is the structure of the configuration file.

## `mode`
Default value: `main`

Can receive the values `main` and `worker`. It specifies if the saffron instance will be the main instance
or a worker only instance.

If the environment variable `SAFFRON_MODE` is set properly it will override this field.

## `newArticles`
Default value: `none`

A function that will be called after saffron is done scraping and parsing the articles.
This function is useful to save the parsed articles in the database.

Arguments:
* `tableName`: The table (or collection) where the articles will be saved.
* `articles`: An array of all the retrieved articles.

## `sources`

### `path`
Default value: `./sources`

The directory where the source file are located.

All `.js` and `.json` files will be treated as source files (including subdirectories)

### `includeOnly`
Default value: `[]`

When not empty it will filter the parsed sources and include only the ones that are mentioned.
The source identification is made using the source name (and not the source file name).

This field is useful when testing specific source files.

### `exclude`
Default value: `[]`

When not empty it will exclude the parsed sources and include only the ones that are not mentioned here.
It will exclude source files even if they are in [`includeOnly`](#includeonly) option.

The source identification is made using the source name (and not the source file name).

This field is useful when a source file is deprecated and must be excluded.
Setting a environment variable for this may be a good choice.

## `workers`

### `nodes`
Default value: `1`

The workers that will be initialized. Each worker runs in different thread using
[Node.Js Worker thread](https://nodejs.org/api/worker_threads.html).
When saffron loads a lot of source files having multiple workers on different threads
may ease the load on your machine.

### `requests.userAgent`
Default value: `saffron`

The User-Agent that will accompany the requests made by saffron.

### `requests.timeout`
Default value: `10000`

The timeout of a request when scraping data.

### `requests.maxRedirects`
Default value: `10`

The maximum redirects that are allowed during a request.

### `articles.amount`
Default value: `30`

The maximum amount of articles that saffron will return for each source scraping job.

### `articles.includeContentAttachments`
Default value: `true`

If the generated article's attachments will contain the extracted urls from article's content.

## `scheduler`

### `jobsInterval`
Default value: `3600000` (60 minutes)

The interval in milliseconds, between each source scraping job for a specific source.

This option is also used by the scheduler to spread the source files evenly inside
a specific timeframe. This will help to ease your machine by not executing all the
source scraping jobs together.

A lower value for this interval means a heavier load on the websites that are scraped.
This field has a minimum value of `5000ms`.

### `heavyJobFailureInterval`
Default value: `86400000` (24 hours)

When a source scraping job fails consecutively 10 times in a row it wil trigger
the freeze mechanism of saffron and schedule the source to be executed again after
`heavyJobFailureInterval` milliseconds.

It is recommended to have a high value for this field as it will be used when a website is down.

### `noResponseThreshold`
Default value: `2`

A multiplier of the source interval. When exceeding that product it will re-assign a worker.

For example for an `interval` of 1 minute and `noResponseThreshold` of 2, if a worker does
not report the source scraping job as passed or failed after `interval` * `noResponseThreshold` =
2 minutes, it will replace the current worker.

This field is useful in cases where a remote node has crashed or lost connection with main instance.

### `randomizeInterval`
Default value: `-300 to 300 seconds`

The scheduler adds/subtracts a random time from the interval of each job to avoid making
requests at fixed intervals. The result of the function must be in milliseconds.

```javascript
randomizeInterval: () => {
    const random = Math.floor(Math.random() * (high - low) + low) * 1000;
    return Math.random() >= 0.5 ? random : -random;
}
```

## `grid`
### `distributed`
Default value: `false`

In the `main` instance it will start a `socket.io-server` and wait for nodes to be connected.
In case of a `worker` instance it will try to connect to the `main` by using `socket.io-client`.

### `useHTTPS`
Default value: `false`

Use HTTPS instead of HTTP server.

### `serverHost`
The server's host where the `worker` nodes will connect to.

Without the `http://` or `https://` prefix and `:<port>` postfix.

### `serverPort`
Default value: `3000`

The port where the `main` node will listen and `worker` nodes will connect

### `authToken`
A string that will authenticate a `worker` node to the `main` node.

if the authentication fails it will disconnect the socket.

### `key`
The key used by the HTTPS server.

### `cert`
The certificate used by the HTTPS server.

## Misc
### `log`
Default value: `all`

The log level of saffron.

Each level is a subset of the next one: `none` &lt; `errors` &lt; `info` &lt; `all`  

### `eventDelay`
Default value: `0`

The time in milliseconds where the events will be delayed before delivered.

# Environment
Saffron supports different configuration based on the environment.

The configuration will first receive the root configuration:
```typescript
const config = {
    newArticles: (tableName: string, articles: Article[]) => {
        // push to production database
    },
    // ...
    misc: {
        log: "errors" // log only errors
    },
    // ...
};
```

and then read the child object `development`, `production` or `testing` based on the environment:

```typescript
const config = {
    newArticles: (tableName: string, articles: Article[]) => {
        // push to production database
    },
    // ...
    misc: {
        log: "errors" // log only errors
    },
    // ...
    development: {
        newArticles: (tableName: string, articles: Article[]) => {
            // push to local database
        },
        // ...
        misc: {
            log: "all" // log everything
        },
        // ...
    }
};
```
