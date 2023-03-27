# HTML parser

The `html` parser has the most difficult source files after the `dynamic` parser.
It is a JSON file, and it can ΝΟΤ run only by providing an url, a lot of configuration is needed.

It is a must to use tools such as the **inspect element tool** of the browser to find
the CSS selectors or the name of the classes.
It is recommended to use CSS selectors instead of classes so you can pinpoint the desired element
accurately.

# Scrape

## `container`
The identifier of the articles' container in the HTML code.
It can be a `class`, a `css selector`, a `x-path` or a `js path`.

The selected element will then be iterated for each child element and execute the
options inside [`article`](#article).

For example, for this HTML code the container will be `.the-container >`.
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
`title`, `content`, `pubDate`, `link`, `attachments`, `categories` and `thumbnail`.
All the other fields mentioned here will be moved to the `extras` field in a key-value
relationship.

### `class`
The identifier of the article in the HTML code.
It can be a `class`, a `css selector`, a `x-path` or a `js path`.

If the HTML tag cannot be identified by the above, this field can be omitted.

For example, for this HTML code the class for the title will be `.title.title2`.
```html
<div class="the-container">
    <div id="article1">
        <a class="title title2" href="article-url">Title of the article</a>
    </div>
</div>
```

### `find`
How deep to go in the HTML code step by step.
It can be a `class`, a `css selector`, a `x-path` or a `js path`.

When [`multiple`](#multiple) is set to `true`, it will take the last item in the list
and iterate the elements.

For example, for this HTML code the class for the title will be `["h5", "a"]`.
```html
<div class="the-container">
    <div id="article1">
        <h5>
            <a href="article-url">Title of the article</a>
        </h5>
    </div>
</div>
```

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

For example, If you want to get all the tags inside `ul`:
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
    <p class="third">Third part of title</p>
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
Assign a static string to the specified field. All the other options are omitted.

## `skip`
When it is needed to skip an element inside `container` that matches some criteria.

You can skip an element based on:
1) the position of that element inside the document
2) a selector that matches that element
3) that element's text
4) both cases `2` and `3`

### Based on position
Position always starts from **zero**.
```json5
{
    // ...
    "skip": [
        {
            "position": 3 // skip the fourth element
        }
    ]
}
```

### Based on selector
The selector can be a `class`, a `css selector`, a `x-path` or a `js path`

```json5
{
    // ...
    "skip": [
        {
            "selector": "div.class1 > div.class2"
        }
    ]
}
```

### Based on text
The element's text will undergo a sanitization based on these rules:
* Html decoding (`&amp;gt;` will tranform to `>`)
* Remove all consecutive `\n`, `\t` and spaces.
```json5
{
    // ...
    "skip": [
        {
            "text": "Text to skip",
            "type": "exact" // or "contains"
        }
    ]
}
```

### Based on selector and text
This is used to match the text of a specific child element inside the element.

The element's text will undergo a sanitization based on these rules:
* Html decoding (`&amp;gt;` will tranform to `>`)
* Remove all consecutive `\n`, `\t` and spaces.
```json5
{
    // ...
    "skip": [
        {
            // Skip all articles that have in their title the text "Discovery on Mars"
            "selector": "div.title",
            "text": "Discovery on Mars",
            "type": "contains"
        }
    ]
}
```