import {hashCode} from "../src/middleware/hashCode";
import {pack, Saffron, Source, unpack, Utils} from "../src";
import {Job, JobStatus} from "../src/components/job";
import {expect} from "chai";
import {ParserType} from "../src/components/ParserClass";
import {Extensions} from "../src/modules/extensions";
import {ParserLoader} from "../src/modules/parsers/ParserLoader";
import {HTMLParser} from "../src/modules/parsers/html.parser";
import {RssParser} from "../src/modules/parsers/rss.parser";
import {WordpressV2Parser} from "../src/modules/parsers/wordpress.v2.parser";
import {DynamicParser} from "../src/modules/parsers/dynamic.parser";
import * as path from "node:path";
import * as fs from "node:fs";
import {Config} from "../src/components/config";
import type {AxiosResponse} from "axios";

const randStr = (myLength: number) => {
    const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from({length: myLength},
        (v, k) => chars[Math.floor(Math.random() * chars.length)]);
    return randomArray.join("");
};

describe('Other', function () {
    it('Hash code', function () {
        const strings: string[] = [];
        for (let i = 0; i < 100; i++)
            strings.push(randStr(i));

        for (const s of strings)
            expect(hashCode(s)).to.equal(hashCode(s));
    });

    it('Serializer', function () {
        return Source.parseSourceFile({
            name: 'source-name',
            tableName: 'table-name',
            interval: 10000,
            retryInterval: 5000,
            axios: {
                timeout: 20000,
            },
            extra: ['random', 'data'],
            amount: 100,
            ignoreCertificates: true,
            encoding: 'iso-8859-7',
            url: [
                ['Category 1', 'https://example.com'],
                ['Category 2', 'Category 3', 'https://example2.com']
            ],
            type: 'wordpress-v2',
            scrape: {articles: {}}
        }, null).then(jobSource => {
            const job = new Job(jobSource, 'worker-id', 25000, null);

            const packed = pack(job);
            const unpacked: Job = unpack(packed);

            expect(job.source.name).to.equal('source-name');
            expect(job.worker).to.equal('worker-id');
            expect(job.attempts).to.equal(0);
            expect(job.emitAttempts).to.equal(0);
            expect(job.untilRetry).to.be.greaterThanOrEqual(0);
            expect(job.status).to.equal(JobStatus.PENDING);

            const source = unpacked.source;
            expect(source.name).to.equal('source-name');
            expect(source.tableName).to.equal('table-name');
            expect(source.interval).to.equal(10000);
            expect(source.retryInterval).to.equal(5000);
            expect(source.extra).to.deep.equal(['random', 'data']);
            expect(source.instructions.axios.timeout).to.equal(20000);
            expect(source.instructions.amount).to.equal(100);
            expect(source.instructions.ignoreCertificates).to.equal(true);

            expect(source.instructions.url.length).to.equal(2);
            for (const p of source.instructions.url) {
                if (p.url === 'https://example.com')
                    expect(p.aliases).to.deep.equal(['Category 1']);
                else if (p.url === 'https://example2.com')
                    expect(p.aliases).to.deep.equal(['Category 2', 'Category 3']);
            }

            expect(source.instructions.parserType).to.equal(ParserType.WORDPRESS_V2);
        });
    });

    it('Utils - Extract links', function () {
        const utils = new Utils();

        expect(utils.extractLinks()).to.deep.equal([]);
        expect(utils.extractLinks('')).to.deep.equal([]);

        const a = utils.extractLinks(`<a href="url1">text1</a>`)
        expect(a.length).to.equal(1);
        expect(a[0].text).to.equal('text1');
        expect(a[0].value).to.equal('url1');
        expect(a[0].attribute).to.equal('href');

        const src = utils.extractLinks(`<img src="url2"/>`)
        expect(src.length).to.equal(1);
        expect(src[0].text).to.be.undefined;
        expect(src[0].value).to.equal('url2');
        expect(src[0].attribute).to.equal('src');

        const link = utils.extractLinks(`<link href="url3">`)
        expect(link.length).to.equal(1);
        expect(link[0].text).to.equal('');
        expect(link[0].value).to.equal('url3');
        expect(link[0].attribute).to.equal('href');

        const all = utils.extractLinks(`<a href="url1">text1</a><img src="url2"/><link href="url3"><img src="url4"/>`)
        expect(all.length).to.equal(4);
        expect(all[0].text).to.equal('text1');
        expect(all[0].value).to.equal('url1');
        expect(all[0].attribute).to.equal('href');
        expect(all[1].text).to.be.undefined;
        expect(all[1].value).to.equal('url2');
        expect(all[1].attribute).to.equal('src');
        expect(all[2].text).to.be.undefined;
        expect(all[2].value).to.equal('url4');
        expect(all[2].attribute).to.equal('src');
        expect(all[3].text).to.equal('');
        expect(all[3].value).to.equal('url3');
        expect(all[3].attribute).to.equal('href');
    });

    it('Utils - HTML cleanup text', function () {
        const utils = new Utils();
        expect(utils.cleanupHTMLText('', false)).to.equal('');
        expect(utils.cleanupHTMLText(`<a href="url1">text1</a>`, true)).to.equal('text1')
        expect(utils.cleanupHTMLText(`<a href="url1">text1</a>`, false)).to.equal(`<a href="url1">text1</a>`)
        expect(utils.cleanupHTMLText(`<p>My custom text 123</p>`, true)).to.equal('My custom text 123')
        expect(utils.cleanupHTMLText(`<p>My custom text with <br /> text</p>`, true)).to.equal('My custom text with  text')
    });

    it('Extensions', function () {
        const ext = new Extensions();
        let counter = 0;

        ext.push({event: 'articles', callback: () => counter = 1});
        ext.push({event: 'article.format', callback: () => counter = 2});
        ext.push({event: 'article.format', callback: () => counter = 3});
        ext.push({event: 'articles', callback: () => counter = 4});
        ext.push({event: 'article.format', callback: () => counter = 5});

        let getExtPair = ext.startPairCount('articles');
        let pair: any;
        let expectedValue = 1;
        while ((pair = getExtPair()) != null) {
            pair.callback();
            expect(counter).to.equal(expectedValue++)
        }
    });

    it('Parsers - Type translation', function () {
        expect(ParserType.getFromString('html')).to.equal(ParserType.HTML)
        expect(ParserType.getFromString('rss')).to.equal(ParserType.RSS)
        expect(ParserType.getFromString('dynamic')).to.equal(ParserType.DYNAMIC)
        expect(ParserType.getFromString('wordpress-v2')).to.equal(ParserType.WORDPRESS_V2)
        expect(ParserType.getFromString('failed')).to.equal(ParserType.UNKNOWN)
    });

    it('Parsers - Loader', function () {
        expect(ParserLoader.getParser(ParserType.HTML)).to.be.instanceof(HTMLParser);
        expect(ParserLoader.getParser(ParserType.RSS)).to.be.instanceof(RssParser);
        expect(ParserLoader.getParser(ParserType.WORDPRESS_V2)).to.be.instanceof(WordpressV2Parser);
        expect(ParserLoader.getParser(ParserType.DYNAMIC)).to.be.instanceof(DynamicParser);
    });

    it('Proxy - Enabled', function () {
        // Read with fs, because require will cache the file and the changes will be moved to the other tests
        const sourceFile = JSON.parse(fs.readFileSync(path.join(__dirname, './sources/html/html1.json'), 'utf8'));
        sourceFile.url[0][1] = "http://127.0.0.1:3000/html2"; // Proxy should return the file for html1
        sourceFile.axios = {
            proxy: {
                host: '127.0.0.1',
                port: 4000
            }
        };
        return Saffron.parse(sourceFile, null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['Γενικές Ανακοινώσεις']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html2');
            expect(obj.articles.length).to.equal(10);
        });
    });

    it('Proxy - Disabled', function () {
        // Read with fs, because require will cache the file and the changes will be moved to the other tests
        const sourceFile = JSON.parse(fs.readFileSync(path.join(__dirname, './sources/html/html1.json'), 'utf8'));
        sourceFile.url[0][1] = "http://127.0.0.1:3000/html2"; // Web server should return the file for html2
        // Proxy is disabled, so it should fail parsing
        return Saffron.parse(sourceFile, null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['Γενικές Ανακοινώσεις']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html2');
            expect(obj.articles.length).to.equal(0);
        });
    });

    it('Config - Axios builder', function () {
        process.env.NODE_ENV = undefined;

        const sourceFile = JSON.parse(fs.readFileSync(path.join(__dirname, './sources/html/html1.json'), 'utf8'));
        const c = new Config();
        c.config.workers.axios = async (source: Source) => ({
            timeout: 12345,
            maxRedirects: 1000
        });

        return Source.parseSourceFile(sourceFile, c).then(source => {
            expect(source.instructions.axios).to.deep.equal({
                timeout: 12345,
                maxRedirects: 1000
            });
        });
    });

    it('Config - Preprocessor', function () {
        process.env.NODE_ENV = undefined;

        const sourceFile = JSON.parse(fs.readFileSync(path.join(__dirname, './sources/html/html1.json'), 'utf8'));
        const c = new Config();
        c.config.workers.preprocessor = async (r, s) => {
            // Set response to html2 file
            (r as AxiosResponse).data = (r as AxiosResponse).data.replace('Εις μνήμην Χρυσούλας Τόμπρου', 'saffron-test');
            return r;
        }

        return Saffron.parse(sourceFile, c).then(result => {
            const article = result[0].articles[0];
            expect(article.title).to.equal('saffron-test');
            expect(article.content).to.equal('Στις 26 Αυγούστου έφυγε από κοντά μας,\n ύστερα από πολύμηνη ασθένεια, το εξαίρετο μέλος ΕΕΠ και εκλεκτή\n συνάδελφος Χρυσούλα Τόμπρου αφήνοντας ένα μεγάλο και δυσαναπλήρωτο κενό\n τόσο στον τομέα Ξένων Γλωσσών του Πανεπιστημίου μας, το οποίο με ζήλο\n υπηρέτησε για 36 συναπτά έτη, όσο και σε εμάς τις συναδέλφους της. Έφυγε\n αθόρυβα όπως αθόρυβη και διακριτική υπήρξε σε όλη της τη ζωή.\n \n Ως καθηγήτρια υπήρξε πάντοτε συνεπής και\n αφοσιωμένη στο καθήκον της με γνήσιο ενδιαφέρον για την επιστήμη της και\n βαθιά αγάπη για τον άνθρωπο. Ανήσυχο και δημιουργικό πνεύμα, πάντα\n ενημερωμένο γύρω από τις τελευταίες εξελίξεις. Ήταν άριστη παιδαγωγός,\n με υψηλό αίσθημα ευθύνης, δεκτική και ανοιχτή σε όλους με ιδιαίτερη\n ευαισθησία σε φοιτητές με δυσκολίες ή προβλήματα.\n \n Ως συνάδελφος ήταν αληθινή, ανιδιοτελής και\n δοτική. Αναλάμβανε αγόγγυστα μεγάλο φόρτο εργασίας πάντα σκεπτόμενη την\n διευκόλυνση του έργου των άλλων. Θα της είμαστε πάντα ευγνώμονες για την\n καθοδήγηση και ενθάρρυνση όλων μας στα πρώτα μας βήματα στο χώρο της\n τριτοβάθμιας εκπαίδευσης. Την ευχαριστούμε για την κατανόησή της, τις\n πολύτιμες συμβουλές και τη συμπαράστασή της στις δύσκολες στιγμές μας ως\n γνήσια φίλη, συνάδελφος και έμπειρη μητέρα. Υπήρξαμε τυχεροί που\n συνεργαστήκαμε μαζί της για πολλά χρόνια.\n \n Θα έχει πάντα τη θέση της στο Γραφείο Ξένων\n Γλωσσών και στην καρδιά μας. Την αποχαιρετούμε με θλίψη, πόνο και\n συγκίνηση αλλά και με την υπόσχεση ότι θα συνεχίσουμε το έργο της και θα\n αξιοποιήσουμε την ανεκτίμητη κληρονομιά που άφησε σε όλους μας.\n \n Στους οικείους της εκφράζουμε τα ειλικρινή\n μας συλλυπητήρια και τη συμμετοχή μας στο βαρύ πένθος τους. Να τη\n θυμούνται πάντα με αγάπη και υπερηφάνεια.\n \n Μέλη ΕΕΠ Γραφείου Ξένων Γλωσσών\n Όσοι επιθυμούν να προσφέρουν κάτι στη μνήμη της, μπορούν να καταθέσουν\n χρήματα στην Κιβωτό του Κόσμου. Παραθέτουμε τους λογαριασμού της\n Κιβωτού.\n \n EUROBANK: 0026 0178 870100 872073 IBAN : GR3702601780000870100872073\n SWIFT / BIC: ERBKGRAA (ΓΙΑ ΕΞΩΤΕΡΙΚΟ)\n ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ: 5023 – 032595 - 870 IBAN:GR3801720230005023032595870\n \n ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ: 100/296102-42 IBAN: GR6201101000000010029610242\n ALPHA BANK: 183002002003534 IBAN: GR4801401830183002002003534\n \n \n Σημείωση\n \n : Κατά την κατάθεση, στην αιτιολογία να συμπληρώσετε (υποχρεωτικά) ότι η\n δωρεά γίνεται εις μνήμην της ΧΡΥΣΟΥΛΑΣ ΤΟΜΠΡΟΥ.\n \n Μετά τη δωρεά σας, παρακαλούμε να επικοινωνήσετε με την Κιβωτό\n προκειμένου να κρατήσουμε τα στοιχεία της απόδειξης.\n \n Τηλ. Επικοινωνίας: 210 5141953 - 210 5141935');
            expect(article.link).to.equal('/unipi/el/ανακοινώσεις/item/13591-εις-μνήμην-χρυσούλας-τόμπρου.html');
            expect(article.pubDate).to.equal('Τετάρτη, 14 Σεπτεμβρίου 2022 12:15');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });
});