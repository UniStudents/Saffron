# HTML parser

The `html` parser has the most difficult source files after the `dynamic` parser.
It is a JSON file, and it can ΝΟΤ run only by providing an url, a lot of configuration is needed.

It is recommended to use tools such as the **inspect element tool** of the browser to find
the CSS classes and CSS paths.

# Scrape

## `container`
The identifier of the articles' container in the HTML code.
It can be a `class`, `css selector`, `x-path` or a `js path`.

The selected element will then be iterated for each child element and execute the
options inside [`article`](#article).
```html
<div class="the-container">
    <!-- It will iterate all the divs inside container -->
    <div id="article1">...</div>
    <div id="article2">...</div>
    <div id="article3">...</div>
    ...
</div>
```

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

The following standard keys will be assigned as the root fields in the article:
`title`, `content`, `pubDate`, `link`, `attachments` and `categories`.
All the other fields mentioned here will be moved to the `extras` field in a key-value
relationship.

### `class`
The identifier of the article in the HTML code.
It can be a `class`, `css selector`, `x-path` or a `js path`.

If the HTML tag cannot be identified by the above, this field can be omitted.

### `find`
How deep to go in the HTML code step by step.
It can be a `class`, `css selector`, `x-path` or a `js path`.

When [`multiple`](#multiple) is set to `true`, it will take the last item in the list
and iterate the elements.

### `attributes`
When the value of one or more attributes is needed.

For example, when the link of the article is the `href` attribute of an `a` tag that contains
the title.
```html
<a href="link-of-the-article">Title of the article</a>
```

Instead of text it will an array of objects containing the `attribute` which was requested,
the `value` of the attribute and the `text` of the tag.
```json5
{
    "attribute": "href",
    "value": "link-of-the-article",
    "text": "Title of the article"
}
```

### `multiple`
Default value: `false`

If set to `true`, it will retrieve multiple elements instead of the first one.
It will iterate the last element of the [`find`](#find) option.

If you want to get all the tags inside `ul`:
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    ...
</ul>
```

It will be like
```json5
{
    "field": ["ul", "li"],
    "multiple": true
}
```

Make note that the standard keys will only assign the first element in the array and skip
the others.

### `parent`
There are cases where the needed information is displayed in multiple places.

This option will append the current result found at the end of the `parent` option.
In case of multiple options having the same parent, they results will be appended
in the order in which they were defined.

This HTML code:
```html
<div id="article1">
    <a class="first">First part of title</a>
    <p class="second">Second part of title</p>
    <p class="third">Thid part of title</p>
</div>
```
will have the following options:
```json5
{
    // ...
    "article": {
        "title": {
            "class": "first",
        },
        "title-second": {
            "class": "second",
            "parent": "title"
        },
        "title-third": {
            "class": "third",
            "parent": "title"
        }
        // ...
    }
}
```

### `static`
Assign a static string to the specified field.
