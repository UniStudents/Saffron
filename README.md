# Saffron | News &amp; announcements aggregation framework.

## Table of Contents

- [What is Saffron?](#what-is-saffron)
- [Architecture](#architecture)
- [Installation](#installation)
- [Initialization](#initialization)
- [Configuration](#configuration)
- [Parsers](#parsers)
    - [WordPress V2](#wordpress-v2)
    - [RSS](#rss)
    - [HTML](#html)
    - [Dynamic](#dynamic)
    - [Which to choose](#which-to-choose)
- [Article](#article)
- [Source files](#source-files)
    - [What is a source file?](#what-is-a-source-file)
    - [Creating a source file](#creating-a-source-file)
- [Middleware](#middleware)
    - [Register a middleware](#register-a-middleware)
    - [Format article](#format-article)
    - [Articles](#articles)
- [Listeners](#listeners)
- [Standalone](#standalone)

## What is Saffron?

Saffron stands for **S**imple **A**bstract **F**ramework **F**or the **R**etrieval **O**f **N**ews

As said saffron is a framework. It is an abstraction engine that helps you collect news and
announcements from websites in a uniform way.

It supports different ways of data collection, such as API endpoints and web-scraping.
It tries to ease the process of integrating all data sources, by abstracting data collection into a few simple
and powerful functions.

## Architecture

Saffron's architecture is based on a `main` node that issues scraping instructions and several `worker` nodes
that do the scraping & upload the data to the database.

The communication between the nodes is happening through the `Grid`. The grid will generate events to communicate
with other classes. Saffron supports remote nodes by using [`socket.io`](https://socket.io) server and clients
as a middleware to connect to the `main` node.

## Installation

To install the latest release:

```shell
npm install @unistudents/saffron
```

To install a specific version:

```shell
npm install @unistudents/saffron@version
```

## Initialization

Once you have installed the library and created your [configuration](./docs/configuration.md):

```ts
import Saffron from "@unistudents/saffron";

const saffron = new Saffron();

// Initialize saffron
saffron.initialize({/* configuration */});

// Start sheduler and workers.
saffron.start();
```

## Configuration

Read the [configuration](./docs/configuration.md) file for more information.

## Parsers

To retrieve the desired information from the websites we use parsers.
There are four available parser types: `wordpress`, `rss`, `html` and `dynamic`.

### WordPress V2

Parser type: `wordpress-v2`

By default, [`WordPress`](https://wordpress.com/) based websites has an open API for news retrieval.
We make use of that to get access on the articles and categories of the website.

To quickly check if a website supports the WordPress API simply open your browser and
type `<website-root-link>/wp-json/wp/v2/posts/`.
If a valid JSON file is displayed on the browser (or downloaded on your computer) which contains the website's articles,
then you can safely use the `wordpress` parser.

### RSS

Parser type: `rss`

Many websites support [`RSS`](https://en.wikipedia.org/wiki/RSS) feed. RSS allows users and applications to access
updates
to websites in a standardized, computer-readable format. You can check if a website supports RSS if you can see this
icon <img src="/img/rss.png" width="20" height="20" />.

### HTML

Parser type: `html`

This parser uses scrapping tools like [CheerioJS](https://cheerio.js.org/) to scrape the website content and receive
the displayed news. This parser is best to be used when the HTML in the website is structured. Websites where the HTML
and CSS are not structured will be very difficult to scrape.

### Dynamic

Parser type: `dynamic`

Unlike the other parsers, this parser uses javascript code to parse a website. All the logic for the scraping is
decided by the user.

### Which to choose

We recommend a specific order for using the available parsers.

* If the desired website is based an [`WordPress`](https://wordpress.com/) and the WordPress articles API is enabled,
  then
  choose the `wordpress-v2` parser.
* If the desired website supports [`RSS`](https://en.wikipedia.org/wiki/RSS) feed. then choose the `rss` parser.
* If the desired website has a structured form, the use the `html` parser.
* If none of the above is possible (bad html or custom API) then the `dynamic` parser is our last choice.

## Article

We have created a universal format for the parsed news, and we named it `Article`.

Read the [article](./docs/article.md) file for more information.

## Source files

### What is a source file?

A source file is a `json` or `javascript` file that represents a website.
These files are generated from the user and guide Saffron on how to parse a website.

### Creating a source file

Read the [source](./docs/source_files/source_file.md) file for the common options
or the parsers files
[WordPress V2](./docs/source_files/wordpress_v2.md),
[RSS](./docs/source_files/rss.md),
[HTML](./docs/source_files/html.md) or
[Dynamic](./docs/source_files/dynamic.md)
for the scrape options.

## Middleware

A middleware is a function that gets executed before the articles are passed to `newArticles` function.
Middleware functions can be useful for logging, article formatting or sorting.

The order where the middleware are executed is the order where they were reistered.
Each middleware function can be called more than once.

### Register a middleware

```typescript
saffron.use("name", (...args: any) => {
    //...
});
```

### Format article

For changing the contents of the articles.
It gets as parameter every article that was found from the parsers and must return the same object when it changed.

```javascript
saffron.use("article.format", (article: Article) => {
    // If possible set pubDate with milliseconds.
    let ms = new Date(article.pubDate).getTime();
    if (!isNaN(ms)) article.pubDate = ms;

    // Append source name before title for every article
    article.title = `[${article.getSource(saffron).name}] ${article.title}`;

    // Return the changed article.
    return article;
});
```

You can also access the source class of the article by calling `article.getSource()`.
Note that any changes made on the source class will also affect the saved source.

### Articles

This middleware can be used to edit the articles in bulk. You can sort or filter them as you want.
The only requirement is to return an array (empty or not) of articles.

```js
saffron.use("articles", (articles: Article[]) => {
    sort(articles);
    return articles.filter(
        (article) => article.title != null && article.title !== ""
    );
});
```

## Listeners

Saffron supports listeners for various event. Listeners can be used for logging or creating analytics.

Read the [listeners](./docs/listeners.md) file for more information.

## Standalone

Saffron supports immediate parsing using the static function `parse`.

```ts
import {Saffron} from "@unistudents/saffron";

try {
    const result = Saffron.parse({
        name: "source-name",
        url: ["Category 1", "https://example.com"],
        // ...
        scrape: {
            // ...
        },
    }, null); // or pass a config

    console.log("Result:", result);
} catch (e) {
    console.log("Encountered an error during parsing:", e);
}
```

The result of the `parse` function is an array of objects for each url passed in the source file:

```ts
[
    {
        url: "https://example.com",
        aliases: ["Category 1"],
        articles: [/*Article*/, /*Article*/, /*Article*/, /*...*/]
    },
];
```
