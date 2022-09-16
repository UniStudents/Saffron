import hashCode from "../src/middleware/hashCode";
import {pack, unpack} from "../src/middleware/serializer";
import Job from "../src/components/job";
import {expect} from "chai";
import Source from "../src/components/source";
import {ParserType} from "../src/components/ParserType";
import {JobStatus} from "../src/components/JobStatus";
import Utils from "../src/modules/parsers/Utils";
import Extensions from "../src/modules/extensions";

const randStr = (myLength: number) => {
    const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from({length: myLength},
        (v, k) => chars[Math.floor(Math.random() * chars.length)]);
    return randomArray.join("");
};

describe('Other', function () {
    it('Hash code', function () {
        const strings = [];
        for (let i = 0; i < 100; i++)
            strings.push(randStr(i));

        for(const s of strings)
            expect(hashCode(s)).to.equal(hashCode(s));
    });

    it('Serializer', function () {
        const job = Job.createJob('source_source-name', 'worker-id', 25000);
        job.getSource = () => {
            return Source.fileToSource({
                name: 'source-name',
                tableName: 'table-name',
                interval: 10000,
                retryInterval: 5000,
                timeout: 20000,
                extra: ['random', 'data'],
                amount: 100,
                ignoreCertificates: true,
                encoding: 'iso-8859-7',
                url: [
                    ['Category 1', 'https://example.com'],
                    ['Category 2', 'Category 3', 'https://example2.com']
                ],
                type: 'html',
                scrape: {article: {}}
            });
        };
        job.source.source = job.getSource();

        const packed = pack(job);
        const unpacked: Job = unpack(packed);
        unpacked.getSource = () => unpacked.source.source!;

        expect(job.source.id).to.equal('source_source-name');
        expect(job.worker.id).to.equal('worker-id');
        expect(job.attempts).to.equal(0);
        expect(job.emitAttempts).to.equal(0);
        expect(job.untilRetry).to.be.greaterThanOrEqual(0);
        expect(job.status).to.equal(JobStatus.PENDING);

        const source = unpacked.getSource();
        expect(source.name).to.equal('source-name');
        expect(source.tableName).to.equal('table-name');
        expect(source.interval).to.equal(10000);
        expect(source.retryInterval).to.equal(5000);
        expect(source.timeout).to.equal(20000);
        expect(source.extra).to.deep.equal(['random', 'data']);
        expect(source.instructions.amount).to.equal(100);
        expect(source.instructions.ignoreCertificates).to.equal(true);

        expect(source.instructions.url.length).to.equal(2);
        for(const p of source.instructions.url) {
            if(p.url === 'https://example.com')
                expect(p.aliases).to.deep.equal(['Category 1']);
            else if(p.url === 'https://example2.com')
                expect(p.aliases).to.deep.equal(['Category 2', 'Category 3']);
        }

        expect(source.instructions.parserType).to.equal(ParserType.HTML);
    });

    it('Utils -> Extract links', function () {
        const utils = new Utils();

        expect(utils.extractLinks()).to.deep.equal([]);
        expect(utils.extractLinks('')).to.deep.equal([]);
        // TODO: Add more extract links cases (with html code)
    });

    it('Utils -> HTML cleanup text', function () {
        const utils = new Utils();
        utils.cleanupHTMLText('');
        // TODO: Add more normalize html text cases
    });

    it('Extensions', function () {
        const ext = Extensions.getInstance();
        ext.push({event: 'articles', callback: (...args: any[]) => 0});
        ext.push({event: 'article.format', callback: (...args: any[]) => 1});
        ext.push({event: 'article.format', callback: (...args: any[]) => 2});
        ext.push({event: 'articles', callback: (...args: any[]) => 3});
        ext.push({event: 'article.format', callback: (...args: any[]) => 4});

        let getExtPair = ext.startPairCount();
        let pair: any;
        let expectedValue = 0;
        while ((pair = getExtPair()) != null)
            expect(pair.callback()).to.equal(expectedValue++)
    });
});