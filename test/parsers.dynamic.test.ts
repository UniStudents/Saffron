import {Saffron,} from "../src/index";
import {expect} from "chai";
import {Dynamic1} from "./abc_dynamics";

describe("Dynamic parser", function () {
    it('Test 1', function () {
        return Saffron.parse({
            url: 'http://127.0.0.1:3000/rss1',
            name: 'dynamic1-source',
            type: 'dynamic',
            ignoreCertificates: true,
            scrape: {
                implementation: 'dynamic-1'
            }
        }, {
            sources: {
                dynamicSourceFiles: [new Dynamic1()]
            }
        }).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/rss1');
            expect(obj.articles.length).to.equal(7);

            for (const article of obj.articles) {
                expect(article.source).to.equal('dynamic1-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ ΕΠΑΝΑΛΗΠΤΙΚΗ ΕΞΕΤΑΣΗ ΠΕΡΙΟΔΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2022');
            expect(article.content).to.equal("<p>ΣΤΑ ΕΓΓΡΑΦΑ ΑΝΑΡΤΗΘΗΚΑΝ ΤΑ ΘΕΜΑΤΑ ΤΗΣ ΕΞΕΤΑΣΗΣ-ΕΡΓΑΣΙΑΣ ΠΕΡΙΟΔΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2022. ΝΑ\n ΤΑ ΕΧΕΤΕ ΤΥΠΩΜΕΝΑ ΜΑΖΙ ΣΑΣ ΔΙΟΤΙ ΔΕΝ ΘΑ ΔΙΑΝΕΜΗΘΟΥΝ ΦΩΤΟΤΥΠΙΕΣ. ΟΣΟΙ/ΕΣ ΧΡΕΙΑΖΟΝΤΑΙ ΒΕΒΑΙΩΣΗ ΣΥΜΜΕΤΟΧΗΣ\n ΣΤΗΝ ΕΞΕΤΑΣΗ ΚΑΤΕΒΑΖΟΥΝ ΚΑΙ ΣΥΜΠΛΗΡΩΝΟΥΝ ΤΟ ΣΧΕΤΙΚΟ ΑΡΧΕΙΟ ΠΟΥ ΥΠΑΡΧΕΙ ΣΤΑ ΕΓΓΡΑΦΑ.</p>\n <p>ΚΑΛΟ ΚΑΛΟΚΑΙΡΙ ΚΑΙ ΚΑΛΟ ΔΙΑΒΑΣΜΑ!</p>");
            expect(article.link).to.equal('https://eclass.uoa.gr/modules/announcements/index.php?an_id=416759&course=AEROSPACE119');
            expect(article.pubDate).to.equal('Sun, 31 Jul 2022 23:59:39 +0300');
            expect(article.categories.length).to.equal(0);
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });
});