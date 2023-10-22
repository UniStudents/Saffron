import {Saffron} from "../src/index";
import {expect} from "chai";
import * as util from "util";

describe("JSON parser", function () {
    it('Test 1', function () {
        return Saffron.parse(require('./sources/json/json1.json'), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/wp2/wp-json/wp/v2/articles');
            expect(obj.articles.length).to.equal(8);

            for (const article of obj.articles) {
                expect(article.source).to.equal('json1-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Απολογισμός της δράσης της απελθούσας Διοίκησης 2021-2022');
            expect(article.content).to.equal('<h1>Απολογισμός της δράσης της απελθούσας Διοίκησης 2021-2022</h1>\n<h3><a href="https://pdfhost.io/v/S2ZXM7PhW_1666978474377">Διαβάστε όλο τον απολογισμό εδώ</a></h3>\n<p>Με το πέρας της θητείας μας ως Διοικητική Ομάδα του Finance Club UniPi, θα ήθελα κατ’ αρχήν να<br />\nευχαριστήσω το Τμήμα Χρηματοοικονομικής και Τραπεζικής Διοικητικής του Πανεπιστημίου Πειραιώς<br />\nγια την εμπιστοσύνη που έδειξε στην ομάδα μας, καθώς και όλα τα μέλη και τους συνεργάτες που μας<br />\nσυντρόφεψαν σε αυτήν την δημιουργική πορεία, συμβάλλοντας έτσι ουσιαστικά στην επίτευξη του<br />\nκοινού μας στόχου για γεφύρωση του ακαδημαϊκού και επαγγελματικού κόσμου, αλλά και την ατομική<br />\nεξέλιξη των μελών μας σε προσωπικό, επιστημονικό και επαγγελματικό επίπεδο.</p>\n<p>Χριστιάνα Τσέλιου &#8211; Απελθούσα Πρόεδρος του<br />\nFinance Club UniPi</p>\n');
            expect(article.link).to.equal('https://financeclub.unipi.gr/2022/11/03/%ce%b1%cf%80%ce%bf%ce%bb%ce%bf%ce%b3%ce%b9%cf%83%ce%bc%cf%8c%cf%82-%cf%84%ce%b7%cf%82-%ce%b4%cf%81%ce%ac%cf%83%ce%b7%cf%82-%cf%84%ce%b7%cf%82-%ce%b1%cf%80%ce%b5%ce%bb%ce%b8%ce%bf%cf%8d%cf%83%ce%b1/');
            expect(article.categories.length).to.equal(0);
            expect(article.pubDate).to.equal('2022-11-03T21:19:47');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
            expect(obj.articles[1].thumbnail).to.equal('https://financeclub.unipi.gr/wp-content/uploads/2022/09/cfa-opengraph-share-image-300x300.png');
        });
    });
});