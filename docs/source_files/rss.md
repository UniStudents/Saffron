# RSS parser

The `rss` parser has one of the most simple source files after `wordpress-v2` parser.
It is a JSON file, and it can run only by providing an url and all the other options are for rare cases and are optional.

## Scrape

### `extraFields`
An array of field names that will be appended to the article.
All the extra fields will be assigned to the extra field of the article in key-value format.

### `assignFields`

Some RSS feeds may rename their fields to custom values.
To match this fields you have to create a key-value item.
The key part will contain the article field where we want the rss field (value) to be assigned.

For the following XML field
```xml
<my-custom-title>My Title</my-custom-title>
```
will need the following record:
```json5
{
    // ...
    assignFields: {
        "title": "my-custom-title"
    }
}
```
and it will set the article's title:
```js
Article {
    title: "My Title"
    // ...
}
```
