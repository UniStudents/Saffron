import express from "express";

const app = express();

app.get('/wp1/wp-json/wp/v2/categories/', function (req, res) {
    res.status(200).json([{
        "id": 15,
        "count": 25,
        "description": "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03c3\u03b7\u03bc\u03b1\u03bd\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b4\u03b9\u03b1\u03ba\u03c1\u03af\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2.",
        "link": "https:\/\/www.ds.unipi.gr\/category\/recent-news\/",
        "name": "Highlights",
        "slug": "recent-news",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/15"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=15"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }, {
        "id": 348,
        "count": 4,
        "description": "",
        "link": "https:\/\/www.ds.unipi.gr\/en\/category\/recent-news-en\/",
        "name": "Highlights (en)",
        "slug": "recent-news-en",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/348"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=348"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }, {
        "id": 318,
        "count": 61,
        "description": "",
        "link": "https:\/\/www.ds.unipi.gr\/en\/category\/announcements-jobs-en\/",
        "name": "Job Opportunities",
        "slug": "announcements-jobs-en",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/318"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=318"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }, {
        "id": 43,
        "count": 21,
        "description": "",
        "link": "https:\/\/www.ds.unipi.gr\/en\/category\/announcements-en\/",
        "name": "News and Announcements",
        "slug": "announcements-en",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/43"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=43"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }, {
        "id": 3,
        "count": 1582,
        "description": "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03bf\u03b9 \u03b5\u03c0\u03b5\u03c1\u03c7\u03cc\u03bc\u03b5\u03bd\u03b5\u03c2 \u03b5\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2.",
        "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
        "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
        "slug": "announcements",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }, {
        "id": 320,
        "count": 19,
        "description": "",
        "link": "https:\/\/www.ds.unipi.gr\/category\/notifications\/",
        "name": "\u0395\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2",
        "slug": "notifications",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/320"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=320"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }, {
        "id": 63,
        "count": 52,
        "description": "\u038c\u03bb\u03b1 \u03bf\u03b9 \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c0\u03c1\u03bf\u03bf\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2.",
        "link": "https:\/\/www.ds.unipi.gr\/category\/announcements-jobs\/",
        "name": "\u03a0\u03c1\u03bf\u03bf\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u0395\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2",
        "slug": "announcements-jobs",
        "taxonomy": "category",
        "parent": 0,
        "meta": [],
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/63"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
            "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=63"}],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        }
    }]);
});

app.get('/wp1/wp-json/wp/v2/posts', function (req, res) {
    res.status(200).json([{
        "id": 19465,
        "date": "2022-09-15T11:08:05",
        "date_gmt": "2022-09-15T08:08:05",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19465"},
        "modified": "2022-09-15T11:08:58",
        "modified_gmt": "2022-09-15T08:08:58",
        "slug": "intelab_anazitisi_ekpaideytikou_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/15\/intelab_anazitisi_ekpaideytikou_sept_2022\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03bf\u03cd \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u038c\u03bc\u03b9\u03bb\u03bf InTeLab"},
        "content": {
            "rendered": "\n<p>\u039f \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03cc\u03c2 \u03cc\u03bc\u03b9\u03bb\u03bf\u03c2 InTeLab \u03b1\u03bd\u03b1\u03b6\u03b7\u03c4\u03b5\u03af \u03ba\u03b1\u03b8\u03b7\u03b3\u03b7\u03c4\u03ad\u03c2\/\u03c4\u03c1\u03b9\u03b5\u03c2<\/p>\n\n\n\n<p>\u039c\u03b5\u03c1\u03b9\u03ba\u03ae\u03c2 \u03b1\u03c0\u03b1\u03c3\u03c7\u03cc\u03bb\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b4\u03b9\u03b4\u03b1\u03c3\u03ba\u03b1\u03bb\u03af\u03b1 \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c1\u03bf\u03bc\u03c0\u03bf\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c4\u03cc\u03c3\u03bf \u03c3\u03c4\u03b1 \u03ba\u03ad\u03bd\u03c4\u03c1\u03b1 \u03bc\u03b1\u03c2 \u03b1\u03bb\u03bb\u03ac \u03ba\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03bc\u03b1\u03b8\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c3\u03b5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03b6\u03cc\u03bc\u03b5\u03bd\u03bf\u03c5\u03c2 \u03c7\u03ce\u03c1\u03bf\u03c5\u03c2 \u03c3\u03b5 \u03cc\u03bb\u03b7 \u03c4\u03b7\u03bd \u0391\u03c4\u03c4\u03b9\u03ba\u03ae!<\/p>\n\n\n\n<p><strong>\u0391\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03b1 \u03c0\u03c1\u03bf\u03c3\u03cc\u03bd\u03c4\u03b1 \u03c5\u03c0\u03bf\u03c8\u03b7\u03c6\u03af\u03bf\u03c5:<\/strong><\/p>\n\n\n\n<p>\u0391\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c2\/\u03b7: <\/p>\n\n\n\n<ul><li>\u03a0\u03b1\u03b9\u03b4\u03b1\u03b3\u03c9\u03b3\u03b9\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd<\/li><li>\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2\/\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd<\/li><li>\u0398\u03b5\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03ce\u03bd<\/li><\/ul>\n\n\n\n<p><strong>\u03a0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03c5\u03bc\u03b5:<\/strong><\/p>\n\n\n\n<p>\u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03bd\u03b5\u03c7\u03ae \u03ba\u03b1\u03b8\u03bf\u03b4\u03ae\u03b3\u03b7\u03c3\u03b7.<\/p>\n\n\n\n<p>\u03a3\u03c4\u03b5\u03af\u03bb\u03b5 \u03bc\u03b1\u03c2 \u03c4\u03bf \u03b2\u03b9\u03bf\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03cc \u03c3\u03bf\u03c5 \u03c3\u03c4\u03bf&nbsp;<a href=\"mailto:info@intelab.gr\">info@intelab.gr<\/a>&nbsp;\u03ae \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b7\u03c3\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2 \u03c3\u03c4\u03bf 2109851172-4.<\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u039f \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03cc\u03c2 \u03cc\u03bc\u03b9\u03bb\u03bf\u03c2 InTeLab \u03b1\u03bd\u03b1\u03b6\u03b7\u03c4\u03b5\u03af \u03ba\u03b1\u03b8\u03b7\u03b3\u03b7\u03c4\u03ad\u03c2\/\u03c4\u03c1\u03b9\u03b5\u03c2 \u039c\u03b5\u03c1\u03b9\u03ba\u03ae\u03c2 \u03b1\u03c0\u03b1\u03c3\u03c7\u03cc\u03bb\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b4\u03b9\u03b4\u03b1\u03c3\u03ba\u03b1\u03bb\u03af\u03b1 \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c1\u03bf\u03bc\u03c0\u03bf\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c4\u03cc\u03c3\u03bf \u03c3\u03c4\u03b1 \u03ba\u03ad\u03bd\u03c4\u03c1\u03b1 \u03bc\u03b1\u03c2 \u03b1\u03bb\u03bb\u03ac \u03ba\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03bc\u03b1\u03b8\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c3\u03b5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03b6\u03cc\u03bc\u03b5\u03bd\u03bf\u03c5\u03c2 \u03c7\u03ce\u03c1\u03bf\u03c5\u03c2 \u03c3\u03b5 \u03cc\u03bb\u03b7 \u03c4\u03b7\u03bd \u0391\u03c4\u03c4\u03b9\u03ba\u03ae! \u0391\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03b1 \u03c0\u03c1\u03bf\u03c3\u03cc\u03bd\u03c4\u03b1 \u03c5\u03c0\u03bf\u03c8\u03b7\u03c6\u03af\u03bf\u03c5: \u0391\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c2\/\u03b7: \u03a0\u03b1\u03b9\u03b4\u03b1\u03b3\u03c9\u03b3\u03b9\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2\/\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u0398\u03b5\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03ce\u03bd \u03a0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03c5\u03bc\u03b5: \u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03bd\u03b5\u03c7\u03ae \u03ba\u03b1\u03b8\u03bf\u03b4\u03ae\u03b3\u03b7\u03c3\u03b7. \u03a3\u03c4\u03b5\u03af\u03bb\u03b5 \u03bc\u03b1\u03c2 \u03c4\u03bf \u03b2\u03b9\u03bf\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03cc \u03c3\u03bf\u03c5 \u03c3\u03c4\u03bf&nbsp;info@intelab.gr&nbsp;\u03ae \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b7\u03c3\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2 \u03c3\u03c4\u03bf 2109851172-4.<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [63],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u039f \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03cc\u03c2 \u03cc\u03bc\u03b9\u03bb\u03bf\u03c2 InTeLab \u03b1\u03bd\u03b1\u03b6\u03b7\u03c4\u03b5\u03af \u03ba\u03b1\u03b8\u03b7\u03b3\u03b7\u03c4\u03ad\u03c2\/\u03c4\u03c1\u03b9\u03b5\u03c2 \u039c\u03b5\u03c1\u03b9\u03ba\u03ae\u03c2 \u03b1\u03c0\u03b1\u03c3\u03c7\u03cc\u03bb\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b4\u03b9\u03b4\u03b1\u03c3\u03ba\u03b1\u03bb\u03af\u03b1 \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c1\u03bf\u03bc\u03c0\u03bf\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c4\u03cc\u03c3\u03bf \u03c3\u03c4\u03b1 \u03ba\u03ad\u03bd\u03c4\u03c1\u03b1 \u03bc\u03b1\u03c2 \u03b1\u03bb\u03bb\u03ac \u03ba\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03bc\u03b1\u03b8\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c3\u03b5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03b6\u03cc\u03bc\u03b5\u03bd\u03bf\u03c5\u03c2 \u03c7\u03ce\u03c1\u03bf\u03c5\u03c2 \u03c3\u03b5 \u03cc\u03bb\u03b7 \u03c4\u03b7\u03bd \u0391\u03c4\u03c4\u03b9\u03ba\u03ae! \u0391\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03b1 \u03c0\u03c1\u03bf\u03c3\u03cc\u03bd\u03c4\u03b1 \u03c5\u03c0\u03bf\u03c8\u03b7\u03c6\u03af\u03bf\u03c5: \u0391\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c2\/\u03b7: \u03a0\u03b1\u03b9\u03b4\u03b1\u03b3\u03c9\u03b3\u03b9\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2\/\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u0398\u03b5\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03ce\u03bd \u03a0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03c5\u03bc\u03b5: \u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03bd\u03b5\u03c7\u03ae \u03ba\u03b1\u03b8\u03bf\u03b4\u03ae\u03b3\u03b7\u03c3\u03b7. \u03a3\u03c4\u03b5\u03af\u03bb\u03b5 \u03bc\u03b1\u03c2 \u03c4\u03bf \u03b2\u03b9\u03bf\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03cc \u03c3\u03bf\u03c5 \u03c3\u03c4\u03bf&nbsp;info@intelab.gr&nbsp;\u03ae \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b7\u03c3\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2 \u03c3\u03c4\u03bf 2109851172-4.",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19465"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19465"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19465\/revisions"
            }],
            "predecessor-version": [{
                "id": 19466,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19465\/revisions\/19466"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19465"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19465"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19465"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 63,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements-jobs\/",
                "name": "\u03a0\u03c1\u03bf\u03bf\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u0395\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2",
                "slug": "announcements-jobs",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/63"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=63"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19453,
        "date": "2022-09-09T15:09:01",
        "date_gmt": "2022-09-09T12:09:01",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19453"},
        "modified": "2022-09-09T15:09:19",
        "modified_gmt": "2022-09-09T12:09:19",
        "slug": "eggrafes-allodapwn-sept-2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/09\/eggrafes-allodapwn-sept-2022\/",
        "title": {"rendered": "\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2 \u0391\u03bb\u03bb\u03bf\u03b4\u03b1\u03c0\u03ce\u03bd-\u0391\u03bb\u03bb\u03bf\u03b3\u03b5\u03bd\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03ad\u03c4\u03bf\u03c2 2022-23"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1 \u0388\u03bd\u03c4\u03c5\u03c0\u03b1:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-eb71702f-482b-43ed-a24f-aa8dd07a1907\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Eggrafes-allodapwn-sept-2022.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Eggrafes-allodapwn-sept-2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-eb71702f-482b-43ed-a24f-aa8dd07a1907\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-5015fcce-b5ac-4f67-8f0e-ab7d7022eddd\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Ypodigma-_1_aitisis_sept_2022.docx\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 \u0391\u03af\u03c4\u03b7\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Ypodigma-_1_aitisis_sept_2022.docx\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-5015fcce-b5ac-4f67-8f0e-ab7d7022eddd\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-082a2cf2-fdf4-4051-b6a2-bd99a49ae79d\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Ypefthyni-dilosi-nomou-105-n-1599-86-word_sept_2022.doc\">\u03a5\u03c0\u03b5\u03cd\u03b8\u03c5\u03bd\u03b7 \u0394\u03ae\u03bb\u03c9\u03c3\u03b7<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Ypefthyni-dilosi-nomou-105-n-1599-86-word_sept_2022.doc\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-082a2cf2-fdf4-4051-b6a2-bd99a49ae79d\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1 \u0388\u03bd\u03c4\u03c5\u03c0\u03b1:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1 \u0388\u03bd\u03c4\u03c5\u03c0\u03b1:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19453"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19453"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19453\/revisions"
            }],
            "predecessor-version": [{
                "id": 19457,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19453\/revisions\/19457"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19453"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19453"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19453"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19450,
        "date": "2022-09-09T14:54:50",
        "date_gmt": "2022-09-09T11:54:50",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19450"},
        "modified": "2022-09-09T14:55:04",
        "modified_gmt": "2022-09-09T11:55:04",
        "slug": "fek-2022-tefxos-y-o-d-d-00779-31_8_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/09\/fek-2022-tefxos-y-o-d-d-00779-31_8_2022\/",
        "title": {"rendered": "\u0395\u03ba\u03bb\u03bf\u03b3\u03ae \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03c0\u03bb\u03b7\u03c1\u03c9\u03c4\u03ae \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c4\u03b7\u03c2 \u03a3\u03c7\u03bf\u03bb\u03ae\u03c2 \u03a4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03b9\u03ce\u03bd \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03b9 \u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03b9\u03ce\u03bd \u03c4\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03a0\u03b5\u03b9\u03c1\u03b1\u03b9\u03ce\u03c2"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-c860c2c4-7f96-4e32-9144-948f33098d3b\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/FEK-2022-Tefxos-Y.O.D.D.-00779-31_8_2022.pdf\">\u03a6\u0395\u039a 779\/\u0391\/31-8-2022<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/FEK-2022-Tefxos-Y.O.D.D.-00779-31_8_2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-c860c2c4-7f96-4e32-9144-948f33098d3b\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19450"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19450"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19450\/revisions"
            }],
            "predecessor-version": [{
                "id": 19452,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19450\/revisions\/19452"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19450"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19450"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19450"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19447,
        "date": "2022-09-09T14:48:52",
        "date_gmt": "2022-09-09T11:48:52",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19447"},
        "modified": "2022-09-09T14:49:00",
        "modified_gmt": "2022-09-09T11:49:00",
        "slug": "anakoinwsi_aiesec_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/09\/anakoinwsi_aiesec_sept_2022\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03c4\u03b7\u03c2 AIESEC"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-6e89d236-cd7c-4547-9dcf-e4cfc4dcdd35\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Anakoinwsi_AIESEC_sept_2022.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Anakoinwsi_AIESEC_sept_2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-6e89d236-cd7c-4547-9dcf-e4cfc4dcdd35\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19447"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19447"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19447\/revisions"
            }],
            "predecessor-version": [{
                "id": 19449,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19447\/revisions\/19449"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19447"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19447"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19447"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19442,
        "date": "2022-09-08T13:06:47",
        "date_gmt": "2022-09-08T10:06:47",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19442"},
        "modified": "2022-09-08T13:07:29",
        "modified_gmt": "2022-09-08T10:07:29",
        "slug": "metafora_thesis_enoplwn_dunamewn_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/08\/metafora_thesis_enoplwn_dunamewn_sept_2022\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac \u03b8\u03ad\u03c3\u03b7\u03c2 \u03c6\u03bf\u03af\u03c4\u03b7\u03c3\u03b7\u03c2 \u03b5\u03bd\u03cc\u03c0\u03bb\u03c9\u03bd \u03b4\u03c5\u03bd\u03ac\u03bc\u03b5\u03c9\u03bd"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-e036dea3-0d4a-4205-9731-ec9f0d035dd9\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Metafora_thesis_enoplwn_dunamewn_sept_2022.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Metafora_thesis_enoplwn_dunamewn_sept_2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-e036dea3-0d4a-4205-9731-ec9f0d035dd9\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19442"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19442"
            }],
            "version-history": [{
                "count": 2,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19442\/revisions"
            }],
            "predecessor-version": [{
                "id": 19445,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19442\/revisions\/19445"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19442"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19442"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19442"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19427,
        "date": "2022-09-06T13:45:17",
        "date_gmt": "2022-09-06T10:45:17",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19427"},
        "modified": "2022-09-06T13:45:46",
        "modified_gmt": "2022-09-06T10:45:46",
        "slug": "anakoinwsi_gia_stegastiko_epidoma_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/06\/anakoinwsi_gia_stegastiko_epidoma_sept_2022\/",
        "title": {"rendered": "\u0395\u03ba \u03bd\u03ad\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03b1\u03b9\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1 \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022"},
        "content": {
            "rendered": "\n<p>\u0394\u03b5\u03af\u03c4\u03b5 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 <a href=\"https:\/\/www.unipi.gr\/unipi\/el\/ppf-foithtikh-merimna\/ppf-stegastiko-epidoma.html\">\u03b5\u03b4\u03ce<\/a>.<\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u0394\u03b5\u03af\u03c4\u03b5 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b5\u03b4\u03ce.<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u0394\u03b5\u03af\u03c4\u03b5 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b5\u03b4\u03ce.",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19427"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19427"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19427\/revisions"
            }],
            "predecessor-version": [{
                "id": 19428,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19427\/revisions\/19428"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19427"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19427"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19427"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19419,
        "date": "2022-09-05T10:18:00",
        "date_gmt": "2022-09-05T07:18:00",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19419"},
        "modified": "2022-09-05T10:25:13",
        "modified_gmt": "2022-09-05T07:25:13",
        "slug": "prosklisi_ekdilwsis_endiaferontos_mf_gia_eggrafi_sto_mitrwo_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/05\/prosklisi_ekdilwsis_endiaferontos_mf_gia_eggrafi_sto_mitrwo_sept_2022\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03b5\u03ba\u03b4\u03ae\u03bb\u03c9\u03c3\u03b7\u03c2 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bd\u03c4\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03bc\u03b5\u03c4\u03b1\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03ce\u03bd \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ce\u03bd \u03ba\u03b1\u03b9 \u03c5\u03c0\u03bf\u03c8\u03b7\u03c6\u03af\u03c9\u03bd \u03b4\u03b9\u03b4\u03b1\u03ba\u03c4\u03cc\u03c1\u03c9\u03bd \u03c3\u03c4\u03bf \u039c\u03b7\u03c4\u03c1\u03ce\u03bf \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ce\u03bd \u03c4\u03b7\u03c2 \u0395\u0398\u0391\u0391\u0395"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1 \u0388\u03bd\u03c4\u03c5\u03c0\u03b1:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-8cde268c-4fcb-49db-bf26-9591f66e740d\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Prosklisi_ekdilwsis_endiaferontos_mf_gia_eggrafi_sto_mitrwo_sept_2022.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Prosklisi_ekdilwsis_endiaferontos_mf_gia_eggrafi_sto_mitrwo_sept_2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-8cde268c-4fcb-49db-bf26-9591f66e740d\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-7954d05d-15f5-4392-bda4-f2243472e6f2\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Ypodeigma_aitisis_foititi_gia_mitrwo_foititwn_sept_2022.docx\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ae \u03c3\u03c4\u03bf \u039c\u03b7\u03c4\u03c1\u03ce\u03bf \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ce\u03bd<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Ypodeigma_aitisis_foititi_gia_mitrwo_foititwn_sept_2022.docx\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-7954d05d-15f5-4392-bda4-f2243472e6f2\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1 \u0388\u03bd\u03c4\u03c5\u03c0\u03b1:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1 \u0388\u03bd\u03c4\u03c5\u03c0\u03b1:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19419"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19419"
            }],
            "version-history": [{
                "count": 2,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19419\/revisions"
            }],
            "predecessor-version": [{
                "id": 19424,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19419\/revisions\/19424"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19419"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19419"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19419"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19415,
        "date": "2022-09-02T21:10:24",
        "date_gmt": "2022-09-02T18:10:24",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19415"},
        "modified": "2022-09-06T17:20:43",
        "modified_gmt": "2022-09-06T14:20:43",
        "slug": "prosklisi_martin_dougiama_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/02\/prosklisi_martin_dougiama_sept_2022\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c4\u03b5\u03bb\u03b5\u03c4\u03ae \u03b1\u03bd\u03b1\u03b3\u03cc\u03c1\u03b5\u03c5\u03c3\u03b7\u03c2 \u03c4\u03bf\u03c5 \u03ba. MARTIN DOUGIAMAS, \u0399\u03b4\u03c1\u03c5\u03c4\u03ae \u03ba\u03b1\u03b9 CEO \u03c4\u03b7\u03c2 Moodle Pty Ltd, \u03c3\u03b5 \u0395\u03c0\u03af\u03c4\u03b9\u03bc\u03bf \u0394\u03b9\u03b4\u03ac\u03ba\u03c4\u03bf\u03c1\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd"},
        "content": {
            "rendered": "\n<h3>\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2:<\/h3>\n\n\n\n<p><a href=\"https:\/\/www.eventbrite.com\/e\/martin-dougiamas-tickets-414506820057\">\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ae \u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 (\u03ba\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2)<\/a><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2: \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ae \u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 (\u03ba\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2)<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2: \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ae \u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 (\u03ba\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2)",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19415"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19415"
            }],
            "version-history": [{
                "count": 5,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19415\/revisions"
            }],
            "predecessor-version": [{
                "id": 19433,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19415\/revisions\/19433"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19415"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19415"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19415"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19410,
        "date": "2022-09-01T17:27:34",
        "date_gmt": "2022-09-01T14:27:34",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19410"},
        "modified": "2022-09-01T17:28:15",
        "modified_gmt": "2022-09-01T14:28:15",
        "slug": "anakoinwsi_gia_tin_eksetastiki_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/01\/anakoinwsi_gia_tin_eksetastiki_sept_2022\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-132d1902-ea9b-4f80-925b-45f8524520b1\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Anakoinwsi_gia_tin_eksetastiki_sept_2022.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Anakoinwsi_gia_tin_eksetastiki_sept_2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-132d1902-ea9b-4f80-925b-45f8524520b1\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19410"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19410"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19410\/revisions"
            }],
            "predecessor-version": [{
                "id": 19412,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19410\/revisions\/19412"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19410"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19410"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19410"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19397,
        "date": "2022-09-01T12:44:46",
        "date_gmt": "2022-09-01T09:44:46",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19397"},
        "modified": "2022-09-01T12:47:40",
        "modified_gmt": "2022-09-01T09:47:40",
        "slug": "anakoinwsi_gia_ilektroniki_eggrafi_eisaktewn_sept_2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/01\/anakoinwsi_gia_ilektroniki_eggrafi_eisaktewn_sept_2022\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03b5\u03b9\u03c3\u03b1\u03ba\u03c4\u03ad\u03c9\u03bd 2022"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-95197564-137e-4895-a765-2d497a1add11\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Anakoinwsi_gia_ilektroniki_eggrafi_eisaktewn_sept_2022.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Anakoinwsi_gia_ilektroniki_eggrafi_eisaktewn_sept_2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-95197564-137e-4895-a765-2d497a1add11\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19397"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19397"
            }],
            "version-history": [{
                "count": 2,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19397\/revisions"
            }],
            "predecessor-version": [{
                "id": 19404,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19397\/revisions\/19404"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19397"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19397"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19397"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19394,
        "date": "2022-09-01T12:23:31",
        "date_gmt": "2022-09-01T09:23:31",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19394"},
        "modified": "2022-09-01T12:49:11",
        "modified_gmt": "2022-09-01T09:49:11",
        "slug": "akadimaiko_imerologio_2022-23_v1",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/09\/01\/akadimaiko_imerologio_2022-23_v1\/",
        "title": {"rendered": "\u0391\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03b7\u03bc\u03b5\u03c1\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2022-23"},
        "content": {
            "rendered": "\n<h3>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/h3>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-6af5a220-5aa4-4466-a91a-197ecbb9dafc\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Akadimaiko_imerologio_2022-23_v1.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/09\/Akadimaiko_imerologio_2022-23_v1.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-6af5a220-5aa4-4466-a91a-197ecbb9dafc\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/p>\n",
            "protected": false
        },
        "author": 7,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19394"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19394"
            }],
            "version-history": [{
                "count": 2,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19394\/revisions"
            }],
            "predecessor-version": [{
                "id": 19405,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19394\/revisions\/19405"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19394"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19394"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19394"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 7,
                "name": "\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/digitalsystems\/",
                "slug": "digitalsystems",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/7"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19390,
        "date": "2022-08-02T11:26:23",
        "date_gmt": "2022-08-02T08:26:23",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19390"},
        "modified": "2022-08-02T11:27:01",
        "modified_gmt": "2022-08-02T08:27:01",
        "slug": "dorean-diamoni-2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/08\/02\/dorean-diamoni-2022\/",
        "title": {"rendered": "\u0394\u03c9\u03c1\u03b5\u03ac\u03bd \u0394\u03b9\u03b1\u03bc\u03bf\u03bd\u03ae \u03c3\u03c4\u03b7\u03bd \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ae \u0395\u03c3\u03c4\u03af\u03b1 \u03c4\u03bf\u03c5 \u039f.\u03a0.\u0391. \u03ba\u03b1\u03b9 \u03c4\u03bf\u03c5 \u0395.\u039c.\u03a0. (\u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03ad\u03c4\u03bf\u03c2 2022-2023)"},
        "content": {
            "rendered": "\n<p>\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03cc \u03c3\u03c4\u03bf\u03c5\u03c2 <strong>\u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b4\u03b9\u03b1\u03bc\u03ad\u03bd\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c3\u03c4\u03b9\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c3\u03c4\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5<br>\u039f.\u03a0.\u0391. \u03ba\u03b1\u03b9 \u03c4\u03bf\u03c5 \u0395.\u039c.\u03a0. \u03cc\u03c4\u03b9 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bf\u03c5\u03bd \u03b5\u03ba \u03bd\u03ad\u03bf\u03c5 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc<br>\u03ad\u03c4\u03bf\u03c2 2022-2023<\/strong>.<br>\u039f\u03b9 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03b8\u03c5\u03bc\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b4\u03b9\u03b1\u03bc\u03ad\u03bd\u03bf\u03c5\u03bd \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03c3\u03c4\u03b9\u03c2<br>\u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c3\u03c4\u03af\u03b5\u03c2, \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03bb\u03b7\u03c1\u03bf\u03cd\u03bd \u03c4\u03b9\u03c2 \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 <strong>\u03bd\u03b1<br>\u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03b5\u03bd \u03bd\u03ad\u03bf\u03c5 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 <\/strong>\u03bc\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae<br>\u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ae\u03c2 \u039c\u03ad\u03c1\u03b9\u03bc\u03bd\u03b1\u03c2 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 <a href=\"https:\/\/sitisi.unipi.gr\">https:\/\/sitisi.unipi.gr<\/a><br>\u03bc\u03b5 \u03c4\u03bf\u03c5\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd\u03c2 \u03c4\u03bf\u03c5 \u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03c4\u03bf\u03c5\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd <strong>\u03b1\u03c0\u03cc \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 25 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5<br>\u03ad\u03c9\u03c2 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 22 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022.<\/strong><\/p>\n\n\n\n<p>\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03ad\u03bd\u03c4\u03c5\u03c0\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b1 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 <\/p>\n\n\n\n<p><a href=\"https:\/\/www.unipi.gr\/unipi\/el\/ppf-foithtikh-merimna\/ppf-foititikes-esties.html\">https:\/\/www.unipi.gr\/unipi\/el\/ppf-foithtikh-merimna\/ppf-foititikes-esties.html<\/a><\/p>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03cc \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b4\u03b9\u03b1\u03bc\u03ad\u03bd\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c3\u03c4\u03b9\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c3\u03c4\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5\u039f.\u03a0.\u0391. \u03ba\u03b1\u03b9 \u03c4\u03bf\u03c5 \u0395.\u039c.\u03a0. \u03cc\u03c4\u03b9 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bf\u03c5\u03bd \u03b5\u03ba \u03bd\u03ad\u03bf\u03c5 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc\u03ad\u03c4\u03bf\u03c2 2022-2023.\u039f\u03b9 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03b8\u03c5\u03bc\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b4\u03b9\u03b1\u03bc\u03ad\u03bd\u03bf\u03c5\u03bd \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03c3\u03c4\u03b9\u03c2\u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c3\u03c4\u03af\u03b5\u03c2, \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03bb\u03b7\u03c1\u03bf\u03cd\u03bd \u03c4\u03b9\u03c2 \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03bd\u03b1\u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03b5\u03bd \u03bd\u03ad\u03bf\u03c5 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae\u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 [&hellip;]<\/p>\n",
            "protected": false
        },
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03cc \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b4\u03b9\u03b1\u03bc\u03ad\u03bd\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c3\u03c4\u03b9\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c3\u03c4\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5\u039f.\u03a0.\u0391. \u03ba\u03b1\u03b9 \u03c4\u03bf\u03c5 \u0395.\u039c.\u03a0. \u03cc\u03c4\u03b9 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bf\u03c5\u03bd \u03b5\u03ba \u03bd\u03ad\u03bf\u03c5 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc\u03ad\u03c4\u03bf\u03c2 2022-2023.\u039f\u03b9 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03b8\u03c5\u03bc\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b4\u03b9\u03b1\u03bc\u03ad\u03bd\u03bf\u03c5\u03bd \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03c3\u03c4\u03b9\u03c2\u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b5\u03c3\u03c4\u03af\u03b5\u03c2, \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03bb\u03b7\u03c1\u03bf\u03cd\u03bd \u03c4\u03b9\u03c2 \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03bd\u03b1\u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03b5\u03bd \u03bd\u03ad\u03bf\u03c5 \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae\u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2&hellip;",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19390"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19390"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19390\/revisions"
            }],
            "predecessor-version": [{
                "id": 19391,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19390\/revisions\/19391"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19390"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19390"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19390"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19388,
        "date": "2022-08-02T11:20:55",
        "date_gmt": "2022-08-02T08:20:55",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19388"},
        "modified": "2022-08-02T11:21:36",
        "modified_gmt": "2022-08-02T08:21:36",
        "slug": "sitisi-foititon-2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/08\/02\/sitisi-foititon-2022\/",
        "title": {"rendered": "\u03a3\u03af\u03c4\u03b9\u03c3\u03b7 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ce\u03bd\/\u03c4\u03c1\u03b9\u03ce\u03bd \u0391\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u0388\u03c4\u03bf\u03c5\u03c2 2022-2023"},
        "content": {
            "rendered": "\n<p>\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03cc \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2\/\u03c4\u03c1\u03b9\u03b5\u03c2 \u03bc\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5 2017, 2018, 2019, 2020 \u03ba\u03b1\u03b9 2021 \u03c0\u03bf\u03c5<br>\u03b5\u03c0\u03b9\u03b8\u03c5\u03bc\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c3\u03b9\u03c4\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03ad\u03c4\u03bf\u03c2 2022-2023 \u03cc\u03c4\u03b9 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ae\u03c2 \u039c\u03ad\u03c1\u03b9\u03bc\u03bd\u03b1\u03c2 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 <a href=\"https:\/\/sitisi.unipi.gr\">https:\/\/sitisi.unipi.gr<\/a> \u03bc\u03b5 \u03c4\u03bf\u03c5\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd\u03c2 \u03c4\u03bf\u03c5 \u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03c4\u03bf\u03c5\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03b1\u03c0\u03cc <strong>\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 25 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5 <\/strong>\u03ad\u03c9\u03c2 <strong>\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 29 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022<\/strong>.<\/p>\n\n\n\n<p>\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b1 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 <a href=\"https:\/\/www.unipi.gr\/unipi\/el\/ppf-foithtikh-merimna\/ppf-sitish.html\">https:\/\/www.unipi.gr\/unipi\/el\/ppf-foithtikh-merimna\/ppf-sitish.html<\/a><\/p>\n\n\n\n<p>.<\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03cc \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2\/\u03c4\u03c1\u03b9\u03b5\u03c2 \u03bc\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5 2017, 2018, 2019, 2020 \u03ba\u03b1\u03b9 2021 \u03c0\u03bf\u03c5\u03b5\u03c0\u03b9\u03b8\u03c5\u03bc\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c3\u03b9\u03c4\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03ad\u03c4\u03bf\u03c2 2022-2023 \u03cc\u03c4\u03b9 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ae\u03c2 \u039c\u03ad\u03c1\u03b9\u03bc\u03bd\u03b1\u03c2 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 https:\/\/sitisi.unipi.gr \u03bc\u03b5 \u03c4\u03bf\u03c5\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd\u03c2 \u03c4\u03bf\u03c5 \u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03c4\u03bf\u03c5\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03b1\u03c0\u03cc \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 25 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5 \u03ad\u03c9\u03c2 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 [&hellip;]<\/p>\n",
            "protected": false
        },
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u0393\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03b3\u03bd\u03c9\u03c3\u03c4\u03cc \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2\/\u03c4\u03c1\u03b9\u03b5\u03c2 \u03bc\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5 2017, 2018, 2019, 2020 \u03ba\u03b1\u03b9 2021 \u03c0\u03bf\u03c5\u03b5\u03c0\u03b9\u03b8\u03c5\u03bc\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c3\u03b9\u03c4\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03ad\u03c4\u03bf\u03c2 2022-2023 \u03cc\u03c4\u03b9 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03b1\u03af\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03c0\u03bb\u03b1\u03c4\u03c6\u03cc\u03c1\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a6\u03bf\u03b9\u03c4\u03b7\u03c4\u03b9\u03ba\u03ae\u03c2 \u039c\u03ad\u03c1\u03b9\u03bc\u03bd\u03b1\u03c2 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 https:\/\/sitisi.unipi.gr \u03bc\u03b5 \u03c4\u03bf\u03c5\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd\u03c2 \u03c4\u03bf\u03c5 \u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03c4\u03bf\u03c5\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03b1\u03c0\u03cc \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 25 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5 \u03ad\u03c9\u03c2 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7&hellip;",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19388"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19388"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19388\/revisions"
            }],
            "predecessor-version": [{
                "id": 19389,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19388\/revisions\/19389"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19388"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19388"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19388"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19382,
        "date": "2022-07-29T02:06:19",
        "date_gmt": "2022-07-28T23:06:19",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19382"},
        "modified": "2022-07-29T02:16:16",
        "modified_gmt": "2022-07-28T23:16:16",
        "slug": "exetasi-diktya-i-ii",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/29\/exetasi-diktya-i-ii\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd &#8220;\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399&#8221; &#038; &#8220;\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399&#8221; (\u0395\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5)"},
        "content": {
            "rendered": "\n<p>\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2, \u03cc\u03c4\u03b9 \u03b7 \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03ba\u03ac\u03c4\u03c9\u03b8\u03b9 \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 :<ul><li>\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399, \u03a8\u03a3-320<li>\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399, \u03a8\u03a3-321<\/ul><br>\u03b8\u03b1 \u03b3\u03af\u03bd\u03b5\u03b9 \u03bc\u03b5 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7 \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2, \u03c3\u03cd\u03bc\u03c6\u03c9\u03bd\u03b1 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03bf\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b5\u03b9 o \u03b4\u03b9\u03b4\u03ac\u03c3\u03ba\u03c9\u03bd \u03c3\u03c4\u03bf \u03c3\u03cd\u03c3\u03c4\u03b7\u03bc\u03b1 \u0391\u03c1\u03af\u03c3\u03c4\u03b1\u03c1\u03c7\u03bf\u03c2, \u03ba\u03b1\u03b9 \u03cc\u03c7\u03b9 \u03c3\u03c4\u03b9\u03c2 \u03b1\u03af\u03b8\u03bf\u03c5\u03c3\u03b5\u03c2 \u039a\u0395\u039a\u03a4-102 &amp; \u039a\u0395\u039a\u03a4-106, 107 \u03cc\u03c0\u03c9\u03c2 \u03b1\u03c1\u03c7\u03b9\u03ba\u03ac \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5.<\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2, \u03cc\u03c4\u03b9 \u03b7 \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03ba\u03ac\u03c4\u03c9\u03b8\u03b9 \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 : \u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399, \u03a8\u03a3-320 \u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399, \u03a8\u03a3-321 \u03b8\u03b1 \u03b3\u03af\u03bd\u03b5\u03b9 \u03bc\u03b5 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7 \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2, \u03c3\u03cd\u03bc\u03c6\u03c9\u03bd\u03b1 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03bf\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b5\u03b9 o \u03b4\u03b9\u03b4\u03ac\u03c3\u03ba\u03c9\u03bd \u03c3\u03c4\u03bf \u03c3\u03cd\u03c3\u03c4\u03b7\u03bc\u03b1 \u0391\u03c1\u03af\u03c3\u03c4\u03b1\u03c1\u03c7\u03bf\u03c2, \u03ba\u03b1\u03b9 \u03cc\u03c7\u03b9 \u03c3\u03c4\u03b9\u03c2 \u03b1\u03af\u03b8\u03bf\u03c5\u03c3\u03b5\u03c2 \u039a\u0395\u039a\u03a4-102 &amp; \u039a\u0395\u039a\u03a4-106, 107 \u03cc\u03c0\u03c9\u03c2 \u03b1\u03c1\u03c7\u03b9\u03ba\u03ac \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5.<\/p>\n",
            "protected": false
        },
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2, \u03cc\u03c4\u03b9 \u03b7 \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03ba\u03ac\u03c4\u03c9\u03b8\u03b9 \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 : \u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399, \u03a8\u03a3-320 \u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399, \u03a8\u03a3-321 \u03b8\u03b1 \u03b3\u03af\u03bd\u03b5\u03b9 \u03bc\u03b5 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7 \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2, \u03c3\u03cd\u03bc\u03c6\u03c9\u03bd\u03b1 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03bf\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b5\u03b9 o \u03b4\u03b9\u03b4\u03ac\u03c3\u03ba\u03c9\u03bd \u03c3\u03c4\u03bf \u03c3\u03cd\u03c3\u03c4\u03b7\u03bc\u03b1 \u0391\u03c1\u03af\u03c3\u03c4\u03b1\u03c1\u03c7\u03bf\u03c2, \u03ba\u03b1\u03b9 \u03cc\u03c7\u03b9 \u03c3\u03c4\u03b9\u03c2 \u03b1\u03af\u03b8\u03bf\u03c5\u03c3\u03b5\u03c2 \u039a\u0395\u039a\u03a4-102 &amp; \u039a\u0395\u039a\u03a4-106, 107 \u03cc\u03c0\u03c9\u03c2 \u03b1\u03c1\u03c7\u03b9\u03ba\u03ac \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5.",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19382"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19382"
            }],
            "version-history": [{
                "count": 3,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19382\/revisions"
            }],
            "predecessor-version": [{
                "id": 19385,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19382\/revisions\/19385"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19382"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19382"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19382"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19376,
        "date": "2022-07-29T01:49:25",
        "date_gmt": "2022-07-28T22:49:25",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19376"},
        "modified": "2022-07-29T01:51:01",
        "modified_gmt": "2022-07-28T22:51:01",
        "slug": "msc-digital-health-and-analytics",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/29\/msc-digital-health-and-analytics\/",
        "title": {"rendered": "N\u03ad\u03bf \u03b4\u03b9\u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03a0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u039c\u03b5\u03c4\u03b1\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd (\u0394\u03a0\u039c\u03a3) \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ad\u03c2 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2 \u03a5\u03b3\u03b5\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03bb\u03c5\u03c4\u03b9\u03ba\u03ae &#8211; Digital Health and Analytics"},
        "content": {
            "rendered": "\n<p>\u03a4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03a4\u03b7\u03bb\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c4\u03bf\u03c5 \u03a7\u03b1\u03c1\u03bf\u03ba\u03bf\u03c0\u03b5\u03af\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03c3\u03b5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03bc\u03b5 \u03c4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03c4\u03bf\u03c5 \u0399\u03bf\u03bd\u03af\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c4\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03a0\u03b5\u03b9\u03c1\u03b1\u03b9\u03ce\u03c2 \u03b4\u03ad\u03c7\u03b5\u03c4\u03b1\u03b9 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bd\u03ad\u03bf \u03b4\u03b9\u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd (\u0394\u03a0\u039c\u03a3) &#8220;\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ad\u03c2 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2 \u03a5\u03b3\u03b5\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03bb\u03c5\u03c4\u03b9\u03ba\u03ae &#8211; Digital Health and Analytics&#8221; (<a href=\"https:\/\/mschealth.dit.hua.gr\/\">https:\/\/mschealth.dit.hua.gr\/<\/a>) \u03bc\u03ad\u03c7\u03c1\u03b9 <strong>16 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022<\/strong>.<\/p>\n\n\n<p>\u03a4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b1\u03c0\u03b5\u03c5\u03b8\u03cd\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5:<\/p>\n<ul>\n<li>\u03b1\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b5\u03be\u03b5\u03b9\u03b4\u03b9\u03ba\u03b5\u03c5\u03c4\u03bf\u03cd\u03bd \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c4\u03bf\u03bc\u03b5\u03af\u03c2 \u03c4\u03c9\u03bd \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03b9\u03ce\u03bd \u03ba\u03b1\u03b9 \u03c4\u03b7\u03c2 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c5\u03b3\u03b5\u03af\u03b1\u03c2,<\/li>\n<li>\u03b1\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c5\u03c2 \u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03ce\u03bd \u03c5\u03b3\u03b5\u03af\u03b1\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b1\u03c0\u03bf\u03ba\u03c4\u03ae\u03c3\u03bf\u03c5\u03bd \u03b3\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ad\u03c2 \u03bc\u03b5 \u03c4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ad\u03c2 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd<\/li>\n<li>\u03b5\u03c0\u03b1\u03b3\u03b3\u03b5\u03bb\u03bc\u03b1\u03c4\u03af\u03b5\u03c2 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03c4\u03b7\u03c2 \u03c5\u03b3\u03b5\u03af\u03b1\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b2\u03b5\u03bb\u03c4\u03b9\u03ce\u03c3\u03bf\u03c5\u03bd \u03c4\u03b9\u03c2 \u03b4\u03b9\u03b1\u03b4\u03b9\u03ba\u03b1\u03c3\u03af\u03b5\u03c2 \u03c0\u03b1\u03c1\u03bf\u03c7\u03ae\u03c2 \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03b9\u03ce\u03bd \u03c3\u03c4\u03bf\u03c5\u03c2 \u03bf\u03c1\u03b3\u03b1\u03bd\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2 \u03c4\u03bf\u03c5\u03c2,<\/li>\n<li>\u03b5\u03c0\u03b1\u03b3\u03b3\u03b5\u03bb\u03bc\u03b1\u03c4\u03af\u03b5\u03c2 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03c4\u03b7\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03bf\u03c5\u03bd \u03bd\u03b1 \u03b1\u03c0\u03bf\u03ba\u03c4\u03ae\u03c3\u03bf\u03c5\u03bd \u03c3\u03b5 \u03b2\u03ac\u03b8\u03bf\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bd\u03cc\u03b7\u03c3\u03b7 \u03c4\u03c9\u03bd \u03b4\u03b9\u03b1\u03b4\u03b9\u03ba\u03b1\u03c3\u03b9\u03ce\u03bd \u03ba\u03b1\u03b9 \u03c4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03b9\u03ce\u03bd \u03b1\u03bd\u03b1\u03c0\u03b1\u03c1\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c5\u03b3\u03b5\u03af\u03b1\u03c2<\/li>\n<li>\u03b1\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c5\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bd\u03b1 \u03b1\u03c3\u03c7\u03bf\u03bb\u03b7\u03b8\u03bf\u03cd\u03bd \u03bc\u03b5 \u03c4\u03b7\u03bd \u03ad\u03c1\u03b5\u03c5\u03bd\u03b1 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03c4\u03b7\u03c2 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c5\u03b3\u03b5\u03af\u03b1\u03c2<\/li>\n<\/ul>\n\n\n<p>\u0391\u03b9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bc\u03ad\u03c3\u03c9 \u03c4\u03b7\u03c2 \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae\u03c2 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 dhasec@hua.gr. \u039f\u03b9 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03b5\u03c1\u03cc\u03bc\u03b5\u03bd\u03bf\u03b9 \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03bd \u03bd\u03b1 \u03b5\u03bd\u03b7\u03bc\u03b5\u03c1\u03c9\u03b8\u03bf\u03cd\u03bd \u03b1\u03bd\u03b1\u03bb\u03c5\u03c4\u03b9\u03ba\u03ac \u03b3\u03b9\u03b1 \u03c4\u03bf \u0394\u03a0\u039c\u03a3 \u03c3\u03c4\u03bf <a href=\"https:\/\/mschealth.dit.hua.gr\/\">https:\/\/mschealth.dit.hua.gr\/<\/a>.<\/p>\n\n\n\n<p>Linkedin Post:<\/p>\n\n\n\n<p><a href=\"https:\/\/www.linkedin.com\/posts\/department-of-informatics-and-telematics-harokopio-university_analytics-ehealth-digitalhealth-activity-6955081418834104320-4naK\">https:\/\/www.linkedin.com\/posts\/department-of-informatics-and-telematics-harokopio-university_analytics-ehealth-digitalhealth-activity-6955081418834104320-4naK<\/a><\/p>\n\n\n\n<p>Facebook Post:<\/p>\n\n\n\n<p><a href=\"https:\/\/facebook.com\/story.php?story_fbid=10159788462802696&amp;id=616297695\">https:\/\/facebook.com\/story.php?story_fbid=10159788462802696&amp;id=616297695<\/a><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03a4\u03b7\u03bb\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c4\u03bf\u03c5 \u03a7\u03b1\u03c1\u03bf\u03ba\u03bf\u03c0\u03b5\u03af\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03c3\u03b5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03bc\u03b5 \u03c4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03c4\u03bf\u03c5 \u0399\u03bf\u03bd\u03af\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c4\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03a0\u03b5\u03b9\u03c1\u03b1\u03b9\u03ce\u03c2 \u03b4\u03ad\u03c7\u03b5\u03c4\u03b1\u03b9 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bd\u03ad\u03bf \u03b4\u03b9\u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd (\u0394\u03a0\u039c\u03a3) &#8220;\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ad\u03c2 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2 \u03a5\u03b3\u03b5\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03bb\u03c5\u03c4\u03b9\u03ba\u03ae &#8211; Digital Health and Analytics&#8221; (https:\/\/mschealth.dit.hua.gr\/) \u03bc\u03ad\u03c7\u03c1\u03b9 16 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022. \u03a4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b1\u03c0\u03b5\u03c5\u03b8\u03cd\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5: \u03b1\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c5\u03c2 [&hellip;]<\/p>\n",
            "protected": false
        },
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3, 320],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03a4\u03b7\u03bb\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c4\u03bf\u03c5 \u03a7\u03b1\u03c1\u03bf\u03ba\u03bf\u03c0\u03b5\u03af\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03c3\u03b5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03bc\u03b5 \u03c4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03c4\u03bf\u03c5 \u0399\u03bf\u03bd\u03af\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c4\u03bf \u03a4\u03bc\u03ae\u03bc\u03b1 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c4\u03bf\u03c5 \u03a0\u03b1\u03bd\u03b5\u03c0\u03b9\u03c3\u03c4\u03b7\u03bc\u03af\u03bf\u03c5 \u03a0\u03b5\u03b9\u03c1\u03b1\u03b9\u03ce\u03c2 \u03b4\u03ad\u03c7\u03b5\u03c4\u03b1\u03b9 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bd\u03ad\u03bf \u03b4\u03b9\u03b9\u03b4\u03c1\u03c5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03ce\u03bd \u03c3\u03c0\u03bf\u03c5\u03b4\u03ce\u03bd (\u0394\u03a0\u039c\u03a3) &#8220;\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ad\u03c2 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2 \u03a5\u03b3\u03b5\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03bb\u03c5\u03c4\u03b9\u03ba\u03ae &#8211; Digital Health and Analytics&#8221; (https:\/\/mschealth.dit.hua.gr\/) \u03bc\u03ad\u03c7\u03c1\u03b9 16 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022. \u03a4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b1\u03c0\u03b5\u03c5\u03b8\u03cd\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5: \u03b1\u03c0\u03cc\u03c6\u03bf\u03b9\u03c4\u03bf\u03c5\u03c2&hellip;",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19376"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19376"
            }],
            "version-history": [{
                "count": 2,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19376\/revisions"
            }],
            "predecessor-version": [{
                "id": 19380,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19376\/revisions\/19380"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19376"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19376"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19376"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }, {
                "id": 320,
                "link": "https:\/\/www.ds.unipi.gr\/category\/notifications\/",
                "name": "\u0395\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2",
                "slug": "notifications",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/320"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=320"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19371,
        "date": "2022-07-29T01:24:14",
        "date_gmt": "2022-07-28T22:24:14",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19371"},
        "modified": "2022-07-29T01:24:45",
        "modified_gmt": "2022-07-28T22:24:45",
        "slug": "apoktisi-akad-empeirias",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/29\/apoktisi-akad-empeirias\/",
        "title": {"rendered": "\u0391\u03c0\u03cc\u03ba\u03c4\u03b7\u03c3\u03b7 \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03ae\u03c2 \u03b5\u03bc\u03c0\u03b5\u03b9\u03c1\u03af\u03b1\u03c2 \u03c3\u03b5 \u03bd\u03ad\u03bf\u03c5\u03c2 \u03b5\u03c0\u03b9\u03c3\u03c4\u03ae\u03bc\u03bf\u03bd\u03b5\u03c2 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5\u03c2 \u03b4\u03b9\u03b4\u03b1\u03ba\u03c4\u03bf\u03c1\u03b9\u03ba\u03bf\u03cd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03cc \u03ad\u03c4\u03bf\u03c2 2022-23"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-190f79ab-1b1c-4e4f-a678-d06a9de0845e\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/prosklisi-akad-empeirias-papei-2022-2023.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03c0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/prosklisi-akad-empeirias-papei-2022-2023.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-190f79ab-1b1c-4e4f-a678-d06a9de0845e\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19371"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19371"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19371\/revisions"
            }],
            "predecessor-version": [{
                "id": 19373,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19371\/revisions\/19373"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19371"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19371"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19371"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19368,
        "date": "2022-07-29T01:18:05",
        "date_gmt": "2022-07-28T22:18:05",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19368"},
        "modified": "2022-07-29T01:18:38",
        "modified_gmt": "2022-07-28T22:18:38",
        "slug": "diathesi-pistopoiitikon-portal",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/29\/diathesi-pistopoiitikon-portal\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b4\u03b9\u03ac\u03b8\u03b5\u03c3\u03b7\u03c2 \u03c0\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03b9\u03b7\u03c4\u03b9\u03ba\u03ce\u03bd \u03b1\u03c0\u03cc \u03c4\u03bf Portal"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-1416e08f-86a0-43b2-ab4f-12063cef641c\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/anakoinosi-tropopoiisis-diathesis-eggrafon-PORTAL-2022-7-28.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03b1\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/anakoinosi-tropopoiisis-diathesis-eggrafon-PORTAL-2022-7-28.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-1416e08f-86a0-43b2-ab4f-12063cef641c\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19368"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19368"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19368\/revisions"
            }],
            "predecessor-version": [{
                "id": 19370,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19368\/revisions\/19370"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19368"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19368"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19368"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19363,
        "date": "2022-07-19T13:47:16",
        "date_gmt": "2022-07-19T10:47:16",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19363"},
        "modified": "2022-09-01T17:30:20",
        "modified_gmt": "2022-09-01T14:30:20",
        "slug": "programma-exet-sep-2022",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/19\/programma-exet-sep-2022\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u0391\u03ba\u03b1\u03b4. \u0388\u03c4\u03bf\u03c5\u03c2 2021-2022"},
        "content": {
            "rendered": "\n<p><strong>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf:<\/strong><\/p>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-7e2baed8-cd21-4454-8542-b2130b2e3183\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/exetastiki-Sep-2021-2022.pdf\">\u03a0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03c0\u03b5\u03c1\u03b9\u03cc\u03b4\u03bf\u03c5 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/exetastiki-Sep-2021-2022.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-7e2baed8-cd21-4454-8542-b2130b2e3183\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<figure class=\"wp-block-table\"><table><tbody><tr><td><strong>\u0391\/\u0391<\/strong><\/td><td><strong>\u03a0\u03a1\u039f\u0393\u03a1\u0391\u039c\u039c\u0391 \u0395\u039e\u0395\u03a4\u0391\u03a3\u03a4\u0399\u039a\u0397\u03a3 \u03a0\u0395\u03a1\u0399\u039f\u0394\u039f\u03a5 \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5 2022 &#8211; \u0391\u039d\u0391\u039a\u039f\u0399\u039d\u03a9\u03a3\u0395\u0399\u03a3<\/strong><\/td><td><strong>\u0391\u03a1\u03a7\u0395\u0399\u0391 \/ \u0391\u039d\u0391\u039a\u039f\u0399\u039d\u03a9\u03a3\u0395\u0399\u03a3<\/strong><\/td><\/tr><tr><td><strong>1. <\/strong><\/td><td><strong>\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u201c\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u201d &amp; \u201c\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399\u201d (\u0395\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5)<\/strong><\/td><td><a href=\"https:\/\/www.ds.unipi.gr\/2022\/07\/29\/exetasi-diktya-i-ii\/\"><center>\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7<\/center><\/a><\/td><\/tr><tr><td><strong>2. <\/strong><\/td><td><strong>\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022<\/strong><\/td><td><a href=\"https:\/\/www.ds.unipi.gr\/2022\/09\/01\/anakoinwsi_gia_tin_eksetastiki_sept_2022\/\"><center>\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7<\/center><\/a><\/td><\/tr><\/tbody><\/table><\/figure>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf: \u0391\/\u0391 \u03a0\u03a1\u039f\u0393\u03a1\u0391\u039c\u039c\u0391 \u0395\u039e\u0395\u03a4\u0391\u03a3\u03a4\u0399\u039a\u0397\u03a3 \u03a0\u0395\u03a1\u0399\u039f\u0394\u039f\u03a5 \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5 2022 &#8211; \u0391\u039d\u0391\u039a\u039f\u0399\u039d\u03a9\u03a3\u0395\u0399\u03a3 \u0391\u03a1\u03a7\u0395\u0399\u0391 \/ \u0391\u039d\u0391\u039a\u039f\u0399\u039d\u03a9\u03a3\u0395\u0399\u03a3 1. \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u201c\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u201d &amp; \u201c\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399\u201d (\u0395\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5) \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 2. \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022 \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7<\/p>\n",
            "protected": false
        },
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3, 320],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03bf \u0388\u03bd\u03c4\u03c5\u03c0\u03bf: \u0391\/\u0391 \u03a0\u03a1\u039f\u0393\u03a1\u0391\u039c\u039c\u0391 \u0395\u039e\u0395\u03a4\u0391\u03a3\u03a4\u0399\u039a\u0397\u03a3 \u03a0\u0395\u03a1\u0399\u039f\u0394\u039f\u03a5 \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5 2022 &#8211; \u0391\u039d\u0391\u039a\u039f\u0399\u039d\u03a9\u03a3\u0395\u0399\u03a3 \u0391\u03a1\u03a7\u0395\u0399\u0391 \/ \u0391\u039d\u0391\u039a\u039f\u0399\u039d\u03a9\u03a3\u0395\u0399\u03a3 1. \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u201c\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u201d &amp; \u201c\u0394\u03af\u03ba\u03c4\u03c5\u03b1 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ce\u03bd \u0399\u0399\u201d (\u0395\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u0395\u03a0\u03a4\u0395\u039c\u0392\u03a1\u0399\u039f\u03a5) \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 2. \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03be\u03b5\u03c4\u03b1\u03c3\u03c4\u03b9\u03ba\u03ae \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022 \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19363"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19363"
            }],
            "version-history": [{
                "count": 4,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19363\/revisions"
            }],
            "predecessor-version": [{
                "id": 19414,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19363\/revisions\/19414"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19363"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19363"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19363"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }, {
                "id": 320,
                "link": "https:\/\/www.ds.unipi.gr\/category\/notifications\/",
                "name": "\u0395\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2",
                "slug": "notifications",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/320"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=320"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19359,
        "date": "2022-07-18T02:11:30",
        "date_gmt": "2022-07-17T23:11:30",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19359"},
        "modified": "2022-07-18T02:11:53",
        "modified_gmt": "2022-07-17T23:11:53",
        "slug": "pms-elearn-paratasi",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/18\/pms-elearn-paratasi\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03a0.\u039c.\u03a3. \u00ab\u0397\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u039c\u03ac\u03b8\u03b7\u03c3\u03b7\u00bb (\u03a0\u03b1\u03c1\u03ac\u03c4\u03b1\u03c3\u03b7 \u03ad\u03c9\u03c2 \u03ba\u03b1\u03b9 23\u03b7 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022)"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-c0fa89e3-b5ea-40a1-9505-f0ca87e201ee\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Prosklisi_upovolis_aitisewn_elearn_2023_ext-Jul.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03a0\u03c1\u03bf\u03ba\u03ae\u03c1\u03c5\u03be\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Prosklisi_upovolis_aitisewn_elearn_2023_ext-Jul.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-c0fa89e3-b5ea-40a1-9505-f0ca87e201ee\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19359"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19359"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19359\/revisions"
            }],
            "predecessor-version": [{
                "id": 19361,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19359\/revisions\/19361"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19359"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19359"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19359"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19356,
        "date": "2022-07-18T02:09:33",
        "date_gmt": "2022-07-17T23:09:33",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19356"},
        "modified": "2022-07-18T02:09:56",
        "modified_gmt": "2022-07-17T23:09:56",
        "slug": "pms-dcomms-paratasi",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/18\/pms-dcomms-paratasi\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03a0.\u039c.\u03a3. \u00ab\u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ad\u03c2 \u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b5\u03c2 &#038; \u0394\u03af\u03ba\u03c4\u03c5\u03b1\u00bb (\u03a0\u03b1\u03c1\u03ac\u03c4\u03b1\u03c3\u03b7 \u03ad\u03c9\u03c2 \u03ba\u03b1\u03b9 9\u03b7 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022)"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-d6708c11-f9f6-4a44-828f-71bef94ac558\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Prosklisi_upovolis_aitisewn_dcomms_2023_ext-Jul.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03a0\u03c1\u03bf\u03ba\u03ae\u03c1\u03c5\u03be\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Prosklisi_upovolis_aitisewn_dcomms_2023_ext-Jul.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-d6708c11-f9f6-4a44-828f-71bef94ac558\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19356"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19356"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19356\/revisions"
            }],
            "predecessor-version": [{
                "id": 19358,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19356\/revisions\/19358"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19356"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19356"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19356"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19351,
        "date": "2022-07-18T02:03:56",
        "date_gmt": "2022-07-17T23:03:56",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19351"},
        "modified": "2022-07-18T02:04:17",
        "modified_gmt": "2022-07-17T23:04:17",
        "slug": "ict_climate_paratasi-2",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/18\/ict_climate_paratasi-2\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03a0.\u039c.\u03a3. \u00ab\u039a\u03bb\u03b9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae \u039a\u03c1\u03af\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03a4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2 \u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03b9 \u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03b9\u03ce\u03bd (MSc in Climate Crisis and Information and Communication Technologies)\u00bb (\u03a0\u03b1\u03c1\u03ac\u03c4\u03b1\u03c3\u03b7 \u03ad\u03c9\u03c2 \u03ba\u03b1\u03b9 23 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022)"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-1756faa2-ed76-4fd2-a587-28670f948706\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/UNIPI_MSc_CLIMATE_ICT_PROSKLHSH_AITHSEON_2022_2023_paratasi_v2.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03a0\u03c1\u03bf\u03ba\u03ae\u03c1\u03c5\u03be\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/UNIPI_MSc_CLIMATE_ICT_PROSKLHSH_AITHSEON_2022_2023_paratasi_v2.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-1756faa2-ed76-4fd2-a587-28670f948706\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19351"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19351"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19351\/revisions"
            }],
            "predecessor-version": [{
                "id": 19353,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19351\/revisions\/19353"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19351"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19351"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19351"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19348,
        "date": "2022-07-13T15:24:42",
        "date_gmt": "2022-07-13T12:24:42",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19348"},
        "modified": "2022-07-13T15:25:09",
        "modified_gmt": "2022-07-13T12:25:09",
        "slug": "ypotrofies-klirodotimata-thomopoulou",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/13\/ypotrofies-klirodotimata-thomopoulou\/",
        "title": {"rendered": "\u03a5\u03c0\u03bf\u03c4\u03c1\u03bf\u03c6\u03af\u03b5\u03c2-\u039a\u03bb\u03b7\u03c1\u03bf\u03b4\u03bf\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1 \u03a0\u03c1\u03bf\u03ba\u03b7\u03c1\u03cd\u03be\u03b5\u03b9\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2 \u03c5\u03c0\u03bf\u03c4\u03c1\u03cc\u03c6\u03c9\u03bd  \u03c7\u03c9\u03c1\u03af\u03c2  \u03b4\u03b9\u03b1\u03b3\u03c9\u03bd\u03b9\u03c3\u03bc\u03cc, \u03b3\u03b9\u03b1 \u03c0\u03c1\u03bf\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03ad\u03c2 \u03c3\u03c0\u03bf\u03c5\u03b4\u03ad\u03c2, \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03ac \u03ad\u03c4\u03b7 2019-2020 \u03ba\u03b1\u03b9 2020-2021, \u03c3\u03b5 \u03b2\u03ac\u03c1\u03bf\u03c2 \u03c4\u03c9\u03bd \u03b5\u03c3\u03cc\u03b4\u03c9\u03bd \u03c4\u03bf\u03c5 \u03ba\u03bb\u03b7\u03c1\u03bf\u03b4\u03bf\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u0391\u03c1\u03c7\u03b9\u03bc\u03b1\u03bd\u03b4\u03c1\u03af\u03c4\u03b7 \u039d\u03b5\u03bf\u03c6\u03cd\u03c4\u03bf\u03c5 \u0398\u03c9\u03bc\u03cc\u03c0\u03bf\u03c5\u03bb\u03bf\u03c5"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-7f94b688-c86d-4f36-a605-9e25fe0e3c3e\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/ypotrofies-klirodotimata-thomopoulou.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03b1\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/ypotrofies-klirodotimata-thomopoulou.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-7f94b688-c86d-4f36-a605-9e25fe0e3c3e\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19348"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19348"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19348\/revisions"
            }],
            "predecessor-version": [{
                "id": 19350,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19348\/revisions\/19350"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19348"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19348"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19348"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19344,
        "date": "2022-07-13T15:18:50",
        "date_gmt": "2022-07-13T12:18:50",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19344"},
        "modified": "2022-07-13T15:19:45",
        "modified_gmt": "2022-07-13T12:19:45",
        "slug": "prosklisi-parousiasis-phd-georgiopoulou",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/13\/prosklisi-parousiasis-phd-georgiopoulou\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03af\u03b1\u03c3\u03b7\u03c2 \u03b4\u03b9\u03b4\u03b1\u03ba\u03c4\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03b4\u03b9\u03b1\u03c4\u03c1\u03b9\u03b2\u03ae\u03c2 \u03ba\u03b1\u03c2 \u03a1\u03bf\u03cd\u03bb\u03b1\u03c2 \u0393\u03b5\u03c9\u03c1\u03b3\u03b9\u03bf\u03c0\u03bf\u03cd\u03bb\u03bf\u03c5"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-d5253047-fdcf-4490-a5f7-aab018a992d4\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Anakoinwsi_exetasi_dadktorikis_diatrivis_georgiopoulou.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03c0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Anakoinwsi_exetasi_dadktorikis_diatrivis_georgiopoulou.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-d5253047-fdcf-4490-a5f7-aab018a992d4\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19344"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19344"
            }],
            "version-history": [{
                "count": 2,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19344\/revisions"
            }],
            "predecessor-version": [{
                "id": 19347,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19344\/revisions\/19347"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19344"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19344"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19344"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19341,
        "date": "2022-07-13T15:16:39",
        "date_gmt": "2022-07-13T12:16:39",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19341"},
        "modified": "2022-07-13T15:17:13",
        "modified_gmt": "2022-07-13T12:17:13",
        "slug": "prosklisi-parousiasis-phd-mykoniati",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/13\/prosklisi-parousiasis-phd-mykoniati\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03af\u03b1\u03c3\u03b7\u03c2 \u03b4\u03b9\u03b4\u03b1\u03ba\u03c4\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03b4\u03b9\u03b1\u03c4\u03c1\u03b9\u03b2\u03ae\u03c2 \u03ba\u03b1\u03c2 \u039c\u03b1\u03c1\u03af\u03b1\u03c2 \u039c\u03c5\u03ba\u03c9\u03bd\u03b9\u03ac\u03c4\u03b7"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-0a986909-831e-4309-a5d3-28823b4d9c31\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Anakoinwsi_exetasi_dadktorikis_diatrivis_mykoniati.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03c0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Anakoinwsi_exetasi_dadktorikis_diatrivis_mykoniati.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-0a986909-831e-4309-a5d3-28823b4d9c31\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19341"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19341"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19341\/revisions"
            }],
            "predecessor-version": [{
                "id": 19343,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19341\/revisions\/19343"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19341"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19341"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19341"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19333,
        "date": "2022-07-04T10:56:38",
        "date_gmt": "2022-07-04T07:56:38",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19333"},
        "modified": "2022-07-04T10:57:10",
        "modified_gmt": "2022-07-04T07:57:10",
        "slug": "prosklisi-pps-paratasi-25-sep",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/04\/prosklisi-pps-paratasi-25-sep\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03a0.\u039c.\u03a3. \u201c\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03b1\u03ba\u03ac \u03a3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1 &#038; \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2\u201d (\u03a0\u03b1\u03c1\u03ac\u03c4\u03b1\u03c3\u03b7 \u03ad\u03c9\u03c2 25\u03b7 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 2022)"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-67c7f3ca-79b9-4178-a5a1-bab187fa6d00\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/prokiriksi_pps_iss_2022-23_ext.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/prokiriksi_pps_iss_2022-23_ext.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-67c7f3ca-79b9-4178-a5a1-bab187fa6d00\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19333"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19333"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19333\/revisions"
            }],
            "predecessor-version": [{
                "id": 19335,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19333\/revisions\/19335"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19333"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19333"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19333"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19326,
        "date": "2022-07-01T14:56:35",
        "date_gmt": "2022-07-01T11:56:35",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19326"},
        "modified": "2022-07-01T14:57:40",
        "modified_gmt": "2022-07-01T11:57:40",
        "slug": "apotelesmata-eklogis-proedrou-anapl-proedroy",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/01\/apotelesmata-eklogis-proedrou-anapl-proedroy\/",
        "title": {"rendered": "\u0391\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 \u03b5\u03ba\u03bb\u03bf\u03b3\u03ae\u03c2 \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03c0\u03bb\u03b7\u03c1\u03c9\u03c4\u03ae \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-d84e4493-cbe6-4d2d-a7e8-d133d6073339\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Praktiko-eklogis-Proedr-Antiproedr.pdf\">\u03a0\u03c1\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc \u03b5\u03ba\u03bb\u03bf\u03b3\u03ae\u03c2 \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03c0\u03bb\u03b7\u03c1\u03c9\u03c4\u03ae \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd\u00a0<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Praktiko-eklogis-Proedr-Antiproedr.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-d84e4493-cbe6-4d2d-a7e8-d133d6073339\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-5ddbde11-e4d1-4c3a-9892-4d1ad68321c1\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/praktiko-katametr-proedr-psif.pdf\">\u03a0\u03c1\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc \u03ba\u03b1\u03c4\u03b1\u03bc\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7\u03c2 \u03c8\u03ae\u03c6\u03c9\u03bd \u03b5\u03ba\u03bb\u03bf\u03b3\u03ae\u03c2 \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd\u00a0<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/praktiko-katametr-proedr-psif.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-5ddbde11-e4d1-4c3a-9892-4d1ad68321c1\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-44189f11-e85f-4a8c-a01c-480e70085c20\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/praktiko-katametr-anapl-proedr-psif.pdf\">\u03a0\u03c1\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc \u03ba\u03b1\u03c4\u03b1\u03bc\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7\u03c2 \u03c8\u03ae\u03c6\u03c9\u03bd \u03b5\u03ba\u03bb\u03bf\u03b3\u03ae\u03c2 \u0391\u03bd\u03b1\u03c0\u03bb\u03b7\u03c1\u03c9\u03c4\u03ae \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/praktiko-katametr-anapl-proedr-psif.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-44189f11-e85f-4a8c-a01c-480e70085c20\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-6de39f9f-25b2-4cc4-a0c2-fcce70ef5972\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/apotelesmata-psif-kalpis-Zeus-Proedr-Antiproedr-1.pdf\">\u0391\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 \u03c8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ae\u03c2 \u03ba\u03ac\u03bb\u03c0\u03b7\u03c2 \u0396\u0395\u03a5\u03a3 \u03b5\u03ba\u03bb\u03bf\u03b3\u03ae\u03c2 \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03ba\u03b1\u03b9 \u0391\u03bd\u03b1\u03c0\u03bb\u03b7\u03c1\u03c9\u03c4\u03ae \u03a0\u03c1\u03bf\u03ad\u03b4\u03c1\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/apotelesmata-psif-kalpis-Zeus-Proedr-Antiproedr-1.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-6de39f9f-25b2-4cc4-a0c2-fcce70ef5972\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<p><\/p>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19326"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19326"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19326\/revisions"
            }],
            "predecessor-version": [{
                "id": 19332,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19326\/revisions\/19332"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19326"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19326"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19326"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19321,
        "date": "2022-07-01T14:43:51",
        "date_gmt": "2022-07-01T11:43:51",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19321"},
        "modified": "2022-07-01T14:44:32",
        "modified_gmt": "2022-07-01T11:44:32",
        "slug": "prosklisi-upovolis-aitiseon-security",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/07\/01\/prosklisi-upovolis-aitiseon-security\/",
        "title": {"rendered": "\u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2 \u03b1\u03b9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03a0.\u039c.\u03a3. \u00ab\u0391\u03c3\u03c6\u03ac\u03bb\u03b5\u03b9\u03b1 \u03a8\u03b7\u03c6\u03b9\u03b1\u03ba\u03ce\u03bd \u03a3\u03c5\u03c3\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd\u00bb (\u03a0\u03b1\u03c1\u03ac\u03c4\u03b1\u03c3\u03b7 \u03ad\u03c9\u03c2 \u03ba\u03b1\u03b9 20 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 2022)"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-29fbbc8a-943e-40d0-a1ec-eaf7775334c0\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Prosklisi_upovolis_aitisewn_security_2023_paratasi_v2.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u03a0\u03c1\u03cc\u03c3\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/07\/Prosklisi_upovolis_aitisewn_security_2023_paratasi_v2.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-29fbbc8a-943e-40d0-a1ec-eaf7775334c0\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19321"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19321"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19321\/revisions"
            }],
            "predecessor-version": [{
                "id": 19323,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19321\/revisions\/19323"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19321"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19321"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19321"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19270,
        "date": "2022-06-30T18:14:00",
        "date_gmt": "2022-06-30T15:14:00",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19270"},
        "modified": "2022-07-01T14:40:43",
        "modified_gmt": "2022-07-01T11:40:43",
        "slug": "synergasia-huawei",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/06\/30\/synergasia-huawei\/",
        "title": {"rendered": "\u03a3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c4\u03bf\u03c5 \u03a4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c3\u03c4\u03bf \u03b4\u03b9\u03b5\u03b8\u03bd\u03ad\u03c2 \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 Huawei ICT Academy"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-bf1100cf-7f59-42e2-95c4-c914d2b9b354\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/06\/HUAWEI.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/06\/HUAWEI.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-bf1100cf-7f59-42e2-95c4-c914d2b9b354\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n\n\n\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-e37dced5-d712-4a6b-8246-f22a05899e15\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/06\/Student-Operation-Guide1_Register.pdf\">Student Register &amp; Learn &#8211; Huawei ICT Academy Student Operation Guide<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/06\/Student-Operation-Guide1_Register.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-e37dced5-d712-4a6b-8246-f22a05899e15\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [15, 3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19270"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19270"
            }],
            "version-history": [{
                "count": 4,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19270\/revisions"
            }],
            "predecessor-version": [{
                "id": 19320,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19270\/revisions\/19320"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19270"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19270"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19270"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 15,
                "link": "https:\/\/www.ds.unipi.gr\/category\/recent-news\/",
                "name": "Highlights",
                "slug": "recent-news",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/15"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=15"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }, {
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19313,
        "date": "2022-06-29T22:41:16",
        "date_gmt": "2022-06-29T19:41:16",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19313"},
        "modified": "2022-06-29T22:41:46",
        "modified_gmt": "2022-06-29T19:41:46",
        "slug": "anakoinosi-exetaseon-apergia",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/06\/29\/anakoinosi-exetaseon-apergia\/",
        "title": {"rendered": "\u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bc\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03c3\u03c4\u03b9\u03c2 29\/6\/2022 (\u03b1\u03c0\u03b5\u03c1\u03b3\u03af\u03b1 \u03bb\u03b5\u03c9\u03c6\u03bf\u03c1\u03b5\u03af\u03c9\u03bd \u03ba\u03b1\u03b9 \u03c4\u03c1\u03cc\u03bb\u03b5\u03ca)"},
        "content": {
            "rendered": "\n<div class=\"wp-block-file\"><a id=\"wp-block-file--media-a6798f6c-f677-4a5f-9ea0-4842e7b51861\" href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/06\/anakoinosi-apergia.pdf\">\u0391\u03c1\u03c7\u03b5\u03af\u03bf \u0391\u03bd\u03b1\u03ba\u03bf\u03af\u03bd\u03c9\u03c3\u03b7\u03c2<\/a><a href=\"https:\/\/www.ds.unipi.gr\/wp-content\/uploads\/2022\/06\/anakoinosi-apergia.pdf\" class=\"wp-block-file__button\" download aria-describedby=\"wp-block-file--media-a6798f6c-f677-4a5f-9ea0-4842e7b51861\">\u039b\u03ae\u03c8\u03b7<\/a><\/div>\n",
            "protected": false
        },
        "excerpt": {"rendered": "", "protected": false},
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": null,
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19313"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19313"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19313\/revisions"
            }],
            "predecessor-version": [{
                "id": 19315,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19313\/revisions\/19315"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19313"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19313"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19313"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }, {
        "id": 19309,
        "date": "2022-06-29T09:59:38",
        "date_gmt": "2022-06-29T06:59:38",
        "guid": {"rendered": "https:\/\/www.ds.unipi.gr\/?p=19309"},
        "modified": "2022-06-29T09:59:58",
        "modified_gmt": "2022-06-29T06:59:58",
        "slug": "stegastiko-epidoma",
        "status": "publish",
        "type": "post",
        "link": "https:\/\/www.ds.unipi.gr\/2022\/06\/29\/stegastiko-epidoma\/",
        "title": {"rendered": "\u03a3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u0395\u03c0\u03af\u03b4\u03bf\u03bc\u03b1"},
        "content": {
            "rendered": "\n<p>\u03a3\u03c4\u03bf\u03c5\u03c2 \u03c0\u03c1\u03bf\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03bf\u03cd\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03c6\u03bf\u03b9\u03c4\u03bf\u03cd\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03ba\u03c4\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03c0\u03c1\u03ce\u03c4\u03bf\u03c5 \u03c0\u03c4\u03c5\u03c7\u03af\u03bf\u03c5 \u03c7\u03bf\u03c1\u03b7\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03c5\u03c0\u03cc \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03c2 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03b5\u03c4\u03ae\u03c3\u03b9\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1.<\/p>\n\n\n\n<p><strong>\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03b1\u03b9\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1&nbsp;\u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022&nbsp;\u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 29 \u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5 2022 \u03ad\u03c9\u03c2 \u03c4\u03b7\u03bd \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae 29 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 2022<\/strong>&nbsp;<\/p>\n\n\n\n<p><a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%95%CE%93%CE%9A%CE%A5%CE%9A%CE%9B%CE%99%CE%9F%CE%A3_%CE%A3%CE%A4%CE%95%CE%93%CE%91%CE%A3%CE%A4%CE%99%CE%9A%CE%9F%CE%A5_2021-2022.pdf\" target=\"_blank\" rel=\"noreferrer noopener\"><strong>\u0395\u03b3\u03ba\u03cd\u03ba\u03bb\u03b9\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03c7\u03bf\u03c1\u03ae\u03b3\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03b4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022<\/strong><\/a><a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%95%CE%93%CE%9A%CE%A5%CE%9A%CE%9B%CE%99%CE%9F%CE%A3_%CE%A3%CE%A4%CE%95%CE%93%CE%91%CE%A3%CE%A4%CE%99%CE%9A%CE%9F%CE%A5_2021-2022.pdf\" target=\"_blank\" rel=\"noreferrer noopener\"><\/a><\/p>\n\n\n\n<p><a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%95%CE%9D%CE%97%CE%9C%CE%95%CE%A1%CE%A9%CE%A3%CE%97_%CE%93%CE%99%CE%91_%CE%A5%CE%A0%CE%9F%CE%92%CE%9F%CE%9B%CE%97_%CE%94%CE%99%CE%9A%CE%91%CE%99%CE%9F%CE%9B%CE%9F%CE%93%CE%97%CE%A4%CE%99%CE%9A%CE%A9%CE%9D_2021-2022_final.pdf\" target=\"_blank\" rel=\"noreferrer noopener\"><strong>\u0395\u039d\u0397\u039c\u0395\u03a1\u03a9\u03a3\u0397 \u0393\u0399\u0391 \u03a4\u0397\u039d \u03a5\u03a0\u039f\u0392\u039f\u039b\u0397 \u03a0\u03a1\u039f\u03a3\u0398\u0395\u03a4\u03a9\u039d &#8211; \u03a3\u03a5\u039c\u03a0\u039b\u0397\u03a1\u03a9\u039c\u0391\u03a4\u0399\u039a\u03a9\u039d \u0395\u039d\u03a4\u03a5\u03a0\u03a9\u039d \u0394\u0399\u039a\u0391\u0399\u039f\u039b\u039f\u0393\u0397\u03a4\u0399\u039a\u03a9\u039d \u0393\u0399\u0391 \u03a4\u0397\u039d \u039a\u0391\u03a4\u0391\u0392\u039f\u039b\u0397 \u03a4\u039f\u03a5 \u03a6\u039f\u0399\u03a4\u0397\u03a4\u0399\u039a\u039f\u03a5 \u03a3\u03a4\u0395\u0393\u0391\u03a3\u03a4\u0399\u039a\u039f\u03a5 \u0395\u03a0\u0399\u0394\u039f\u039c\u0391\u03a4\u039f\u03a3 2021-2022<\/strong><\/a><\/p>\n\n\n\n<p><strong>\u03a0\u03c1\u03bf\u03c3\u03bf\u03c7\u03ae:<\/strong>&nbsp;\u0391\u03c6\u03bf\u03c1\u03ac \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ac \u03c0\u03bf\u03c5 \u03b6\u03b7\u03c4\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c5\u03bc\u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03ac \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae&nbsp;<a href=\"https:\/\/stegastiko.minedu.gov.gr\/\">https:\/\/stegastiko.minedu.gov.gr<\/a>&nbsp;<strong>\u03ba\u03b1\u03b9 \u03bc\u03cc\u03bd\u03bf<\/strong>&nbsp;<strong>\u03c3\u03b5 \u03c0\u03b5\u03c1\u03af\u03c0\u03c4\u03c9\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03bd \u03bd\u03b1 \u03b4\u03b9\u03b1\u03c3\u03c4\u03b1\u03c5\u03c1\u03c9\u03b8\u03bf\u03cd\u03bd \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b1 \u03bc\u03ad\u03c3\u03c9 \u0391\u0391\u0394\u0395<\/strong>,<\/p>\n\n\n\n<p>&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_1_%CE%91%CE%99%CE%A4%CE%97%CE%A3%CE%97_%CE%93%CE%9F%CE%9D%CE%95%CE%91_%CE%A3%CE%A4%CE%95%CE%93%CE%91%CE%A3%CE%A4%CE%99%CE%9A%CE%9F_2021-2022_%CE%94%CE%99%CE%9A%CE%91%CE%99%CE%9F%CE%A5%CE%A7%CE%9F%CE%A3_%CE%93%CE%9F%CE%9D%CE%95%CE%91%CE%A3.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 1<\/a>,&nbsp;&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_2_%CE%A5%CE%A0%CE%95%CE%A5%CE%98%CE%A5%CE%9D%CE%97_%CE%94%CE%97%CE%9B%CE%A9%CE%A3%CE%97_%CE%A6%CE%9F%CE%99%CE%A4%CE%97%CE%A4%CE%97-%CE%93%CE%9F%CE%9D%CE%95%CE%91_2021-2022.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 2<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_3_%CE%91%CE%99%CE%A4%CE%97%CE%A3%CE%97_%CE%A6%CE%9F%CE%99%CE%A4%CE%97%CE%A4%CE%97_%CE%A3%CE%A4%CE%95%CE%93%CE%91%CE%A3%CE%A4%CE%99%CE%9A%CE%9F_2021-2022_%CE%94%CE%99%CE%9A%CE%91%CE%99%CE%9F%CE%A5%CE%A7%CE%9F%CE%A3_%CE%A6%CE%9F%CE%99%CE%A4%CE%97%CE%A4%CE%97%CE%A3.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 3<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_4_%CE%91%CE%99%CE%A4%CE%97%CE%A3%CE%97_%CE%95%CE%9E%CE%9F%CE%A5%CE%A3%CE%99%CE%9F%CE%94%CE%9F%CE%A4%CE%97%CE%98%CE%95%CE%9D%CE%A4%CE%91_%CE%A3%CE%A4%CE%95%CE%93%CE%91%CE%A3%CE%A4%CE%99%CE%9A%CE%9F_2021-2022-%CE%94%CE%99%CE%9A%CE%91%CE%99%CE%9F%CE%A5%CE%A7%CE%9F%CE%A3_%CE%93%CE%9F%CE%9D%CE%95%CE%91%CE%A3_%CE%97_%CE%A6%CE%9F%CE%99%CE%A4%CE%97%CE%A4%CE%97%CE%A3.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 4<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_5_%CE%A5%CE%A0%CE%95%CE%A5%CE%98%CE%A5%CE%9D%CE%97_%CE%94%CE%97%CE%9B%CE%A9%CE%A3%CE%97_%CE%95%CE%9E%CE%9F%CE%A5%CE%A3%CE%99%CE%9F%CE%94%CE%9F%CE%A4%CE%9F%CE%A5%CE%9D%CE%A4%CE%91.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 5<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_6_%CE%A5%CE%A0%CE%95%CE%A5%CE%98%CE%A5%CE%9D%CE%97_%CE%94%CE%97%CE%9B%CE%A9%CE%A3%CE%97_%CE%9A%CE%91%CE%A4%CE%9F%CE%99%CE%9A%CE%9F%CE%A5_%CE%95%CE%9E%CE%A9%CE%A4%CE%95%CE%A1%CE%99%CE%9A%CE%9F%CE%A5.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 6<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_7_%CE%A5%CE%A0%CE%95%CE%A5%CE%98%CE%A5%CE%9D%CE%97_%CE%94%CE%97%CE%9B%CE%A9%CE%A3%CE%97_%CE%9A%CE%91%CE%A4%CE%9F%CE%99%CE%9A%CE%9F%CE%A5_%CE%95%CE%9E%CE%A9%CE%A4%CE%95%CE%A1%CE%99%CE%9A%CE%9F%CE%A5.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 7<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_8_%CE%A5%CE%A0%CE%95%CE%A5%CE%98%CE%A5%CE%9D%CE%97_%CE%94%CE%97%CE%9B%CE%A9%CE%A3%CE%97_%CE%A6%CE%9F%CE%99%CE%A4%CE%97%CE%A4%CE%97-%CE%93%CE%9F%CE%9D%CE%95%CE%91.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1 8<\/a>,&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/stegastiko_epidoma_2021-2022\/%CE%A5%CE%A0%CE%9F%CE%94%CE%95%CE%99%CE%93%CE%9C%CE%91_9_%CE%A5%CE%A0%CE%95%CE%A5%CE%98%CE%A5%CE%9D%CE%97_%CE%94%CE%97%CE%9B%CE%A9%CE%A3%CE%97_%CE%A6%CE%9F%CE%99%CE%A4%CE%97%CE%A4%CE%97-%CE%93%CE%9F%CE%9D%CE%95%CE%91.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1&nbsp;9<\/a><\/p>\n\n\n\n<p>\u03a3\u03b1\u03c2 \u03b3\u03bd\u03c9\u03c1\u03af\u03b6\u03bf\u03c5\u03bc\u03b5 \u03cc\u03c4\u03b9 \u03c3\u03c4\u03bf&nbsp;<a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/2018-19\/%CE%A4%CF%81%CE%BF%CF%80%CE%BF%CF%80%CE%BF%CE%AF%CE%B7%CF%83%CE%B7_%CE%9A%CE%A5%CE%91_%CF%83%CF%84%CE%B5%CE%B3%CE%B1%CF%83%CF%84%CE%B9%CE%BA%CE%BF%CF%8D_%CE%B5%CF%80%CE%B9%CE%B4%CF%8C%CE%BC%CE%B1%CF%84%CE%BF%CF%82_%CE%A6%CE%95%CE%9A_1688-%CE%92_15-05-2019.pdf\">\u03a6\u0395\u039a 1688, \u03c4. \u0392\u0384, 15-5-2019<\/a>&nbsp;\u03b4\u03b7\u03bc\u03bf\u03c3\u03b9\u03b5\u03cd\u03b8\u03b7\u03ba\u03b5 \u03b7 \u03bc\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc.72647\/\u03961\/10-5-2019 \u039a.\u03a5.\u0391. \u03b7 \u03bf\u03c0\u03bf\u03af\u03b1&nbsp;<strong>\u03c4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03b9\u03b5\u03af<\/strong>&nbsp;\u03c4\u03b7\u03bd \u03bc\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc.140832\/\u03961\/25-8-2017 (\u0392\u03842993) \u039a.\u03a5.\u0391. \u00ab\u039a\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b4\u03b9\u03b1\u03b4\u03b9\u03ba\u03b1\u03c3\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03c7\u03bf\u03c1\u03ae\u03b3\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03b4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c4\u03c9\u03bd \u0399\u03b4\u03c1\u03c5\u03bc\u03ac\u03c4\u03c9\u03bd \u03c4\u03b7\u03c2 \u0391\u03bd\u03ce\u03c4\u03b1\u03c4\u03b7\u03c2 \u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7\u03c2\u00bb,&nbsp;<strong>\u03c9\u03c2 \u03c0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03b7\u03bc\u03b9\u03c4\u03b5\u03bb\u03ae \u03ba\u03c4\u03af\u03c3\u03bc\u03b1\u03c4\u03b1<\/strong>.&nbsp;<strong>\u0394\u03b9\u03b5\u03c5\u03ba\u03c1\u03b9\u03bd\u03af\u03b6\u03bf\u03c5\u03bc\u03b5 \u03cc\u03c4\u03b9 \u03b7 \u03b5\u03bd \u03bb\u03cc\u03b3\u03c9 \u03c4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03b1\u03c6\u03bf\u03c1\u03ac \u03c3\u03c4\u03bf \u03b1\u03ba\u03b1\u03b4. \u03ad\u03c4\u03bf\u03c2 2018-2019 \u03ba\u03b1\u03b9 \u03b5\u03c6\u03b5\u03be\u03ae\u03c2.<\/strong><\/p>\n\n\n\n<p><strong><a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/%CE%A6%CE%95%CE%9A_2993_31-08-2017.pdf\">\u039a\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b4\u03b9\u03b1\u03b4\u03b9\u03ba\u03b1\u03c3\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03b9\u03ba\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03c7\u03bf\u03c1\u03ae\u03b3\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03b4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2<\/a>&nbsp;(\u03a6\u0395\u039a 2993-31\/08\/2017-\u03a4\u0395\u03a5\u03a7\u039f\u03a3 \u0392\u0384)<\/strong><\/p>\n\n\n\n<p><a href=\"https:\/\/www.unipi.gr\/unipi\/images\/various\/dieuth_spoudwn\/%CE%A3%CE%A4%CE%95%CE%93%CE%91%CE%A3%CE%A4%CE%99%CE%9A%CE%9F_%CE%95%CE%A0%CE%99%CE%94%CE%9F%CE%9C%CE%91_2016-2017_%CE%94%CE%99%CE%95%CE%A5%CE%9A%CE%A1%CE%99%CE%9D%CE%99%CE%A3%CE%95%CE%99%CE%A3_%CE%A3%CE%A7%CE%95%CE%A4%CE%99%CE%9A%CE%91_%CE%9C%CE%95_%CE%A4%CE%97%CE%9D_%CE%97%CE%9B%CE%95%CE%9A%CE%A4%CE%A1%CE%9F%CE%9D%CE%99%CE%9A%CE%97_%CE%A5%CE%A0%CE%9F%CE%92%CE%9F%CE%9B%CE%97.pdf\">\u0394\u03b9\u03b5\u03c5\u03ba\u03c1\u03b9\u03bd\u03af\u03c3\u03b5\u03b9\u03c2 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b7\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03c4\u03bf\u03c5 \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03b4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2&nbsp;<\/a><\/p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>\u03a3\u03c4\u03bf\u03c5\u03c2 \u03c0\u03c1\u03bf\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03bf\u03cd\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03c6\u03bf\u03b9\u03c4\u03bf\u03cd\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03ba\u03c4\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03c0\u03c1\u03ce\u03c4\u03bf\u03c5 \u03c0\u03c4\u03c5\u03c7\u03af\u03bf\u03c5 \u03c7\u03bf\u03c1\u03b7\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03c5\u03c0\u03cc \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03c2 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03b5\u03c4\u03ae\u03c3\u03b9\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1. \u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03b1\u03b9\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1&nbsp;\u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022&nbsp;\u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 29 \u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5 2022 \u03ad\u03c9\u03c2 \u03c4\u03b7\u03bd \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae 29 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 2022&nbsp; \u0395\u03b3\u03ba\u03cd\u03ba\u03bb\u03b9\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03c7\u03bf\u03c1\u03ae\u03b3\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03b4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022 \u0395\u039d\u0397\u039c\u0395\u03a1\u03a9\u03a3\u0397 \u0393\u0399\u0391 \u03a4\u0397\u039d \u03a5\u03a0\u039f\u0392\u039f\u039b\u0397 \u03a0\u03a1\u039f\u03a3\u0398\u0395\u03a4\u03a9\u039d &#8211; \u03a3\u03a5\u039c\u03a0\u039b\u0397\u03a1\u03a9\u039c\u0391\u03a4\u0399\u039a\u03a9\u039d \u0395\u039d\u03a4\u03a5\u03a0\u03a9\u039d \u0394\u0399\u039a\u0391\u0399\u039f\u039b\u039f\u0393\u0397\u03a4\u0399\u039a\u03a9\u039d \u0393\u0399\u0391 [&hellip;]<\/p>\n",
            "protected": false
        },
        "author": 16,
        "featured_media": 0,
        "comment_status": "closed",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [3],
        "tags": [],
        "uagb_featured_image_src": {
            "full": false,
            "thumbnail": false,
            "medium": false,
            "medium_large": false,
            "large": false,
            "1536x1536": false,
            "2048x2048": false
        },
        "uagb_author_info": {
            "display_name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
            "author_link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/"
        },
        "uagb_comment_info": 0,
        "uagb_excerpt": "\u03a3\u03c4\u03bf\u03c5\u03c2 \u03c0\u03c1\u03bf\u03c0\u03c4\u03c5\u03c7\u03b9\u03b1\u03ba\u03bf\u03cd\u03c2 \u03c6\u03bf\u03b9\u03c4\u03b7\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03c6\u03bf\u03b9\u03c4\u03bf\u03cd\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03ba\u03c4\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03c0\u03c1\u03ce\u03c4\u03bf\u03c5 \u03c0\u03c4\u03c5\u03c7\u03af\u03bf\u03c5 \u03c7\u03bf\u03c1\u03b7\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03c5\u03c0\u03cc \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03c2 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03b5\u03c4\u03ae\u03c3\u03b9\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1. \u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03b1\u03b9\u03c4\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03b4\u03bf\u03bc\u03b1&nbsp;\u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022&nbsp;\u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 29 \u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5 2022 \u03ad\u03c9\u03c2 \u03c4\u03b7\u03bd \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae 29 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 2022&nbsp; \u0395\u03b3\u03ba\u03cd\u03ba\u03bb\u03b9\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03c7\u03bf\u03c1\u03ae\u03b3\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b5\u03b3\u03b1\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03b4\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03b1\u03ba\u03b1\u03b4\u03b7\u03bc\u03b1\u03ca\u03ba\u03bf\u03cd \u03ad\u03c4\u03bf\u03c5\u03c2 2021-2022 \u0395\u039d\u0397\u039c\u0395\u03a1\u03a9\u03a3\u0397 \u0393\u0399\u0391 \u03a4\u0397\u039d \u03a5\u03a0\u039f\u0392\u039f\u039b\u0397 \u03a0\u03a1\u039f\u03a3\u0398\u0395\u03a4\u03a9\u039d &#8211; \u03a3\u03a5\u039c\u03a0\u039b\u0397\u03a1\u03a9\u039c\u0391\u03a4\u0399\u039a\u03a9\u039d \u0395\u039d\u03a4\u03a5\u03a0\u03a9\u039d \u0394\u0399\u039a\u0391\u0399\u039f\u039b\u039f\u0393\u0397\u03a4\u0399\u039a\u03a9\u039d \u0393\u0399\u0391&hellip;",
        "_links": {
            "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19309"}],
            "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts"}],
            "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/types\/post"}],
            "author": [{"embeddable": true, "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
            "replies": [{
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/comments?post=19309"
            }],
            "version-history": [{
                "count": 1,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19309\/revisions"
            }],
            "predecessor-version": [{
                "id": 19310,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts\/19309\/revisions\/19310"
            }],
            "wp:attachment": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/media?parent=19309"}],
            "wp:term": [{
                "taxonomy": "category",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories?post=19309"
            }, {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/tags?post=19309"
            }],
            "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
        },
        "_embedded": {
            "author": [{
                "id": 16,
                "name": "\u0392\u03b1\u03c3\u03b9\u03bb\u03b9\u03ba\u03ae \u039a\u03bf\u03cd\u03c6\u03b7",
                "url": "",
                "description": "",
                "link": "https:\/\/www.ds.unipi.gr\/author\/vassok\/",
                "slug": "vassok",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users\/16"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/users"}]
                }
            }],
            "wp:term": [[{
                "id": 3,
                "link": "https:\/\/www.ds.unipi.gr\/category\/announcements\/",
                "name": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u0395\u03ba\u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2",
                "slug": "announcements",
                "taxonomy": "category",
                "_links": {
                    "self": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories\/3"}],
                    "collection": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/categories"}],
                    "about": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/taxonomies\/category"}],
                    "wp:post_type": [{"href": "https:\/\/www.ds.unipi.gr\/wp-json\/wp\/v2\/posts?categories=3"}],
                    "curies": [{"name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true}]
                }
            }], []]
        }
    }]);
});

app.get('/rss', function (req, res) {
    res.status(200).send(`<?xml version='1.0' encoding='utf-8'?><rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'><channel><atom:link href='https://eclass.uoa.gr/modules/announcements/rss.php?c=AEROSPACE119' rel='self' type='application/rss+xml' /><title>Ανακοινώσεις μαθήματος ΑΝΑΛΥΣΗ 2 ΚΑΙ ΕΦΑΡΜΟΓΕΣ</title><link>https://eclass.uoa.gr/courses/AEROSPACE119/</link><description>Ανακοινώσεις</description><lastBuildDate>Sun, 31 Jul 2022 23:59:39 +0300</lastBuildDate><language>el</language><item><title>ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ ΕΠΑΝΑΛΗΠΤΙΚΗ ΕΞΕΤΑΣΗ ΠΕΡΙΟΔΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2022</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=416759&amp;course=AEROSPACE119</link><description>&lt;p&gt;ΣΤΑ ΕΓΓΡΑΦΑ ΑΝΑΡΤΗΘΗΚΑΝ ΤΑ ΘΕΜΑΤΑ ΤΗΣ ΕΞΕΤΑΣΗΣ-ΕΡΓΑΣΙΑΣ ΠΕΡΙΟΔΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2022. ΝΑ ΤΑ ΕΧΕΤΕ ΤΥΠΩΜΕΝΑ ΜΑΖΙ ΣΑΣ ΔΙΟΤΙ ΔΕΝ ΘΑ ΔΙΑΝΕΜΗΘΟΥΝ ΦΩΤΟΤΥΠΙΕΣ. ΟΣΟΙ/ΕΣ ΧΡΕΙΑΖΟΝΤΑΙ ΒΕΒΑΙΩΣΗ ΣΥΜΜΕΤΟΧΗΣ ΣΤΗΝ ΕΞΕΤΑΣΗ ΚΑΤΕΒΑΖΟΥΝ ΚΑΙ ΣΥΜΠΛΗΡΩΝΟΥΝ ΤΟ ΣΧΕΤΙΚΟ ΑΡΧΕΙΟ ΠΟΥ ΥΠΑΡΧΕΙ ΣΤΑ ΕΓΓΡΑΦΑ.&lt;/p&gt;
&lt;p&gt;ΚΑΛΟ ΚΑΛΟΚΑΙΡΙ ΚΑΙ ΚΑΛΟ ΔΙΑΒΑΣΜΑ!&lt;/p&gt;</description><pubDate>Sun, 31 Jul 2022 23:59:39 +0300</pubDate><guid isPermaLink='false'>Sun, 31 Jul 2022 23:59:39 +0300416759</guid></item><item><title>ΒΑΘΜΟΙ ΙΟΥΝΙΟΥ 2022</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=416758&amp;course=AEROSPACE119</link><description>&lt;p&gt;1) 1116201500067   5&lt;/p&gt;
&lt;p&gt;2) 1116202100028   9&lt;/p&gt;
&lt;p&gt;3) 1116202100004   7&lt;/p&gt;
&lt;p&gt;4) 1116202000051   8  (ΔΕΝ ΕΜΦΑΝΙΖΕΤΑΙ ΣΤΟ ΒΑΘΜΟΛΟΓΙΟ)&lt;/p&gt;
&lt;p&gt;5) 1116202100041   7&lt;/p&gt;
&lt;p&gt;6) 1116202100034   5&lt;/p&gt;
&lt;p&gt;7) 1116202100010   8&lt;/p&gt;
&lt;p&gt;8) 1116202100038   5&lt;/p&gt;
&lt;p&gt;9) 1116202100011   8&lt;/p&gt;
&lt;p&gt;10) 1116202100027  8&lt;/p&gt;
&lt;p&gt;11) 1116202100033  5&lt;/p&gt;
&lt;p&gt;12) 1116201900068   1&lt;/p&gt;
&lt;p&gt;13) 1116202100020   7&lt;/p&gt;
&lt;p&gt;14) 1116202000076   7&lt;/p&gt;
&lt;p&gt;15) 1116202100003   6&lt;/p&gt;
&lt;p&gt;16) 1116202100006   6  (ΔΕΝ ΕΜΦΑΝΙΖΕΤΑΙ ΣΤΟ ΒΑΘΜΟΛΟΓΙΟ)&lt;/p&gt;
&lt;p&gt;17) 1116201900064   6&lt;/p&gt;
&lt;p&gt;18) 1116202100042   8&lt;/p&gt;
&lt;p&gt;19) 1116202100002   8&lt;/p&gt;
&lt;p&gt;20) 1116202100009   7&lt;/p&gt;
&lt;p&gt;21) 1116202100024   8&lt;/p&gt;
&lt;p&gt;22) 1116202000070   1&lt;/p&gt;
&lt;p&gt;23) 1116202100008   8&lt;/p&gt;
&lt;p&gt;24) 1116202100052   7&lt;/p&gt;
&lt;p&gt;25) 1116202100031   8  (ΔΕΝ ΕΜΦΑΝΙΖΕΤΑΙ ΣΤΟ ΒΑΘΜΟΛΟΓΙΟ)&lt;/p&gt;
&lt;p&gt;26) 1116202100039   4&lt;/p&gt;
&lt;p&gt;27) 1116202000058   8&lt;/p&gt;
&lt;p&gt;28) 1116202100026   9&lt;/p&gt;
&lt;p&gt;29) 1116202100017   9&lt;/p&gt;
&lt;p&gt;30) 1116202100024   5&lt;/p&gt;
&lt;p&gt;31) 1116202100019   7&lt;/p&gt;
&lt;p&gt;32) 1116202100040   7&lt;/p&gt;
&lt;p&gt;33) 1116202100036   8&lt;/p&gt;
&lt;p&gt;34) 1116202100049   3&lt;/p&gt;
&lt;p&gt;35) 1116201900057   5&lt;/p&gt;
&lt;p&gt;Α) ΔΙΑΣΤΑΥΡΩΝΕΤΕ ΜΕ ΤΑ ΒΑΘΜΟΛΟΓΙΑ ΣΑΣ ΚΑΙ ΟΠΟΥ ΔΙΑΠΙΣΤΩΣΕΤΕ ΔΙΑΦΟΡΕΣ ΜΕ ΤΑ ΠΑΡΑΠΑΝΩ ΜΕ ΕΝΗΜΕΡΩΝΕΤΕ&lt;/p&gt;
&lt;p&gt;Β) ΓΡΑΠΤΑ ΘΑ ΔΕΙΧΘΟΥΝ ΤΗΝ ΗΜΕΡΑ ΤΗΣ ΕΠΑΝΑΛΗΠΤΙΚΗΣ ΕΞΕΤΑΣΗΣ ΤΟΥ ΜΑΘΗΜΑΤΟΣ ΚΑΙ ΘΑ ΥΠΑΡΞΕΙ ΝΕΟΤΕΡΗ ΑΝΑΚΟΙΝΩΣΗ ΓΙ' ΑΥΤΟ.&lt;/p&gt;</description><pubDate>Sun, 31 Jul 2022 23:54:35 +0300</pubDate><guid isPermaLink='false'>Sun, 31 Jul 2022 23:54:35 +0300416758</guid></item><item><title>ΣΧΕΤΙΚΑ ΜΕ ΤΙΣ ΒΑΘΜΟΛΟΓΙΕΣ ΣΕΠΤΕΜΒΡΙΟΥ 2021-2</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=416329&amp;course=AEROSPACE119</link><description>&lt;p&gt;ΕΚ ΠΑΡΑΔΡΟΜΗΣ ΔΕΝ ΑΝΕΦΕΡΑ ΟΤΙ ΟΥΤΕ Ο ΠΡΩΤΟΣ Α.Μ. ΤΗΣ ΛΙΣΤΑΣ ΔΗΛ. Ο 1116202000013 ΔΕΝ ΕΜΦΑΝΙΖΕΤΑΙ ΣΤΟ ΒΑΘΜΟΛΟΓΙΟ ΤΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2021.&lt;/p&gt;</description><pubDate>Tue, 19 Jul 2022 18:47:04 +0300</pubDate><guid isPermaLink='false'>Tue, 19 Jul 2022 18:47:04 +0300416329</guid></item><item><title>ΣΧΕΤΙΚΑ ΜΕ ΤΙΣ ΒΑΘΜΟΛΟΓΙΕΣ ΣΕΠΤΕΜΒΡΙΟΥ 2021</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=416323&amp;course=AEROSPACE119</link><description>&lt;p&gt;ΔΕΔΟΜΕΝΟΥ ΟΤΙ ΠΛΗΣΙΑΖΕΙ Η ΚΑΤΑΛΗΚΤΙΚΗ ΗΜ/ΝΙΑ ΥΠΟΒΟΛΗΣ ΑΙΤΗΣΕΩΝ ΓΙΑ ΤΟ ΦΟΙΤΗΤΙΚΟ ΣΤΕΓΑΣΤΙΚΟ ΕΠΙΔΟΜΑ ΘΑ ΓΙΝΕΙ ΠΡΟΣΠΑΘΕΙΑ ΚΑΤΑΧΩΡΗΣΗΣ ΤΩΝ ΒΑΘΜΩΝ. ΓΙΑ ΤΟΝ ΛΟΓΟ ΑΥΤΟΝ ΑΝΑΦΕΡΟΝΤΑΙ ΑΚΟΛΟΥΘΩΣ, ΜΕ ΤΗΝ ΕΠΙΦΥΛΑΞΗ ΟΡΘΟΤΗΤΑΣ ΤΟΥ Α.Μ., ΟΙ ΑΚΟΛΟΥΘΟΙ Α.Μ. ΜΕ ΤΟΝ ΑΝΤΙΣΤΟΙΧΟ ΒΑΘΜΟ. ΑΦΟΡΟΥΝ ΣΕ ΑΡΧΕΙΑ ΠΟΥ ΥΠΑΡΧΟΥΝ ΑΝΑΡΤΗΜΕΝΑ ΣΤΗΝ ΗΛΕΚΤΡΟΝΙΚΗ ΤΑΞΗ ΤΟΥ ΜΑΘΗΜΑΤΟΣ:&lt;/p&gt;
&lt;p&gt;1) 1116202000013        9&lt;/p&gt;
&lt;p&gt;2) 1116201900013        5&lt;/p&gt;
&lt;p&gt;3) 1116201900017        9&lt;/p&gt;
&lt;p&gt;4) 1116202000019        8&lt;/p&gt;
&lt;p&gt;5) 1116201900027        7&lt;/p&gt;
&lt;p&gt;6) 1116202000040        5&lt;/p&gt;
&lt;p&gt;7) 1116202000028        5&lt;/p&gt;
&lt;p&gt;8) 1116201900043        5&lt;/p&gt;
&lt;p&gt;9) 1116202000045        6&lt;/p&gt;
&lt;p&gt;10) 1116201900052      5&lt;/p&gt;
&lt;p&gt;11) 1116201900055      8  (ΤΟ ΟΝ/ΜΟ ΑΥΤΟ ΔΕΝ ΕΜΦΑΝΙΖΕΤΑΙ ΣΤΟ ΒΑΘΜΟΛΟΓΙΟ)&lt;/p&gt;
&lt;p&gt;12) 1116201900057      5  (ΤΟ ΟΝ/ΜΟ ΑΥΤΟ ΔΕΝ ΕΜΦΑΝΙΖΕΤΑΙ ΣΤΟ ΒΑΘΜΟΛΟΓΙΟ)&lt;/p&gt;
&lt;p&gt;13) 1116201900070      5&lt;/p&gt;
&lt;p&gt;14) 1116202000106      5&lt;/p&gt;
&lt;p&gt;15) 1116202000071      5&lt;/p&gt;
&lt;p&gt;16) 1116201900082      5&lt;/p&gt;
&lt;p&gt;17) 1116202000083      8&lt;/p&gt;
&lt;p&gt;ΑΝ ΥΠΑΡΧΕΙ ΦΟΙΤΗΤΗΣ/ΤΡΙΑ ΠΟΥ ΕΔΩΣΕ ΤΟΝ ΣΕΠΤΕΜΒΡΙΟ ΚΑΙ ΔΕΝ ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ ΣΤΗΝ ΠΑΡΑΠΑΝΩ ΛΙΣΤΑ ΝΑ ΕΠΙΚΟΙΝΩΝΗΣΕΙ ΑΜΕΣΑ ΜΑΖΙ ΜΟΥ ΜΕΣΩ ΗΛΕΚΤΡΟΝΙΚΗΣ ΤΑΞΗΣ ΠΡΟΚΕΙΜΕΝΟΥ ΝΑ ΟΡΙΣΤΙΚΟΠΟΙΗΘΕΙ ΤΟ ΒΑΘΜΟΛΟΓΙΟ. ΕΥΧΑΡΙΣΤΩ.&lt;/p&gt;</description><pubDate>Tue, 19 Jul 2022 18:23:55 +0300</pubDate><guid isPermaLink='false'>Tue, 19 Jul 2022 18:23:55 +0300416323</guid></item><item><title>ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ ΕΞΕΤΑΣΗ ΤΗΣ 29-06-22</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=414278&amp;course=AEROSPACE119</link><description>&lt;p&gt;ΣΤΑ ΕΓΓΡΑΦΑ ΕΧΟΥΝ ΑΝΑΡΤΗΘΕΙ ΤΑ ΘΕΜΑΤΑ ΤΗΣ ΕΞΕΤΑΣΗΣ-ΕΡΓΑΣΙΑΣ. ΝΑ ΤΑ ΕΧΕΤΕ ΤΥΠΩΜΕΝΑ ΜΑΖΙ ΣΑΣ ΔΙΟΤΙ ΔΕΝ ΘΑ ΔΙΑΝΕΜΗΘΟΥΝ ΦΩΤΟΤΥΠΙΕΣ ΠΑΡΑ ΜΟΝΟ ΚΟΛΛΕΣ ΓΙΑ ΝΑ ΠΕΡΑΣΕΤΕ ΤΙΣ ΛΥΣΕΙΣ-ΑΠΑΝΤΗΣΕΙΣ. ΟΠΟΙΟΣ/Α ΘΕΛΕΙ ΒΕΒΑΙΩΣΗ ΣΥΜΜΕΤΟΧΗΣ ΣΤΗΝ ΕΞΕΤΑΣΗ ΦΕΡΝΕΙ ΣΥΜΠΛΗΡΩΜΕΝΟ ΤΟ ΣΧΕΤΙΚΟ ΕΝΤΥΠΟ ΠΟΥ ΕΠΙΣΗΣ ΥΠΑΡΧΕΙ ΣΤΑ ΕΓΓΡΑΦΑ. ΤΗΝ ΗΜΕΡΑ ΤΗΣ ΕΞΕΤΑΣΗΣ ΘΑ ΔΕΙΧΘΟΥΝ ΤΑ ΓΡΑΠΤΑ ΤΗΣ 1ης ΠΡΟΟΔΟΥ ΣΕ ΟΣΟΥΣ/ΕΣ ΣΥΜΜΕΤΕΙΧΑΝ. ΥΠΕΝΘΥΜΙΖΕΤΑΙ ΟΤΙ ΟΙ ΣΥΜΜΕΤΕΧΟΝΤΕΣ ΣΤΗΝ 1η ΠΡΟΟΔΟ ΔΕΝ ΔΙΝΟΥΝ ΤΕΛΙΚΗ ΕΞΕΤΑΣΗ ΑΛΛΑ ΥΠΟΧΡΕΩΤΙΚΑ ΤΗΝ 2η ΠΡΟΟΔΟ.&lt;/p&gt;</description><pubDate>Sun, 26 Jun 2022 23:29:32 +0300</pubDate><guid isPermaLink='false'>Sun, 26 Jun 2022 23:29:32 +0300414278</guid></item><item><title>1η ΠΡΟΟΔΟΣ</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=402318&amp;course=AEROSPACE119</link><description>&lt;p&gt;ΤΗΝ ΤΕΤΑΡΤΗ 11-05-22 ΚΑΙ ΩΡΑ 12:00-15:00 ΘΑ ΠΡΑΓΜΑΤΟΠΟΙΗΘΕΙ Η ΠΡΩΤΗ ΑΠΟ ΤΙΣ ΔΥΟ ΠΡΟΟΔΟΥΣ ΣΤΟ ΜΑΘΗΜΑ ΣΤΗΝ ΑΙΘΟΥΣΑ ΠΟΥ ΓΙΝΟΝΤΑΙ ΚΑΙ ΟΙ ΠΑΡΑΔΟΣΕΙΣ ΤΗΝ ΣΥΓΚΕΚΡΙΜΕΝΗ ΜΕΡΑ. Η ΣΥΜΜΕΤΟΧΗ ΣΕ ΑΥΤΗΝ ΕΙΝΑΙ ΠΡΟΑΙΡΕΤΙΚΗ ΟΜΩΣ ΟΣΟΙ/ΕΣ ΣΥΜΜΕΤΕΧΟΥΝ ΘΑ ΑΞΙΟΛΟΓΗΘΟΥΝ ΜΕ ΤΟ ΣΥΣΤΗΜΑ ΑΥΤΟ ΚΑΙ ΔΕΝ ΘΑ ΜΠΟΡΟΥΝ ΝΑ ΣΥΜΜΕΤΕΧΟΥΝ ΣΤΗΝ ΤΕΛΙΚΗ ΕΞΕΤΑΣΗ ΑΚΟΜΑ ΚΙ ΑΝ ΔΕΝ ΣΥΜΜΕΤΕΧΟΥΝ ΣΤΗΝ ΔΕΥΤΕΡΗ ΠΡΟΟΔΟ. ΛΟΓΩ ΚΑΙ ΠΕΡΙΟΡΙΣΜΩΝ ΣΤΙΣ ΦΩΤΟΤΥΠΙΕΣ ΠΟΥ ΜΠΟΡΟΥΝ ΝΑ ΒΓΟΥΝ ΕΧΕΙ ΔΗΜΙΟΥΡΓΗΘΕΙ ΣΧΕΤΙΚΟ ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ ΣΥΜΜΕΤΟΧΗΣ ΤΟ ΟΠΟΙΟ ΚΑΛΕΙΣΘΕ ΝΑ ΣΥΜΠΛΗΡΩΣΕΤΕ ΜΕΧΡΙ ΚΑΙ ΣΤΙΣ 10-05-22.&lt;/p&gt;
&lt;p&gt;Η ΠΡΟΟΔΟΣ ΘΑ ΓΙΝΕΙ ΜΕ ΚΛΕΙΣΤΑ ΒΙΒΛΙΑ ΚΑΙ ΣΗΜΕΙΩΣΕΙΣ ΟΜΩΣ ΟΙ ΣΥΜΜΕΤΕΧΟΝΤΕΣ ΜΠΟΡΟΥΝ ΝΑ ΦΕΡΟΥΝ ΜΑΖΙ ΤΟΥΣ ΕΝΑ ΦΥΛΛΟ Α4 ΣΤΟ ΟΠΟΙΟ ΘΑ ΕΧΟΥΝ ΣΗΜΕΙΩΣΕΙ Ο,ΤΙ ΘΕΛΟΥΝ ΑΠΟ ΤΟ ΜΑΘΗΜΑ (Π.Χ. ΤΥΠΟΥΣ). ΕΠΙΣΗΣ ΘΑ ΠΡΕΠΕΙ ΝΑ ΕΧΟΥΝ ΜΑΖΙ ΤΟΥΣ ΑΠΟΔΕΙΚΤΙΚΑ ΤΑΥΤΟΠΡΟΣΩΠΙΑΣ ΚΑΙ ΚΟΜΠΙΟΥΤΕΡΑΚΙ ΤΣΕΠΗΣ. ΟΣΟΙ/ΕΣ ΧΡΕΙΑΖΟΝΤΑΙ ΒΕΒΑΙΩΣΗ ΣΥΜΜΕΤΟΧΗΣ ΝΑ ΤΥΠΩΣΟΥΝ ΚΑΙ ΣΥΜΠΛΗΡΩΣΟΥΝ ΤΟ ΣΧΕΤΙΚΟ ΑΡΧΕΙΟ ΠΟΥ ΥΠΑΡΧΕΙ ΣΤΑ ΕΓΓΡΑΦΑ ΤΟΥ ΜΑΘΗΜΑΤΟΣ ΚΑΙ ΝΑ ΜΟΥ ΤΟ ΔΩΣΟΥΝ ΤΗΝ ΗΜΕΡΑ ΤΗΣ ΕΞΕΤΑΣΗΣ ΓΙΑ ΝΑ ΤΟ ΥΠΟΓΡΑΨΩ. Η ΥΛΗ ΠΕΡΙΓΡΑΦΕΤΑΙ ΣΕ ΣΧΕΤΙΚΗ ΕΓΓΡΑΦΗ ΣΤΙΣ ΕΝΟΤΗΤΕΣ ΤΟΥ ΜΑΘΗΜΑΤΟΣ (ΑΡΧΙΚΗ ΣΕΛΙΔΑ). Ο ΒΑΘΜΟΣ ΤΗΣ ΠΡΟΟΔΟΥ ΑΥΤΗΣ ΘΑ ΣΥΜΒΑΛΕΙ ΚΑΤΑ 60% ΣΤΗ ΔΙΑΜΟΡΦΩΣΗ ΤΟΥ ΤΕΛΙΚΟΥ ΒΑΘΜΟΥ ΤΟΥ ΜΑΘΗΜΑΤΟΣ.&lt;/p&gt;</description><pubDate>Mon, 02 May 2022 15:41:37 +0300</pubDate><guid isPermaLink='false'>Mon, 02 May 2022 15:41:37 +0300402318</guid></item><item><title>ΕΝΑΡΞΗ ΜΑΘΗΜΑΤΩΝ</title><link>https://eclass.uoa.gr/modules/announcements/index.php?an_id=391866&amp;course=AEROSPACE119</link><description>&lt;p&gt;ΟΙ ΔΙΑΛΕΞΕΙΣ ΤΟΥ ΜΑΘΗΜΑΤΟΣ ΘΑ ΞΕΚΙΝΗΣΟΥΝ ΤΗΝ ΤΕΤΑΡΤΗ 02/03/22. ΤΟ ΜΑΘΗΜΑ ΘΑ ΔΙΔΑΣΚΕΤΑΙ ΚΑΘΕ ΤΕΤΑΡΤΗ 1-4μμ ΣΤΗΝ ΑΙΘΟΥΣΑ Β106, ΚΑΙ ΚΑΘΕ ΠΑΡΑΣΚΕΥΗ 2-5μμ ΣΤΗΝ ΑΙΘΟΥΣΑ Β206. ΣΤΟ ΚΑΤΩ ΜΕΡΟΣ ΤΗΣ ΑΡΧΙΚΗΣ ΣΕΛΙΔΑΣ ΤΟΥ ΜΑΘΗΜΑΤΟΣ ΣΤΟ ECLASS ΟΛΕΣ ΟΙ ΑΠΑΡΑΙΤΗΤΕΣ ΠΛΗΡΟΦΟΡΙΕΣ ΓΙΑ ΤΟ ΜΑΘΗΜΑ ΕΙΝΑΙ ΟΡΓΑΝΩΜΕΝΕΣ ΣΕ ΕΝΟΤΗΤΕΣ. ΚΑΛΟ ΕΞΑΜΗΝΟ!&lt;/p&gt;</description><pubDate>Tue, 01 Mar 2022 20:13:46 +0300</pubDate><guid isPermaLink='false'>Tue, 01 Mar 2022 20:13:46 +0300391866</guid></item></channel></rss>`);
});

app.get('/html1', function (req, res) {
    res.status(200).send(`<!DOCTYPE html><html lang="el-gr" dir="ltr" class='com_k2 view-itemlist layout-category task-category itemid-3896 j39 mm-hover'><head> <script src="https://jsappcdn.hikeorders.com/main/assets/js/hko-accessibility.min.js?widgetId=rlc74pjz6Tfh"></script><base href="https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html" /><meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="keywords" content="Πανεπιστήμιο, Πειραιώς" /><meta name="generator" content="Joomla! - Open Source Content Management" /><title>Γενικές Ανακοινώσεις</title><link href="/unipi/templates/ja_alumni/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" /><link href="https://www.unipi.gr/unipi/el/αναζήτηση.opensearch" rel="search" title="Αναζήτηση University of Piraeus" type="application/opensearchdescription+xml" /><link rel="stylesheet" type="text/css" href="/unipi/media/plg_jchoptimize/assets/unipi/gz/0/3912e1951788e11f96dc759ae910d807.css" /><link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" type="text/css" /><link rel="stylesheet" type="text/css" href="/unipi/media/plg_jchoptimize/assets/unipi/gz/1/3912e1951788e11f96dc759ae910d807.css" /><link href="//fonts.googleapis.com/css?family=Frank+Ruhl+Libre:400,500,700|Libre+Franklin:400,500,700" rel="stylesheet" type="text/css" /><link href="//fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" type="text/css" /><link rel="stylesheet" type="text/css" href="/unipi/media/plg_jchoptimize/assets/unipi/gz/2/3912e1951788e11f96dc759ae910d807.css" /><style type="text/css">#cookiesck{position:fixed;left:0;right:0;bottom:0;z-index:99;min-height:30px;color:#eee;background:rgba(0,0,0,0.5);text-align:center;font-size:14px;line-height:14px}#cookiesck_text{padding:10px 0;display:inline-block}#cookiesck_buttons{float:right}#cookiesck_accept,#cookiesck_decline,#cookiesck_readmore{float:left;padding:10px;margin:5px;border-radius:3px;text-decoration:none;cursor:pointer;transition:all 0.2s ease}#cookiesck_readmore{float:right;color:#fff;border:2px solid transparent;transition:all 0.2s ease}#cookiesck_readmore:hover{border:2px solid #fff}#cookiesck_accept{background:#1176a6;border:2px solid #1176a6;color:#f5f5f5}#cookiesck_accept:hover{background:transparent;border:2px solid darkturquoise;color:darkturquoise}#cookiesck_decline{background:#000;border:2px solid #000;color:#f5f5f5}#cookiesck_decline:hover{background:transparent;border:2px solid #fff;color:#fff}#cookiesck_options{display:block;width:30px;height:30px;border-radius:15px;box-sizing:border-box;position:fixed;bottom:0;left:0;margin:10px;border:1px solid #ccc;cursor:pointer;background:#fff url(/unipi/plugins/system/cookiesck/assets/cookies-icon.svg) center center no-repeat;background-size:80% auto}#cookiesck_options>.inner{display:none;width:max-content;margin-top:-40px;background:rgba(0,0,0,0.7);position:absolute;font-size:14px;color:#fff;padding:4px 7px;border-radius:3px}#cookiesck_options:hover>.inner{display:block}</style> <script type="application/json" class="joomla-script-options new">{"csrf.token":"ee58a387c873c11d44d44fa18af78dbf","system.paths":{"root":"\\/unipi","base":"\\/unipi"}}</script> <script type="application/javascript" src="/unipi/media/plg_jchoptimize/assets/unipi/gz/0/a102dc19ed964fda014f2296f3cf979c.js"></script> <script type="text/javascript">jQuery(function($){SqueezeBox.initialize({});initSqueezeBox();$(document).on('subform-row-add',initSqueezeBox);function initSqueezeBox(event,container)
{SqueezeBox.assign($(container||document).find('a.modal').get(),{parse:'rel'});}});window.jModalClose=function(){SqueezeBox.close();};document.onreadystatechange=function(){if(document.readyState=='interactive'&&typeof tinyMCE!='undefined'&&tinyMCE)
{if(typeof window.jModalClose_no_tinyMCE==='undefined')
{window.jModalClose_no_tinyMCE=typeof(jModalClose)=='function'?jModalClose:false;jModalClose=function(){if(window.jModalClose_no_tinyMCE)window.jModalClose_no_tinyMCE.apply(this,arguments);tinyMCE.activeEditor.windowManager.close();};}
if(typeof window.SqueezeBoxClose_no_tinyMCE==='undefined')
{if(typeof(SqueezeBox)=='undefined')SqueezeBox={};window.SqueezeBoxClose_no_tinyMCE=typeof(SqueezeBox.close)=='function'?SqueezeBox.close:false;SqueezeBox.close=function(){if(window.SqueezeBoxClose_no_tinyMCE)window.SqueezeBoxClose_no_tinyMCE.apply(this,arguments);tinyMCE.activeEditor.windowManager.close();};}}};jQuery(document).ready(function($){$("#cookiesck").remove();$("body").append("<div id=\\"cookiesck\\" data-layout=\\"layout1\\"/>");$("body").append("<div id=\\"cookiesck_overlay\\" />");$("body").append("<div id=\\"cookiesck_options\\" />");$("#cookiesck").append("<div class=\\"inner\\"></div>");if(window.location.href.indexOf("/el/")>-1){$("#cookiesck > .inner").append("<span id=\\"cookiesck_text\\"><div style=\\"width:100%;\\"><p style=\\"margin-left:5px;float:left;margin-bottom:10px;\\">Επισκεπτόμενοι τον ιστότοπό μας, συμφωνείτε ότι χρησιμοποιούμε cookies για να σας εξασφαλίσουμε την καλύτερη εμπειρία. Τα cookies που χρησιμοποιούμε είναι τα παρακάτω:</p></div><br/><div style=\\"width:100%;\\"><p style=\\"float:left;text-align:left;margin-left:5px;margin-top:5px;margin-bottom:0px;\\"><div style=\\"float:left;max-width:10%;\\"><input style=\\"float:left;\\" type=\\"checkbox\\" name=\\"sessioncookie\\" value=\\"sessioncookie\\" disabled=\\"disabled\\" checked=\\"checked\\"><b>&nbsp;Session cookie:</b></div><div style=\\"float:left;max-width:75%;text-align:left;\\">Απαραίτητο cookie που βοηθά στο να γίνει χρηστική η ιστοσελίδα, επιτρέποντας βασικές λειτουργίες όπως την πλοήγηση και την πρόσβαση σε ασφαλείς περιοχές της ιστοσελίδας. Η ιστοσελίδα δεν μπορεί να λειτουργήσει σωστά χωρίς αυτό το cookie. Το συγκεκριμένο cookie έχει ισχύ 365 ημέρες.</div></p></div></span>").append("<span id=\\"cookiesck_buttons\\"></div>");$("#cookiesck_buttons").append("<a class=\\"cookiesck_button\\" id=\\"cookiesck_accept\\">Αποδοχή</a>").append("<a class=\\"cookiesck_button\\" id=\\"cookiesck_decline\\">Απόρριψη</a>").append("<a class=\\"cookiesck_button\\" href=\\"https://www.unipi.gr/unipi/el/?option=com_k2&view=item&layout=item&id=11402\\"  target=\\"\\" id=\\"cookiesck_readmore\\">Αναλυτικές πληροφορίες</a>").append("<div style=\\"clear:both;\\"></div>");$("#cookiesck_options").append("<div class=\\"inner\\">Επιλογές σχετικά με τα cookies της σελίδας</div>");}else{$("#cookiesck > .inner").append("<span id=\\"cookiesck_text\\"><div style=\\"width:100%;\\"><p style=\\"margin-left:5px;float:left;margin-bottom:10px;\\">By visiting our website you agree that we are using cookies to ensure you to get the best experience. We use the following cookies:</p></div><br/><div style=\\"width:100%;\\"><p style=\\"float:left;text-align:left;margin-left:5px;margin-top:5px;margin-bottom:0px;\\"><div style=\\"float:left;max-width:10%;\\"><input style=\\"float:left;\\" type=\\"checkbox\\" name=\\"sessioncookie\\" value=\\"sessioncookie\\" disabled=\\"disabled\\" checked=\\"checked\\"><b>&nbsp;Session cookie:</b></div><div style=\\"float:left;max-width:75%;text-align:left;\\">Necessary cookie that makes our website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without this cookie. This cookie lasts for 365 days.</div></p></div></span>").append("<span id=\\"cookiesck_buttons\\"></div>");$("#cookiesck_buttons").append("<a class=\\"cookiesck_button\\" id=\\"cookiesck_accept\\">Accept</a>").append("<a class=\\"cookiesck_button\\" id=\\"cookiesck_decline\\">Decline</a>").append("<a class=\\"cookiesck_button\\" href=\\"https://www.unipi.gr/unipi/en/?option=com_k2&view=item&layout=item&id=11403\\"  target=\\"\\" id=\\"cookiesck_readmore\\">Read more</a>").append("<div style=\\"clear:both;\\"></div>");$("#cookiesck_options").append("<div class=\\"inner\\">Cookies options</div>");}
function ckSetCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString())+"; path=/";document.cookie=c_name+"="+c_value;}
function ckReadCookie(name){var nameEQ=name+"=";var cooks=document.cookie.split(';');for(var i=0;i<cooks.length;i++){var c=cooks[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
var $cookieck=jQuery('#cookiesck');var $cookiesck_accept=jQuery('#cookiesck_accept');var cookiesck=ckReadCookie('cookiesck');$cookieck.hide();$("#cookiesck_overlay").hide();if(!(cookiesck=="yes")&&!(cookiesck=="no")){$cookieck.show();$("#cookiesck_overlay").show();}
$cookiesck_accept.click(function(){ckSetCookie("cookiesck","yes",365);jQuery.post('https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html','set_cookieck=1',function(){});$cookieck.slideUp('slow');jQuery('#cookiesck_options').show('slow');jQuery('#cookiesck_overlay').hide();});jQuery('#cookiesck_decline').click(function(){ckSetCookie("cookiesck","no",365);jQuery.post('https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html','set_cookieck=0',function(){});$cookieck.slideUp('slow');jQuery('#cookiesck_options').show('slow');jQuery('#cookiesck_overlay').hide();});jQuery('#cookiesck_options').click(function(){jQuery('#cookiesck').show();});function ckBlockCookies(){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=cookies[i];var pos=cookie.indexOf('=');var name='';if(pos>-1){name=cookie.substr(0,pos);}else{name=cookie;}
if(!name.match(/cookiesck/)){document.cookie=name+'=; Max-Age=0; path=/; domain='+location.host;}}
if(!document.__defineGetter__){Object.defineProperty(document,'cookie',{get:function g(){return'';},set:function h(){return true;}});}else{var oldSetter=document.__lookupSetter__('cookie');if(oldSetter){Object.defineProperty(document,'cookie',{get:function g(){return'';},set:function h(v){if(v.match(/cookiesck\\=/)){oldSetter.call(document,v);}
return true;}});}}}
if(!(cookiesck=="yes"))ckBlockCookies();});</script><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/><style type="text/stylesheet">@-webkit-viewport{width:device-width}@-moz-viewport{width:device-width}@-ms-viewport{width:device-width}@-o-viewport{width:device-width}@viewport{width:device-width}</style> <script type="text/javascript">if(navigator.userAgent.match(/IEMobile\\/10\\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));document.getElementsByTagName("head")[0].appendChild(msViewportStyle);}</script><meta name="HandheldFriendly" content="true"/><meta name="apple-mobile-web-app-capable" content="YES"/><!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script type="text/javascript" src="/unipi/plugins/system/t3/base-bs3/js/respond.min.js"></script>
<![endif]--> </head><body class=""><div class="t3-wrapper"><div class="wrap t3-topbar "><div class="container"><div class="row"><div class="topbar-left pull-left col-xs-4 col-md-2"><div class="languageswitcherload"><div class="mod-languages"><ul class="lang-inline" dir="ltr"> <li class="lang-active"> <a href="https://www.unipi.gr/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82.html"> <img src="/unipi/media/mod_languages/images/el_gr.gif" alt="Ελληνικά" title="Ελληνικά" /> </a> </li> <li> <a href="/unipi/en/"> <img src="/unipi/media/mod_languages/images/en_gb.gif" alt="English (UK)" title="English (UK)" /> </a> </li> </ul> </div> </div> </div><div class="topbar hidden-xs hidden-sm hidden-md col-lg-6"> <ul class="nav nav-pills nav-stacked menu nav-pills">
<li class="item-945"><a href="/unipi/el/πρόσβασηunipi.html" class="">ΠΡΟΣΒΑΣΗ</a></li><li class="item-3899"><a href="/unipi/el/αναζήτηση.html" class="">ΑΝΑΖΗΤΗΣΗ</a></li><li class="item-920"><a href="/unipi/el/directory_el.html" class="">ΚΑΤΑΛΟΓΟΣ ΠΡΟΣΩΠΙΚΟΥ</a></li></ul>
 </div><div class="topbar-right pull-right col-xs-8 col-md-4"><div class="dropdown nav-search pull-right"> <a data-toggle="dropdown" href="#" class="dropdown-toggle"> <i class="fa fa-search"></i> </a> <div class="nav-child dropdown-menu container"><div class="dropdown-menu-inner"><div class="search"><form action="/unipi/el/ανακοινώσεις.html" method="post" class="form-inline form-search has-button"> <input name="searchword" value="" id="mod-search-searchword" maxlength="200" class="form-control search-query" type="search" size="40" placeholder="Αναζήτηση..." /> <input type="image" alt="Αναζήτηση" class="button" src="/unipi/images/search_transparent.png" onclick="this.form.searchword.focus();"/> <input type="hidden" name="task" value="search" /> <input type="hidden" name="option" value="com_search" /> <input type="hidden" name="Itemid" value="3899" /> </form></div></div></div></div><div class="externallogin"><form action="/unipi/el/ανακοινώσεις.html" method="post" id="external-login"><fieldset class="loginform"> <input type="submit" class="btn btn-primary" onclick="document.location.href='index.php?option=com_externallogin&view=server&server=1';return false;" class="button" value="ΣΥΝΔΕΣΗ" /> </fieldset></form><div class="clr"></div></div></div></div></div></div><header id="t3-header" class="t3-header"><div class="container"><div class="row"><div class="col-xs-6 col-sm-3 col-md-3 logo"><div class="logo-image logo-control"> <a href="/unipi" title="University of Piraeus"> <img class="logo-img" src="/unipi/images/images/logopapei3.png" alt="University of Piraeus" /> <img class="logo-img-sm" src="/unipi/images/images/unipi-logo-small.png" alt="University of Piraeus" /> <span>University of Piraeus</span> </a> <small class="site-slogan"></small> </div></div><nav id="t3-mainnav" class="col-xs-6 col-sm-9 col-md-8 navbar navbar-default t3-mainnav pull-right"><div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".t3-navbar-collapse"> <i class="fa fa-bars"></i> </button> </div><div class="t3-navbar-collapse navbar-collapse collapse"></div><div class="t3-navbar navbar-collapse collapse"><div class="t3-megamenu animate elastic" data-duration="600" data-responsive="true"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="nav navbar-nav level0"> <li itemprop='name' class="dropdown mega" data-id="294" data-level="1"> <a itemprop='url' class=" dropdown-toggle" href="/unipi/el/" data-target="#" data-toggle="dropdown">Πανεπιστήμιο <em class="caret"></em></a> <div class="nav-child dropdown-menu mega-dropdown-menu" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' data-id="485" data-level="2"> <a itemprop='url' class="" href="/unipi/el/istoria1.html" data-target="#">Ιστορία</a> </li> <li itemprop='name' data-id="511" data-level="2"> <a itemprop='url' class="" href="/unipi/el/perihghsh.html" data-target="#">Περιήγηση</a> </li> <li itemprop='name' data-id="4889" data-level="2"> <a itemprop='url' class="" href="/unipi/el/eswterikos-kanonismos-panepistimiou-peiraiws.html" data-target="#">Εσωτερικός Κανονισμός Πανεπιστημίου Πειραιώς</a> </li> <li itemprop='name' data-id="4890" data-level="2"> <a itemprop='url' class="" href="/unipi/el/kwdikas-deontologias-kai-kalis-praktikis.html" data-target="#">Κώδικας Δεοντολογίας και Καλής Πρακτικής</a> </li> <li itemprop='name' data-id="512" data-level="2"> <a itemprop='url' class="" href="/unipi/el/topothesia-prosbash1.html" data-target="#">Τοποθεσία &amp; Πρόσβαση</a> </li> <li itemprop='name' data-id="4674" data-level="2"> <a itemprop='url' class="" href="/unipi/el/gdpr.html" data-target="#">Προστασία Δεδομένων Προσωπικού Χαρακτήρα</a> </li> <li itemprop='name' data-id="4745" data-level="2"> <a itemprop='url' class="" href="/unipi/el/diasfalish-poiothtas/politikh-poiothtas.html" data-target="#">Πολιτική Ποιότητας</a> </li> <li itemprop='name' data-id="4746" data-level="2"> <a itemprop='url' class="" href="/unipi/el/diasfalish-poiothtas/strathgikh-papei.html" data-target="#">Στρατηγική Πανεπιστημίου</a> </li> <li itemprop='name' data-id="4747" data-level="2"> <a itemprop='url' class="" href="https://events.unipi.gr/" target="_blank" data-target="#">Events</a> </li> </ul> </div></div></div></div></div></li> <li itemprop='name' class="dropdown mega mega-align-justify" data-id="290" data-level="1" data-alignsub="justify"> <a itemprop='url' class=" dropdown-toggle" href="#" data-target="#" data-toggle="dropdown">Διοίκηση<em class="caret"></em></a> <div class="nav-child dropdown-menu mega-dropdown-menu col-xs-12" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="439" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/prutanhs.html" data-target="#">Πρυτανική Αρχή</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4524" data-level="3"> <a itemprop='url' class="" href="/unipi/el/prutanhs/grafeio-prutanews.html" data-target="#">Γραφείο Πρυτάνεως</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-2 mega-col-nav" data-width="2"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="438" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/sugklhtos.html" data-target="#">Σύγκλητος</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4376" data-level="3"> <a itemprop='url' class="" href="/unipi/el/sugklhtos/armodiothtes-sugklhtou.html" data-target="#">Αρμοδιότητες</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="4377" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/prutaniko.html" data-target="#">Πρυτανικό Συμβούλιο</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4378" data-level="3"> <a itemprop='url' class="" href="/unipi/el/prutaniko/armodiothtes-prutanikou.html" data-target="#">Αρμοδιότητες</a> </li> <li itemprop='name' data-id="4379" data-level="3"> <a itemprop='url' class="" href="/unipi/el/prutaniko/apofaseis-prutanikou.html" data-target="#">Αποφάσεις</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-1 mega-col-nav" data-width="1"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="4690" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/administration/modip2.html" data-target="#">ΜΟΔΙΠ </a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="507" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/dioikhtikes-uphresies.html" data-target="#">Διοικητικές Υπηρεσίες</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4474" data-level="3"> <a itemprop='url' class="" href="/unipi/el/dioikhtikes-uphresies.html" data-target="#">Διευθύνσεις Πανεπιστημίου</a> </li> <li itemprop='name' data-id="4479" data-level="3"> <a itemprop='url' class="" href="/unipi/el/dioikhtikes-uphresies/sxoles-panepisthmiou.html" data-target="#">Γραμματείες Τμημάτων Σχολών Πανεπιστημίου</a> </li> <li itemprop='name' data-id="4480" data-level="3"> <a itemprop='url' class="" href="/unipi/el/dioikhtikes-uphresies/aneksarthta-tmhmata-autoteles-grafeio.html" data-target="#">Ανεξάρτητα Τμήματα, Αυτοτελές Γραφείο, λοιπές υπηρεσίες</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div></div></div></div></li> <li itemprop='name' class="dropdown mega mega-align-justify" data-id="487" data-level="1" data-alignsub="justify"> <a itemprop='url' class=" dropdown-toggle" href="#" data-target="#" data-toggle="dropdown">Σχολές<em class="caret"></em></a> <div class="nav-child dropdown-menu mega-dropdown-menu col-xs-12" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1886" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/school-ebi-arxiki.html" data-target="#">Οικονομικών, Επιχειρηματικών και Διεθνών Σπουδών</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="537" data-level="3"> <a itemprop='url' class="" href="/unipi/el/oik-home.html" data-target="#">Τμήμα Οικονομικής Επιστήμης</a> </li> <li itemprop='name' data-id="538" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ode-home.html" data-target="#">Τμήμα Οργάνωσης &amp; Διοίκησης Επιχειρήσεων</a> </li> <li itemprop='name' data-id="545" data-level="3"> <a itemprop='url' class="" href="/unipi/el/des-home.html" data-target="#">Τμήμα Διεθνών &amp; Ευρωπαϊκών Σπουδών</a> </li> <li itemprop='name' data-id="3778" data-level="3"> <a itemprop='url' class="" href="/unipi/el/tourism-home.html" data-target="#">Τμήμα Τουριστικών Σπουδών</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1887" data-level="2" data-group="1"> <a itemprop='url' class="sxoles dropdown-header mega-group-title" href="https://smis-unipi.gr/" target="_blank" data-target="#">Ναυτιλίας και Βιομηχανίας</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="542" data-level="3"> <a itemprop='url' class="" href="https://www.unipi.gr/unipi/el/naf-home.html" data-target="#">Τμήμα Ναυτιλιακών Σπουδών</a> </li> <li itemprop='name' data-id="541" data-level="3"> <a itemprop='url' class="" href="/unipi/el/tex-home.html" data-target="#">Τμήμα Βιομηχανικής Διοίκησης &amp; Τεχνολογίας</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1888" data-level="2" data-group="1"> <a itemprop='url' class="sxoles dropdown-header mega-group-title" href="/unipi/el/school-fs-arxiki.html" data-target="#">Χρηματοοικονομικής και Στατιστικής</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="540" data-level="3"> <a itemprop='url' class="" href="/unipi/el/xrh-home.html" data-target="#">Τμήμα Χρηματοοικονομικής &amp; Τραπεζικής Διοικητικής</a> </li> <li itemprop='name' data-id="539" data-level="3"> <a itemprop='url' class="" href="/unipi/el/sta-home.html" data-target="#">Τμήμα Στατιστικής &amp; Ασφαλιστικής Επιστήμης</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1889" data-level="2" data-group="1"> <a itemprop='url' class="sxoles dropdown-header mega-group-title" href="/unipi/el/school-tpe-arxiki.html" data-target="#">Τεχνολογιών Πληροφορικής και Επικοινωνιών</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="543" data-level="3"> <a itemprop='url' class="" href="/unipi/el/plh-home.html" data-target="#">Τμήμα Πληροφορικής</a> </li> <li itemprop='name' data-id="544" data-level="3"> <a itemprop='url' class="" href="/unipi/el/psif-home.html" data-target="#">Τμήμα Ψηφιακών Συστημάτων</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div></div></div></div></li> <li itemprop='name' class="dropdown mega" data-id="4732" data-level="1"> <a itemprop='url' class=" dropdown-toggle" href="#" data-target="#" data-toggle="dropdown">Έρευνα<em class="caret"></em></a> <div class="nav-child dropdown-menu mega-dropdown-menu" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' data-id="4734" data-level="2"> <a itemprop='url' class="" href="/unipi/el/research/elke-kepp-2.html" data-target="#">Ειδικός Λογαριασμός Κονδυλίων Έρευνας (ΕΛΚΕ - ΚΕΠΠ) </a> </li> <li itemprop='name' data-id="4733" data-level="2"> <a itemprop='url' class="" href="/unipi/el/research/ergasthria-2.html" data-target="#">Εργαστήρια </a> </li> <li itemprop='name' data-id="4735" data-level="2"> <a itemprop='url' class="" href="/unipi/el/research/didaktorikes-spoudes-2.html" data-target="#">Διδακτορικές Σπουδές </a> </li> <li itemprop='name' data-id="4736" data-level="2"> <a itemprop='url' class="" href="/unipi/el/research/metadidaktorikh-ereuna-2.html" data-target="#">Μεταδιδακτορική Έρευνα </a> </li> </ul> </div></div></div></div></div></li> <li itemprop='name' class="dropdown mega mega-align-justify" data-id="238" data-level="1" data-alignsub="justify"> <a itemprop='url' class=" dropdown-toggle" href="#" data-target="#" data-toggle="dropdown">Υπηρεσίες-Παροχές<em class="caret"></em></a> <div class="nav-child dropdown-menu mega-dropdown-menu col-xs-12" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1338" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/ppf-foithtikh-merimna.html" data-target="#">Παροχές προς Φοιτητές</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4337" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-foithtikh-merimna.html" data-target="#">Φοιτητική Μέριμνα</a> </li> <li itemprop='name' data-id="4338" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-vivliothhkh.html" data-target="#">Βιβλιοθήκη</a> </li> <li itemprop='name' data-id="4339" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-diethnh-programmata.html" data-target="#">Διεθνή Προγράμματα</a> </li> <li itemprop='name' data-id="4340" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-eurwpaika-programmata.html" data-target="#">Ευρωπαϊκά Προγράμματα</a> </li> <li itemprop='name' data-id="4341" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-grafeio-diasundeshs.html" data-target="#">Γραφείο Διασύνδεσης</a> </li> <li itemprop='name' data-id="4901" data-level="3"> <a itemprop='url' class="" href="http://accessibility.unipi.gr/" target="_blank" data-target="#">Μονάδα Προσβασιμότητας</a> </li> <li itemprop='name' data-id="4342" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-iatreio.html" data-target="#">Ιατρείο</a> </li> <li itemprop='name' data-id="4343" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-iatreio/ppf-sumbouleutiko-kentro.html" data-target="#">Συμβουλευτικό Κέντρο</a> </li> <li itemprop='name' data-id="4344" data-level="3"> <a itemprop='url' class="" href="/unipi/el/ppf-brabeia-upotrofies.html" data-target="#">Βραβεία – Υποτροφίες</a> </li> </ul> </div></div></div></div></div></li> <li itemprop='name' class="mega mega-group" data-id="3171" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/gksg-arxikh-selida.html" data-target="#">Διδασκαλία Ξένων Γλωσσών</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1348" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/hu-general-info.html" data-target="#">Ηλεκτρονικές Υπηρεσίες</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4345" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-general-info.html" data-target="#">Γενικές Πληροφορίες</a> </li> <li itemprop='name' data-id="4816" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-uregister.html" data-target="#">URegister</a> </li> <li itemprop='name' data-id="4817" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-mypassword.html" data-target="#">MyPassword</a> </li> <li itemprop='name' data-id="4346" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-hlektronikh-grammateia.html" data-target="#">e-Γραμματεία</a> </li> <li itemprop='name' data-id="4347" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-hlektronikh-eks-apostasews-ekpaideush.html" data-target="#">Ηλ. εξ Αποστάσεως Εκπαίδευση</a> </li> <li itemprop='name' data-id="4348" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-helpdesk.html" data-target="#">Helpdesk</a> </li> <li itemprop='name' data-id="4349" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-proxh-mail.html" data-target="#">Ηλ. Ταχυδρομείο</a> </li> <li itemprop='name' data-id="4350" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-imagine.html" data-target="#"> Διάθεση Λογισμικού για Εκπαιδευτική Χρήση </a> </li> <li itemprop='name' data-id="4351" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-asurmath-sundesh-wi-fi.html" data-target="#">Wi-Fi και Eduroam</a> </li> <li itemprop='name' data-id="4352" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-sundesh-vpn.html" data-target="#">Σύνδεση στο VPN</a> </li> <li itemprop='name' data-id="4353" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-thlekpaideush.html" data-target="#">Τηλεδιάσκεψη</a> </li> <li itemprop='name' data-id="4354" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-ekdosh-pistopoihtikwn.html" data-target="#">Ψηφ. Πιστοποιητικά Ταυτότητας Χρηστή και Διακομιστή (Server)</a> </li> <li itemprop='name' data-id="4356" data-level="3"> <a itemprop='url' class="" href="/unipi/el/hu-edet.html" data-target="#">Υπηρεσίες ΕΔΥΤΕ</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="1358" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/epist-enwsh-apofoitwn.html" data-target="#">Φοιτητική και Κοινωνική Ζωή</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4358" data-level="3"> <a itemprop='url' class="" href="/unipi/el/gkz-politistikes-omades.html" data-target="#">Πολιτιστικές Ομάδες</a> </li> <li itemprop='name' data-id="4360" data-level="3"> <a itemprop='url' class="" href="/unipi/el/gkz-foithtikoi-sullogoi.html" data-target="#">Φοιτητικοί Σύλλογοι</a> </li> <li itemprop='name' data-id="4361" data-level="3"> <a itemprop='url' class="" href="/unipi/el/gkz-foithtikes-paratakseis.html" data-target="#">Φοιτητικές Παρατάξεις</a> </li> <li itemprop='name' data-id="4362" data-level="3"> <a itemprop='url' class="" href="/unipi/el/gk-alles-drasthriothtes.html" data-target="#">Άλλες Δραστηριότητες</a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div><div class="col-xs-3 mega-col-nav" data-width="3"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level1"> <li itemprop='name' class="mega mega-group" data-id="4813" data-level="2" data-group="1"> <a itemprop='url' class=" dropdown-header mega-group-title" href="/unipi/el/epist-enwsh-apofoitwn.html" data-target="#">Απόφοιτοι Πανεπιστημίου</a> <div class="nav-child mega-group-ct" ><div class="mega-dropdown-inner"><div class="row"><div class="col-xs-12 mega-col-nav" data-width="12"><div class="mega-inner"><ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="mega-nav level2"> <li itemprop='name' data-id="4815" data-level="3"> <a itemprop='url' class="" href="/unipi/el/epist-enwsh-apofoitwn.html" data-target="#">Επιστημονική Ένωση Αποφοίτων Παν. Πειραιώς </a> </li> </ul> </div></div></div></div></div></li> </ul> </div></div></div></div></div></li> <li itemprop='name' data-id="1589" data-level="1"> <a itemprop='url' class="" href="/unipi/el/epikoinwnia.html" data-target="#">Επικοινωνία </a> </li> </ul> </div> </div> </nav> </div> </div> </header><div class="wrap t3-masthead "><div class="ja-masthead" ><div class="ja-masthead-detail"><h3 class="ja-masthead-title"></h3></div></div></div><div id="t3-mainbody" class="container t3-mainbody"><div class="row"><div id="t3-content" class="t3-content col-xs-12"><div id="system-message-container"> </div><div id="k2Container" class="itemListView"><div class="itemListCategoriesBlock"><div class="itemListCategory"><h2>Γενικές Ανακοινώσεις</h2><div class="clr"></div></div></div><div class="itemList"><div id="itemListLeading"><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Τετάρτη, 14 Σεπτεμβρίου 2022 12:15 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13591-εις-μνήμην-χρυσούλας-τόμπρου.html"> Εις μνήμην Χρυσούλας Τόμπρου </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"><p style="text-align: justify;">Στις 26 Αυγούστου έφυγε από κοντά μας, ύστερα από πολύμηνη ασθένεια, το εξαίρετο μέλος ΕΕΠ και εκλεκτή συνάδελφος Χρυσούλα Τόμπρου αφήνοντας ένα μεγάλο και δυσαναπλήρωτο κενό τόσο στον τομέα Ξένων Γλωσσών του Πανεπιστημίου μας, το οποίο με ζήλο υπηρέτησε για 36 συναπτά έτη, όσο και σε εμάς τις συναδέλφους της. Έφυγε αθόρυβα όπως αθόρυβη και διακριτική υπήρξε σε όλη της τη ζωή.</p><p style="text-align: justify;">Ως καθηγήτρια υπήρξε πάντοτε  συνεπής και αφοσιωμένη στο καθήκον της  με γνήσιο ενδιαφέρον για την επιστήμη της και βαθιά αγάπη για τον άνθρωπο. Ανήσυχο και δημιουργικό πνεύμα, πάντα ενημερωμένο γύρω από  τις τελευταίες εξελίξεις. Ήταν άριστη παιδαγωγός, με υψηλό αίσθημα ευθύνης, δεκτική  και ανοιχτή σε όλους με ιδιαίτερη ευαισθησία σε φοιτητές με δυσκολίες ή προβλήματα.</p><p style="text-align: justify;">Ως συνάδελφος ήταν αληθινή, ανιδιοτελής και δοτική. Αναλάμβανε  αγόγγυστα μεγάλο φόρτο εργασίας  πάντα σκεπτόμενη την διευκόλυνση του έργου των άλλων. Θα της είμαστε πάντα ευγνώμονες  για την καθοδήγηση  και ενθάρρυνση όλων μας  στα πρώτα  μας βήματα στο χώρο της τριτοβάθμιας εκπαίδευσης. Την ευχαριστούμε για την κατανόησή της, τις πολύτιμες συμβουλές και τη συμπαράστασή της στις δύσκολες στιγμές μας  ως γνήσια φίλη, συνάδελφος  και  έμπειρη μητέρα. Υπήρξαμε τυχεροί που συνεργαστήκαμε  μαζί της για πολλά χρόνια.</p><p style="text-align: justify;">Θα έχει πάντα τη θέση της στο Γραφείο Ξένων Γλωσσών και στην καρδιά μας.  Την αποχαιρετούμε με θλίψη, πόνο και συγκίνηση αλλά και με την υπόσχεση ότι θα συνεχίσουμε το έργο της και θα αξιοποιήσουμε την  ανεκτίμητη κληρονομιά που άφησε σε όλους μας.</p><p style="text-align: justify;">Στους οικείους της εκφράζουμε τα ειλικρινή μας συλλυπητήρια και τη συμμετοχή μας στο βαρύ πένθος τους. Να τη θυμούνται πάντα με αγάπη και υπερηφάνεια.</p><p style="text-align: justify;">Μέλη ΕΕΠ Γραφείου Ξένων Γλωσσών</p><p>Όσοι επιθυμούν να προσφέρουν κάτι στη μνήμη της, μπορούν να καταθέσουν χρήματα στην Κιβωτό του Κόσμου. Παραθέτουμε τους λογαριασμού της Κιβωτού.</p><p>EUROBANK: 0026 0178 870100 872073 IBAN : GR3702601780000870100872073</p><p>SWIFT / BIC: ERBKGRAA (ΓΙΑ ΕΞΩΤΕΡΙΚΟ)</p><p>ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ: 5023 – 032595 - 870 IBAN:GR3801720230005023032595870</p><p>ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ: 100/296102-42 IBAN: GR6201101000000010029610242</p><p>ALPHA BANK: 183002002003534 IBAN: GR4801401830183002002003534</p><p><strong><em>Σημείωση</em></strong>: Κατά την κατάθεση, στην αιτιολογία να συμπληρώσετε (υποχρεωτικά) ότι η δωρεά γίνεται εις μνήμην της ΧΡΥΣΟΥΛΑΣ ΤΟΜΠΡΟΥ. </p><p>Μετά τη δωρεά σας, παρακαλούμε να επικοινωνήσετε με την Κιβωτό προκειμένου να κρατήσουμε τα στοιχεία της απόδειξης.</p><p>Τηλ. Επικοινωνίας: 210 5141953 - 210 5141935</p></div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Τρίτη, 13 Σεπτεμβρίου 2022 14:44 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13589-τελετή-αναγόρευσης-του-κ-martin-dougiamas-σε-επίτιμο-διδάκτορα.html"> Τελετή Αναγόρευσης του κ. Martin Dougiamas σε Επίτιμο Διδάκτορα </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"><p>Επισκεφθείτε τον παρακάτω σύνδεσμο για εκδήλωση ενδιαφέροντος για την τελετή αναγόρευσης. </p><p> </p><p><a href="https://www.eventbrite.co.uk/e/martin-dougiamas-tickets-414506820057">https://www.eventbrite.co.uk/e/martin-dougiamas-tickets-414506820057</a> </p></div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Παρασκευή, 09 Σεπτεμβρίου 2022 13:28 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13586-προκήρυξη-εκλογών-εκδήλωση-ενδιαφέροντος-υποβολής-υποψηφιοτήτων-για-διευθυντή-εργαστήριου-του-τμήματος-ναυτιλιακών-σπουδων.html"> Προκήρυξη Εκλογών / Εκδήλωση Ενδιαφέροντος Υποβολής Υποψηφιοτήτων για Διευθυντή Εργαστήριου του Τμήματος Ναυτιλιακών Σπουδων </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"> </div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="catItemAttachmentsBlock"> <span>Συνημμένα αρχεία:</span> <ul class="catItemAttachments"> <li> <a title="&Pi;&Rho;&Omicron;&Kappa;&Eta;&Rho;&Upsilon;&Xi;&Eta;_&Epsilon;&Kappa;&Lambda;&Omicron;&Gamma;&Omega;&Nu;-_&Delta;&iota;&epsilon;&upsilon;&theta;&upsilon;&nu;&tau;ώ&nu;_&Epsilon;&rho;&gamma;&alpha;&sigma;&tau;&eta;&rho;ί&omega;&nu;_&tau;&omicron;&upsilon;_&Tau;&mu;ή&mu;&alpha;&tau;&omicron;&sigmaf;_&Nu;&alpha;&upsilon;&tau;&iota;&lambda;&iota;&alpha;&kappa;ώ&nu;_&Sigma;&pi;&omicron;&upsilon;&delta;ώ&nu;.pdf" href="/unipi/el/ανακοινώσεις/item/download/7369_cae605c6c858c08154e8ce0779f98000.html"> ΠΡΟΚΗΡΥΞΗ_ΕΚΛΟΓΩΝ-_Διευθυντών_Εργαστηρίων_του_Τμήματος_Ναυτιλιακών_Σπουδών.pdf </a> </li> <li> <a title="&Pi;&Rho;&Omicron;&Kappa;&Eta;&Rho;&Upsilon;&Xi;&Eta;_&Epsilon;&Kappa;&Lambda;&Omicron;&Gamma;&Omega;&Nu;-_&Epsilon;&rho;&gamma;&alpha;&sigma;&tau;ή&rho;&iota;&omicron;_&Nu;&alpha;&upsilon;&tau;&iota;&lambda;&iota;&alpha;&kappa;ή&sigmaf;_&Omicron;&iota;&kappa;&omicron;&nu;&omicron;&mu;ί&alpha;&sigmaf;_&Delta;&iota;&omicron;ί&kappa;&eta;&sigma;&eta;&sigmaf;_&kappa;&alpha;&iota;_&Nu;&alpha;&upsilon;&tau;&iota;&lambda;&iota;&alpha;&kappa;ώ&nu;_&Alpha;&tau;&upsilon;&chi;&eta;&mu;ά&tau;&omega;&nu;_-_&Epsilon;.&Rho;.&Nu;.&Alpha;.pdf" href="/unipi/el/ανακοινώσεις/item/download/7370_d1ba7d612e8506183ac5d592a4211567.html"> ΠΡΟΚΗΡΥΞΗ_ΕΚΛΟΓΩΝ-_Εργαστήριο_Ναυτιλιακής_Οικονομίας_Διοίκησης_και_Ναυτιλιακών_Ατυχημάτων_-_Ε.Ρ.Ν.Α.pdf </a> </li> </ul> </div><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Παρασκευή, 09 Σεπτεμβρίου 2022 13:01 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13585-πραξη-συγκροτησησ-συγκλητου-πανεπιστημιου-πειραιωσ-ακαδημαϊκου-ετουσ-2022-2023-αδα-9456469β7τ-δν9.html"> ΠΡΑΞΗ ΣΥΓΚΡΟΤΗΣΗΣ ΣΥΓΚΛΗΤΟΥ ΠΑΝΕΠΙΣΤΗΜΙΟΥ ΠΕΙΡΑΙΩΣ ΑΚΑΔΗΜΑΪΚΟΥ ΕΤΟΥΣ 2022-2023-ΑΔΑ: 9456469Β7Τ-ΔΝ9 </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"> </div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="catItemAttachmentsBlock"> <span>Συνημμένα αρχεία:</span> <ul class="catItemAttachments"> <li> <a title="9456469&Beta;7&Tau;-&Delta;&Nu;9_&Pi;&Rho;&Alpha;&Xi;&Eta;_&Sigma;&Upsilon;&Gamma;&Kappa;&Rho;&Omicron;&Tau;&Eta;&Sigma;&Eta;&Sigma;_&Sigma;&Upsilon;&Gamma;&Kappa;&Lambda;&Eta;&Tau;&Omicron;&Upsilon;_&Pi;&Alpha;&Nu;&Epsilon;&Pi;&Iota;&Sigma;&Tau;&Eta;&Mu;&Iota;&Omicron;&Upsilon;_&Pi;&Epsilon;&Iota;&Rho;&Alpha;&Iota;&Omega;&Sigma;_&Alpha;&Kappa;&Alpha;&Delta;&Eta;&Mu;&Alpha;Ϊ&Kappa;&Omicron;&Upsilon;_&Epsilon;&Tau;&Omicron;&Upsilon;&Sigma;_2022-2023-signed_1.pdf" href="/unipi/el/ανακοινώσεις/item/download/7368_daf4a545d40cbbfe1aca80cc74c4690c.html"> 9456469Β7Τ-ΔΝ9_ΠΡΑΞΗ_ΣΥΓΚΡΟΤΗΣΗΣ_ΣΥΓΚΛΗΤΟΥ_ΠΑΝΕΠΙΣΤΗΜΙΟΥ_ΠΕΙΡΑΙΩΣ_ΑΚΑΔΗΜΑΪΚΟΥ_ΕΤΟΥΣ_2022-2023-signed_1.pdf </a> </li> </ul> </div><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Τρίτη, 06 Σεπτεμβρίου 2022 14:40 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13572-συμμετοχή-στον-μαραθώνιο-της-αθήνας-13-11-2022-ομάδα-erasmus.html"> Συμμετοχή στον Μαραθώνιο της Αθήνας 13-11-2022 Ομάδα Erasmus+ </a> </h3></div><div class="catItemBody"><div class="catItemImageBlock"> <span class="catItemImage"> <a href="/unipi/el/ανακοινώσεις/item/13572-συμμετοχή-στον-μαραθώνιο-της-αθήνας-13-11-2022-ομάδα-erasmus.html" title="&Sigma;&upsilon;&mu;&mu;&epsilon;&tau;&omicron;&chi;ή &sigma;&tau;&omicron;&nu; &Mu;&alpha;&rho;&alpha;&theta;ώ&nu;&iota;&omicron; &tau;&eta;&sigmaf; &Alpha;&theta;ή&nu;&alpha;&sigmaf; 13-11-2022 &Omicron;&mu;ά&delta;&alpha; Erasmus+"> <img src="/unipi/media/k2/items/cache/02f763468429123fe3e832eea377ea05_L.jpg" alt="&Sigma;&upsilon;&mu;&mu;&epsilon;&tau;&omicron;&chi;ή &sigma;&tau;&omicron;&nu; &Mu;&alpha;&rho;&alpha;&theta;ώ&nu;&iota;&omicron; &tau;&eta;&sigmaf; &Alpha;&theta;ή&nu;&alpha;&sigmaf; 13-11-2022 &Omicron;&mu;ά&delta;&alpha; Erasmus+" style="width:400px; height:auto;" /> </a> </span> <div class="clr"></div></div><div class="catItemIntroText"> H Εθνική Μονάδα Erasmus+ ΙΚΥ σας καλεί να λάβετε μέρος στον Μαραθώνιο της Αθήνας, στην ειδική διαδρομή των 5 χιλιομέτρων,στο πλαίσιο της επετείου εορτασμού των 35 χρόνων Erasmus+ και του Ευρωπαϊκού Έτους Νεολαίας.   </div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Δευτέρα, 05 Σεπτεμβρίου 2022 09:53 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13562-πρόσκληση-εκδήλωσης-ενδιαφέροντος-για-εγγραφή-μεταπτυχιακών-φοιτητών-και-υποψηφίων-διδακτόρων-στο-μητρώο-φοιτητών-της-εθααε.html"> Πρόσκληση εκδήλωσης ενδιαφέροντος για εγγραφή μεταπτυχιακών φοιτητών και υποψηφίων διδακτόρων στο Μητρώο Φοιτητών της ΕΘΑΑΕ </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"> </div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="catItemAttachmentsBlock"> <span>Συνημμένα αρχεία:</span> <ul class="catItemAttachments"> <li> <a title="2022.7.25_&Pi;&rho;ό&sigma;&kappa;&lambda;&eta;&sigma;&eta;_&epsilon;&kappa;&delta;ή&lambda;&omega;&sigma;&eta;&sigmaf;_&epsilon;&nu;&delta;&iota;&alpha;&phi;έ&rho;&omicron;&nu;&tau;&omicron;&sigmaf;_&Mu;&Phi;_&gamma;&iota;&alpha;_&epsilon;&gamma;&gamma;&rho;&alpha;&phi;ή_&sigma;&tau;&omicron;_&Mu;&eta;&tau;&rho;ώ&omicron;_s_(2).pdf" href="/unipi/el/ανακοινώσεις/item/download/7346_c5dac3ce62e0a7d701677ac89be5f662.html"> 2022.7.25_Πρόσκληση_εκδήλωσης_ενδιαφέροντος_ΜΦ_για_εγγραφή_στο_Μητρώο_s_(2).pdf </a> </li> <li> <a title="&Upsilon;&pi;ό&delta;&epsilon;&iota;&gamma;&mu;&alpha;_&alpha;ί&tau;&eta;&sigma;&eta;&sigmaf;_&phi;&omicron;&iota;&tau;&eta;&tau;ή_&gamma;&iota;&alpha;_&Mu;&eta;&tau;&rho;ώ&omicron;_&Phi;&omicron;&iota;&tau;&eta;&tau;ώ&nu;_1.docx" href="/unipi/el/ανακοινώσεις/item/download/7347_cb74926c8ea133f1fb8cc133a96aedc0.html"> Υπόδειγμα_αίτησης_φοιτητή_για_Μητρώο_Φοιτητών_1.docx </a> </li> </ul> </div><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Παρασκευή, 02 Σεπτεμβρίου 2022 14:11 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13558-τελετη-αναγορευσησ-σε-επιτιμο-διδακτορα-του-martin-dougiamas-απο-το-τμημα-ψηφιακων-συστηματων.html"> ΤΕΛΕΤΗ ΑΝΑΓΟΡΕΥΣΗΣ ΣΕ ΕΠΙΤΙΜΟ ΔΙΔΑΚΤΟΡΑ ΤΟΥ MARTIN DOUGIAMAS ΑΠΟ ΤΟ ΤΜΗΜΑ ΨΗΦΙΑΚΩΝ ΣΥΣΤΗΜΑΤΩΝ </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"> </div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="catItemAttachmentsBlock"> <span>Συνημμένα αρχεία:</span> <ul class="catItemAttachments"> <li> <a title="PROSKLHSH_DOUGIAMAS_9.2022_&Epsilon;_1.pdf" href="/unipi/el/ανακοινώσεις/item/download/7343_c0cf408e3b82aec71bbfce68eb930d62.html"> PROSKLHSH_DOUGIAMAS_9.2022_Ε_1.pdf </a> </li> </ul> </div><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Πέμπτη, 25 Αυγούστου 2022 11:36 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13547-διακοπή-ηλεκτροδότησης-στο-κεντρικό-κτίριο-του-πανεπιστήμιο-πειραιώς.html"> Διακοπή Ηλεκτροδότησης στο Κεντρικό Κτίριο και στο κτίριο επί της οδού Δεληγιώργη 107 του Πανεπιστήμιο Πειραιώς </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"><p>Σας γνωρίζουμε ότι το Σάββατο 27-8-2022 και ώρα από τις 8:00 π.μ. έως τις 14:00, θα πραγματοποιηθεί διακοπή ηλεκτροδότησης στο κεντρικό κτίριο καθώς και στο κτίριο επί της οδού Δεληγιώργη 107 του Πανεπιστημίου Πειραιώς, για προγραμματισμένες εργασίες συντήρησης υποσταθμών μέσης τάσης από τον ΔΕΔΔΗΕ.</p><p style="text-align: right;">Από τη Διεύθυνση Μηχανοργάνωσης και Τεχνικών Έργων</p></div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Πέμπτη, 25 Αυγούστου 2022 09:19 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13545-δελτίο-τύπου-πρωτόκολλο-συνεργασίας-μεταξύ-εθνικής-κεντρικής-αρχής-προμηθειών-υγείας-και-πανεπιστημίου-πειραιώς.html"> Δελτίο Τύπου: Πρωτόκολλο Συνεργασίας μεταξύ Εθνικής Κεντρικής Αρχής Προμηθειών Υγείας και Πανεπιστημίου Πειραιώς </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"><p style="text-align: center;"><img src="/unipi/images/unipi_logo_simple.png" alt="unipi logo simple" /></p><p style="text-align: center;"><strong>ΠΑΝΕΠΙΣΤH</strong><strong>ΜΙΟ ΠΕΙΡΑΙΩΣ</strong></p><p style="text-align: center;">____________________________________________________________________</p><p style="text-align: center;"><strong>Δελτίο Τύπου</strong></p><p style="text-align: center;"><strong>Πρωτόκολλο Συνεργασίας μεταξύ Εθνικής Κεντρικής Αρχής Προμηθειών Υγείας και Πανεπιστημίου Πειραιώς</strong></p><p style="text-align: justify;">Πρωτόκολλο Συνεργασίας υπέγραψαν την 4η Αυγούστου, o Πρόεδρος της Εθνικής Κεντρικής Αρχής Προμηθειών Υγείας, κος Άρης Αποστόλου και ο Αντιπρύτανης Ερευνάς και Δια Βίου Εκπαίδευσης του Πανεπιστημίου Πειραιώς Καθηγητής Γρηγόριος Χονδροκούκης, ως εκπρόσωπος του Πρύτανη Καθηγητή Άγγελου Κότιου, για θέματα συνεργασίας σχετικά με έρευνα και ανάπτυξη καθώς και της στοχοθεσίας της Εθνικής Κεντρικής Αρχής Προμηθειών Υγείας (ΕΚΑΠΥ).</p><p style="text-align: justify;">Το Μνημόνιο Συνεργασίας λαμβάνει υπόψη το αναπτυξιακό όραμα του Εθνικού Οργανισμού Παροχής Υπηρεσιών Υγείας και του Πανεπιστημίου Πειραιώς με στόχους την ενίσχυση της έρευνας και της ανάπτυξης, την εκπαιδευτική ενίσχυση και τη βελτίωση της θέσης και των δυο φορέων σε ελληνικό και ευρωπαϊκό επίπεδο.</p><p style="text-align: justify;">Τα Πεδία Συνεργασίας θα είναι η ανταλλαγή ιδεών και γνώσεων για δραστηριότητες σχετικές με τη διοίκηση και τα οικονομικά του χώρου των Προμηθειών Υγείας,  με στόχο την από κοινού αναγνώριση πεδίων συνεργασίας. Η συνεργασία για επεξεργασία και ανάπτυξη εκπαιδευτικών δράσεων και γενικότερα η από κοινού επεξεργασία εκπαιδευτικών θεμάτων σχετικά με το χώρο της υγείας και των προμηθειών της.  Η ανταλλαγή πληροφοριών και ιδεών για επενδυτικές και αναπτυξιακές πρωτοβουλίες στο πλαίσιο που καθορίζει η υφιστάμενη κάθε φορά νομοθεσία, που αφορά δράσεις στα ανωτέρω πεδία.</p><p style="text-align: justify;">Ο κοινός σχεδιασμός για την κατάρτιση ενός πλάνου ή προτάσεων εκπαιδευτικών δράσεων με στόχο την επιμόρφωση και την δια βίου μάθηση των εργαζομένων της ΕΚΑΠΥ καθώς και την υλοποίηση τους. Η υλοποίηση ενός σχεδίου για ανάπτυξη Πρακτικής Άσκησης στις υπηρεσίες της ΕΚΑΠΥ  στα αντικείμενα των εκπαιδευτικών πεδίων του Πανεπιστήμιου Πειραιώς. Η συνεργασία για την από κοινού συμμετοχή σε Ερευνητικά και Αναπτυξιακά Προγράμματα σε Ευρωπαϊκό ή Εθνικό επίπεδο και η κατάρτιση ομάδων εργασίας ή/και επιτροπών (με ακαδημαϊκούς ή/και ερευνητές) για υλοποίηση έργων, διαγωνισμών καθώς και η προώθηση και επίλυση θεμάτων κοινού ενδιαφέροντος.</p><p><img src="/unipi/images/deltio_typou_0822.jpg" alt="deltio typou 0822" width="596" height="347" style="display: block; margin-left: auto; margin-right: auto;" /></p></div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="itemContainer itemContainerLast" style="width:100.0%;"><div class="catItemView groupLeading"><div class="catItemHeader"> <span class="catItemDateCreated"> Δευτέρα, 22 Αυγούστου 2022 14:15 </span> <h3 class="catItemTitle"> <a href="/unipi/el/ανακοινώσεις/item/13531-προκηρυξη-εσωτερικων-μελων-σ-δ-πανεπιστημιου-πειραιωσ.html"> ΠΡΟΚΗΡΥΞΗ ΕΣΩΤΕΡΙΚΩΝ ΜΕΛΩΝ Σ.Δ. ΠΑΝΕΠΙΣΤΗΜΙΟΥ ΠΕΙΡΑΙΩΣ </a> </h3></div><div class="catItemBody"><div class="catItemIntroText"> </div><div class="clr"></div><div class="clr"></div></div><div class="catItemLinks"><div class="catItemAttachmentsBlock"> <span>Συνημμένα αρχεία:</span> <ul class="catItemAttachments"> <li> <a title="9&Phi;10469&Beta;7&Tau;-&Pi;&Theta;&Xi;_&Pi;&rho;&omicron;&kappa;ή&rho;&upsilon;&xi;&eta;_&epsilon;&sigma;&omega;&tau;&epsilon;&rho;&iota;&kappa;ώ&nu;_&mu;&epsilon;&lambda;ώ&nu;_&Sigma;.&Delta;__&Pi;&alpha;&nu;&epsilon;&pi;&iota;&sigma;&tau;&eta;&mu;ί&omicron;&upsilon;_&Pi;&epsilon;&iota;&rho;&alpha;&iota;ώ&sigmaf;.pdf" href="/unipi/el/ανακοινώσεις/item/download/7315_13d34823e081c6e2690f62488f6b594c.html"> 9Φ10469Β7Τ-ΠΘΞ_Προκήρυξη_εσωτερικών_μελών_Σ.Δ__Πανεπιστημίου_Πειραιώς.pdf </a> </li> </ul> </div><div class="clr"></div></div><div class="clr"></div><div class="clr"></div><div class="clr"></div><div class="clr"></div></div></div><div class="clr"></div><div class="clr"></div></div></div><div class="k2Pagination"><ul class="pagination"><li class="disabled"><a>Αρχή</a></li><li class="disabled"><a>Προηγούμενο</a></li><li class="active"><a>1</a></li><li><a title="2" href="/unipi/el/ανακοινώσεις.html?start=10">2</a></li><li><a title="3" href="/unipi/el/ανακοινώσεις.html?start=20">3</a></li><li><a title="4" href="/unipi/el/ανακοινώσεις.html?start=30">4</a></li><li><a title="5" href="/unipi/el/ανακοινώσεις.html?start=40">5</a></li><li><a title="6" href="/unipi/el/ανακοινώσεις.html?start=50">6</a></li><li><a title="7" href="/unipi/el/ανακοινώσεις.html?start=60">7</a></li><li><a title="8" href="/unipi/el/ανακοινώσεις.html?start=70">8</a></li><li><a title="9" href="/unipi/el/ανακοινώσεις.html?start=80">9</a></li><li><a title="10" href="/unipi/el/ανακοινώσεις.html?start=90">10</a></li><li><a title="Επόμενο" href="/unipi/el/ανακοινώσεις.html?start=10">Επόμενο</a></li><li><a title="Τέλος" href="/unipi/el/ανακοινώσεις.html?start=510">Τέλος</a></li></ul><div class="clr"></div></div></div></div></div></div><div id="back-to-top" data-spy="affix" data-offset-top="200" class="back-to-top hidden-xs hidden-sm affix-top"> <button class="btn btn-primary" title="Back to Top"><i class="fa fa-long-arrow-up" aria-hidden="true"></i></button> </div> <script type="text/javascript">(function($){$('#back-to-top').on('click',function(){$("html, body").animate({scrollTop:0},500);return false;});})(jQuery);</script><footer id="t3-footer" class="wrap t3-footer"><div class="container footnav-2"><div class="t3-spotlight t3-footnav-2  row"><div class=" col-lg-3 col-md-3 col-sm-3 col-xs-6"><div class="t3-module moduleBottom " id="Mod87"><div class="module-inner"><h3 class="module-title "><span>ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</span></h3><div class="module-ct"><div class="customBottom" ><p><i class="fa fa-map-marker"></i> Διεύθυνση: Μ. Καραολή &amp; Α. Δημητρίου 80, 18534 Πειραιάς, <a href="https://www.google.gr/maps/dir//University+of+Piraeus,+Karaoli+%26+Dimitriou+St.+80,+Pireas+185+34/@37.9416186,23.6179915,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a1bbe5bb8515a1:0x3e0dce8e58812705!2m2!1d23.6530109!2d37.9416238?hl=el" target="_blank" rel="noopener noreferrer" style="color: #a22631;">Χάρτης</a></p><p><i class="fa fa-phone"></i> Τηλ. Κέντρο: 210 4142000</p><p><i class="fa fa-fax"></i> Fax: 210 4142328</p><p><i class="fa fa-paper-plane"></i> <u><a href="/unipi/el/epikoinwnia.html">Επικοινωνία</a></u></p></div></div></div></div></div><div class=" col-lg-3 col-md-3 col-sm-3 col-xs-6"><div class="t3-module module " id="Mod394"><div class="module-inner"><h3 class="module-title "><span>ΝΕΑ</span></h3><div class="module-ct"><ul class="nav nav-pills nav-stacked menu"> <li class="item-3895"><a href="/unipi/el/επικαιρότητα.html" class="">Επικαιρότητα</a></li><li class="item-3896 current active"><a href="/unipi/el/ανακοινώσεις.html" class="">Ανακοινώσεις</a></li><li class="item-3897"><a href="/unipi/el/εκδηλώσεις.html" class="">Εκδηλώσεις</a></li><li class="item-3898"><a href="/unipi/el/φοιτητικά-θέματα.html" class="">Φοιτητικά Θέματα</a></li><li class="item-4675"><a href="/unipi/el/gdpr.html" class="">Προστασία Δεδομένων Προσωπικού Χαρακτήρα </a></li></ul></div></div></div></div><div class=" col-lg-3 col-md-3 col-sm-3 col-xs-6"><div class="t3-module moduleBottom " id="Mod392"><div class="module-inner"><h3 class="module-title "><span>ΧΡΗΣΙΜΟΙ ΣΥΝΔΕΣΜΟΙ</span></h3><div class="module-ct"><div class="customBottom" ><p>Διαύγεια: <a href="https://diavgeia.gov.gr/" target="_blank" rel="noopener noreferrer" style="color: #a22631;">diavgeia.gov.gr</a></p><p>Εθνικό Σύστημα Ηλεκτρονικών Δημοσίων Συμβάσεων - ΕΣΗΔΗΣ: <a href="http://www.eprocurement.gov.gr/" target="_blank" rel="noopener noreferrer" style="color: #a22631;">eprocurement.gov.gr</a></p><p>Εθνική Πύλη Ερμής: <a href="http://www.ermis.gov.gr/" target="_blank" rel="noopener noreferrer" style="color: #a22631;">ermis.gov.gr</a></p></div></div></div></div></div><div class=" col-lg-3 col-md-3 col-sm-3 col-xs-6"><div class="t3-module moduleBottom " id="Mod426"><div class="module-inner"><h3 class="module-title "><span> Συγχρηματοδοτούμενα Έργα</span></h3><div class="module-ct"><div class="customBottom" ><p><a href="/unipi/el/%CE%B1%CE%BD%CE%B1%CE%BA%CE%BF%CE%B9%CE%BD%CF%8E%CF%83%CE%B5%CE%B9%CF%82/item/13138-sigxrimatodotoumena-erga.html"><img src="/unipi/images/images/espa.png" alt="espa" width="201" height="125" /></a></p></div></div></div></div></div></div></div><section class="t3-copyright"><div class="container"><div class="row"><div class="col-md-12 copyright "><div class="t3-module module " id="Mod390"><div class="module-inner"><div class="module-ct"><div class="custom" ><p><p>&copy; 2022 Πανεπιστήμιο Πειραιώς. Με την επιφύλαξη παντός νομίμου δικαιώματος.<p> </p><p><span style="font-family: courier new, courier, monospace;"></span></p></div></div></div></div></div></div></div></section></footer></div></body></html>`);
});

app.get('/html2', function (req, res) {
    res.status(200).send(`<!DOCTYPE html>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xml:lang="el" lang="el">
<head>

<meta charset="utf-8">
<!-- 
\tbuild by sitepackagebuilder.com

\tThis website is powered by TYPO3 - inspiring people to share!
\tTYPO3 is a free open source Content Management Framework initially created by Kasper Skaarhoj and licensed under GNU/GPL.
\tTYPO3 is copyright 1998-2019 of Kasper Skaarhoj. Extensions are copyright of their respective owners.
\tInformation and contribution at https://typo3.org/
-->

<base href="https://www.law.uoa.gr">
<link rel="shortcut icon" href="/typo3conf/ext/uoa_website/Resources/Public/Images/favicon.png" type="image/png">

<meta name="generator" content="TYPO3 CMS">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index,follow">
<meta name="google" content="{$page.meta.google}">
<meta name="apple-mobile-web-app-capable" content="no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta property="og:title" content="Ανακοινώσεις και εκδηλώσεις">
<meta property="og:site_name" content="Νομική Σχολή">
<meta property="og:image" content="https://www.law.uoa.gr/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_d5fd44d348.jpg">

<link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" media="all">

<link rel="stylesheet" type="text/css" href="/typo3conf/ext/news/Resources/Public/Css/news-basic.css?1504697855" media="all">
<link rel="stylesheet" type="text/css" href="/typo3temp/assets/css/d42b6e1bdf.css?1517852730" media="all">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=GFS+Didot&amp;subset=greek" media="all">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=greek,greek-ext" media="all">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&amp;subset=greek" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/inc/jquery.fancybox.min.css?1508918275" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/bootstrap.min.css?1508918244" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/fonts.css?1511800933" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/font-awesome.min.css?1509004688" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/animate.css?1508918222" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/jssocials.css?1509616808" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/style2.css?1531765092" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/Red/red.css?1544449305" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/Red/style2.css?1526473709" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/uoa_website/Resources/Public/Css/Navy/navy-siteA.css?1527672458" media="all">
<link rel="stylesheet" type="text/css" href="/typo3conf/ext/ke_search/res/ke_search_pi1.css?1557754640" media="all">





<script type="text/javascript">
/*<![CDATA[*/
/*_scriptCode*/

\t\t\t// decrypt helper function
\t\tfunction decryptCharcode(n,start,end,offset) {
\t\t\tn = n + offset;
\t\t\tif (offset > 0 && n > end) {
\t\t\t\tn = start + (n - end - 1);
\t\t\t} else if (offset < 0 && n < start) {
\t\t\t\tn = end - (start - n - 1);
\t\t\t}
\t\t\treturn String.fromCharCode(n);
\t\t}
\t\t\t// decrypt string
\t\tfunction decryptString(enc,offset) {
\t\t\tvar dec = "";
\t\t\tvar len = enc.length;
\t\t\tfor(var i=0; i < len; i++) {
\t\t\t\tvar n = enc.charCodeAt(i);
\t\t\t\tif (n >= 0x2B && n <= 0x3A) {
\t\t\t\t\tdec += decryptCharcode(n,0x2B,0x3A,offset);\t// 0-9 . , - + / :
\t\t\t\t} else if (n >= 0x40 && n <= 0x5A) {
\t\t\t\t\tdec += decryptCharcode(n,0x40,0x5A,offset);\t// A-Z @
\t\t\t\t} else if (n >= 0x61 && n <= 0x7A) {
\t\t\t\t\tdec += decryptCharcode(n,0x61,0x7A,offset);\t// a-z
\t\t\t\t} else {
\t\t\t\t\tdec += enc.charAt(i);
\t\t\t\t}
\t\t\t}
\t\t\treturn dec;
\t\t}
\t\t\t// decrypt spam-protected emails
\t\tfunction linkTo_UnCryptMailto(s) {
\t\t\tlocation.href = decryptString(s,3);
\t\t}
\t\t

/*]]>*/
</script>



\t\t\t\t<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/anakoinoseis_kai_ekdiloseis/?type=9821" />
\t\t\t
<link rel="next" href="/anakoinoseis_kai_ekdiloseis/page/2/" />
<title>Ανακοινώσεις και εκδηλώσεις</title><title> | </title>

</head>
<body>

<header>
    <div class="top-cont default">
    <div class="header__top">
    <div class="row">
        <div class="col-sm-5">
            <div class="header__top--left">
                
            </div>
        </div>
        <div class="col-sm-7">
            <div class="header__top--right">
                <ul class="lang_list"><li><a href="/">ΕΛΛΗΝΙΚΑ</a></li><li><a href="https://en.law.uoa.gr/">ENGLISH</a></li></ul>
                
\t<form method="get" class="header__search searchform" name="form_kesearch_pi1"  action="/anazitisi/">
\t\t<fieldset class="kesearch_searchbox">
\t\t\t
\t\t\t\t<input type="hidden" name="id" value="10774" />
\t\t\t
\t\t\t
\t\t\t
\t\t\t

\t\t\t<!--<div class="kesearchbox">
\t\t\t\t<input type="text" id="ke_search_sword" name="tx_kesearch_pi1[sword]" value="" placeholder="ΑΝΑΖΗΤΗΣΗ" />
\t\t\t\t<div class="clearer">&nbsp;</div>
\t\t\t</div>-->

\t\t\t<input type="search" placeholder="ΑΝΑΖΗΤΗΣΗ" title="ΑΝΑΖΗΤΗΣΗ" name="tx_kesearch_pi1[sword]" value="">
\t\t\t<button>
\t\t\t\t<svg
\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"
\t\t\t\t\t\txmlns:xlink="http://www.w3.org/1999/xlink"
\t\t\t\t\t\twidth="23px" height="19px">
\t\t\t\t\t<path   fill="rgb(255, 255, 255)"
\t\t\t\t\t\t\td="M22.670,18.178 C22.088,19.041 20.931,19.257 20.090,18.659 L12.467,13.255 C11.928,12.873 11.648,12.252 11.669,11.626 C10.687,12.705 9.398,13.430 7.953,13.699 C6.178,14.031 4.386,13.634 2.907,12.585 C1.427,11.537 0.434,9.960 0.111,8.142 C-0.213,6.324 0.173,4.488 1.198,2.971 C3.314,-0.161 7.523,-0.946 10.582,1.220 C13.358,3.190 14.245,6.927 12.802,9.942 C13.366,9.699 14.035,9.747 14.577,10.131 L22.201,15.535 C23.043,16.133 23.254,17.316 22.670,18.178 ZM11.370,6.041 C11.145,4.774 10.453,3.674 9.421,2.943 C7.289,1.430 4.353,1.977 2.876,4.161 C1.400,6.348 1.935,9.355 4.067,10.865 C6.199,12.377 9.135,11.830 10.611,9.646 C11.326,8.589 11.595,7.308 11.370,6.041 Z"/>
\t\t\t\t</svg>
\t\t\t</button>

<!--\t\t\t<input id="kesearchpagenumber" type="hidden" name="tx_kesearch_pi1[page]" value="1" />
\t\t\t<input id="resetFilters" type="hidden" name="tx_kesearch_pi1[resetFilters]" value="0" />
\t\t\t<input id="sortByField" type="hidden" name="tx_kesearch_pi1[sortByField]" value="" />
\t\t\t<input id="sortByDir" type="hidden" name="tx_kesearch_pi1[sortByDir]" value="" />
\t\t\t
-->
\t\t</fieldset>
\t</form>


                <ul class="header__socials">
                    <li> <a href="http://www.facebook.com/uoa.official" title="Facebook"><span class="fa fa-facebook" aria-hidden="true">&nbsp;</span></a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=m3HkLzBmcuY" title="Youtube"><span class="fa fa-youtube" aria-hidden="true">&nbsp;</span></a> </li>
                    <li> <a href="http://www.twitter.com" title="Twitter"><span class="fa fa-twitter" aria-hidden="true">&nbsp;</span></a> </li>
                    <li> <a href="https://www.linkedin.com/school/15094179/" title="Linkedin"><span class="fa fa-linkedin" aria-hidden="true">&nbsp;</span></a> </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    

<div class="header__bottom">
    <div class="row">
        <div class="col-md-12 clearfix">
            <div class="header__bottom--inner">
                <div class="hamburger_icon">
\t\t\t\t\t\t<span class="icon">
\t\t\t\t\t\t\t<span></span>
\t\t\t\t\t\t\t<span></span>
\t\t\t\t\t\t\t<span></span>
\t\t\t\t\t\t\t<span></span>
\t\t\t\t\t\t</span>
                    <span class="icon--title">Menu</span>
                </div>
                <div class="header--menu">
                    <ul>
                        
                                <li>
                            
                            
                                <span class="fa fa-home" aria-hidden="true"></span>
                            
                        </li>
                        
                            <li class="menu-item-has-children current-menu-item">
                                <a href="/anakoinoseis_kai_ekdiloseis/"  title="Ανακοινώσεις και εκδηλώσεις">
                                    ΑΝΑΚΟΙΝΩΣΕΙΣ ΚΑΙ ΕΚΔΗΛΩΣΕΙΣ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/epilegmena/"  title="Επιλεγμένα">
                                                ΕΠΙΛΕΓΜΕΝΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/"  title="Προπτυχιακές σπουδές">
                                                ΠΡΟΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/metaptychiakes_spoydes/"  title="Μεταπτυχιακές σπουδές">
                                                ΜΕΤΑΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/didaktorikes_spoydes/"  title="Διδακτορικές Σπουδές">
                                                ΔΙΔΑΚΤΟΡΙΚΕΣ ΣΠΟΥΔΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/erasmus/"  title="Erasmus">
                                                ERASMUS
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/civis/"  title="CIVIS">
                                                CIVIS
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/european_law_school_network/"  title="EUROPEAN LAW SCHOOL NETWORK">
                                                EUROPEAN LAW SCHOOL NETWORK
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/prokiryxeis_exelixeis_melon_dep/"  title="Προκηρύξεις - Εξελίξεις Μελών ΔΕΠ">
                                                ΠΡΟΚΗΡΥΞΕΙΣ - ΕΞΕΛΙΞΕΙΣ ΜΕΛΩΝ ΔΕΠ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/ekdiloseis_simantika/"  title="Εκδηλώσεις - Σημαντικά">
                                                ΕΚΔΗΛΩΣΕΙΣ - ΣΗΜΑΝΤΙΚΑ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/i_scholi/"  title="Η Σχολή">
                                    Η ΣΧΟΛΗ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/i_scholi/organosi_kai_dioikisi/"  title="Οργάνωση και Διοίκηση">
                                                ΟΡΓΑΝΩΣΗ ΚΑΙ ΔΙΟΙΚΗΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/egkatastaseis_kai_prosbasi/"  title="Εγκαταστάσεις και Πρόσβαση">
                                                ΕΓΚΑΤΑΣΤΑΣΕΙΣ ΚΑΙ ΠΡΟΣΒΑΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/bibliothiki_nomikis_scholis/"  title="Βιβλιοθήκη Νομικής Σχολής">
                                                ΒΙΒΛΙΟΘΗΚΗ ΝΟΜΙΚΗΣ ΣΧΟΛΗΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/ergastiria/"  title="Εργαστήρια">
                                                ΕΡΓΑΣΤΗΡΙΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/ypostirixi_foititon_me_anapiria_monada_prosbasimotitas_ekpa/"  title="Υποστήριξη φοιτητών με αναπηρία - Μονάδα Προσβασιμότητας ΕΚΠΑ">
                                                ΥΠΟΣΤΗΡΙΞΗ ΦΟΙΤΗΤΩΝ ΜΕ ΑΝΑΠΗΡΙΑ - ΜΟΝΑΔΑ ΠΡΟΣΒΑΣΙΜΟΤΗΤΑΣ ΕΚΠΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/axiologisi/"  title="Αξιολόγηση">
                                                ΑΞΙΟΛΟΓΗΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/mitroa_nomikis_scholis/"  title="Μητρώα Νομικής Σχολής">
                                                ΜΗΤΡΩΑ ΝΟΜΙΚΗΣ ΣΧΟΛΗΣ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/tomeis/"  title="Τομείς">
                                    ΤΟΜΕΙΣ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/tomeis/a_idiotikoy_dikaioy/"  title="Α&#039; Ιδιωτικού Δικαίου">
                                                Α&#039; ΙΔΙΩΤΙΚΟΥ ΔΙΚΑΙΟΥ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/b_idiotikoy_dikaioy/"  title="Β&#039; Ιδιωτικού Δικαίου">
                                                Β&#039; ΙΔΙΩΤΙΚΟΥ ΔΙΚΑΙΟΥ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/dimosioy_dikaioy/"  title="Δημοσίου Δικαίου">
                                                ΔΗΜΟΣΙΟΥ ΔΙΚΑΙΟΥ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/poinikon_epistimon/"  title="Ποινικών Επιστημών">
                                                ΠΟΙΝΙΚΩΝ ΕΠΙΣΤΗΜΩΝ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/diethnon_spoydon/"  title="Διεθνών Σπουδών">
                                                ΔΙΕΘΝΩΝ ΣΠΟΥΔΩΝ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/istorias_kai_theorias_toy_dikaioy/"  title="Ιστορίας και Θεωρίας του Δικαίου">
                                                ΙΣΤΟΡΙΑΣ ΚΑΙ ΘΕΩΡΙΑΣ ΤΟΥ ΔΙΚΑΙΟΥ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/prosopiko/"  title="Προσωπικό">
                                    ΠΡΟΣΩΠΙΚΟ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/prosopiko/didaskontes_ana_tomea/"  title="Διδάσκοντες ανά Τομέα">
                                                ΔΙΔΑΣΚΟΝΤΕΣ ΑΝΑ ΤΟΜΕΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/didaskontes_alfabitika/"  title="Διδάσκοντες αλφαβητικά">
                                                ΔΙΔΑΣΚΟΝΤΕΣ ΑΛΦΑΒΗΤΙΚΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/omotimoi_kathigites/"  title="Ομότιμοι Καθηγητές">
                                                ΟΜΟΤΙΜΟΙ ΚΑΘΗΓΗΤΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/epitimoi_didaktores/"  title="Επίτιμοι Διδάκτορες">
                                                ΕΠΙΤΙΜΟΙ ΔΙΔΑΚΤΟΡΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/dioikitiko_kai_techniko_prosopiko/"  title="Διοικητικό και Τεχνικό Προσωπικό">
                                                ΔΙΟΙΚΗΤΙΚΟ ΚΑΙ ΤΕΧΝΙΚΟ ΠΡΟΣΩΠΙΚΟ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/"  title="Κατάταξη πτυχιούχων Τριτοβάθμιας Εκπαίδευσης">
                                    ΚΑΤΑΤΑΞΗ ΠΤΥΧΙΟΥΧΩΝ ΤΡΙΤΟΒΑΘΜΙΑΣ ΕΚΠΑΙΔΕΥΣΗΣ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2019_2020/"  title="Κατατακτήριες 2019-2020">
                                                ΚΑΤΑΤΑΚΤΗΡΙΕΣ 2019-2020
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2020_2021/"  title="Κατατακτήριες 2020-2021">
                                                ΚΑΤΑΤΑΚΤΗΡΙΕΣ 2020-2021
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2021_2022/"  title="Κατατακτήριες 2021-2022">
                                                ΚΑΤΑΤΑΚΤΗΡΙΕΣ 2021-2022
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2022_2023/"  title="Κατατακτήριες 2022-2023">
                                                ΚΑΤΑΤΑΚΤΗΡΙΕΣ 2022-2023
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/proptychiakes_spoydes/"  title="Προπτυχιακές Σπουδές">
                                    ΠΡΟΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/politiki_poiotitas/"  title="Πολιτική Ποιότητας">
                                                ΠΟΛΙΤΙΚΗ ΠΟΙΟΤΗΤΑΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/kanonismos_programmatos_spoydon/"  title="Κανονισμός Προγράμματος Σπουδών">
                                                ΚΑΝΟΝΙΣΜΟΣ ΠΡΟΓΡΑΜΜΑΤΟΣ ΣΠΟΥΔΩΝ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/programma_didaskalias/"  title="Πρόγραμμα Διδασκαλίας">
                                                ΠΡΟΓΡΑΜΜΑ ΔΙΔΑΣΚΑΛΙΑΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/akadimaiko_imerologio/"  title="Ακαδημαϊκό Ημερολόγιο">
                                                ΑΚΑΔΗΜΑΪΚΟ ΗΜΕΡΟΛΟΓΙΟ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/programma_exetaseon/"  title="Πρόγραμμα Εξετάσεων">
                                                ΠΡΟΓΡΑΜΜΑ ΕΞΕΤΑΣΕΩΝ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/foititikes_ypiresies/"  title="Φοιτητικές Υπηρεσίες">
                                                ΦΟΙΤΗΤΙΚΕΣ ΥΠΗΡΕΣΙΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/didaktika_syggrammata/"  title="Διδακτικά Συγγράμματα">
                                                ΔΙΔΑΚΤΙΚΑ ΣΥΓΓΡΑΜΜΑΤΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/sitisi/"  title="Σίτιση">
                                                ΣΙΤΙΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/akadimaiki_taytotita/"  title="Ακαδημαϊκή Ταυτότητα">
                                                ΑΚΑΔΗΜΑΪΚΗ ΤΑΥΤΟΤΗΤΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/imera_anoikton_pylon/"  title="Ημέρα ανοικτών πυλών">
                                                ΗΜΕΡΑ ΑΝΟΙΚΤΩΝ ΠΥΛΩΝ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/metaptychiakes_spoydes/"  title="Μεταπτυχιακές Σπουδές">
                                    ΜΕΤΑΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/programma_didaskalias_kai_programma_exetastikis/"  title="Πρόγραμμα διδασκαλίας και πρόγραμμα εξεταστικής">
                                                ΠΡΟΓΡΑΜΜΑ ΔΙΔΑΣΚΑΛΙΑΣ ΚΑΙ ΠΡΟΓΡΑΜΜΑ ΕΞΕΤΑΣΤΙΚΗΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/didaktiki_kai_exetastiki_periodos/"  title="Διδακτική και Εξεταστική περίοδος">
                                                ΔΙΔΑΚΤΙΚΗ ΚΑΙ ΕΞΕΤΑΣΤΙΚΗ ΠΕΡΙΟΔΟΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/chrisima_eggrafa/"  title="Χρήσιμα έγγραφα">
                                                ΧΡΗΣΙΜΑ ΕΓΓΡΑΦΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/gkriza_bibliografia_pergamos/"  title="Γκρίζα Βιβλιογραφία - Πέργαμος">
                                                ΓΚΡΙΖΑ ΒΙΒΛΙΟΓΡΑΦΙΑ - ΠΕΡΓΑΜΟΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/akadimaiki_taytotita/"  title="Ακαδημαϊκή Ταυτότητα">
                                                ΑΚΑΔΗΜΑΪΚΗ ΤΑΥΤΟΤΗΤΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/sitisi/"  title="Σίτιση">
                                                ΣΙΤΙΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/ilektronikes_ypiresies/"  title="Ηλεκτρονικές Υπηρεσίες">
                                                ΗΛΕΚΤΡΟΝΙΚΕΣ ΥΠΗΡΕΣΙΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/apallagi_apo_teli_foitisis/"  title="Απαλλαγή από τέλη φοίτησης">
                                                ΑΠΑΛΛΑΓΗ ΑΠΟ ΤΕΛΗ ΦΟΙΤΗΣΗΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/themata_diplomatikon_ergasion/"  title="Θέματα διπλωματικών εργασιών">
                                                ΘΕΜΑΤΑ ΔΙΠΛΩΜΑΤΙΚΩΝ ΕΡΓΑΣΙΩΝ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/didaktorikes_spoydes/"  title="Διδακτορικές Σπουδές">
                                    ΔΙΔΑΚΤΟΡΙΚΕΣ ΣΠΟΥΔΕΣ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/gkriza_bibliografia_pergamos/"  title="Γκρίζα Βιβλιογραφία - Πέργαμος">
                                                ΓΚΡΙΖΑ ΒΙΒΛΙΟΓΡΑΦΙΑ - ΠΕΡΓΑΜΟΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/akadimaiki_taytotita/"  title="Ακαδημαϊκή Ταυτότητα">
                                                ΑΚΑΔΗΜΑΪΚΗ ΤΑΥΤΟΤΗΤΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/sitisi/"  title="Σίτιση">
                                                ΣΙΤΙΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/ilektronikes_ypiresies/"  title="Ηλεκτρονικές Υπηρεσίες">
                                                ΗΛΕΚΤΡΟΝΙΚΕΣ ΥΠΗΡΕΣΙΕΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/metadidaktoriki_ereyna/"  title="Μεταδιδακτορική Έρευνα">
                                                ΜΕΤΑΔΙΔΑΚΤΟΡΙΚΗ ΕΡΕΥΝΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/mitroo_didaktorikon_diatribon/"  title="Μητρώο Διδακτορικών Διατριβών">
                                                ΜΗΤΡΩΟ ΔΙΔΑΚΤΟΡΙΚΩΝ ΔΙΑΤΡΙΒΩΝ
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/erasmus_exerchomenoi_foitites_ekpa/"  title="Erasmus +: εξερχόμενοι φοιτητές ΕΚΠΑ">
                                    ERASMUS +: ΕΞΕΡΧΟΜΕΝΟΙ ΦΟΙΤΗΤΕΣ ΕΚΠΑ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/erasmus_exerchomenoi_foitites_ekpa/anagnorisi_mathimaton_erasmus_exerchomenon_foititon_ekpa/"  title="Aναγνώριση μαθημάτων Erasmus+ εξερχόμενων φοιτητών ΕΚΠΑ">
                                                AΝΑΓΝΩΡΙΣΗ ΜΑΘΗΜΑΤΩΝ ERASMUS+ ΕΞΕΡΧΟΜΕΝΩΝ ΦΟΙΤΗΤΩΝ ΕΚΠΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/erasmus_exerchomenoi_foitites_ekpa/civis/"  title="CIVIS">
                                                CIVIS
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="menu-item-has-children ">
                                <a href="/diagonismoi/"  title="Διαγωνισμοί">
                                    ΔΙΑΓΩΝΙΣΜΟΙ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul class="sub-menu submenu is-dropdown-submenu">
                                        
                                            <li class="">
                                                <a href="/diagonismoi/analytikos_katalogos_symmetochon_tis_nomikis_scholis_se_diethneis_diagonismoys/"  title="Αναλυτικός κατάλογος συμμετοχών της Νομικής Σχολής σε διεθνείς διαγωνισμούς">
                                                ΑΝΑΛΥΤΙΚΟΣ ΚΑΤΑΛΟΓΟΣ ΣΥΜΜΕΤΟΧΩΝ ΤΗΣ ΝΟΜΙΚΗΣ ΣΧΟΛΗΣ ΣΕ ΔΙΕΘΝΕΙΣ ΔΙΑΓΩΝΙΣΜΟΥΣ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/anthropinon_dikaiomaton/"  title="Ανθρωπίνων Δικαιωμάτων">
                                                ΑΝΘΡΩΠΙΝΩΝ ΔΙΚΑΙΩΜΑΤΩΝ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/emporiki_diamesolabisi/"  title="Εμπορική Διαμεσολάβηση">
                                                ΕΜΠΟΡΙΚΗ ΔΙΑΜΕΣΟΛΑΒΗΣΗ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/emporiki_diaitisia/"  title="Eμπορική Διαιτησία">
                                                EΜΠΟΡΙΚΗ ΔΙΑΙΤΗΣΙΑ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/romaiko_dikaio/"  title="Ρωμαϊκό Δίκαιο">
                                                ΡΩΜΑΪΚΟ ΔΙΚΑΙΟ
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/europa_moot_court/"  title="Europa Moot Court">
                                                EUROPA MOOT COURT
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/european_law_moot_court/"  title="European Law Moot Court">
                                                EUROPEAN LAW MOOT COURT
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/european_law_moot_court_competition/"  title="European Law Moot Court Competition">
                                                EUROPEAN LAW MOOT COURT COMPETITION
                                                </a>
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/philip_c_jessup_international_law_moot_court/"  title="Philip C. Jessup International Law Moot Court">
                                                PHILIP C. JESSUP INTERNATIONAL LAW MOOT COURT
                                                </a>
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                    <div class="header--menu_info">
                        <ul class="simple_list">
                            <li><a href="https://en.uoa.gr/">ENGLISH</a></li><li><a href="https://www.uoa.gr/epikoinonia_kai_prosbasi/">ΕΠΙΚΟΙΝΩΝΙΑ ΚΑΙ ΠΡΟΣΒΑΣΗ</a></li><li><a href="https://www.uoa.gr/anazitisi/">Αναζήτηση</a></li>
                        </ul>
                        <ul class="menu_social">
                            <li> <a href="http://www.facebook.com/uoa.official" title="Facebook"><span class="fa fa-facebook" aria-hidden="true">&nbsp;</span></a> </li>
                            <li> <a href="https://www.youtube.com/watch?v=m3HkLzBmcuY" title="Youtube"><span class="fa fa-youtube" aria-hidden="true">&nbsp;</span></a> </li>
                            <li> <a href="http://www.twitter.com" title="Twitter"><span class="fa fa-twitter" aria-hidden="true">&nbsp;</span></a> </li>
                            <li> <a href="https://www.linkedin.com/school/15094179/" title="Linkedin"><span class="fa fa-linkedin" aria-hidden="true">&nbsp;</span></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</header>



    <section class="blog_section">
        <div class="row">
            <div class="col-md-9 col-sm-8 single_page col-md-push-3 col-sm-push-4">
                <span class="banner_subtitle"></span>
                <h1 class="banner_title">Νομική Σχολή</h1>
                 <div class="page_banner" style="background-image: url('fileadmin/user_upload/LawSchool-banner-825X400.jpg');"></div>
                <ul class="breadcrumbs"><LI><A HREF="/"><A HREF="/">ΑΡΧΙΚΗ</A></A></LI> <LI> <SPAN>»</SPAN> </LI><li> <a href="/anakoinoseis_kai_ekdiloseis/">Ανακοινώσεις και εκδηλώσεις</a> </li> <li> <span>»</span> </li></ul>
                
                <h3 class="single_page--title">ΑΝΑΚΟΙΝΩΣΕΙΣ ΚΑΙ ΕΚΔΗΛΩΣΕΙΣ</h3>
                <div class="single_page--content">
                    
<!--<div id="c15106" class="frame frame-default frame-type-list frame-layout-0">--><!--TYPO3SEARCH_end--><!-- most recent top news --><!--
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t--><div class="article clearfix articletype-0 topnews" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="Έκτακτη Ανακοίνωση για την Ορκωμοσία πτυχιούχων Ιουνίου -Ιουλίου 2022 (κλιμ. Β 18-10-2022)" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/ektakti_anakoinosi_gia_tin_orkomosia_ptychioychon_ioynioy_ioylioy_2022_klim_b_18_10_2022/"><img src="/fileadmin/_processed_/6/9/csm_LawSchool-banner-825X150_83f1d5cf2a.jpg" width="160" height="29" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/ektakti_anakoinosi_gia_tin_orkomosia_ptychioychon_ioynioy_ioylioy_2022_klim_b_18_10_2022/">
\t\t\t\t\t\tΕΚΤΑΚΤΗ ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΤΗΝ ΟΡΚΩΜΟΣΙΑ ΠΤΥΧΙΟΥΧΩΝ ΙΟΥΝΙΟΥ -ΙΟΥΛΙΟΥ 2022 (ΚΛΙΜ. Β 18-10-2022)
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-14">
\t\t\t\t\t14/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-14" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/"><span class="article__category link">
\t\t\t\tΠΡΟΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p><span style="font-size:12px"><span style="font-family:Verdana,Geneva,sans-serif">Εν όψει της ορκωμοσίας των πτυχιούχων Ιουνίου - Ιουλίου 2022 σας ενημερώνουμε ότι λόγω έκτακτης υποχρέωσης του Κοσμήτορα της Σχολής <strong>η ώρα έναρξης της τελετής της ορκωμοσίας του 2ου Κλιμακίου 18-10-2022 (ΕΠΩΝΥΜΑ: ΚΑΡΑΜΠ. - ΜΠΑΓ.) μεταφέρεται από τις 09.00 π.μ. για τις 09.45 π.μ.</strong></span></span></p></div></div></div><!--
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t--><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="Η Βιβλιοθήκη της Νομικής υποδέχτηκε τους πρωτοετείς φοιτητές" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/i_bibliothiki_tis_nomikis_ypodechtike_toys_protoeteis_foitites/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/i_bibliothiki_tis_nomikis_ypodechtike_toys_protoeteis_foitites/">
\t\t\t\t\t\tΗ ΒΙΒΛΙΟΘΗΚΗ ΤΗΣ ΝΟΜΙΚΗΣ ΥΠΟΔΕΧΤΗΚΕ ΤΟΥΣ ΠΡΩΤΟΕΤΕΙΣ ΦΟΙΤΗΤΕΣ
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-14">
\t\t\t\t\t14/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-14" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/ekdiloseis_simantika/"><span class="article__category link">
\t\t\t\tΕΚΔΗΛΩΣΕΙΣ - ΣΗΜΑΝΤΙΚΑ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p>Στις 13 Οκτωβρίου η καρδιά της Νομικής Σχολής χτύπησε στη βιβλιοθήκη της στο κτήριο του Παλαιού Χημείου, όπου το προσωπικό υποδέχτηκε και ξενάγησε τους πρωτοετείς<br /> προπτυχιακούς φοιτητές στις εγκαταστάσεις της. Γέμισαν οι χώροι νεανικά χαρούμενα πρόσωπα.Τα επόμενα βήματα έχουν ήδη σχεδιαστεί με το κάλεσμα συμμετοχής των φοιτητών στα<br />...</p></div></div></div><div class="article clearfix articletype-0 topnews" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="ΠΜΣ ΑΣΤΙΚΟ ΔΙΚΑΙΟ_ΠΡΟΚΗΡΥΞΗ ΥΠΟΤΡΟΦΙΩΝ ΝΟΜΙΚΩΝ ΣΠΟΥΔΩΝ" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/pms_astiko_dikaio_prokiryxi_ypotrofion_nomikon_spoydon/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/pms_astiko_dikaio_prokiryxi_ypotrofion_nomikon_spoydon/">
\t\t\t\t\t\tΠΜΣ ΑΣΤΙΚΟ ΔΙΚΑΙΟ_ΠΡΟΚΗΡΥΞΗ ΥΠΟΤΡΟΦΙΩΝ ΝΟΜΙΚΩΝ ΣΠΟΥΔΩΝ
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-14">
\t\t\t\t\t14/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-14" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/metaptychiakes_spoydes/"><span class="article__category link">
\t\t\t\tΜΕΤΑΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-family:&quot;Calibri&quot;,sans-serif">Η&nbsp;<strong>Δικηγορική εταιρεία Μιχαλοπούλου &amp; Συνεργάτες</strong>&nbsp;με την ευκαιρία συμπλήρωσης των 20 χρόνων λειτουργίας</span>&nbsp;<span style="font-family:&quot;Calibri&quot;,sans-serif">της προκηρύσσει σε συνεργασία με το</span>&nbsp;<strong><span style="font-family:&quot;Calibri&quot;,sans-serif">Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών&nbsp;δύο&nbsp;(</span></strong><strong><span style="font-family:&quot;Calibri&quot;,sans-serif">2) πλήρεις υποτροφίες&nbsp;διδάκτρων</span></strong><span style="font-family:&quot;Calibri&quot;,sans-serif"> για το ακαδημαϊκό έτος 2022-2023 που απευθύνονται σε φοιτητές του&nbsp;προγράμματος</span><strong>&nbsp;</strong><strong><span style="font-family:&quot;Calibri&quot;,sans-serif">Μεταπτυχιακών Σπουδών της Νομικής Σχολής του...</span></strong></p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="ΔΙΕΘΝΗΣ ΔΙΑΓΩΝΙΣΜΟΣ INTERNATIONAL CRIMINAL COURT IBA ICCMCC 2023" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/diethnis_diagonismos_international_criminal_court_iba_iccmcc_2023-2/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/diethnis_diagonismos_international_criminal_court_iba_iccmcc_2023-2/">
\t\t\t\t\t\tΔΙΕΘΝΗΣ ΔΙΑΓΩΝΙΣΜΟΣ INTERNATIONAL CRIMINAL COURT IBA ICCMCC 2023
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-14">
\t\t\t\t\t14/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-14" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/ekdiloseis_simantika/"><span class="article__category link">
\t\t\t\tΕΚΔΗΛΩΣΕΙΣ - ΣΗΜΑΝΤΙΚΑ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p><span style="font-size:11px"><strong>Δρ. Ελένη Μίχα</strong></span></p><p><span style="font-size:11px"><strong>Ε.ΔΙ.Π. Νομικής Σχολής </strong></span></p><p><span style="font-size:11px">Αθήνα, 14 Οκτωβρίου 2022</span></p><p>&nbsp;</p><p class="text-center"><span style="font-size:14px"><strong>ΔΙΕΘΝΗΣ ΔΙΑΓΩΝΙΣΜΟΣ INTERNATIONAL CRIMINAL COURT</strong></span></p><p class="text-center"><span style="font-size:14px"><strong>IBA ICCMCC 2023</strong></span></p><p>&nbsp;</p><p><span style="font-size:14px">Όσοι φοιτητές και φοιτήτριες έχουν καταθέσει αίτηση συμμετοχής στο διαγωνισμό εικονικής δίκης ενώπιον του Διεθνούς Ποινικού Δικαστηρίου (IBA ICC Moot Court Competition 2023) καλούνται σε συνέντευξη τη <strong>Δευτέ...</strong></span></p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="ΔΙΕΘΝΗΣ ΔΙΑΓΩΝΙΣΜΟΣ INTERNATIONAL CRIMINAL COURT IBA ICCMCC 2023" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/diethnis_diagonismos_international_criminal_court_iba_iccmcc_2023-1/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/diethnis_diagonismos_international_criminal_court_iba_iccmcc_2023-1/">
\t\t\t\t\t\tΔΙΕΘΝΗΣ ΔΙΑΓΩΝΙΣΜΟΣ INTERNATIONAL CRIMINAL COURT IBA ICCMCC 2023
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-14">
\t\t\t\t\t14/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-14" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_diethnon_spoydon/"><span class="article__category link">
\t\t\t\tΠΡΟΠΤΥΧΙΑΚΟ ΤΟΜΕΑ ΔΙΕΘΝΩΝ ΣΠΟΥΔΩΝ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p><span style="font-size:12px"><strong><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Δρ. Ελένη Μίχα</span></span></strong></span></p><p><span style="font-size:12px"><strong><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Ε.ΔΙ.Π. Νομικής Σχολής </span></span></strong></span></p><p><span style="font-size:12px"><span style="font-family:Calibri,sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif">Αθήνα, 14 Οκτωβρίου 2022</span></span></span></p><p>&nbsp;</p><p class="text-center"><strong><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">ΔΙΕΘΝΗΣ ΔΙΑΓΩΝΙΣΜΟΣ INTERNATIONAL</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">CRIMINAL</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">COURT</span></span></span></span></strong></p><p class="text-center"><strong><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">IBA</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">ICCMCC 2023</span></span></span></span></strong></p><p>&nbsp;</p><p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Όσοι φοιτητές και φοιτήτριες έχουν καταθέσει αίτηση συμμετοχής στο διαγωνισμό εικονικής δίκης ενώπιον του Διεθνούς Ποινικού Δικαστηρίου (</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">IB</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">A</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">ICC</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Moot</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Court</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Competition</span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"> 2023) καλούνται σε συνέντευξη τη <strong>Δευτέ...</strong></span></span></p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="Έναρξη προπονήσεων Ρητορικού Ομίλου Νομικής Σχολής" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/enarxi_proponiseon_ritorikoy_omiloy_nomikis_scholis/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/enarxi_proponiseon_ritorikoy_omiloy_nomikis_scholis/">
\t\t\t\t\t\tΕΝΑΡΞΗ ΠΡΟΠΟΝΗΣΕΩΝ ΡΗΤΟΡΙΚΟΥ ΟΜΙΛΟΥ ΝΟΜΙΚΗΣ ΣΧΟΛΗΣ
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-14">
\t\t\t\t\t14/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-14" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/ekdiloseis_simantika/"><span class="article__category link">
\t\t\t\tΕΚΔΗΛΩΣΕΙΣ - ΣΗΜΑΝΤΙΚΑ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p>Αγαπητοί και Αγαπητές,</p><p>Ο <strong>Ρητορικός Όμιλος της Νομικής Σχολή</strong>ς επιστρέφει! Με χαρά σας ανακοινώνουμε ότι πρόκειται να πραγματοποιήσουμε την πρώτη μας προπόνηση για το φετινό ακαδημαϊκό έτος την <strong>Τετάρτη 19 Οκτωβρίου και ώρα 19:00-21:00 στην αίθουσα 5.</strong></p><p>Για την καλύτερη οργάνωση της συνάντησης, σας ενθαρρύνουμε να συμπληρώσετε την φόρμα...</p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="ΕΚΛΕΚΤΟΡΙΚΟ ΣΩΜΑ-ΚΕΝΗ ΘΕΣΗ ΕΠΙΚΟΥΡΟΥ ΚΑΘΗΓΗΤΗ-ΑΣΤΙΚΟ ΔΙΚΑΙΟ-ΑΡΡ 28672" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/eklektoriko_soma_keni_thesi_epikoyroy_kathigiti_astiko_dikaio_arr_28672/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/eklektoriko_soma_keni_thesi_epikoyroy_kathigiti_astiko_dikaio_arr_28672/">
\t\t\t\t\t\tΕΚΛΕΚΤΟΡΙΚΟ ΣΩΜΑ-ΚΕΝΗ ΘΕΣΗ ΕΠΙΚΟΥΡΟΥ ΚΑΘΗΓΗΤΗ-ΑΣΤΙΚΟ ΔΙΚΑΙΟ-ΑΡΡ 28672
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-13">
\t\t\t\t\t13/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-13" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/prokiryxeis_exelixeis_melon_dep/"><span class="article__category link">
\t\t\t\tΠΡΟΚΗΡΥΞΕΙΣ - ΕΞΕΛΙΞΕΙΣ ΜΕΛΩΝ ΔΕΠ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p>Για περισσότερα πατήστε <a href="/fileadmin/depts/law.uoa.gr/www/uploads/News/Secr/13.10.22-SYGKROTISI_EKLEKTORIKOY_SOMATOS_-_ARR_28672.pdf">ΕΔΩ</a></p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="Δηλώσεις μαθημάτων  ΠΜΣ  Α   εξαμήνου" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/diloseis_mathimaton_pms_a_examinoy/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/diloseis_mathimaton_pms_a_examinoy/">
\t\t\t\t\t\tΔΗΛΩΣΕΙΣ ΜΑΘΗΜΑΤΩΝ  ΠΜΣ  Α   ΕΞΑΜΗΝΟΥ
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-13">
\t\t\t\t\t13/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-13" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/metaptychiakes_spoydes/"><span class="article__category link">
\t\t\t\tΜΕΤΑΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></span></span></p><p><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; ΔΗΛΩΣΕΙΣ&nbsp; ΜΑΘΗΜΑΤΩΝ&nbsp; </strong></span></span></p><p><span style="font-size:11pt"><span style="font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;"><span style="font-size:12.0pt"><span style="font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;">Ανακοινώνεται στους μεταπτυχιακούς&nbsp; φοιτητές ότι&nbsp; κατά&nbsp;<strong></strong>το χρονικό διάστημα<strong>&nbsp; 14&nbsp; έως&nbsp; 17 Οκτωβρίου 2022&nbsp; </strong>θα πρέπει&nbsp; να πραγματοποιήσουν μέσω του ηλεκτρονικού συστήματος (<a href="https://my-uni.uoa.gr" target="_blank">my-uni.uoa.gr</a><u>)</u> τη&nbsp; ΔΗΛΩΣΗ μαθημάτων α' εξαμήνου, ακαδ. έτους...</span></span></span></span></p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="ΠΡΟΓΡΑΜΜΑ ΙΚΥ-ΕΥΔΑΠ ΓΙΑ ΧΟΡΗΓΗΣΗ ΥΠΟΤΡΟΦΙΩΝ ΣΕ ΥΠΟΨΗΦΙΟΥΣ ΔΙΔΑΚΤΟΡΕΣ ΤΩΝ ΕΛΛΗΝΙΚΩΝ ΑΕΙ" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/programma_iky_eydap_gia_chorigisi_ypotrofion_se_ypopsifioys_didaktores_ton_ellinikon_aei-1/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/programma_iky_eydap_gia_chorigisi_ypotrofion_se_ypopsifioys_didaktores_ton_ellinikon_aei-1/">
\t\t\t\t\t\tΠΡΟΓΡΑΜΜΑ ΙΚΥ-ΕΥΔΑΠ ΓΙΑ ΧΟΡΗΓΗΣΗ ΥΠΟΤΡΟΦΙΩΝ ΣΕ ΥΠΟΨΗΦΙΟΥΣ ΔΙΔΑΚΤΟΡΕΣ ΤΩΝ ΕΛΛΗΝΙΚΩΝ ΑΕΙ
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-13">
\t\t\t\t\t13/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-13" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/didaktorikes_spoydes/"><span class="article__category link">
\t\t\t\tΔΙΔΑΚΤΟΡΙΚΕΣ ΣΠΟΥΔΕΣ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p class="moz-quote-pre">Το Ίδρυμα Κρατικών Υποτροφιών,σε εφαρμογήτηςμε αριθμ. 91811/Ζ1/22-7-2022 Υπουργικής Απόφασης(ΦΕΚ αρ.3983/B’/27-7-2022),ανακοινώνει την προκήρυξη προγράμματος χορήγησης δύο<br /> (2)υποτροφιών τετραετούς διάρκειας, ύψους 1.000,00 ευρώ μηνιαίως, που χρηματοδοτούνται από την ΕΥΔΑΠ και αφορούν υποψήφιους/υποψήφιες που εκπονούν τη διδακτορική τους...</p></div></div></div><div class="article clearfix articletype-0" itemscope="itemscope" itemtype="http://schema.org/Article"><div class="article__image matchHeight"><a title="ΣΕΜΙΝΑΡΙΟ ΠΟΛΙΤΙΚΗΣ ΔΙΚΟΝΟΜΙΑΣ/ ΕΚΤΑΚΤΗ ΑΛΛΑΓΗ ΑΙΘΟΥΣΑΣ (25.10.2022)" href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/seminario_politikis_dikonomias_ektakti_allagi_aithoysas_25102022/"><img src="/fileadmin/_processed_/7/0/csm_LawSchool-banner-825X400_26b210104c.jpg" width="160" height="78" alt="" /></a></div><div class="article__content matchHeight"><!-- header --><h3 class="article__title"><a href="/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/seminario_politikis_dikonomias_ektakti_allagi_aithoysas_25102022/">
\t\t\t\t\t\tΣΕΜΙΝΑΡΙΟ ΠΟΛΙΤΙΚΗΣ ΔΙΚΟΝΟΜΙΑΣ/ ΕΚΤΑΚΤΗ ΑΛΛΑΓΗ ΑΙΘΟΥΣΑΣ (25.10.2022)
\t\t\t\t\t</a></h3><div class="article__info"><span class="article__date"><time datetime="2022-10-13">
\t\t\t\t\t13/10/2022 -
\t\t\t\t\t<meta itemprop="datePublished" content="2022-10-13" /></time></span><a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_b_idiotikoy_dikaioy/"><span class="article__category link">
\t\t\t\tΠΡΟΠΤΥΧΙΑΚΟ ΤΟΜΕΑ Β&#039; ΙΔΙΩΤΙΚΟΥ ΔΙΚΑΙΟΥ</span></a></div><!-- teaser --><div class="teaser-text" itemprop="description"><p class="text-center">Σας ενημερώνουμε ότι την Τρίτη 25 Οκτωβρίου 2022 και ώρα 19:00 - 21:00</p><p class="text-center">το Σεμινάριο Πολιτικής Δικονομίας θα διεξαχθεί <u><strong>εκτάκτως</strong></u> στην Αίθουσα 5 (Μ.Θ.Ε.)&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div></div></div><ul class="paginnation"><li><a href="/anakoinoseis_kai_ekdiloseis/">
\t\t\t\t\t\t\tΠροηγούμενο
\t\t\t\t\t\t\t<i class="fa fa-angle-left" aria-hidden="true"></i></a></li><li class="current"><a href="#">1</a></li><li><a href="/anakoinoseis_kai_ekdiloseis/page/2/">2</a></li><li><a href="/anakoinoseis_kai_ekdiloseis/page/3/">3</a></li><li>....</li><li class="last"><a href="/anakoinoseis_kai_ekdiloseis/page/109/">109</a></li><li class="last next"><a href="/anakoinoseis_kai_ekdiloseis/page/2/">
\t\t\t\t\tΕπόμενο
\t\t\t\t\t<i class="fa fa-angle-right" aria-hidden="true"></i></a></li></ul><div class="news-clear"></div><!--TYPO3SEARCH_begin--><!--</div>-->


                </div>
            </div>
            <div class="col-md-3 col-sm-4 sidebar right_sidebar col-md-pull-9 col-sm-pull-8">
                <div class="sidebar_logo hide_for_tablet">
                    
<!--<div id="c977" class="frame frame-default frame-type-image frame-layout-0">--><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="https://www.uoa.gr"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" src="/fileadmin/user_upload/Banners/logos/uoa-logo-centered-greek-1.jpg" width="224" height="131" alt="" /></a></figure></div></div></div></div></div></div><!--</div>-->


                </div>
                <aside class="aside_main_menu hide_for_tablet">
                    <ul>
                        
                            <li class="current">
                                <a href="/anakoinoseis_kai_ekdiloseis/"  title="Ανακοινώσεις και εκδηλώσεις">
                                Ανακοινώσεις και εκδηλώσεις
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/epilegmena/"  title="Επιλεγμένα">
                                                Επιλεγμένα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/"  title="Προπτυχιακές σπουδές">
                                                Προπτυχιακές σπουδές
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_a_idiotikoy_dikaioy/"  title="Προπτυχιακό Τομέα Α&#039; Ιδιωτικού Δικαίου">
                                                                Προπτυχιακό Τομέα Α&#039; Ιδιωτικού Δικαίου
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_b_idiotikoy_dikaioy/"  title="Προπτυχιακό Τομέα Β&#039; Ιδιωτικού Δικαίου">
                                                                Προπτυχιακό Τομέα Β&#039; Ιδιωτικού Δικαίου
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_dimosioy_dikaioy/"  title="Προπτυχιακό Τομέα Δημοσίου Δικαίου">
                                                                Προπτυχιακό Τομέα Δημοσίου Δικαίου
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_poinikon_epistimon/"  title="Προπτυχιακό Τομέα Ποινικών Επιστημών">
                                                                Προπτυχιακό Τομέα Ποινικών Επιστημών
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_diethnon_spoydon/"  title="Προπτυχιακό Τομέα Διεθνών Σπουδών">
                                                                Προπτυχιακό Τομέα Διεθνών Σπουδών
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/anakoinoseis_kai_ekdiloseis/proptychiakes_spoydes/proptychiako_tomea_istorias_kai_theorias_toy_dikaioy/"  title="Προπτυχιακό Τομέα Ιστορίας και Θεωρίας του Δικαίου">
                                                                Προπτυχιακό Τομέα Ιστορίας και Θεωρίας του Δικαίου
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/metaptychiakes_spoydes/"  title="Μεταπτυχιακές σπουδές">
                                                Μεταπτυχιακές σπουδές
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/didaktorikes_spoydes/"  title="Διδακτορικές Σπουδές">
                                                Διδακτορικές Σπουδές
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/erasmus/"  title="Erasmus">
                                                Erasmus
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/civis/"  title="CIVIS">
                                                CIVIS
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/european_law_school_network/"  title="EUROPEAN LAW SCHOOL NETWORK">
                                                EUROPEAN LAW SCHOOL NETWORK
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/prokiryxeis_exelixeis_melon_dep/"  title="Προκηρύξεις - Εξελίξεις Μελών ΔΕΠ">
                                                Προκηρύξεις - Εξελίξεις Μελών ΔΕΠ
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/anakoinoseis_kai_ekdiloseis/ekdiloseis_simantika/"  title="Εκδηλώσεις - Σημαντικά">
                                                Εκδηλώσεις - Σημαντικά
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/i_scholi/"  title="Η Σχολή">
                                Η Σχολή
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/i_scholi/organosi_kai_dioikisi/"  title="Οργάνωση και Διοίκηση">
                                                Οργάνωση και Διοίκηση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/egkatastaseis_kai_prosbasi/"  title="Εγκαταστάσεις και Πρόσβαση">
                                                Εγκαταστάσεις και Πρόσβαση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/bibliothiki_nomikis_scholis/"  title="Βιβλιοθήκη Νομικής Σχολής">
                                                Βιβλιοθήκη Νομικής Σχολής
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/ergastiria/"  title="Εργαστήρια">
                                                Εργαστήρια
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/ypostirixi_foititon_me_anapiria_monada_prosbasimotitas_ekpa/"  title="Υποστήριξη φοιτητών με αναπηρία - Μονάδα Προσβασιμότητας ΕΚΠΑ">
                                                Υποστήριξη φοιτητών με αναπηρία - Μονάδα Προσβασιμότητας ΕΚΠΑ
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/axiologisi/"  title="Αξιολόγηση">
                                                Αξιολόγηση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/i_scholi/mitroa_nomikis_scholis/"  title="Μητρώα Νομικής Σχολής">
                                                Μητρώα Νομικής Σχολής
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/tomeis/"  title="Τομείς">
                                Τομείς
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/tomeis/a_idiotikoy_dikaioy/"  title="Α&#039; Ιδιωτικού Δικαίου">
                                                Α&#039; Ιδιωτικού Δικαίου
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/a_idiotikoy_dikaioy/mathimata/"  title="Μαθήματα">
                                                                Μαθήματα
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/a_idiotikoy_dikaioy/prosopiko_ores_akroasis/"  title="Προσωπικό – Ώρες ακρόασης">
                                                                Προσωπικό – Ώρες ακρόασης
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/a_idiotikoy_dikaioy/ergografies/"  title="Εργογραφίες">
                                                                Εργογραφίες
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/b_idiotikoy_dikaioy/"  title="Β&#039; Ιδιωτικού Δικαίου">
                                                Β&#039; Ιδιωτικού Δικαίου
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/b_idiotikoy_dikaioy/mathimata/"  title="Μαθήματα">
                                                                Μαθήματα
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/b_idiotikoy_dikaioy/prosopiko_ores_akroasis/"  title="Προσωπικό – Ώρες ακρόασης">
                                                                Προσωπικό – Ώρες ακρόασης
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/dimosioy_dikaioy/"  title="Δημοσίου Δικαίου">
                                                Δημοσίου Δικαίου
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/dimosioy_dikaioy/mathimata/"  title="Μαθήματα">
                                                                Μαθήματα
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/dimosioy_dikaioy/prosopiko_ores_akroasis/"  title="Προσωπικό – Ώρες ακρόασης">
                                                                Προσωπικό – Ώρες ακρόασης
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/poinikon_epistimon/"  title="Ποινικών Επιστημών">
                                                Ποινικών Επιστημών
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/poinikon_epistimon/mathimata/"  title="Μαθήματα">
                                                                Μαθήματα
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/poinikon_epistimon/prosopiko_ores_akroasis/"  title="Προσωπικό – Ώρες ακρόασης">
                                                                Προσωπικό – Ώρες ακρόασης
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/diethnon_spoydon/"  title="Διεθνών Σπουδών">
                                                Διεθνών Σπουδών
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/diethnon_spoydon/mathimata/"  title="Μαθήματα">
                                                                Μαθήματα
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/diethnon_spoydon/prosopiko_ores_akroasis/"  title="Προσωπικό – Ώρες ακρόασης">
                                                                Προσωπικό – Ώρες ακρόασης
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/tomeis/istorias_kai_theorias_toy_dikaioy/"  title="Ιστορίας και Θεωρίας του Δικαίου">
                                                Ιστορίας και Θεωρίας του Δικαίου
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/istorias_kai_theorias_toy_dikaioy/mathimata/"  title="Μαθήματα">
                                                                Μαθήματα
                                                                </a>
                                                            </li>
                                                        
                                                            <li class="">
                                                                <a href="/tomeis/istorias_kai_theorias_toy_dikaioy/prosopiko_ores_akroasis/"  title="Προσωπικό – Ώρες ακρόασης">
                                                                Προσωπικό – Ώρες ακρόασης
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/prosopiko/"  title="Προσωπικό">
                                Προσωπικό
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/prosopiko/didaskontes_ana_tomea/"  title="Διδάσκοντες ανά Τομέα">
                                                Διδάσκοντες ανά Τομέα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/didaskontes_alfabitika/"  title="Διδάσκοντες αλφαβητικά">
                                                Διδάσκοντες αλφαβητικά
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/omotimoi_kathigites/"  title="Ομότιμοι Καθηγητές">
                                                Ομότιμοι Καθηγητές
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/epitimoi_didaktores/"  title="Επίτιμοι Διδάκτορες">
                                                Επίτιμοι Διδάκτορες
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/prosopiko/dioikitiko_kai_techniko_prosopiko/"  title="Διοικητικό και Τεχνικό Προσωπικό">
                                                Διοικητικό και Τεχνικό Προσωπικό
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/"  title="Κατάταξη πτυχιούχων Τριτοβάθμιας Εκπαίδευσης">
                                Κατάταξη πτυχιούχων Τριτοβάθμιας Εκπαίδευσης
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2019_2020/"  title="Κατατακτήριες 2019-2020">
                                                Κατατακτήριες 2019-2020
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2020_2021/"  title="Κατατακτήριες 2020-2021">
                                                Κατατακτήριες 2020-2021
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2021_2022/"  title="Κατατακτήριες 2021-2022">
                                                Κατατακτήριες 2021-2022
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/katataxi_ptychioychon_tritobathmias_ekpaideysis/katataktiries_2022_2023/"  title="Κατατακτήριες 2022-2023">
                                                Κατατακτήριες 2022-2023
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/proptychiakes_spoydes/"  title="Προπτυχιακές Σπουδές">
                                Προπτυχιακές Σπουδές
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/politiki_poiotitas/"  title="Πολιτική Ποιότητας">
                                                Πολιτική Ποιότητας
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/kanonismos_programmatos_spoydon/"  title="Κανονισμός Προγράμματος Σπουδών">
                                                Κανονισμός Προγράμματος Σπουδών
                                                </a>
                                                
                                                    <ul>
                                                        
                                                            <li class="">
                                                                <a href="/proptychiakes_spoydes/kanonismos_programmatos_spoydon/diloseis_mathimaton/"  title="Δηλώσεις μαθημάτων">
                                                                Δηλώσεις μαθημάτων
                                                                </a>
                                                            </li>
                                                        
                                                    </ul>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/programma_didaskalias/"  title="Πρόγραμμα Διδασκαλίας">
                                                Πρόγραμμα Διδασκαλίας
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/akadimaiko_imerologio/"  title="Ακαδημαϊκό Ημερολόγιο">
                                                Ακαδημαϊκό Ημερολόγιο
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/programma_exetaseon/"  title="Πρόγραμμα Εξετάσεων">
                                                Πρόγραμμα Εξετάσεων
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/foititikes_ypiresies/"  title="Φοιτητικές Υπηρεσίες">
                                                Φοιτητικές Υπηρεσίες
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/didaktika_syggrammata/"  title="Διδακτικά Συγγράμματα">
                                                Διδακτικά Συγγράμματα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/sitisi/"  title="Σίτιση">
                                                Σίτιση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/akadimaiki_taytotita/"  title="Ακαδημαϊκή Ταυτότητα">
                                                Ακαδημαϊκή Ταυτότητα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/proptychiakes_spoydes/imera_anoikton_pylon/"  title="Ημέρα ανοικτών πυλών">
                                                Ημέρα ανοικτών πυλών
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/metaptychiakes_spoydes/"  title="Μεταπτυχιακές Σπουδές">
                                Μεταπτυχιακές Σπουδές
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/programma_didaskalias_kai_programma_exetastikis/"  title="Πρόγραμμα διδασκαλίας και πρόγραμμα εξεταστικής">
                                                Πρόγραμμα διδασκαλίας και πρόγραμμα εξεταστικής
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/didaktiki_kai_exetastiki_periodos/"  title="Διδακτική και Εξεταστική περίοδος">
                                                Διδακτική και Εξεταστική περίοδος
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/chrisima_eggrafa/"  title="Χρήσιμα έγγραφα">
                                                Χρήσιμα έγγραφα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/gkriza_bibliografia_pergamos/"  title="Γκρίζα Βιβλιογραφία - Πέργαμος">
                                                Γκρίζα Βιβλιογραφία - Πέργαμος
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/akadimaiki_taytotita/"  title="Ακαδημαϊκή Ταυτότητα">
                                                Ακαδημαϊκή Ταυτότητα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/sitisi/"  title="Σίτιση">
                                                Σίτιση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/ilektronikes_ypiresies/"  title="Ηλεκτρονικές Υπηρεσίες">
                                                Ηλεκτρονικές Υπηρεσίες
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/apallagi_apo_teli_foitisis/"  title="Απαλλαγή από τέλη φοίτησης">
                                                Απαλλαγή από τέλη φοίτησης
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/metaptychiakes_spoydes/themata_diplomatikon_ergasion/"  title="Θέματα διπλωματικών εργασιών">
                                                Θέματα διπλωματικών εργασιών
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/didaktorikes_spoydes/"  title="Διδακτορικές Σπουδές">
                                Διδακτορικές Σπουδές
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/gkriza_bibliografia_pergamos/"  title="Γκρίζα Βιβλιογραφία - Πέργαμος">
                                                Γκρίζα Βιβλιογραφία - Πέργαμος
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/akadimaiki_taytotita/"  title="Ακαδημαϊκή Ταυτότητα">
                                                Ακαδημαϊκή Ταυτότητα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/sitisi/"  title="Σίτιση">
                                                Σίτιση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/ilektronikes_ypiresies/"  title="Ηλεκτρονικές Υπηρεσίες">
                                                Ηλεκτρονικές Υπηρεσίες
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/metadidaktoriki_ereyna/"  title="Μεταδιδακτορική Έρευνα">
                                                Μεταδιδακτορική Έρευνα
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/didaktorikes_spoydes/mitroo_didaktorikon_diatribon/"  title="Μητρώο Διδακτορικών Διατριβών">
                                                Μητρώο Διδακτορικών Διατριβών
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/erasmus_exerchomenoi_foitites_ekpa/"  title="Erasmus +: εξερχόμενοι φοιτητές ΕΚΠΑ">
                                Erasmus +: εξερχόμενοι φοιτητές ΕΚΠΑ
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/erasmus_exerchomenoi_foitites_ekpa/anagnorisi_mathimaton_erasmus_exerchomenon_foititon_ekpa/"  title="Aναγνώριση μαθημάτων Erasmus+ εξερχόμενων φοιτητών ΕΚΠΑ">
                                                Aναγνώριση μαθημάτων Erasmus+ εξερχόμενων φοιτητών ΕΚΠΑ
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/erasmus_exerchomenoi_foitites_ekpa/civis/"  title="CIVIS">
                                                CIVIS
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                            <li class="">
                                <a href="/diagonismoi/"  title="Διαγωνισμοί">
                                Διαγωνισμοί
                                </a>
                                
                                    <span class="sub_menu_icon">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="12px" height="7px">
                                        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                              d="M12.010,0.729 L6.726,6.116 L6.876,6.270 L6.150,7.010 L6.000,6.856 L5.849,7.010 L5.123,6.270 L5.274,6.116 L-0.010,0.729 L0.716,-0.011 L6.000,5.376 L11.284,-0.011 L12.010,0.729 Z"/>
                                        </svg>
                                    </span>
                                    <ul>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/analytikos_katalogos_symmetochon_tis_nomikis_scholis_se_diethneis_diagonismoys/"  title="Αναλυτικός κατάλογος συμμετοχών της Νομικής Σχολής σε διεθνείς διαγωνισμούς">
                                                Αναλυτικός κατάλογος συμμετοχών της Νομικής Σχολής σε διεθνείς διαγωνισμούς
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/anthropinon_dikaiomaton/"  title="Ανθρωπίνων Δικαιωμάτων">
                                                Ανθρωπίνων Δικαιωμάτων
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/emporiki_diamesolabisi/"  title="Εμπορική Διαμεσολάβηση">
                                                Εμπορική Διαμεσολάβηση
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/emporiki_diaitisia/"  title="Eμπορική Διαιτησία">
                                                Eμπορική Διαιτησία
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/romaiko_dikaio/"  title="Ρωμαϊκό Δίκαιο">
                                                Ρωμαϊκό Δίκαιο
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/europa_moot_court/"  title="Europa Moot Court">
                                                Europa Moot Court
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/european_law_moot_court/"  title="European Law Moot Court">
                                                European Law Moot Court
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/european_law_moot_court_competition/"  title="European Law Moot Court Competition">
                                                European Law Moot Court Competition
                                                </a>
                                                
                                            </li>
                                        
                                            <li class="">
                                                <a href="/diagonismoi/philip_c_jessup_international_law_moot_court/"  title="Philip C. Jessup International Law Moot Court">
                                                Philip C. Jessup International Law Moot Court
                                                </a>
                                                
                                            </li>
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </aside>
                
\t\t<!-- <aside class="aside_widget_img"><a href="/"><img src="uploads/pics/aside_widget_img.png" alt=""></a></aside> -->
            </div>
        </div>
    </section>



<footer class="footer">
    <div class="footer__logos">
    <div class="row footer__logos--container">
        <div class="col-md-2 col-sm-4 col-xs-6 text-center">
    
<!--<div id="c54834" class="frame frame-default frame-type-image frame-layout-0">--><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="https://europa.eu/youreurope/citizens/index_el.htm"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" src="/fileadmin/user_upload/Banners/new/h_eyrwph_soy_logo_100_sq.png" width="100" height="100" alt="" /></a></figure></div></div></div></div></div></div><!--</div>-->


</div>
<div class="col-md-2 col-sm-4 col-xs-6 text-center">
    
<!--<div id="c54835" class="frame frame-default frame-type-image frame-layout-0">--><h2 class=""></h2><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="/fileadmin/depts/law.uoa.gr/www/uploads/law-ethaae-gr.PDF"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" src="/fileadmin/user_upload/thumbnails/Logo_ESDP_70x70.jpg" width="70" height="72" alt="" /></a></figure></div></div></div></div></div></div><!--</div>-->


</div>
<div class="col-md-2 col-sm-4 col-xs-6 text-center">
    
<!--<div id="c54838" class="frame frame-default frame-type-image frame-layout-0">--><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="http://www.interel.uoa.gr/erasmus.html"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" alt="Erasmus+" src="/fileadmin/user_upload/footer_logo1.png" width="131" height="50" /></a></figure></div></div></div></div></div></div><!--</div>-->


</div>
<div class="col-md-2 col-sm-4 col-xs-6 text-center">
    
<!--<div id="c54840" class="frame frame-default frame-type-image frame-layout-0">--><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="http://www.opencourses.gr/"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" src="/fileadmin/user_upload/footer_logo4.png" width="154" height="70" alt="" /></a></figure></div></div></div></div></div></div><!--</div>-->


</div>
<div class="col-md-2 col-sm-4 col-xs-6 text-center">
    
<!--<div id="c54841" class="frame frame-default frame-type-image frame-layout-0">--><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="http://et.diavgeia.gov.gr/f/99203020"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" src="/fileadmin/user_upload/footer_logo5.png" width="131" height="51" alt="" /></a></figure></div></div></div></div></div></div><!--</div>-->


</div>
<div class="col-md-2 col-sm-4 col-xs-6 text-center">
    
<!--<div id="c54842" class="frame frame-default frame-type-image frame-layout-0">--><div class="ce-image ce-center ce-above"><div class="ce-gallery" data-ce-columns="1" data-ce-images="1"><div class="ce-outer"><div class="ce-inner"><div class="ce-row"><div class="ce-column"><figure class="image"><a href="http://www.athensculturenet.com/el/"><link rel="stylesheet" href="/typo3conf/ext/uoa_website/Resources/Public/Css/rte.css"><img class="image-embed-item img-responsive" src="/fileadmin/user_upload/footer_logo6.png" width="169" height="71" alt="" /></a></figure></div></div></div></div></div></div><!--</div>-->


</div>
    </div>
</div>
<div class="footer__center">
    <div class="row">
        <div class="col-md-2 col-sm-3 col-xs-6 col-xxs-12 matchHeight footer__menu_col">
            <h2 class="footer__title">ΣΧΕΤΙΚΑ:<span class="dropdown-toggle"><span class="fa fa-angle-down"></span></span></h2><ul><li><a href="https://www.uoa.gr">Το Πανεπιστήμιο</a></li><li><a href="/footer/schetika/dioikitikes_ypiresies/">Διοικητικές Υπηρεσίες</a></li><li><a href="/prosopiko/">Προσωπικό</a></li><li><a href="/anakoinoseis_kai_ekdiloseis/">Νέα και ανακοινώσεις</a></li></ul>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6 col-xxs-12 matchHeight footer__menu_col">
            <h2 class="footer__title">ΕΚΠΑΙΔΕΥΣΗ:<span class="dropdown-toggle"><span class="fa fa-angle-down"></span></span></h2><ul><li><a href="/proptychiakes_spoydes/">Σπουδές</a></li><li><a href="/proptychiakes_spoydes/foititikes_ypiresies/">Φοιτητές</a></li><li><a href="https://alumni.uoa.gr/">Απόφοιτοι</a></li></ul>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6 col-xxs-12 matchHeight footer__menu_col">
            <h2 class="footer__title">ΥΠΗΡΕΣΙΕΣ:<span class="dropdown-toggle"><span class="fa fa-angle-down"></span></span></h2><ul><li><a href="https://my-studies.uoa.gr/">My-Studies</a></li><li><a href="https://eclass.uoa.gr">E-class</a></li><li><a href="https://delos.uoa.gr/opendelos/">Delos</a></li><li><a href="http://pergamos.lib.uoa.gr/uoa/dl/frontend/index.html">Pergamos</a></li><li><a href="https://eprotocol.uoa.gr/">e-Protocol</a></li></ul>
        </div>
        <div class="col-md-2 col-sm-3 col-xs-6 col-xxs-12 matchHeight footer__menu_col">
            <h2 class="footer__title">ΣΥΝΔΕΣΜΟΙ:<span class="dropdown-toggle"><span class="fa fa-angle-down"></span></span></h2><ul><li><a href="/footer/syndesmoi/prokiryxeis/">Προκηρύξεις</a></li><li><a href="/footer/syndesmoi/imerologio_ekdiloseon/">Ημερολόγιο Εκδηλώσεων</a></li><li><a href="http://law.lib.uoa.gr/">Βιβλιοθήκη και Κέντρο Πληροφόρησης</a></li><li><a href="/footer/syndesmoi/oloi_oi_syndesmoi/">Όλοι οι σύνδεσμοι...</a></li></ul>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3 col-sm-12 clearfix footer__forms_column">
            
\t<form method="get" class="header__search searchform" name="form_kesearch_pi1"  action="/anazitisi/">
\t\t<fieldset class="kesearch_searchbox">
\t\t\t
\t\t\t\t<input type="hidden" name="id" value="10774" />
\t\t\t
\t\t\t
\t\t\t
\t\t\t

\t\t\t<!--<div class="kesearchbox">
\t\t\t\t<input type="text" id="ke_search_sword" name="tx_kesearch_pi1[sword]" value="" placeholder="ΑΝΑΖΗΤΗΣΗ" />
\t\t\t\t<div class="clearer">&nbsp;</div>
\t\t\t</div>-->

\t\t\t<input type="search" placeholder="ΑΝΑΖΗΤΗΣΗ" title="ΑΝΑΖΗΤΗΣΗ" name="tx_kesearch_pi1[sword]" value="">
\t\t\t<button>
\t\t\t\t<svg
\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"
\t\t\t\t\t\txmlns:xlink="http://www.w3.org/1999/xlink"
\t\t\t\t\t\twidth="23px" height="19px">
\t\t\t\t\t<path   fill="rgb(255, 255, 255)"
\t\t\t\t\t\t\td="M22.670,18.178 C22.088,19.041 20.931,19.257 20.090,18.659 L12.467,13.255 C11.928,12.873 11.648,12.252 11.669,11.626 C10.687,12.705 9.398,13.430 7.953,13.699 C6.178,14.031 4.386,13.634 2.907,12.585 C1.427,11.537 0.434,9.960 0.111,8.142 C-0.213,6.324 0.173,4.488 1.198,2.971 C3.314,-0.161 7.523,-0.946 10.582,1.220 C13.358,3.190 14.245,6.927 12.802,9.942 C13.366,9.699 14.035,9.747 14.577,10.131 L22.201,15.535 C23.043,16.133 23.254,17.316 22.670,18.178 ZM11.370,6.041 C11.145,4.774 10.453,3.674 9.421,2.943 C7.289,1.430 4.353,1.977 2.876,4.161 C1.400,6.348 1.935,9.355 4.067,10.865 C6.199,12.377 9.135,11.830 10.611,9.646 C11.326,8.589 11.595,7.308 11.370,6.041 Z"/>
\t\t\t\t</svg>
\t\t\t</button>

<!--\t\t\t<input id="kesearchpagenumber" type="hidden" name="tx_kesearch_pi1[page]" value="1" />
\t\t\t<input id="resetFilters" type="hidden" name="tx_kesearch_pi1[resetFilters]" value="0" />
\t\t\t<input id="sortByField" type="hidden" name="tx_kesearch_pi1[sortByField]" value="" />
\t\t\t<input id="sortByDir" type="hidden" name="tx_kesearch_pi1[sortByDir]" value="" />
\t\t\t
-->
\t\t</fieldset>
\t</form>



            <div class="footer__contact_info">
                <h6 class="footer__title">
                    ΕΠΙΚΟΙΝΩΝΙΑ:
                </h6>
                
<!--<div id="c15087" class="frame frame-default frame-type-text frame-layout-0">--><p>Ακαδημίας 47,&nbsp;106 72,&nbsp;Αθήνα<br /> Τηλ: <a href="tel:2103688659">210 368 8659</a></p><p><a href="/prosopiko/dioikitiko_kai_techniko_prosopiko/">Διοικητικό Προσωπικό</a></p><!--</div>-->


                <ul>
                    <li> <a href="http://www.facebook.com/uoa.official" title="Facebook"><span class="fa fa-facebook" aria-hidden="true">&nbsp;</span></a> </li>
                    <li> <a href="https://www.youtube.com/watch?v=m3HkLzBmcuY" title="Youtube"><span class="fa fa-youtube" aria-hidden="true">&nbsp;</span></a> </li>
                    <li> <a href="http://www.twitter.com" title="Twitter"><span class="fa fa-twitter" aria-hidden="true">&nbsp;</span></a> </li>
                    <li> <a href="https://www.linkedin.com/school/15094179/" title="Linkedin"><span class="fa fa-linkedin" aria-hidden="true">&nbsp;</span></a> </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="footer__bottom">
    <div class="row">
        <div class="col-md-8 col-sm-7">
            <div class="footer__copyright">
                <div class="footer__logo">
                    <a href="https://www.uoa.gr/" title="Uoa"><img src="/typo3conf/ext/uoa_website/Resources/Public/Images/footer_logo.png" width="64" height="65"   alt="Uoa" title="Uoa" ></a>
                </div>
                <div class="footer__copyright--text">
                    <p>
                        Copyright © 2022 <br>
                        Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3 col-sm-5">
            
        </div>
    </div>
</div>

</footer>

<script src="/typo3temp/assets/compressed/merged-3f956cf16af963a773670d53b9630467-a88799689b8c324ab2f5a94567c53372.js?1665735245" type="text/javascript"></script>



</body>
</html>`);
});

app.listen(3000, () => {
    console.log('Web server started at port 3000')
});