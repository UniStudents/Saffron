# Article

### `title`
Contains the title of the article.

### `content`
Contains the content of the article. It may contain html tags based on the website (or parsing).

### `link`
The url of the article. By opening this url the user should see the original article.

### `pubDate`
Contains the publication date of the article.

### `timestamp`
Unlike [`pubDate`](#pubdate) it contains the date in milliseconds since EPOCH
where the article was scraped.

### `attachments`
The article's attachments.
It will also contain the extracted urls that exists inside the `content`.

### `categories`
Categories where the article belongs to. The categories assigned at the source file will also
be added here.

### `thumbnail`
The thumbnail's url if there is any.

### `extras`
Extra information about the article that does not match the above fields.

### `source`
The name of the source that was used to scrape the article.
