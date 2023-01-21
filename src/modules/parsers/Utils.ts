import cheerio from "cheerio";
import type {Attachment} from "../../components/article";
import https from "https";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import type {ParserResult, SourceFile} from "../../components/types";
import {Source} from "../../components/source";
import {Job} from "../../components/job";
import {Worker} from "../worker";
import striptags from "striptags";

export class Utils {

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

    public isScrapeAfterError = false;
    public declare url: string;
    public declare aliases: string[];
    public declare source: Source;

    private static decode(str: string = ""): string {
        if (!str) str = ""
        for (const entity in this.htmlEntries)
            str = str.replace(new RegExp(entity, 'g'), this.htmlEntries[entity])

        return str
    }

    request(options: AxiosRequestConfig): Promise<AxiosResponse> {
        if (this.source.instructions["ignoreCertificates"])
            options.httpsAgent = new https.Agent({
                rejectUnauthorized: false
            });

        // @ts-ignore
        options.headers ??= {};
        for(const [key, value] of Object.entries(this.source.instructions.headers)) {
            options.headers[key] = value;
        }

        options.timeout ??= this.source.instructions.timeout;
        options.maxRedirects ??= this.source.instructions.maxRedirects;

        return axios.request(options);
    }

    get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        // @ts-ignore
        if (options === undefined) options = {};
        options.url = url;
        options.method = "GET";
        return this.request(options);
    }

    post(url: string, data: any, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        // @ts-ignore
        if (options === undefined) options = {};
        options.url = url;
        options.method = "POST";
        options.data = data;
        return this.request(options);
    }

    async parse(sourceJson: SourceFile): Promise<ParserResult[]> {
        const source = Source.parseSourceFile(sourceJson, null);
        const job = new Job(source, '', 0, null);
        return await Worker.parse(job);
    }

    public cleanupHTMLText(text: string, excessive: boolean): string {
        text = Utils.decode(text);

        // Remove all consecutive \n, \t and spaces
        text = text.replace(/ +(?= )/g, '')
            .replace(/\t+(?=\t)/g, '')
            .replace(/\n+(?=\n)/gm, '')
            .trim();

        if (excessive) {
            text = text.replace(/\t/g, '')
                .replace(/\n/gm, '')
                .replace(/(<([^>]+)>)/gi, '');
            text = striptags(text);
        }

        return text;
    }

    public extractLinks(html?: string | null): Attachment[] {
        if (!html) return [];

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
                text: $(element).attr('alt'), // get the alt
                value: $(element).attr('src'), // get the src attribute
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

        return links;
    }
}