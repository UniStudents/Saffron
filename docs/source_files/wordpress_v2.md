# WordPress V2 parser

The `wordpress-v2` parser has one of the most simple source files. It is a JSON file, and it
can run only by providing a url and all the other options are for customization and are optional.

## Scrape

The scrape function contains an `articles` object that will have all the necessary data that
the `wordpress-v2` parser will need.

### `include`
An array of field names that their values will be added to the article's extra field in a
key-value format.

It supports only top level properties, such as the `id` and `modified` fields.

### `dates.gmt`
Default value: `false`

If set to `true` the `pubDate` field will be set to the `date_gmt` field instead of the
`date` field.

### `dates.fallback`
Default value: `false`

If set to `true` and [`dates.gmt`](#datesgmt) field is set to true but `date_gmt` field is
not found, it will fall back to the `dates` field. 

### `filter`
WordPress API supports filtering by using url parameters during the request.
The `filter` field is an object that allows you to set these parameters.

Below you can find the ones that are supported:
* `search`
* `author`
* `authorExclude`
* `after`
* `before`
* `slug`
* `categories`
* `categoriesExclude`
* `tags`
* `tagsExclude`
* `sticky`

For more information about these parameters consult the WordPress API documentation.

### `thumbnail`
Default value: `thumbnail`

Takes as value the size of the image that is categorized as a thumbnail in the WordPres post.

The available sizes can be found using the `_embedded` parameter in the query and navigating
to the path `'_embedded'.'wp:featuredmedia'.0.'media_details'.'sizes'`

## Example

Below is an example of the WordPress parser source file:

```json
{
    "type": "wordpress-v2",
    // ...
    "scrape": {
        "articles": {
            "include": ["id", "modified"],
            "dates": {
                "gmt": false,
                "fallback": false
            },
            "filter": {
                // ...
            },
            "thumbnail": "thumbnail"
        }
    }
}
```
