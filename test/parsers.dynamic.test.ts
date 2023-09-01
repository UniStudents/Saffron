import {Saffron} from "../src/index";
import {expect} from "chai";

describe("Dynamic parser", function () {
    it('Test 1', function () {
        return Saffron.parse(require('./sources/dynamic/dynamic1'), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['General']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html');
            expect(obj.articles.length).to.equal(1);

            for (const article of obj.articles) {
                expect(article.source).to.equal('dynamic-source');

                expect(article.title).to.equal('My title');
                expect(article.content).to.equal('My content');
                expect(article.link).to.equal('My link');
                expect(article.pubDate).to.equal('My date');
                expect(article.categories.length).to.equal(2);

                expect(article.categories[0].name === 'Custom')
                expect(article.categories[0].links).to.deep.equal(['link2', 'link3']);
                expect(article.categories[1].name === 'General')
                expect(article.categories[1].links).to.deep.equal(['http://127.0.0.1:3000/html']);

                expect(article.attachments.length).to.equal(1);
                expect(article.attachments[0]).to.deep.equal({
                    text: 'My text',
                    value: 'My value',
                    attribute: 'href'
                });
                expect(article.thumbnail).to.equal('My thumbnail');
            }
        });
    });
});