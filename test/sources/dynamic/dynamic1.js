module.exports = {
    url: [
        ["General", 'http://127.0.0.1:3000/html']
    ],
    name: 'dynamic-source',
    type: 'dynamic',
    ignoreCertificates: true,
    scrape: async (utils, Article) => {
        const article = new Article();
        article.title = 'My title';
        article.content = 'My content';
        article.link = 'My link';
        article.pubDate = 'My date';
        article.pushCategory('Custom', ['link2', 'link3']);
        article.pushAttachment({
            text: 'My text',
            value: 'My value',
            attribute: 'href'
        });

        article.thumbnail = 'My thumbnail';

        return [article]; // size = 1
    }
}