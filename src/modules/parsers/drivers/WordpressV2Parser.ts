import {ParserClass} from "../../../components/ParserClass";
import type Instructions from "../../../components/instructions";
import Article from "../../../components/article";
import type Utils from "../Utils";
import type {ScrapeWordPressV2, SourceScrape} from "../../../components/types";

export class WordpressV2Parser extends ParserClass {

    validateScrape(scrape?: SourceScrape): void {
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        scrape = scrape as ScrapeWordPressV2;

        for (let pair of instructions.url) {
            pair.url = `${pair.url}${pair.url.endsWith('/') ? '' : '/'}`
        }

        scrape = scrape ?? {};
        scrape.articles = scrape.articles ?? {};

        scrape.articles.include = scrape.articles.include ?? [];

        scrape.articles.dates = scrape.articles.dates ?? {};
        scrape.articles.dates.gmt = scrape.articles.dates.gmt ?? false;
        scrape.articles.dates.fallback = scrape.articles.dates.fallback ?? false;

        scrape.articles.filter = scrape.articles.filter ?? {};
        scrape.articles.filter.search = scrape.articles.filter.search ?? null;
        scrape.articles.filter.author = scrape.articles.filter.author ?? null;
        scrape.articles.filter.authorExclude = scrape.articles.filter.authorExclude ?? null;

        // ISO8601 compliant date
        scrape.articles.filter.after = scrape.articles.filter.after ?? null;
        scrape.articles.filter.before = scrape.articles.filter.before ?? null;

        scrape.articles.filter.slug = scrape.articles.filter.slug ?? null;
        // offset: typeof articleOptions.filter?.offset === 'number' ? articleOptions.filter.offset : 0,
        scrape.articles.filter.status = scrape.articles.filter.status ?? null;
        scrape.articles.filter.categories = scrape.articles.filter.categories ?? null;
        scrape.articles.filter.categoriesExclude = scrape.articles.filter.categoriesExclude ?? null;
        scrape.articles.filter.tags = scrape.articles.filter.tags ?? null;
        scrape.articles.filter.tagsExclude = scrape.articles.filter.tagsExclude ?? null;
        scrape.articles.filter.sticky = scrape.articles.filter.sticky ?? null;

        scrape.articles.thumbnail = scrape.articles.thumbnail ?? 'thumbnail';

        instructions.wp = scrape;
    }

    async parse(utils: Utils): Promise<Article[]> {
        let instructions = utils.source.instructions;

        let categoriesUrl = `${utils.url}wp-json/wp/v2/categories/`;
        let postsUrl = `${utils.url}wp-json/wp/v2/posts?_embed&per_page=${instructions.amount}`;

        const filters = instructions.wp.articles!.filter!;
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

        let config = {
            timeout: utils.source.instructions.timeout,
            responseType: 'arraybuffer',
            responseEncoding: 'binary'
        };

        const catReq = await utils.get(categoriesUrl, config as any);
        const postsReq = await utils.get(postsUrl, config as any);

        const categories = JSON.parse(instructions.textDecoder.decode(catReq.data));
        const posts = JSON.parse(instructions.textDecoder.decode(postsReq.data));

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
            article.link = utils.cleanupHTMLText(p.link, false);

            if (instructions.wp.articles!.dates!.gmt) {
                if (p.date_gmt != null)
                    article.pubDate = p.date_gmt;
                else if (instructions.wp.articles!.dates!.fallback)
                    article.pubDate = p.date;
            } else article.pubDate = p.date;

            if(instructions.includeContentAttachments)
                article.pushAttachments(utils.extractLinks(article.content));

            for (let cId of p.categories) {
                let cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat) article.pushCategory(cat.name, cat.links);
            }

            // Thumbnail
            let thumbnailSize = instructions.wp.articles!.thumbnail!;
            article.thumbnail = p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes[thumbnailSize]?.source_url;

            let include: string[] = instructions.wp.articles!.include!;
            // The date the object was last modified.
            if (include.includes('modified')) {
                if (instructions.wp.articles!.dates!.gmt) {
                    if (p.modified_gmt != null)
                        article.addExtra('modified', p.modified_gmt);
                    else if (instructions.wp.articles!.dates!.fallback)
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