import {ParserClass} from "../../ParserClass";
import Instructions from "../../../../../components/instructions";
import Job from "../../../../../components/job";
import Article from "../../../../../components/articles";
import axios, {AxiosRequestConfig} from "axios";
import Utils from "../../Utils";
import https from "https";
import {AxiosConfig} from "../../../../../components/AxiosConfig";

const httpsAgent = new https.Agent({rejectUnauthorized: false})


export class WordpressV2Parser extends ParserClass {
    validateScrape(scrape: object): void {
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        for (let pair of instructions.url) {
            if (pair.length == 1)
                pair[0] = `${pair[0]}${pair[0].endsWith('/') ? '' : '/'}`;
            else if (pair.length == 2)
                pair[1] = `${pair[1]}${pair[1].endsWith('/') ? '' : '/'}`;
        }

        let artScrapeOpts = sourceJson.scrape?.articles;
        let articlesOpts: any = {
            include: [],
            dates: {},
            filter: {},
            thumbnail: "thumbnail"
        };

        if(artScrapeOpts != null) {
            if(Array.isArray(sourceJson.scrape?.articles?.include)) {
                for(const item of sourceJson.scrape.articles.include) {
                    if(typeof item === 'string')
                        articlesOpts.include.push(item)
                }
            }

            if(artScrapeOpts.dates) {
                articlesOpts.dates.gmt = typeof artScrapeOpts.dates.gmt === 'boolean' ? artScrapeOpts.dates.gmt : false;
                articlesOpts.dates.fallback = typeof artScrapeOpts.dates.fallback === 'boolean' ? artScrapeOpts.dates.fallback : false;
            }

            if(artScrapeOpts.filter) {
                articlesOpts.filter.search = typeof artScrapeOpts.filter?.search === 'string' ? artScrapeOpts.filter.search : null;
                articlesOpts.filter.author = typeof artScrapeOpts.filter?.author === 'string' ? artScrapeOpts.filter.author : null;
                articlesOpts.filter.authorExclude = typeof artScrapeOpts.filter?.authorExclude === 'string' ? artScrapeOpts.filter.authorExclude : null;

                // ISO8601 compliant date
                articlesOpts.filter.after = typeof artScrapeOpts.filter?.after === 'string' ? artScrapeOpts.filter.after : null;
                articlesOpts.filter.before = typeof artScrapeOpts.filter?.before === 'string' ? artScrapeOpts.filter.before : null;

                // offset: typeof articleOptions.filter?.offset === 'number' ? articleOptions.filter.offset : 0,
                articlesOpts.filter.slug = typeof artScrapeOpts.filter?.slug === 'string' ? artScrapeOpts.filter.slug : null;
                articlesOpts.filter.status = typeof artScrapeOpts.filter?.status === 'string' ? artScrapeOpts.filter.status : null;
                articlesOpts.filter.categories = typeof artScrapeOpts.filter?.categories === 'string' ? artScrapeOpts.filter.categories : null;
                articlesOpts.filter.categoriesExclude = typeof artScrapeOpts.filter?.categoriesExclude === 'string' ? artScrapeOpts.filter.categoriesExclude : null;
                articlesOpts.filter.tags = typeof artScrapeOpts.filter?.tags === 'string' ? artScrapeOpts.filter.tags : null;
                articlesOpts.filter.tagsExclude = typeof artScrapeOpts.filter?.tagsExclude === 'string' ? artScrapeOpts.filter.tagsExclude : null;
                articlesOpts.filter.sticky = typeof artScrapeOpts.filter?.sticky === 'boolean' ? artScrapeOpts.filter.sticky : null;
            }

            articlesOpts.thumbnail = typeof artScrapeOpts.thumbnail === 'string' ? artScrapeOpts.thumbnail : 'thumbnail';
        }

        instructions.scrapeOptions = {
            articles: articlesOpts
        };
    }

    async parse(job: Job, alias: string, url: string, amount: number): Promise<Article[]> {
        let instructions = job.getInstructions();

        let categoriesUrl = `${url}wp-json/wp/v2/categories/`;
        let postsUrl = `${url}wp-json/wp/v2/posts?_embed&per_page=${amount}`;

        const filters = instructions.scrapeOptions.articles.filter;
        if(filters.search) postsUrl +=`&search=${encodeURIComponent(filters.search)}`;
        if(filters.author) postsUrl +=`&author=${filters.author}`;
        if(filters.authorExclude) postsUrl +=`&author_exclude=${filters.authorExclude}`;
        if(filters.after) postsUrl +=`&after=${filters.after}`;
        if(filters.before) postsUrl +=`&before=${filters.before}`;
        // if(filters.offset != null && filters.offset > 0) postsUrl +=`&offset=${filters.offset}`;
        if(filters.slug) postsUrl +=`&slug=${filters.slug}`;
        if(filters.status) postsUrl +=`&status=${filters.status}`;
        if(filters.categories) postsUrl +=`&categories=${filters.categories}`;
        if(filters.categoriesExclude) postsUrl +=`&categories_exclude=${filters.categoriesExclude}`;
        if(filters.tags) postsUrl +=`&tags=${filters.tags}`;
        if(filters.tagsExclude) postsUrl +=`&tags_exclude=${filters.tagsExclude}`;
        if(filters.sticky) postsUrl +=`&_sticky`;

        let categories: any
            , posts: any[];

        let config: AxiosConfig & AxiosRequestConfig = {
            timeout: instructions.getSource().timeout,
            responseType: 'arraybuffer',
            responseEncoding: 'binary'
        };
        if (instructions["ignoreCertificates"]) config.httpsAgent = httpsAgent;

        try {
            categories = JSON.parse(instructions.textDecoder.decode((await axios.get(categoriesUrl, config))?.data))
            posts = JSON.parse(instructions.textDecoder.decode((await axios.get(postsUrl, config))?.data))
        } catch (e: any) {
            throw new Error(`WordpressParserException job failed for ${instructions.getSource().name}, original error: ${e.message}`);
        }

        let articles: Article[] = [];

        const parsedCategories = Array.isArray(categories) ?
            categories.map((category: any) => {
                let links: string[] = []

                const linkCatsKeys = Object.keys(category._links)

                for (const linkCat of linkCatsKeys) {
                    for (let href of category._links[linkCat])
                        links.push(href.href)
                }

                return {
                    id: category.id,
                    description: Utils.htmlStrip(category.description, false),
                    name: Utils.htmlStrip(category.name, false),
                    links
                }
            }) : [];

        let count = 0
        for (let p of posts) {
            if (count >= instructions.amount) continue;
            count++;

            const article = new Article()
            article.setSource(instructions.getSource().getId(), instructions.getSource().name);
            article.setTitle(Utils.htmlStrip(p.title.rendered, false));
            article.setContent(p.content.rendered);
            article.setLink(p.link);

            if (instructions.scrapeOptions.articles.dates.gmt) {
                if(p.date_gmt != null)
                    article.setPubDate(p.date_gmt);
                else if(instructions.scrapeOptions.articles.dates.fallback)
                    article.setPubDate(p.date);
            } else article.setPubDate(p.date);

            article.pushAttachments(Utils.extractLinks(article.content));

            for (let cId of p.categories) {
                let cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat) article.pushCategory(cat.name, cat.links);
            }

            // Thumbnail
            let thumbnailSize = instructions.scrapeOptions.articles.thumbnail;
            let thumbnailUrl: string = p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes[thumbnailSize]?.source_url;

            article.setThumbnail(thumbnailUrl)

            let include: string[] = instructions.scrapeOptions.articles.include;
            // The date the object was last modified.
            if(include.includes('modified')) {
                if (instructions.scrapeOptions.articles.dates.gmt) {
                    if(p.modified_gmt != null)
                        article.addExtra('modified', p.modified_gmt);
                    else if(instructions.scrapeOptions.articles.dates.fallback)
                        article.addExtra('modified', p.modified);
                } else article.addExtra('modified', p.modified);

                // Remove it
                include = include.filter(s => s !== 'modified');
            }

            // Can get anything from guid, type, slug to title content etc...
            for(const elem of include) {
                if(p[elem]?.rendered != null)
                    article.addExtra(elem, p[elem].rendered);
                else article.addExtra(elem, p[elem]);
            }


            articles.push(article)
        }

        return articles;
    }

}