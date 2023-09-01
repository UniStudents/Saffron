import express from "express";
import {createProxyMiddleware, responseInterceptor} from "http-proxy-middleware";
import * as fs from "node:fs";
import * as path from "node:path";

const app = express();
const proxyApp = express();

app.get('/wp1/wp-json/wp/v2/categories/', function (req, res) {
    res.status(200).sendFile('./webfiles/wp1-categories.json', {
        root: path.join(__dirname)
    });
});
app.get('/wp1/wp-json/wp/v2/posts', function (req, res) {
    res.status(200).sendFile('./webfiles/wp1-posts.json', {
        root: path.join(__dirname)
    });
});

app.get('/wp2/wp-json/wp/v2/categories/', function (req, res) {
    res.status(200).sendFile('./webfiles/wp2-categories.json', {
        root: path.join(__dirname)
    });
});
app.get('/wp2/wp-json/wp/v2/articles', function (req, res) {
    res.status(200).sendFile('./webfiles/wp2-posts.json', {
        root: path.join(__dirname)
    });
});

app.get('/rss1', function (req, res) {
    res.status(200).sendFile('./webfiles/rss1.xml', {
        root: path.join(__dirname)
    });
});
app.get('/rss2', function (req, res) {
    res.status(200).sendFile('./webfiles/rss2.xml', {
        root: path.join(__dirname)
    });
});
app.get('/rss3', function (req, res) {
    res.status(200).sendFile('./webfiles/rss3.xml', {
        root: path.join(__dirname)
    });
});

app.get('/html1', function (req, res) {
    res.status(200).sendFile('./webfiles/html1.html', {
        root: path.join(__dirname)
    });
});
app.get('/html2', function (req, res) {
    res.status(200).sendFile('./webfiles/html2.html', {
        root: path.join(__dirname)
    });
});
app.get('/html3', function (req, res) {
    res.status(200).sendFile('./webfiles/html3.html', {
        root: path.join(__dirname)
    });
});
app.get('/html4', function (req, res) {
    res.status(200).sendFile('./webfiles/html4.html', {
        root: path.join(__dirname)
    });
});

proxyApp.use(createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    selfHandleResponse: true,
    onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
        return fs.readFileSync(path.join(__dirname, './webfiles/html1.html'), 'utf8');
    })
}));

app.listen(3000, () => {
    console.log('Web server started at port 3000');
});

proxyApp.listen(4000, () => {
    console.log('Proxy server started at port 4000');
});

process.on('unhandledRejection', function onUncaught(err) {
    console.log(err);
    process.exit(1);
});
