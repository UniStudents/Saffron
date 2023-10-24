# Dynamic parser

Unlike the others, the `dynamic` parser requires more configuration. We have
to initialize a `DynamicSourceFile` class and pass it to the configuration through the
[`dynamicSourceFiles`](../configuration.md#dynamicsourcefiles) option.

## DynamicSourceFile class
First we are going to initialize a class and extend the DynamicSourceFile class:
```ts
class Custom extends DynamicSourceFile {
    // ...
}
```
After that we are going to implement the `name` method. This method will 
return a unique string that will help Saffron to identify of the implementation.
```ts
    class Custom extends DynamicSourceFile {
    name(): string {
        return "dynamic-1";
    }
    // ...
}
```
Following, we will implement the `request` method, which is responsible to do
all the network requests.

In cases where a login is required to the remote website, it can be done from here.

```ts
class Custom extends DynamicSourceFile {
    // ...
    request(utils: Utils): Promise<any> {
        // Request using utils.get to assign the axios config
        // passed in the global and/or source configurations
        return utils.get(utils.url);
    }
    // ...
}
```
Lastly, we are going to implement the `parse` method, which is responsible to do
all the parsing. It will receive the payload returned from the `request` method
and must return an array of Articles.

```ts
class Custom extends DynamicSourceFile {
    // ...
    async parse(result: RequestsResult, utils: Utils): Promise<Article[]> {
        const articles: Article[] = [];
        // ...
        
        return articles;
    }
}
```

## Scrape

### `implementation`
Default value: `<source name>`

The name of the implementation we have configured.

## Utils
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

## Writing code

### Callbacks
Dynamic parser does not support callback response. In case the use of callbacks cannot be avoided
you can return a promise:

```javascript
return new Promise((resolve, reject) => {
    request(utils.url, (response, errpr) => {
        if (error != null) {
            return reject(error)
        }

        // ...
        resolve(response);
    });
});
```

### Fail job

If you want to mark the current source scraping job as a failure and return no
articles then you have to throw an `Error`:

```js
throw new Error("Parsing failed.");
```
or reject the promise:
```js
return new Promise((resolve, reject) => {
    // ...
    reject(new Error("Parsing failed."));
});
```
