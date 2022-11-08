import {ParserClass} from "../../../components/ParserClass";
import type Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import type Utils from "../Utils";

export class WordpressV2Parser extends ParserClass {

    validateScrape(scrape: object): void {
    }

    assignInstructions(instructions: Instructions, sourceJson: any): void {
        for (let pair of instructions.url) {
            pair.url = `${pair.url}${pair.url.endsWith('/') ? '' : '/'}`
        }

        let artScrapeOpts = sourceJson.scrape?.articles;
        let articlesOpts: any = {
            include: [],
            dates: {},
            filter: {},
            thumbnail: "thumbnail"
        };

        if (artScrapeOpts != null) {
            if (Array.isArray(sourceJson.scrape?.articles?.include)) {
                for (const item of sourceJson.scrape.articles.include) {
                    if (typeof item === 'string')
                        articlesOpts.include.push(item)
                }
            }

            if (artScrapeOpts.dates) {
                articlesOpts.dates.gmt = typeof artScrapeOpts.dates.gmt === 'boolean' ? artScrapeOpts.dates.gmt : false;
                articlesOpts.dates.fallback = typeof artScrapeOpts.dates.fallback === 'boolean' ? artScrapeOpts.dates.fallback : false;
            }

            if (artScrapeOpts.filter) {
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

    async parse(utils: Utils): Promise<Article[]> {
        let instructions = utils.source.instructions;

        let categoriesUrl = `${utils.url}wp-json/wp/v2/categories/`;
        let postsUrl = `${utils.url}wp-json/wp/v2/posts?_embed&per_page=${instructions.amount}`;

        const filters = instructions.scrapeOptions.articles.filter;
        if (filters.search) postsUrl += `&search=${encodeURIComponent(filters.search)}`;
        if (filters.author) postsUrl += `&author=${filters.author}`;
        if (filters.authorExclude) postsUrl += `&author_exclude=${filters.authorExclude}`;
        if (filters.after) postsUrl += `&after=${filters.after}`;
        if (filters.before) postsUrl += `&before=${filters.before}`;
        // if(filters.offset != null && filters.offset > 0) postsUrl +=`&offset=${filters.offset}`;
        if (filters.slug) postsUrl += `&slug=${filters.slug}`;
        if (filters.status) postsUrl += `&status=${filters.status}`;
        if (filters.categories) postsUrl += `&categories=${filters.categories}`;
        if (filters.categoriesExclude) postsUrl += `&categories_exclude=${filters.categoriesExclude}`;
        if (filters.tags) postsUrl += `&tags=${filters.tags}`;
        if (filters.tagsExclude) postsUrl += `&tags_exclude=${filters.tagsExclude}`;
        if (filters.sticky) postsUrl += `&_sticky`;

        let categories: any
            , posts: any[];

        let config = {
            timeout: utils.source.instructions.timeout,
            responseType: 'arraybuffer',
            responseEncoding: 'binary'
        };

        try {
            const catReq = await utils.get(categoriesUrl, config as any);
            const postsReq = await utils.get(postsUrl, config as any);

            categories = JSON.parse(instructions.textDecoder.decode(catReq.data));
            posts = JSON.parse(instructions.textDecoder.decode(postsReq.data));
        } catch (e: any) {
            throw new Error(`WordpressParserException failed [${utils.source.name}] job: ${e.message}`);
        }

        let articles: Article[] = [];

        const parsedCategories = Array.isArray(categories) ?
            categories.map((category: any) => {
                let links: string[] = [];

                const linkCatsKeys = Object.keys(category._links);

                for (const linkCat of linkCatsKeys) {
                    for (let href of category._links[linkCat])
                        links.push(href.href);
                }

                return {
                    id: category.id,
                    description: utils.cleanupHTMLText(category.description, false),
                    name: utils.cleanupHTMLText(category.name, false),
                    links
                };
            }) : [];

        let count = 0
        for (let p of posts) {
            // WordPress will return the specified amount, but we double-check to be sure
            if (count >= instructions.amount) continue;
            count++;

            const article = new Article();
            article.title = utils.cleanupHTMLText(p.title.rendered, false);
            article.content = p.content.rendered;
            article.link = p.link;
            article.pushCategories(utils.aliases.map(alias => {
                return {
                    name: alias,
                    links: [utils.url]
                };
            }));

            if (instructions.scrapeOptions.articles.dates.gmt) {
                if (p.date_gmt != null)
                    article.pubDate = p.date_gmt;
                else if (instructions.scrapeOptions.articles.dates.fallback)
                    article.pubDate = p.date;
            } else article.pubDate = p.date;

            if(instructions.includeContentAttachments)
                article.pushAttachments(utils.extractLinks(article.content));

            for (let cId of p.categories) {
                let cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat) article.pushCategory(cat.name, cat.links);
            }

            // Thumbnail
            let thumbnailSize = instructions.scrapeOptions.articles.thumbnail;
            article.thumbnail = p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes[thumbnailSize]?.source_url;

            let include: string[] = instructions.scrapeOptions.articles.include;
            // The date the object was last modified.
            if (include.includes('modified')) {
                if (instructions.scrapeOptions.articles.dates.gmt) {
                    if (p.modified_gmt != null)
                        article.addExtra('modified', p.modified_gmt);
                    else if (instructions.scrapeOptions.articles.dates.fallback)
                        article.addExtra('modified', p.modified);
                } else article.addExtra('modified', p.modified);

                // Remove it
                include = include.filter(s => s !== 'modified');
            }

            // Can get anything from guid, type, slug to title content etc...
            for (const elem of include) {
                if (p[elem]?.rendered != null)
                    article.addExtra(elem, p[elem].rendered);
                else article.addExtra(elem, p[elem]);
            }

            articles.push(article);
        }

        return articles;
    }

}