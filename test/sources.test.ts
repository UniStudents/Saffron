import Source from "../src/components/source";
import {ParserType} from "../src/components/ParserClass";
import {expect} from "chai";

describe('Sources', function () {
    it('Parsing', function () {
        const source = Source.parseSourceFile({
            name: 'source-name',
            tableName: 'table-name',
            interval: 10000,
            retryInterval: 5000,
            timeout: 20000,
            extra: ['random', 'data'],
            amount: 100,
            ignoreCertificates: true,
            encoding: 'iso-8859-7',
            userAgent: 'user-agent',
            url: [
                ['Category 1', 'https://example.com'],
                ['Category 2', 'Category 3', 'https://example2.com']
            ],
            type: 'wordpress-v2',
            scrape: {articles: {}}
        }, null);

        expect(source.name).to.equal('source-name');
        expect(source.tableName).to.equal('table-name');
        expect(source.interval).to.equal(10000);
        expect(source.retryInterval).to.equal(5000);
        expect(source.extra).to.deep.equal(['random', 'data']);
        expect(source.instructions.timeout).to.equal(20000);
        expect(source.instructions.amount).to.equal(100);
        expect(source.instructions.userAgent).to.equal('user-agent');
        expect(source.instructions.ignoreCertificates).to.equal(true);
        expect(source.instructions.textDecoder.encoding).to.equal('iso-8859-7');

        expect(source.instructions.url.length).to.equal(2);
        for(const p of source.instructions.url) {
            if(p.url === 'https://example.com')
                expect(p.aliases).to.deep.equal(['Category 1']);
            else if(p.url === 'https://example2.com')
                expect(p.aliases).to.deep.equal(['Category 2', 'Category 3']);
        }

        expect(source.instructions.parserType).to.equal(ParserType.WORDPRESS_V2);
    });
})