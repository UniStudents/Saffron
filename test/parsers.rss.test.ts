import {Saffron} from "../src/index";
import {expect} from "chai";

describe("RSS parser", function () {
    it('Test 1', function () {
        return Saffron.parse(require("./sources/rss/rss1.json"), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/rss1');
            expect(obj.articles.length).to.equal(7);

            for (const article of obj.articles) {
                expect(article.source).to.equal('rss1-source');
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

    it('Test 2', function () {
        return Saffron.parse(require("./sources/rss/rss2.json"), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/rss2');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.source).to.equal('rss2-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('04.11.2002 Πρόσκληση εκδήλωσης ενδιαφέροντος, για την ανάδειξη αναδόχου για την «Προμήθεια Ηλεκτρονικών Υπολογιστών και εκτυπωτών, για την κάλυψη αναγκών της ΑΣΠΑΙΤΕ στο Μαρούσι στο έτος 2022');
            expect(article.content).to.equal("04.11.2022 Πρόσκληση εκδήλωσης ενδιαφέροντος, για την ανάδειξη αναδόχου για την «Προμήθεια Ηλεκτρονικών Υπολογιστών και εκτυπωτών, για την κάλυψη αναγκών της ΑΣΠΑΙΤΕ στο Μαρούσι στο έτος 2022 04.11.2022 Τεχνικές Προδιαγραφές 08.11.2022 Ανακοίνωση σε σχέση με την πρόσκληση με αριθμ. πρωτ. 18811_2022/4-11-2022 για την «Προμήθεια Ηλεκτρονικών Υπολογιστών και εκτυπωτών, για την κάλυψη αναγκών της ΑΣΠΑΙΤΕ στο Μαρούσι [&#8230;]");
            expect(article.link).to.equal('https://www.aspete.gr/04-11-2002-prosklisi-ekdilosis-endiaferontos-gia-tin-anadeixi-anadochoy-gia-tin-promitheia-ilektronikon-ypologiston-kai-ektypoton-gia-tin-kalypsi-anagkon-tis-aspaite-sto-maroysi-sto-etos-2022/');
            expect(article.pubDate).to.equal('Fri, 04 Nov 2022 12:40:19 +0000');
            expect(article.categories.length).to.equal(1);
            expect(article.categories[0].name).to.equal('Προκηρύξεις Διαγωνισμών')
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Test 3', function () {
        return Saffron.parse(require("./sources/rss/rss3.json"), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/rss3');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.source).to.equal('rss3-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('http://mbatqm.unipi.gr/%ce%bd%ce%ad%ce%b1-y%cf%80%ce%bf%ce%b2%ce%bf%ce%bb%ce%ae-%ce%b1%ce%b9%cf%84%ce%ae%cf%83%ce%b5%cf%89%ce%bd-%ce%b1%cf%80%cf%8c-22-8-2022-%ce%bc%ce%ad%cf%87%cf%81%ce%b9-%ce%ba%ce%b1%ce%b9-5-9-2022/');
            expect(article.content).to.equal("<p>&#160; Το Τμήμα Οργάνωσης και Διοίκησης Επιχειρήσεων του Πανεπιστημίου Πειραιώς, για το ακαδημαϊκό έτος 2022-23 ανακοινώνει εκ νέου την προκήρυξη της νέας σειράς για τα Προγράμματα Μεταπτυχιακών Σπουδών του Τμήματος  Οι ενδιαφερόμενοι θα πρέπει να υποβάλλουν από 22/8/2022 μέχρι και 5/9/2022 ηλεκτρονικά ή στη Γραμματεία του Τμήματος τα παρακάτω δικαιολογητικά:: Συμπληρωμένη έντυπη αίτηση (χορηγείται από το [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"http://mbatqm.unipi.gr/%ce%bd%ce%ad%ce%b1-y%cf%80%ce%bf%ce%b2%ce%bf%ce%bb%ce%ae-%ce%b1%ce%b9%cf%84%ce%ae%cf%83%ce%b5%cf%89%ce%bd-%ce%b1%cf%80%cf%8c-22-8-2022-%ce%bc%ce%ad%cf%87%cf%81%ce%b9-%ce%ba%ce%b1%ce%b9-5-9-2022/\">Νέα Yποβολή αιτήσεων από 22/8/2022 μέχρι και 5/9/2022</a> appeared first on <a rel=\"nofollow\" href=\"http://mbatqm.unipi.gr\">mbatqm.unipi.gr</a>.</p>");
            expect(article.link).to.equal('http://mbatqm.unipi.gr/%ce%bd%ce%ad%ce%b1-y%cf%80%ce%bf%ce%b2%ce%bf%ce%bb%ce%ae-%ce%b1%ce%b9%cf%84%ce%ae%cf%83%ce%b5%cf%89%ce%bd-%ce%b1%cf%80%cf%8c-22-8-2022-%ce%bc%ce%ad%cf%87%cf%81%ce%b9-%ce%ba%ce%b1%ce%b9-5-9-2022/');
            expect(article.pubDate).to.equal('Mon, 22 Aug 2022 08:27:59 +0000');
            expect(article.categories.length).to.equal(1);
            expect(article.categories[0].name).to.equal('Ανακοινώσεις')
            expect(article.attachments.length).to.equal(2);
            expect(article.attachments[0].text).to.equal('Νέα Yποβολή αιτήσεων από 22/8/2022 μέχρι και 5/9/2022')
            expect(article.attachments[0].value).to.equal('http://mbatqm.unipi.gr/%ce%bd%ce%ad%ce%b1-y%cf%80%ce%bf%ce%b2%ce%bf%ce%bb%ce%ae-%ce%b1%ce%b9%cf%84%ce%ae%cf%83%ce%b5%cf%89%ce%bd-%ce%b1%cf%80%cf%8c-22-8-2022-%ce%bc%ce%ad%cf%87%cf%81%ce%b9-%ce%ba%ce%b1%ce%b9-5-9-2022/')
            expect(article.attachments[0].attribute).to.equal('href')
            expect(article.attachments[1].text).to.equal('mbatqm.unipi.gr')
            expect(article.attachments[1].value).to.equal('http://mbatqm.unipi.gr')
            expect(article.attachments[1].attribute).to.equal('href')
            expect(Object.keys(article.extras).length).to.equal(2);
            expect(article.extras['dc:creator']).to.equal('my-email@gmail.com');
            expect(article.extras['test']).to.equal('Νέα Yποβολή αιτήσεων από 22/8/2022 μέχρι και 5/9/2022');
            expect(article.thumbnail).to.be.undefined;
        });
    });
});