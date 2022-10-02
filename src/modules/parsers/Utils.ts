import cheerio from "cheerio";
import {Attachment} from "../../components/article";
import Instructions from "../../components/instructions";
import https from "https";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {ParserResult} from "../../components/types";
import Source from "../../components/source";
import Job from "../../components/job";
import Worker from "../workers";
import Config from "../../components/config.js";

const striptags = require('striptags');

const httpsAgent = new https.Agent({rejectUnauthorized: false})

export default class Utils {

    private static htmlEntries: any = {
        '&apos;': "'",
        '&lt;': '<',
        '&gt;': '>',
        '&nbsp;': ' ',
        '&iexcl;': '¡',
        '&cent;': '¢',
        '&pound;': '£',
        '&curren;': '¤',
        '&yen;': '¥',
        '&brvbar;': '¦',
        '&sect;': '§',
        '&uml;': '¨',
        '&copy;': '©',
        '&ordf;': 'ª',
        '&laquo;': '«',
        '&not;': '¬',
        '&reg;': '®',
        '&macr;': '¯',
        '&deg;': '°',
        '&plusmn;': '±',
        '&sup2;': '²',
        '&sup3;': '³',
        '&acute;': '´',
        '&micro;': 'µ',
        '&para;': '¶',
        '&middot;': '·',
        '&cedil;': '¸',
        '&sup1;': '¹',
        '&ordm;': 'º',
        '&raquo;': '»',
        '&frac14;': '¼',
        '&frac12;': '½',
        '&frac34;': '¾',
        '&iquest;': '¿',
        '&Agrave;': 'À',
        '&Aacute;': 'Á',
        '&Acirc;': 'Â',
        '&Atilde;': 'Ã',
        '&Auml;': 'Ä',
        '&Aring;': 'Å',
        '&AElig;': 'Æ',
        '&Ccedil;': 'Ç',
        '&Egrave;': 'È',
        '&Eacute;': 'É',
        '&Ecirc;': 'Ê',
        '&Euml;': 'Ë',
        '&Igrave;': 'Ì',
        '&Iacute;': 'Í',
        '&Icirc;': 'Î',
        '&Iuml;': 'Ï',
        '&ETH;': 'Ð',
        '&Ntilde;': 'Ñ',
        '&Ograve;': 'Ò',
        '&Oacute;': 'Ó',
        '&Ocirc;': 'Ô',
        '&Otilde;': 'Õ',
        '&Ouml;': 'Ö',
        '&times;': '×',
        '&Oslash;': 'Ø',
        '&Ugrave;': 'Ù',
        '&Uacute;': 'Ú',
        '&Ucirc;': 'Û',
        '&Uuml;': 'Ü',
        '&Yacute;': 'Ý',
        '&THORN;': 'Þ',
        '&szlig;': 'ß',
        '&agrave;': 'à',
        '&aacute;': 'á',
        '&acirc;': 'â',
        '&atilde;': 'ã',
        '&auml;': 'ä',
        '&aring;': 'å',
        '&aelig;': 'æ',
        '&ccedil;': 'ç',
        '&egrave;': 'è',
        '&eacute;': 'é',
        '&ecirc;': 'ê',
        '&euml;': 'ë',
        '&igrave;': 'ì',
        '&iacute;': 'í',
        '&icirc;': 'î',
        '&iuml;': 'ï',
        '&eth;': 'ð',
        '&ntilde;': 'ñ',
        '&ograve;': 'ò',
        '&oacute;': 'ó',
        '&ocirc;': 'ô',
        '&otilde;': 'õ',
        '&ouml;': 'ö',
        '&divide;': '÷',
        '&oslash;': 'ø',
        '&ugrave;': 'ù',
        '&uacute;': 'ú',
        '&ucirc;': 'û',
        '&uuml;': 'ü',
        '&yacute;': 'ý',
        '&thorn;': 'þ',
        '&yuml;': 'ÿ',
        '&OElig;': 'Œ',
        '&oelig;': 'œ',
        '&Scaron;': 'Š',
        '&scaron;': 'š',
        '&Yuml;': 'Ÿ',
        '&fnof;': 'ƒ',
        '&circ;': 'ˆ',
        '&tilde;': '˜',
        '&Alpha;': 'Α',
        '&Beta;': 'Β',
        '&Gamma;': 'Γ',
        '&Delta;': 'Δ',
        '&Epsilon;': 'Ε',
        '&Zeta;': 'Ζ',
        '&Eta;': 'Η',
        '&Theta;': 'Θ',
        '&Iota;': 'Ι',
        '&Kappa;': 'Κ',
        '&Lambda;': 'Λ',
        '&Mu;': 'Μ',
        '&Nu;': 'Ν',
        '&Xi;': 'Ξ',
        '&Omicron;': 'Ο',
        '&Pi;': 'Π',
        '&Rho;': 'Ρ',
        '&Sigma;': 'Σ',
        '&Tau;': 'Τ',
        '&Upsilon;': 'Υ',
        '&Phi;': 'Φ',
        '&Chi;': 'Χ',
        '&Psi;': 'Ψ',
        '&Omega;': 'Ω',
        '&alpha;': 'α',
        '&beta;': 'β',
        '&gamma;': 'γ',
        '&delta;': 'δ',
        '&epsilon;': 'ε',
        '&zeta;': 'ζ',
        '&eta;': 'η',
        '&theta;': 'θ',
        '&iota;': 'ι',
        '&kappa;': 'κ',
        '&lambda;': 'λ',
        '&mu;': 'μ',
        '&nu;': 'ν',
        '&xi;': 'ξ',
        '&omicron;': 'ο',
        '&pi;': 'π',
        '&rho;': 'ρ',
        '&sigmaf;': 'ς',
        '&sigma;': 'σ',
        '&tau;': 'τ',
        '&upsilon;': 'υ',
        '&phi;': 'φ',
        '&chi;': 'χ',
        '&psi;': 'ψ',
        '&omega;': 'ω',
        '&thetasym;': 'ϑ',
        '&Upsih;': 'ϒ',
        '&piv;': 'ϖ',
        '&ndash;': '–',
        '&mdash;': '—',
        '&lsquo;': '‘',
        '&rsquo;': '’',
        '&sbquo;': '‚',
        '&ldquo;': '“',
        '&rdquo;': '”',
        '&bdquo;': '„',
        '&dagger;': '†',
        '&Dagger;': '‡',
        '&bull;': '•',
        '&hellip;': '…',
        '&permil;': '‰',
        '&prime;': '′',
        '&Prime;': '″',
        '&lsaquo;': '‹',
        '&rsaquo;': '›',
        '&oline;': '‾',
        '&frasl;': '⁄',
        '&euro;': '€',
        '&image;': 'ℑ',
        '&weierp;': '℘',
        '&real;': 'ℜ',
        '&trade;': '™',
        '&alefsym;': 'ℵ',
        '&larr;': '←',
        '&uarr;': '↑',
        '&rarr;': '→',
        '&darr;': '↓',
        '&harr;': '↔',
        '&crarr;': '↵',
        '&lArr;': '⇐',
        '&UArr;': '⇑',
        '&rArr;': '⇒',
        '&dArr;': '⇓',
        '&hArr;': '⇔',
        '&forall;': '∀',
        '&part;': '∂',
        '&exist;': '∃',
        '&empty;': '∅',
        '&nabla;': '∇',
        '&isin;': '∈',
        '&notin;': '∉',
        '&ni;': '∋',
        '&prod;': '∏',
        '&sum;': '∑',
        '&minus;': '−',
        '&lowast;': '∗',
        '&radic;': '√',
        '&prop;': '∝',
        '&infin;': '∞',
        '&ang;': '∠',
        '&and;': '∧',
        '&or;': '∨',
        '&cap;': '∩',
        '&cup;': '∪',
        '&int;': '∫',
        '&there4;': '∴',
        '&sim;': '∼',
        '&cong;': '≅',
        '&asymp;': '≈',
        '&ne;': '≠',
        '&equiv;': '≡',
        '&le;': '≤',
        '&ge;': '≥',
        '&sub;': '⊂',
        '&sup;': '⊃',
        '&nsub;': '⊄',
        '&sube;': '⊆',
        '&supe;': '⊇',
        '&oplus;': '⊕',
        '&otimes;': '⊗',
        '&perp;': '⊥',
        '&sdot;': '⋅',
        '&lceil;': '⌈',
        '&rceil;': '⌉',
        '&lfloor;': '⌊',
        '&rfloor;': '⌋',
        '&lang;': '⟨',
        '&rang;': '⟩',
        '&loz;': '◊',
        '&spades;': '♠',
        '&clubs;': '♣',
        '&hearts;': '♥',
        '&diams;': '♦',
        '&amp;': '&',
        '&#038;': '&',
        '&#38;': '&',
        '&#60;': '<',
        '&#060;': '<',
        '&#62;': '>',
        '&#062;': '>',
        '&#39;': "'",
        '&#039;': "'",
        '&quot;': '"',
        '&#34;': '"',
        '&#034;': '"'
    }
    /**
     * True if the previous scrape returned exception.
     */
    public isScrapeAfterError = false;
    /**
     * The specified URL.
     */
    public declare url: string;
    public declare aliases: string[];
    public declare instructions: Instructions;
    public declare amount: number;

    private static decode(str: String = "") {
        if (!str) str = ""
        for (let key in this.htmlEntries) {
            let entity = key
            let regex = new RegExp(entity, 'g')
            str = str.replace(regex, this.htmlEntries[entity])
        }
        return str
    }

    request(options: AxiosRequestConfig): Promise<AxiosResponse> {
        if (this.instructions["ignoreCertificates"])
            options.httpsAgent = httpsAgent;

        if(!options.headers)
            options.headers = {};
        options.headers['User-Agent'] = <any>this.instructions.getSource().userAgent

        return axios.request(options);
    }

    get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        if (!options) options = {};
        options.url = url;
        options.method = "GET";
        return this.request(options);
    }

    post(url: string, data: any, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        if (!options) options = {};
        options.url = url;
        options.method = "POST";
        options.data = data;
        return this.request(options);
    }

    /**
     * Get a source file and return an array of the parsed articles
     * @param sourceJson The json object of the source file.
     * @throws SourceException if there is a problem parsing the source file.
     */
    async parse(sourceJson: object): Promise<ParserResult[]> {
        let source: Source = Source.fileToSource(sourceJson);
        source.instructions.getSource = (): Source => source;

        let job = Job.createJob(source.getId(), '', 0);
        job.getSource = (): Source => source;
        job.getInstructions = (): Instructions => source.instructions;

        return await Worker.parse(job);
    }

    public htmlStrip(text: any = "", stripTags: boolean = true): string {
        if (stripTags) {
            text = Utils.decode(text)
            text = text.replace(/\n/g, '')
                .replace(/\t/g, '')
                .replace(/(<([^>]+)>)/gi, '')
                .trim()
            text = striptags(text)
        } else {
            text = Utils.decode(text)
            text = text.replace(/\n/g, '')
                .replace(/\t/g, '')
                .trim()
        }

        return text.toString()
    }

    public extractLinks(html: string): Attachment[] {
        if (!html || html == '') return [];

        const $ = cheerio.load(html);
        const links: Attachment[] = [];

        $('a').each((index, element) => {
            links.push({
                text: $(element).text(), // get the text
                value: $(element).attr('href'), // get the href attribute
                attribute: 'href'
            });
        });

        $('img').each((index, element) => {
            links.push({
                text: $(element).attr('alt'), // get the text
                value: $(element).attr('src'), // get the href attribute
                attribute: 'src'
            });
        });

        $('link').each((index, element) => {
            links.push({
                text: $(element).text(), // get the text
                value: $(element).attr('href'), // get the href attribute
                attribute: 'href'
            });
        });

        return links
    }
}