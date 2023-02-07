# Dynamic parser

Unlike the others, the `dynamic` parser uses javascript files (instead of JSON).
The general options described [here](./source_file.md) would be included at the top level
of the `module.exports`inside the javascript file.

Below is a template for the dynamic parser source file. As you can see the scrape is a function
instead of JSON options.
```js
module.exports = {
    type: "dynamic",
    // ...
    scrape: async function (utils, Article) {
        // Request and parse your articles...
        const response = utils.get(utils.url);
        
        // Create articles
        const article = new Article();
        article.title = '';
        // ...
        
        if(error)
            throw new Error('Failed for source file [name]!');
        
        // Return an array of all the articles you want to be added
        return articles;
    }
}
```

# Scrape

Create the `scrape` asynchronous function to write down code needed for scraping.
Saffron will ignore the rest of the file when it comes to scrapping so all code must
be included inside the scrape function, such as imports, user-defined functions etc.

The `scrape` function will be called for every url mentioned in the general option
[`url`](./source_file.md#url). The categories mentioned here will be added automatically.

Any other libraries used must be added to your `package.json` file.

# Utils
Utils provide a set of necessary functions and fields that are used by all scrappers.

### `isScrapeAfterError`
Type: `boolean`

If the previous source scraping job resulted in failure.

### `url`
Type: `string`

Will contain the urls in the order they were added in the general option
[`url`](./source_file.md#url).

### `aliases`
Type: `string[]`

An array containing all the categories mentioned in the general option
[`url`](./source_file.md#url) for the current url.

### `source`
Type: `Source`

An object containing all the necessary information that may be needed during scraping.
Such as:
* `name`: The name of the source file.
* `extra`: The extra data passed to the source file.
* `instructions.timeout`: The request timeout.
* `instructions.amount` : The articles that must be returned.
* `instructions.maxRedirects` : The maximum redirects a request is allowed to do.
* `includeContentAttachments`: Whether you must use the [`extractLinks`](#extractlinks) function
to the content and append the result to the attachments.

### `get`, `post`, `request`
Type: `function`

Wrapper functions that will use the `axios` library to make a request.
It will set by default the fields `timeout`, `maxRedirects`, `ignoreCertificates` and
`userAgent`.

They will automatically set the `User-Agent`,
detect if the certificates can be ignored and how many redirects are allowed.

### `parse`
Type: `function`

The same method as `Saffron.parse`. It allows the dynamic parser to call other scrapers
using a custom source file.

### `cleanupHTMLText`
Type: `function`

A function that will clean spaces and new lines. If the `stripTags` parameter is set to `true`
it will also remove any HTML tags.

### extractLinks
It will accept HTML as string and extract the text and links of the following tags:
`a`, `img` and `link`.


# Article

Saffron offers the Article class to construct an Article object.

# Writing code

### Nested functions & Imports
Saffron will ignore the rest of the file when it comes to scrapping,
so all code must be included inside the scrape function,
such as imports, user-defined functions etc.

```js
scrape: async (utils, Article) => {
  const log = (message) => {
    console.log(message);  
  }
  
  const foo = require('foo');
  other.foo('bar');
  
  log('Using a nested function.');
  // ...
}
```

### Callbacks
Dynamic parser does not support callback response. If you want to use callbacks in your code you
have to return a promise:

```javascript
scrape: (utils, Article) => {
  return new Promise((resolve, reject) => {
      utils.get(utils.url)
          .then(response => {
              // ...
              
              resolve(articles);
          })
          .catch(reject);
  });
}
```

### Fail job

If you want to mark the current source scraping job as a failure and return no
articles then you have to throw an `Error`:

```js
scrape: async (utils, Article) => {
    // ...
    throw new Error("Parsing failed.");
}
```
or reject the promise:
```js
scrape: async (utils, Article) => {
    return new Promise((resolve, reject) => {
        // ...
        reject(new Error("Parsing failed."));
    });
}
```
