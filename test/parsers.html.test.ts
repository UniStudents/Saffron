import {Saffron} from "../src/index";
import {expect} from "chai";

describe("HTML parser", function () {
    it('Test 1', function () {
        return Saffron.parse(require('./sources/html/html1.json'), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['Γενικές Ανακοινώσεις']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html1');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.source).to.equal('html1-source');

                const invCat = article.categories?.find(cat => cat.name === 'Γενικές Ανακοινώσεις');
                expect(invCat).to.be.undefined;

                expect(article.extras['__url_categories']).to.not.be.undefined.not;
                const cat = article.extras['__url_categories'].find(cat => cat.name === 'Γενικές Ανακοινώσεις');
                expect(cat).to.not.be.undefined.not;
                expect(cat.links).to.deep.equal(['http://127.0.0.1:3000/html1']);
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Εις μνήμην Χρυσούλας Τόμπρου');
            expect(article.content).to.equal('Στις 26 Αυγούστου έφυγε από κοντά μας,\n ύστερα από πολύμηνη ασθένεια, το εξαίρετο μέλος ΕΕΠ και εκλεκτή\n συνάδελφος Χρυσούλα Τόμπρου αφήνοντας ένα μεγάλο και δυσαναπλήρωτο κενό\n τόσο στον τομέα Ξένων Γλωσσών του Πανεπιστημίου μας, το οποίο με ζήλο\n υπηρέτησε για 36 συναπτά έτη, όσο και σε εμάς τις συναδέλφους της. Έφυγε\n αθόρυβα όπως αθόρυβη και διακριτική υπήρξε σε όλη της τη ζωή.\n \n Ως καθηγήτρια υπήρξε πάντοτε συνεπής και\n αφοσιωμένη στο καθήκον της με γνήσιο ενδιαφέρον για την επιστήμη της και\n βαθιά αγάπη για τον άνθρωπο. Ανήσυχο και δημιουργικό πνεύμα, πάντα\n ενημερωμένο γύρω από τις τελευταίες εξελίξεις. Ήταν άριστη παιδαγωγός,\n με υψηλό αίσθημα ευθύνης, δεκτική και ανοιχτή σε όλους με ιδιαίτερη\n ευαισθησία σε φοιτητές με δυσκολίες ή προβλήματα.\n \n Ως συνάδελφος ήταν αληθινή, ανιδιοτελής και\n δοτική. Αναλάμβανε αγόγγυστα μεγάλο φόρτο εργασίας πάντα σκεπτόμενη την\n διευκόλυνση του έργου των άλλων. Θα της είμαστε πάντα ευγνώμονες για την\n καθοδήγηση και ενθάρρυνση όλων μας στα πρώτα μας βήματα στο χώρο της\n τριτοβάθμιας εκπαίδευσης. Την ευχαριστούμε για την κατανόησή της, τις\n πολύτιμες συμβουλές και τη συμπαράστασή της στις δύσκολες στιγμές μας ως\n γνήσια φίλη, συνάδελφος και έμπειρη μητέρα. Υπήρξαμε τυχεροί που\n συνεργαστήκαμε μαζί της για πολλά χρόνια.\n \n Θα έχει πάντα τη θέση της στο Γραφείο Ξένων\n Γλωσσών και στην καρδιά μας. Την αποχαιρετούμε με θλίψη, πόνο και\n συγκίνηση αλλά και με την υπόσχεση ότι θα συνεχίσουμε το έργο της και θα\n αξιοποιήσουμε την ανεκτίμητη κληρονομιά που άφησε σε όλους μας.\n \n Στους οικείους της εκφράζουμε τα ειλικρινή\n μας συλλυπητήρια και τη συμμετοχή μας στο βαρύ πένθος τους. Να τη\n θυμούνται πάντα με αγάπη και υπερηφάνεια.\n \n Μέλη ΕΕΠ Γραφείου Ξένων Γλωσσών\n Όσοι επιθυμούν να προσφέρουν κάτι στη μνήμη της, μπορούν να καταθέσουν\n χρήματα στην Κιβωτό του Κόσμου. Παραθέτουμε τους λογαριασμού της\n Κιβωτού.\n \n EUROBANK: 0026 0178 870100 872073 IBAN : GR3702601780000870100872073\n SWIFT / BIC: ERBKGRAA (ΓΙΑ ΕΞΩΤΕΡΙΚΟ)\n ΤΡΑΠΕΖΑ ΠΕΙΡΑΙΩΣ: 5023 – 032595 - 870 IBAN:GR3801720230005023032595870\n \n ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ: 100/296102-42 IBAN: GR6201101000000010029610242\n ALPHA BANK: 183002002003534 IBAN: GR4801401830183002002003534\n \n \n Σημείωση\n \n : Κατά την κατάθεση, στην αιτιολογία να συμπληρώσετε (υποχρεωτικά) ότι η\n δωρεά γίνεται εις μνήμην της ΧΡΥΣΟΥΛΑΣ ΤΟΜΠΡΟΥ.\n \n Μετά τη δωρεά σας, παρακαλούμε να επικοινωνήσετε με την Κιβωτό\n προκειμένου να κρατήσουμε τα στοιχεία της απόδειξης.\n \n Τηλ. Επικοινωνίας: 210 5141953 - 210 5141935');
            expect(article.link).to.equal('/unipi/el/ανακοινώσεις/item/13591-εις-μνήμην-χρυσούλας-τόμπρου.html');
            expect(article.pubDate).to.equal('Τετάρτη, 14 Σεπτεμβρίου 2022 12:15');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Test 2', function () {
        return Saffron.parse(require('./sources/html/html2.json'), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html2');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.source).to.equal('html2-source');
                expect(article.categories.length).to.equal(1);
                expect([
                    '\\t\\t\\t\\tΠΡΟΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ',
                    '\\t\\t\\t\\tΕΚΔΗΛΩΣΕΙΣ - ΣΗΜΑΝΤΙΚΑ',
                    '\\t\\t\\t\\tΜΕΤΑΠΤΥΧΙΑΚΕΣ ΣΠΟΥΔΕΣ',
                    '\\t\\t\\t\\tΕΚΔΗΛΩΣΕΙΣ - ΣΗΜΑΝΤΙΚΑ',
                    '\\t\\t\\t\\tΠΡΟΠΤΥΧΙΑΚΟ ΤΟΜΕΑ ΔΙΕΘΝΩΝ ΣΠΟΥΔΩΝ',
                    '\\t\\t\\t\\tΠΡΟΚΗΡΥΞΕΙΣ - ΕΞΕΛΙΞΕΙΣ ΜΕΛΩΝ ΔΕΠ',
                    '\\t\\t\\t\\tΔΙΔΑΚΤΟΡΙΚΕΣ ΣΠΟΥΔΕΣ',
                    "\\t\\t\\t\\tΠΡΟΠΤΥΧΙΑΚΟ ΤΟΜΕΑ Β' ΙΔΙΩΤΙΚΟΥ ΔΙΚΑΙΟΥ",
                ].includes(article.categories[0].name)).to.be.true;
                expect(article.categories[0].links.length).to.equal(1);
                expect(article.categories[0].links[0]).to.equal('http://127.0.0.1:3000/html2');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('\\t\\t\\t\\t\\t\\tΕΚΤΑΚΤΗ ΑΝΑΚΟΙΝΩΣΗ ΓΙΑ ΤΗΝ ΟΡΚΩΜΟΣΙΑ ΠΤΥΧΙΟΥΧΩΝ ΙΟΥΝΙΟΥ -ΙΟΥΛΙΟΥ 2022 (ΚΛΙΜ. Β 18-10-2022) \\t\\t\\t\\t\\t');
            expect(article.content).to.equal('Εν όψει της ορκωμοσίας των πτυχιούχων Ιουνίου - Ιουλίου 2022 σας ενημερώνουμε ότι λόγω έκτακτης υποχρέωσης του Κοσμήτορα της Σχολής η ώρα έναρξης της τελετής της ορκωμοσίας του 2ου Κλιμακίου 18-10-2022 (ΕΠΩΝΥΜΑ: ΚΑΡΑΜΠ. - ΜΠΑΓ.) μεταφέρεται από τις 09.00 π.μ. για τις 09.45 π.μ.');
            expect(article.link).to.equal('/anakoinoseis_kai_ekdiloseis/proboli_anakoinosis/ektakti_anakoinosi_gia_tin_orkomosia_ptychioychon_ioynioy_ioylioy_2022_klim_b_18_10_2022/');
            expect(article.pubDate).to.equal('2022-10-14');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Test 3', function () {
        return Saffron.parse(require('./sources/html/html3.json'), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['Νέα']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html3');
            expect(obj.articles.length).to.equal(20);

            for (const article of obj.articles) {
                expect(article.source).to.equal('html3-source');
                expect(article.categories.length).to.equal(1);
                expect(article.categories[0].name).to.equal('Νέα');
                expect(article.categories[0].links.length).to.equal(1);
                expect(article.categories[0].links[0]).to.equal('http://127.0.0.1:3000/html3');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Ηλεκτρονικη υποβολη διπλωματικων και ερευνητικων εργασιων στη Βιβλιοθηκη και το Αρχειο του ΤΑΜΠΠ, Οκτωβρίου - Νοεμβρίου 2022' + ' - ' + article.pubDate);
            expect(article.content).to.equal('Η κατάθεση της Διπλωματικής και της Ερευνητικής Εργασίας στη Βιβλιοθήκη και το Αρχείο του Τμήματος Αρχιτ');
            expect(article.link).to.equal('/el/news/news/ilektroniki-ypovoli-diplomatikon-kai-ereynitikon-ergasion-sti-vivliothiki-kai-to-arheio-toy-tampp-6355.html');
            expect(article.pubDate).to.equal('31/10/2022');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Test 4', function () {
        return Saffron.parse(require('./sources/html/html4.json'), null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases).to.deep.equal(['Γενικές Ανακοινώσεις']);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html4');
            expect(obj.articles.length).to.equal(10);

            for (const article of obj.articles) {
                expect(article.source).to.equal('html4-source');
                expect(article.categories.length).to.equal(1);
                expect(article.categories[0].name).to.equal('Γενικές Ανακοινώσεις');
                expect(article.categories[0].links.length).to.equal(1);
                expect(article.categories[0].links[0]).to.equal('http://127.0.0.1:3000/html4');
            }

            const article = obj.articles[0];
            expect(article.title).to.equal('Αναβολή Μαθήματος Υδροδυναμική Σχεδίαση Μικρών Σκαφών');
            expect(article.content).to.equal('Το μάθημα Υδροδυναμική Σχεδίαση Μικρών Σκαφών της Δευτέρας 7 Νοεμβρίου του κου Γρηγορόπουλου\n αναβάλλεται λόγω εκτάκτου γεγονότος.');
            expect(article.link).to.equal('/general_news/1108/anaboli_mathimatos_ydrodynamiki_sxediasi_mikrwn_skafwn');
            expect(article.pubDate).to.equal('Friday, 04 Νοεμβρίου 2022 - Γενικές Ανακοινώσεις');
            expect(article.attachments.length).to.equal(0);
            expect(article.thumbnail).to.be.undefined;
        });
    });

    it('Test 5', function () {
        // TODO: When we add another source file test move this to a file
        return Saffron.parse({
            "url": "http://127.0.0.1:3000/html4",
            "name": "html5-source",
            "type": "html",
            "encoding": "iso-8859-7",
            "scrape": {
                "container": "#page-content > .news_container",
                "skip": [
                    {"position": 1},
                    {
                        "text": "Υποδοχή Πρωτοετών ΕΜΠ - με μουσική και χορό - 24/10/2022",
                        "type": "contains"
                    },
                    {
                        "selector": "div.news_title_container > div.news_date",
                        "text": "Tuesday, 25 Οκτωβρίου 2022 - Ανακοινώσεις Προπτυχιακών",
                        "type": "exact"
                    },
                    {
                        "selector": "div.news_title_container > div.news_title",
                        "text": "μαθήματος Μηχανουργικές Κατεργασίες",
                        "type": "contains"
                    }
                ],
                "article": {
                    "link": {
                        "class": ".news_title",
                        "find": ["a"],
                        "attributes": ["href"],
                        "multiple": false
                    },
                    "pubDate": {
                        "class": ".news_date",
                        "multiple": false
                    },
                    "title": {
                        "class": ".news_title",
                        "multiple": false
                    },
                    "content": {
                        "class": ".news_main",
                        "multiple": false
                    },
                    "attachments": {
                        "class": ".news_main",
                        "find": ["a"],
                        "attributes": ["href"],
                        "multiple": true
                    }
                }
            }
        }, null).then(result => {
            expect(result.length).to.equal(1);
            const obj = result[0];
            expect(obj.aliases.length).to.equal(0);
            expect(obj.url).to.equal('http://127.0.0.1:3000/html4');
            expect(obj.articles.length).to.equal(6);

            for (const article of obj.articles) {
                expect(article.source).to.equal('html5-source');
                expect(article.categories.length).to.equal(0);

                expect(article.title).to.not.equal('Μουσική, τραγούδι και χορός στην υποδοχή των πρωτοετών στο ΕΜΠ');
                expect(article.title).to.not.equal("Υποδοχή Πρωτοετών ΕΜΠ - με μουσική και χορό - 24/10/2022");
                expect(article.pubDate).to.not.equal("Tuesday, 25 Οκτωβρίου 2022 - Ανακοινώσεις Προπτυχιακών");
                expect(article.title).to.not.equal("Αναπληρώσεις του μαθήματος Μηχανουργικές Κατεργασίες");
            }
        });
    });
});