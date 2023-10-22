# JSON parser

The `json`, `xml` and `html` parsers have the most complex source files after the `dynamic` parser.
It is a JSON file, and it can ΝΟΤ run only by providing an url, a lot of configuration is needed.

It is a must to know the structure of the response that is going to be parsed.

# Scrape

## `container`
The identifier of the articles' container in the response.

The selected node will then be iterated for each child element and execute the
options inside [`article`](#article).

For example, for this JSON response the container will be `["results"]`.
```json5
{
    "count": 5,
    "results": [
        // ...
    ]
}
```
If the root of the node must be iterated, then set `container` as an empty array.

Not only arrays can be iterated, the same applies for JSON nodes:
```json5
{
    "key1": {
        //...
    },
    "key2": {
        //...
    },
    // ...
}
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

### `find`
How deep to go in the node step by step.

For example, for this JSON node the `find` for the title will be `["data", "title"]`.
```json5
{
    "data": {
        "title": "I am the title"
    }
}
```

### `parent`
There are cases where the needed information is displayed in multiple places.

This option will append the current result found at the end of the `parent` option.
In case of multiple options having the same parent, they results will be appended
in the order in which they were defined.

This JSON node:
```json5
{
    "id": "article1",
    "data": {
        "title": {
            "first": "First part of title",
            "second": "Second part of title",
            "third": "Third part of title"
        }
    }
}
```
will have the following options:
```json5
{
    // ...
    "article": {
        "title": {
            "find": ["data", "title", "first"],
        },
        "title-second": {
            "find": ["data", "title", "second"],
            "parent": "title"
        },
        "title-third": {
            "find": ["data", "title", "third"],
            "parent": "title"
        }
        // ...
    }
}
```

The extra options `title-second` and `title-third` will also be added to the `extras` field of the article.

### `static`
Assign a static string to the specified field. All the other options are omitted.

```json5
{
    "link": {
        "static": "https://example.com"
    }
}
```

or combined with the `parent` option:
```json5
{
    "title": {
        "find": ["data", "title", "first"],
    },
    "separator": {
        "static": " ~ ",
        "parent": "title"
    },
    "title-second": {
        "find": ["data", "title", "second"],
        "parent": "title"
    }
}
```

## `skip`
When it is needed to skip an element inside `container` that matches some criteria.

You can skip a node based on:
1) the position of that node inside the response
2) that node's text

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

### Based on text
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

In cases where we need to check a nested item, we can use the option `find`,
to locate the desired key inside the iterated node. For this response
```json5
{
    "results": [
        {
            "key": {
                "test": "I want to be skipped"
            },
            "title": "...",
            // ....
        }
    ]
}
```
the skip option will include:
```json5
{
    "skip": [
        {
            "find": ["key", "test"],
            "text": "I want to be skipped",
            "type": "exact" // or "contains"
        }
    ]
}
```