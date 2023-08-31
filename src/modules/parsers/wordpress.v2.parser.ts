import {ParserClass} from "../../components/ParserClass";
import type {Instructions} from "../../components/instructions";
import {Article} from "../../components/article";
import type {Utils} from "../../components/Utils";
import type {RequestsResult, ScrapeWordPressV2, SourceScrape} from "../../components/types";
import type {AxiosResponse} from "axios";

export class WordpressV2Parser extends ParserClass {

    validateScrape(scrape?: SourceScrape): void {
        // This exists only for typescript, it is not valid and will not run at runtime.
        scrape = scrape as ScrapeWordPressV2;

        if (typeof scrape !== 'undefined') {
            if (typeof scrape !== 'object' || Array.isArray(scrape))
                throw new Error("must be a JSON object");

            if (typeof scrape.paths !== 'undefined') {
                if (typeof scrape.paths !== 'object' || Array.isArray(scrape.paths))
                    throw new Error("paths must be a JSON object");

                if (typeof scrape.paths.posts !== 'undefined' && typeof scrape.paths.posts !== 'string')
                    throw new Error(`articles.paths.posts must be a string`);

                if (typeof scrape.paths.categories !== 'undefined' && typeof scrape.paths.categories !== 'string')
                    throw new Error(`articles.paths.categories must be a string`);
            }

            if (typeof scrape.articles !== 'undefined') {
                if (typeof scrape.articles !== 'object' || Array.isArray(scrape.articles))
                    throw new Error("articles must be a JSON object");

                if (scrape.articles.include && !Array.isArray(scrape.articles.include))
                    throw new Error("articles.include must be an array of strings");

                if (typeof scrape.articles.dates !== 'undefined') {
                    if (typeof scrape.articles.dates !== 'object' || Array.isArray(scrape.articles.dates))
                        throw new Error("articles.dates must be a JSON object");

                    if (typeof scrape.articles.dates.gmt !== 'undefined' && typeof scrape.articles.dates.gmt !== 'boolean')
                        throw new Error("articles.dates.gmt must be a boolean");

                    if (typeof scrape.articles.dates.fallback !== 'undefined' && typeof scrape.articles.dates.fallback !== 'boolean')
                        throw new Error("articles.dates.fallback must be a boolean");
                }

                if (typeof scrape.articles.filter !== 'undefined') {
                    if (typeof scrape.articles.filter !== 'object' || Array.isArray(scrape.articles.filter))
                        throw new Error("articles.filter must be a JSON object");

                    for (const v of ['search', 'author', 'authorExclude', 'after', 'before', 'slug', 'status', 'categories', 'categoriesExclude', 'tags', 'tagsExclude']) {
                        if (scrape.articles.filter[v] && typeof scrape.articles.filter[v] !== 'string')
                            throw new Error(`articles.filter.${v} must be a string`);
                    }

                    if (typeof scrape.articles.filter.sticky !== 'undefined' && typeof scrape.articles.filter.sticky !== 'boolean')
                        throw new Error("articles.filter.sticky must be a boolean");
                }

                if (scrape.articles.thumbnail && typeof scrape.articles.thumbnail !== 'string')
                    throw new Error("articles.thumbnail must be a string");
            }
        }
    }

    assignInstructions(instructions: Instructions, scrape?: SourceScrape): void {
        scrape = scrape as ScrapeWordPressV2;

        for (const pair of instructions.url) {
            if (pair.url.endsWith('/'))
                pair.url = pair.url.substring(0, pair.url.length - 1);
        }

        scrape = scrape ?? {};

        scrape.paths ??= {};
        scrape.paths.posts ??= 'wp-json/wp/v2/posts';
        scrape.paths.categories ??= 'wp-json/wp/v2/categories';

        for (const v of ['posts', 'categories']) {
            if (scrape.paths[v].startsWith('/'))
                scrape.paths[v] = scrape.paths[v].substring(1);
            if (scrape.paths[v].endsWith('/'))
                scrape.paths[v] = scrape.paths[v].substring(0, scrape.paths[v].length - 1);
        }

        scrape.articles ??= {};

        scrape.articles.include ??= [];

        scrape.articles.dates ??= {};
        scrape.articles.dates.gmt ??= false;
        scrape.articles.dates.fallback ??= false;

        scrape.articles.filter ??= {};
        scrape.articles.filter.search ??= undefined;
        scrape.articles.filter.author ??= undefined;
        scrape.articles.filter.authorExclude ??= undefined;

        // ISO8601 compliant date
        scrape.articles.filter.after ??= undefined;
        scrape.articles.filter.before ??= undefined;

        scrape.articles.filter.slug ??= undefined;
        // offset: typeof articleOptions.filter?.offset === 'number' ? articleOptions.filter.offset : 0,
        scrape.articles.filter.status ??= undefined;
        scrape.articles.filter.categories ??= undefined;
        scrape.articles.filter.categoriesExclude ??= undefined;
        scrape.articles.filter.tags ??= undefined;
        scrape.articles.filter.tagsExclude ??= undefined;
        scrape.articles.filter.sticky ??= undefined;

        scrape.articles.thumbnail ??= 'thumbnail';

        instructions.wp = scrape;
    }

    async request(utils: Utils): Promise<RequestsResult> {
        const instructions = utils.source.instructions;

        const categoriesUrl = `${utils.url}/${instructions.wp.paths!.categories}`;
        let postsUrl = `${utils.url}/${instructions.wp.paths!.posts}?_embed&per_page=${instructions.amount}`;

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

        const catReq = await utils.get(categoriesUrl);
        const postsReq = await utils.get(postsUrl);

        return [catReq, postsReq];
    }

    async parse(response: RequestsResult, utils: Utils): Promise<Article[]> {
        const [catReq, postsReq] = response as AxiosResponse[];

        const instructions = utils.source.instructions;

        const categories = JSON.parse(catReq.data);
        const posts = JSON.parse(postsReq.data);

        const articles: Article[] = [];

        const parsedCategories = Array.isArray(categories) ?
            categories.map((category: any) => {
                const links: string[] = [];

                const linkCatsKeys = Object.keys(category._links);

                for (const linkCat of linkCatsKeys) {
                    for (const href of category._links[linkCat])
                        links.push(href.href);
                }

                return {
                    id: category.id,
                    description: utils.cleanupHTMLText(category.description, false),
                    name: utils.cleanupHTMLText(category.name, true),
                    links
                };
            }) : [];

        let count = 0
        for (const p of posts) {
            // WordPress will return the specified amount, but we double-check to be sure
            if (count >= instructions.amount) continue;
            count++;

            const article = new Article();
            article.title = utils.cleanupHTMLText(p.title.rendered, true);
            article.content = utils.cleanupHTMLText(p.content.rendered, false);
            article.link = utils.cleanupHTMLText(p.link, false);

            if (instructions.wp.articles!.dates!.gmt) {
                if (p.date_gmt != null)
                    article.pubDate = p.date_gmt;
                else if (instructions.wp.articles!.dates!.fallback)
                    article.pubDate = p.date;
            } else article.pubDate = p.date;

            if (instructions.includeContentAttachments)
                article.pushAttachments(utils.extractLinks(article.content));

            for (const cId of p.categories ?? []) {
                const cat = parsedCategories.find((c: any) => c.id == cId)
                if (cat) article.pushCategory(cat.name, cat.links);
            }

            // Thumbnail
            const thumbnailSize = instructions.wp.articles!.thumbnail!;
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