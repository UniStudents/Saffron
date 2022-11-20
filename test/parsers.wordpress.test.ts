import {Saffron} from "../src/index";
import {expect} from "chai";

describe("WordPress parser", function () {
    it('Test 1', function () {
        return Saffron.parse(require('./sources/wordpress-v2/wordpress1.json')).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/wp1');
            expect(obj.articles.length).to.equal(30);

            for (const article of obj.articles) {
                expect(article.source).to.equal('wp1-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Αναζήτηση εκπαιδευτικού από τον Όμιλο InTeLab');
            expect(article.content).to.equal("<p>Ο εκπαιδευτικός όμιλος InTeLab αναζητεί καθηγητές/τριες</p>\n<p>Μερικής απασχόλησης για την διδασκαλία εκπαιδευτικής ρομποτικής τόσο στα κέντρα μας αλλά και για μαθήματα σε συνεργαζόμενους χώρους σε όλη την Αττική!</p>\n<p><strong>Απαραίτητα προσόντα υποψηφίου:</strong></p>\n<p>Απόφοιτος/η: </p>\n<ul><li>Παιδαγωγικών σπουδών</li><li>Πληροφορικής/Ψηφιακών Συστημάτων</li><li>Θετικών επιστημών</li></ul>\n<p><strong>Προσφέρουμε:</strong></p>\n<p>Εκπαίδευση και συνεχή καθοδήγηση.</p>\n<p>Στείλε μας το βιογραφικό σου στο <a href=\"mailto:info@intelab.gr\">info@intelab.gr</a> ή επικοινώνησε μαζί μας στο 2109851172-4.</p>");
            expect(article.link).to.equal('https://www.ds.unipi.gr/2022/09/15/intelab_anazitisi_ekpaideytikou_sept_2022/');
            expect(article.categories.length).to.equal(1);
            expect(article.categories[0].name).to.equal('Προοπτικές Εργασίας');
            expect(article.categories[0].links).to.deep.equal([
                'https://www.ds.unipi.gr/wp-json/wp/v2/categories/63',
                'https://www.ds.unipi.gr/wp-json/wp/v2/categories',
                'https://www.ds.unipi.gr/wp-json/wp/v2/taxonomies/category',
                'https://www.ds.unipi.gr/wp-json/wp/v2/posts?categories=63',
                'https://api.w.org/{rel}'
            ]);
            expect(article.pubDate).to.equal('2022-09-15T11:08:05');
            expect(article.attachments.length).to.equal(1);
            expect(article.attachments[0].text).to.equal('info@intelab.gr');
            expect(article.attachments[0].value).to.equal('mailto:info@intelab.gr');
            expect(article.attachments[0].attribute).to.equal('href');
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Test 2', function () {
        return Saffron.parse(require('./sources/wordpress-v2/wordpress2.json')).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/wp2');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.source).to.equal('wp2-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Απολογισμός της δράσης της απελθούσας Διοίκησης 2021-2022');
            expect(article.content).to.equal('<h1>Απολογισμός της δράσης της απελθούσας Διοίκησης 2021-2022</h1>\n<h3><a href="https://pdfhost.io/v/S2ZXM7PhW_1666978474377">Διαβάστε όλο τον απολογισμό εδώ</a></h3>\n<p>Με το πέρας της θητείας μας ως Διοικητική Ομάδα του Finance Club UniPi, θα ήθελα κατ’ αρχήν να<br />\nευχαριστήσω το Τμήμα Χρηματοοικονομικής και Τραπεζικής Διοικητικής του Πανεπιστημίου Πειραιώς<br />\nγια την εμπιστοσύνη που έδειξε στην ομάδα μας, καθώς και όλα τα μέλη και τους συνεργάτες που μας<br />\nσυντρόφεψαν σε αυτήν την δημιουργική πορεία, συμβάλλοντας έτσι ουσιαστικά στην επίτευξη του<br />\nκοινού μας στόχου για γεφύρωση του ακαδημαϊκού και επαγγελματικού κόσμου, αλλά και την ατομική<br />\nεξέλιξη των μελών μας σε προσωπικό, επιστημονικό και επαγγελματικό επίπεδο.</p>\n<p>Χριστιάνα Τσέλιου &#8211; Απελθούσα Πρόεδρος του<br />\nFinance Club UniPi</p>');
            expect(article.link).to.equal('https://financeclub.unipi.gr/2022/11/03/%ce%b1%cf%80%ce%bf%ce%bb%ce%bf%ce%b3%ce%b9%cf%83%ce%bc%cf%8c%cf%82-%cf%84%ce%b7%cf%82-%ce%b4%cf%81%ce%ac%cf%83%ce%b7%cf%82-%cf%84%ce%b7%cf%82-%ce%b1%cf%80%ce%b5%ce%bb%ce%b8%ce%bf%cf%8d%cf%83%ce%b1/');
            expect(article.categories.length).to.equal(1);
            expect(article.categories[0].name).to.equal('post grid 1');
            expect(article.categories[0].links).to.deep.equal([
                'https://financeclub.unipi.gr/wp-json/wp/v2/categories/84',
                'https://financeclub.unipi.gr/wp-json/wp/v2/categories',
                'https://financeclub.unipi.gr/wp-json/wp/v2/taxonomies/category',
                'https://financeclub.unipi.gr/wp-json/wp/v2/posts?categories=84',
                'https://api.w.org/{rel}'
            ]);
            expect(article.pubDate).to.equal('2022-11-03T21:19:47');
            expect(article.attachments.length).to.equal(1);
            expect(article.attachments[0].text).to.equal('Διαβάστε όλο τον απολογισμό εδώ');
            expect(article.attachments[0].value).to.equal('https://pdfhost.io/v/S2ZXM7PhW_1666978474377');
            expect(article.attachments[0].attribute).to.equal('href');
            expect(article.thumbnail).to.be.undefined;
            expect(obj.articles[1].thumbnail).to.equal('https://financeclub.unipi.gr/wp-content/uploads/2022/09/cfa-opengraph-share-image-768x401.png');
        });
    });
});