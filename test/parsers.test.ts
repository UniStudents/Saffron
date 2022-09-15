import {ParserType} from "../src/components/ParserType";
import {expect} from "chai";


describe("Parsers", function () {
    it('Parser type translation', function () {
        expect(ParserType.getFromString('html')).to.equal(ParserType.HTML)
        expect(ParserType.getFromString('rss')).to.equal(ParserType.RSS)
        expect(ParserType.getFromString('dynamic')).to.equal(ParserType.DYNAMIC)
        expect(ParserType.getFromString('wordpress-v1')).to.equal(ParserType.WORDPRESS_V1)
        expect(ParserType.getFromString('wordpress-v2')).to.equal(ParserType.WORDPRESS_V2)
        expect(ParserType.getFromString('wordpress')).to.equal(ParserType.WORDPRESS_V2)
        expect(ParserType.getFromString('failed')).to.equal(ParserType.UNKNOWN)
    });
});