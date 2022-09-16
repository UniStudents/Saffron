import {ParserType} from "../src/components/ParserType";
import ParserLoader from "../src/modules/parsers/ParserLoader";
import {expect} from "chai";
import {HTMLParser} from "../src/modules/parsers/drivers/HTMLParser";
import {RSSParser} from "../src/modules/parsers/drivers/RSSParser";
import {WordpressV1Parser} from "../src/modules/parsers/drivers/WordpressV1Parser";
import {WordpressV2Parser} from "../src/modules/parsers/drivers/WordpressV2Parser";
import {DynamicParser} from "../src/modules/parsers/drivers/DynamicParser";
import {Saffron, Utils, Article} from "../src/index";

describe("Parsers", function () {
    it('Type translation', function () {
        expect(ParserType.getFromString('html')).to.equal(ParserType.HTML)
        expect(ParserType.getFromString('rss')).to.equal(ParserType.RSS)
        expect(ParserType.getFromString('dynamic')).to.equal(ParserType.DYNAMIC)
        expect(ParserType.getFromString('wordpress-v1')).to.equal(ParserType.WORDPRESS_V1)
        expect(ParserType.getFromString('wordpress-v2')).to.equal(ParserType.WORDPRESS_V2)
        expect(ParserType.getFromString('wordpress')).to.equal(ParserType.WORDPRESS_V2)
        expect(ParserType.getFromString('failed')).to.equal(ParserType.UNKNOWN)
    });

    it('Loader', function () {
        expect(ParserLoader.getParser(ParserType.HTML)).to.be.instanceof(HTMLParser);
        expect(ParserLoader.getParser(ParserType.RSS)).to.be.instanceof(RSSParser);
        expect(ParserLoader.getParser(ParserType.WORDPRESS_V1)).to.be.instanceof(WordpressV1Parser);
        expect(ParserLoader.getParser(ParserType.WORDPRESS_V2)).to.be.instanceof(WordpressV2Parser);
        expect(ParserLoader.getParser(ParserType.DYNAMIC)).to.be.instanceof(DynamicParser);
    });

    it('Dynamic parser', function () {
        return Saffron.parse({
            url: [
                ["General", 'http://127.0.0.1:3000/html']
            ],
            name: 'dynamic-source',
            type: 'dynamic',
            ignoreCertificates: true,
            scrape: async (utils: Utils, _ArticleInitiator: any) => {
                // Use _ArticleInitiator if you don't want to import Article class.
                const article = new Article();
                article.setTitle('My title');
                article.setContent('My content');
                article.setLink('My link');
                article.setPubDate('My date');
                article.pushCategory('Custom', ['link2', 'link3']);
                article.pushAttachment({
                    text: 'My text',
                    value: 'My value',
                    attribute: 'href'
                });

                article.thumbnail = 'My thumbnail';

                return [article]; // size = 1
            }
        }).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['General']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html');
            expect(obj.articles.length).to.equal(1);

            for (const article of obj.articles) {
                expect(article.id).to.be.a('string').and.satisfy((id: string) => id.startsWith('art_'));
                expect(article.source.id).to.equal('src_dynamic-source');
                expect(article.source.name).to.equal('dynamic-source');

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

    it('HTML parser', function () {
        return Saffron.parse({
            url: [
                ["Γενικές Ανακοινώσεις", 'http://127.0.0.1:3000/html']
            ],
            name: 'html-source',
            type: 'html',
            ignoreCertificates: true,
            scrape: {
                container: ".catItemView",
                endPoint: "unipi.gr",
                article: {
                    "link": {
                        "class": ".catItemTitle",
                        "find": [
                            "a"
                        ],
                        "attributes": [
                            "href"
                        ],
                        "multiple": false
                    },
                    "pubDate": {
                        "class": ".catItemDateCreated",
                        "find": null,
                        "multiple": false
                    },
                    "title": {
                        "class": ".catItemTitle",
                        "find": [
                            "a"
                        ],
                        "multiple": false
                    },
                    "content": {
                        "class": ".catItemIntroText",
                        "find": null,
                        "multiple": false
                    },
                    "attachments": {
                        "class": ".catItemLinks",
                        "attributes": [
                            "value",
                            "href"
                        ],
                        "find": [
                            ".catItemAttachmentsBlock",
                            "li",
                            "a"
                        ],
                        "multiple": true
                    }
                }
            }
        }).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['Γενικές Ανακοινώσεις']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.id).to.be.a('string').and.satisfy((id: string) => id.startsWith('art_'));
                expect(article.source.id).to.equal('src_html-source');
                expect(article.source.name).to.equal('html-source');

                const cat = article.categories.find(cat => cat.name === 'Γενικές Ανακοινώσεις');
                expect(cat).to.not.be.undefined;
                expect(cat!.links).to.deep.equal(['http://127.0.0.1:3000/html']);
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('  Εις μνήμην Χρυσούλας Τόμπρου  ');
            expect(article.content).to.equal('Στις 26 Αυγούστου έφυγε από κοντά μας, ύστερα από πολύμηνη ασθένεια, το εξαίρετο μέλος ΕΕΠ και εκλεκτή συνάδελφος Χρυσούλα Τόμπρου αφήνοντας ένα μεγάλο και δυσαναπλήρωτο κενό τόσο στον τομέα Ξένων Γλωσσών του Πανεπιστημίου μας, το οποίο με ζήλο υπηρέτησε για 36 συναπτά έτη, όσο και σε εμάς τις συναδέλφους της. Έφυγε αθόρυβα όπως αθόρυβη και διακριτική υπήρξε σε όλη της τη ζωή.Ως καθηγήτρια υπήρξε πάντοτε  συνεπής και αφοσιωμένη στο καθήκον της  με γνήσιο ενδιαφέρον για την επιστήμη της και βαθιά αγάπη για τον άνθρωπο. Ανήσυχο και δημιουργικό πνεύμα, πάντα ενημερωμένο γύρω από  τις τελευταίες εξελίξεις. Ήταν άριστη παιδαγωγός, με υψηλό αίσθημα ευθύνης, δεκτική  και ανοιχτή σε όλους με ιδιαίτερη ευαισθησία σε φοιτητές με δυσκολίες ή προβλήματα.Ως συνάδελφος ήταν αληθινή, ανιδιοτελής και δοτική. Αναλάμβανε  αγόγγυστα μεγάλο φόρτο εργασίας  πάντα σκεπτόμενη την διευκόλυνση του έργου των άλλων. Θα της είμαστε πάντα ευγνώμονες  για την καθοδήγηση  και ενθάρρυνση όλων μας  στα πρώτα  μας βήματα στο χώρο της τριτοβάθμιας εκπαίδευσης. Την ευχαριστούμε για την κατανόησή της, τις πολύτιμες συμβουλές και τη συμπαράστασή της στις δύσκολες στιγμές μας  ως γνήσια φίλη, συνάδελφος  και  έμπειρη μητέρα. Υπήρξαμε τυχεροί που συνεργαστήκαμε  μαζί της για πολλά χρόνια.Θα έχει πάντα τη θέση της στο Γραφείο Ξένων Γλωσσών και στην καρδιά μας.  Την αποχαιρετούμε με θλίψη, πόνο και συγκίνηση αλλά και με την υπόσχεση ότι θα συνεχίσουμε το έργο της και θα αξιοποιήσουμε την  ανεκτίμητη κληρονομιά που άφησε σε όλους μας.Στους οικείους της εκφράζουμε τα ειλικρινή μας συλλυπητήρια και τη συμμετοχή μας στο βαρύ πένθος τους. Να τη θυμούνται πάντα με αγάπη και υπερηφάνεια.Μέλη ΕΕΠ Γραφείου Ξένων ΓλωσσώνΌσοι επιθυμούν να προσφέρουν κάτι στη μνήμη της, μπορούν να καταθέσουν χρήματα στην Κιβωτό του Κόσμου. Παραθέτουμε τους λογαριασμού της Κιβωτού.EUROBANK: 0026 0178 870100 872073 IBAN : GR3702601780000870100872073SWIFT / BIC: ERBKGRAA (ΓΙΑ ΕΞΩΤΕΡΙΚΟ)ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ: 5023 – 032595 - 870 IBAN:GR3801720230005023032595870ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ: 100/296102-42 IBAN: GR6201101000000010029610242ALPHA BANK: 183002002003534 IBAN: GR4801401830183002002003534Σημείωση: Κατά την κατάθεση, στην αιτιολογία να συμπληρώσετε (υποχρεωτικά) ότι η δωρεά γίνεται εις μνήμην της ΧΡΥΣΟΥΛΑΣ ΤΟΜΠΡΟΥ. Μετά τη δωρεά σας, παρακαλούμε να επικοινωνήσετε με την Κιβωτό προκειμένου να κρατήσουμε τα στοιχεία της απόδειξης.Τηλ. Επικοινωνίας: 210 5141953 - 210 5141935');
            expect(article.link).to.equal('/unipi/el/ανακοινώσεις/item/13591-εις-μνήμην-χρυσούλας-τόμπρου.html');
            expect(article.pubDate).to.equal(' Τετάρτη, 14 Σεπτεμβρίου 2022 12:15 ');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('RSS parser', function () {
        return Saffron.parse({
            url: 'http://127.0.0.1:3000/rss',
            name: 'rss-source',
            type: 'rss'
        }).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/rss');
            expect(obj.articles.length).to.equal(7);

            for (const article of obj.articles) {
                expect(article.id).to.be.a('string').and.satisfy((id: string) => id.startsWith('art_'));
                expect(article.source.id).to.equal('src_rss-source');
                expect(article.source.name).to.equal('rss-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ ΕΠΑΝΑΛΗΠΤΙΚΗ ΕΞΕΤΑΣΗ ΠΕΡΙΟΔΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2022');
            expect(article.content).to.equal("<p>ΣΤΑ ΕΓΓΡΑΦΑ ΑΝΑΡΤΗΘΗΚΑΝ ΤΑ ΘΕΜΑΤΑ ΤΗΣ ΕΞΕΤΑΣΗΣ-ΕΡΓΑΣΙΑΣ ΠΕΡΙΟΔΟΥ ΣΕΠΤΕΜΒΡΙΟΥ 2022. ΝΑ ΤΑ ΕΧΕΤΕ ΤΥΠΩΜΕΝΑ ΜΑΖΙ ΣΑΣ ΔΙΟΤΙ ΔΕΝ ΘΑ ΔΙΑΝΕΜΗΘΟΥΝ ΦΩΤΟΤΥΠΙΕΣ. ΟΣΟΙ/ΕΣ ΧΡΕΙΑΖΟΝΤΑΙ ΒΕΒΑΙΩΣΗ ΣΥΜΜΕΤΟΧΗΣ ΣΤΗΝ ΕΞΕΤΑΣΗ ΚΑΤΕΒΑΖΟΥΝ ΚΑΙ ΣΥΜΠΛΗΡΩΝΟΥΝ ΤΟ ΣΧΕΤΙΚΟ ΑΡΧΕΙΟ ΠΟΥ ΥΠΑΡΧΕΙ ΣΤΑ ΕΓΓΡΑΦΑ.</p>\n<p>ΚΑΛΟ ΚΑΛΟΚΑΙΡΙ ΚΑΙ ΚΑΛΟ ΔΙΑΒΑΣΜΑ!</p>");
            expect(article.link).to.equal('https://eclass.uoa.gr/modules/announcements/index.php?an_id=416759&course=AEROSPACE119');
            expect(article.pubDate).to.equal('Sun, 31 Jul 2022 23:59:39 +0300');
            expect(article.categories.length).to.equal(0);
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Wordpress V2 parser', function () {
        return Saffron.parse({
            url: 'http://127.0.0.1:3000/',
            name: 'wordpress-source',
            type: 'wordpress-v2'
        }).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/');
            expect(obj.articles.length).to.equal(30);

            for (const article of obj.articles) {
                expect(article.id).to.be.a('string').and.satisfy((id: string) => id.startsWith('art_'));
                expect(article.source.id).to.equal('src_wordpress-source');
                expect(article.source.name).to.equal('wordpress-source');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Αναζήτηση εκπαιδευτικού από τον Όμιλο InTeLab');
            expect(article.content).to.equal("\n<p>Ο εκπαιδευτικός όμιλος InTeLab αναζητεί καθηγητές/τριες</p>\n\n\n\n<p>Μερικής απασχόλησης για την διδασκαλία εκπαιδευτικής ρομποτικής τόσο στα κέντρα μας αλλά και για μαθήματα σε συνεργαζόμενους χώρους σε όλη την Αττική!</p>\n\n\n\n<p><strong>Απαραίτητα προσόντα υποψηφίου:</strong></p>\n\n\n\n<p>Απόφοιτος/η: </p>\n\n\n\n<ul><li>Παιδαγωγικών σπουδών</li><li>Πληροφορικής/Ψηφιακών Συστημάτων</li><li>Θετικών επιστημών</li></ul>\n\n\n\n<p><strong>Προσφέρουμε:</strong></p>\n\n\n\n<p>Εκπαίδευση και συνεχή καθοδήγηση.</p>\n\n\n\n<p>Στείλε μας το βιογραφικό σου στο&nbsp;<a href=\"mailto:info@intelab.gr\">info@intelab.gr</a>&nbsp;ή επικοινώνησε μαζί μας στο 2109851172-4.</p>\n");
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
});