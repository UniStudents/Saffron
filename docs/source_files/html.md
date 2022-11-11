# HTML parser

The `html` parser has the most difficult source files after the `dynamic` parser.
It is a JSON file, and it can ΝΟΤ run only by providing an url, a lot of configuration is needed.

It is recommended to use tools such the **inspect element tool** of the browser to find
the CSS classes and CSS paths.

# Scrape

## `container`
The path of the HTML class in which all the articles are located.

## `article`
It will contain all the configuration needed to fill each article field.

The fields and their options are in a key-value relationship.

```json5
{
    "title": {/* options */},
    "content": {/* options */},
    // ...
}
```

The following keys will be assigned as the root fields in the article:
`title`, `content`, `pubDate`, `link`, `attachments` and `categories`.
All the other fields mentioned here will be moved to the `extras` field in a key-value
relationship.

### `class`
This option contains the CSS class of the HTML tag where the value is located.
If the HTML tag does not have a class, this field can be omitted.

### `find`

### `attributes`

### `multiple`

### `parent`

# Example

```json5
{
    // ...
    "type": "html",
    "scrape": {
        "container": ".my-container",
        "article": {
            "title": {
                "class": ".my-class",
                "find": [],
                "multiple": false
            },
            "link": {
                // ...
            },
            "title-continuation": {
                "parent": "title",
                "class": ".my-class2",
                "multiple": false
            }
            // ...
        }
    }
}
```