# Source file

The option set here apply only for the current source file and will override the default
options set in the configuration.

# Common options

### `name`
This field identifies the source file.
Although saffron does not check if the name is unique it is required to be so.

It is also used in configuration [`includeOnly`](../configuration#includeonly)
and [`exclude`](../configuration#exclude).

### `tableName`
Default value: [`name`](#name)

When calling [`newArticles`](../configuration.md#newarticles), saffron will send a tableName
to specify where the articles should be saved.
This is useful in case of multiple source files want to save at the same place.

If it is not defined it will fall back to the [`name`](#name) field.

### `url`
This field contains the website's url(s) where the news are displayed.
It can be a string or an array:

In case of one url it can be like:
```js
url: "https://example.com/news"
```

In case a website has more than one place where it displays its news but the structure is the same,
multiple urls can be used.
In that case the `scrape` options will be applied to all the urls, and it can be like:

```js
url: ["https://example.com/news", "https://example.com/more-news"]
```

If you want to identify in which url an article was found you can use the categories option before the url.
It will add these categories alongside the provided url at the `categories` field of the article.

```js
url: [
    ["News", "https://example.com/news"],
    ["Annoucements", "Other category name", "https://example.com/more-news"]
]
```

### `type`
The type of parser that will be used during the scrapping.
For more details read about [parsers](../../README.md#parsers).

### `interval`
Default value: `3600000`

The time the between the jobs that are issued for this source file.
For example, if it is scrapped at `4 AM` then the next job will be issued for `5 AM`.
Make note that saffron may add an offset to avoid fixed intervals.

This option will override the configuration option [`scheduler.jobsInterval`](../configuration#jobsInterval).

### `retryInterval`
Default value: `scheduler.jobsInterval / 2`

The interval where a source scrapping job will be reissued in case of failure.

### `axios`
Axios' configuration that will be applied to the requests made by saffron.

This option will override the configuration option [`requests.axios`](../configuration#requestsaxios).

### `ignoreCertificates`
Default value: `false`

If is set to `true` it will ignore all TLS certificates. It is useful in cases where a website
did not update their certificates.

### `delayBetweenRequests`
Default value: `0`

There is a case where a website may rate limit the requests it accepts, so a source
file with multiple urls may fail due to this limit.

Increasing the option `delayBetweenRequests` (in milliseconds) will put a distance
between the request.

This option will override the configuration option [`workers.delayBetweenRequests`](../configuration#delayBetweenRequests).

### `amount`
Default value: `workers.articles.amount`

The maximum amount of articles that saffron will return for this source for each scraping job.

This option will override the configuration option [`articles.amount`](../configuration#articlesamount).

### `includeContentAttachments`
Default value: `true`

If the generated article's attachments will contain the extracted urls from article's content.

This option will override the configuration option [`articles.includeContentAttachments`](../configuration#articlesincludeContentAttachments).

### `includeCategoryUrlsIn`
Default value: `categories`

Accepted values are `categories` or `extras`.
THis field will specify where to store the categories mentioned in the [`url`](#url) field of the source file.

This option will override the configuration option [`articles.includeCategoryUrlsIn`](../configuration#articlesincludeCategoryUrlsIn).

### `enconding`
The encoding of the website.

### `extra`
This field will stay intact with whatever you put in.
It allows the user to pass custom information about the source file.
It can be used like this:

```javascript
const saffron = new Saffron();
// ...

const extra = article[0].getSource(saffron).extra;
if(extra) {
    // ...
}
```

### `scrape`
This field contains all the scrape options needed by the specified parser.
You can check the scrape formats for each parser:
[WordPress V2](./wordpress_v2.md), [RSS](./rss.md), [HTML](./html.md) or [Dynamic](./dynamic.md).
