# XML parser

The `json`, `xml` and `html` parsers have the most complex source files after the `dynamic` parser.
It is a JSON file, and it can ΝΟΤ run only by providing an url, a lot of configuration is needed.

It is a must to know the structure of the response that is going to be parsed.

# Scrape

The XML response will be parsed into a json using `fast-xml-parser` and we apply the following options:
```ts
new XMLParser({
    allowBooleanAttributes: true,
    attributeNamePrefix: '',
    cdataPropName: '__cdata',
    commentPropName: '__comment',
    textNodeName: '__text',
    ignoreAttributes: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    numberParseOptions: {
        leadingZeros: false,
        hex: false,
        eNotation: false,
    },
    preserveOrder: false,
    processEntities: true,
    removeNSPrefix: false,
    trimValues: true,
    unpairedTags: unpairedTags // Like <br>
});
```

So for example the following xml code:
```xml
<?xml version='1.0' encoding='utf-8'?>
<rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'>
    <channel>
        <atom:link href='https://example.com' rel='self'
                   type='application/rss+xml'/>
        <title>Channel title</title>
        <link>https://example.com/channel-link</link>
        <item>
            <title attr="test">Item 1</title>
            <pubDate>Sun, 31 Jul 2022 23:59:39 +0300</pubDate>
            <guid isPermaLink='false'>Sun, 31 Jul 2022 23:59:39 +0300416759</guid>
        </item>
        <item>
            <title>Item 2</title>
            <guid isPermaLink='false'>Tue, 01 Mar 2022 20:13:46 +0300391866</guid>
        </item>
    </channel>
</rss>
```
will be transformed into:
```json
{
    "?xml": {
        "version": "1.0",
        "enconding": "utf-8"
    },
    "rss": {
        "channel": {
            "atom:link": {
                "href": "https://example.com",
                "rel": "self",
                "type": "application/rss+xml"
            },
            "title": "Channel title",
            "link": "https://example.com/channel-link",
            "item": [
                {
                    "title": {
                        "__text": "Item 1",
                        "attr": "test"
                    },
                    "pubDate": "Sun, 31 Jul 2022 23:59:39 +0300",
                    "guid": {
                        "__text": "Sun, 31 Jul 2022 23:59:39 +0300416759",
                        "isPermaLink": "false"
                    }
                },
                {
                    "title": "Item 2",
                    "guid": {
                        "__text": "Tue, 01 Mar 2022 20:13:46 +0300391866",
                        "isPermaLink": "false"
                    }
                }
            ]
        }
    }
}
```

After that the only think that remains is to parse it as a JSON.
That means that the xml parser's source file is almost identical to the one from
the json parser. 

## `unpairedTags`

From [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser/blob/HEAD/docs/v4/2.XMLparseOptions.md#unpairedtags) documentation:

> Unpaired Tags are the tags which don't have matching closing tag. Eg `<br>` in HTML. You can parse unpaired tags by providing their list to the parser, validator and builder.
