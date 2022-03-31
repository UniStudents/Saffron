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
                pair[0] = `${pair[0]}${pair[0].endsWith('/') ? '' : '/'}`
            else if (pair.length == 2)
                pair[1] = `${pair[1]}${pair[1].endsWith('/') ? '' : '/'}`
        }

        let include: string[] = [];
        if(Array.isArray(sourceJson.scrape?.articles?.include)) {
            for(const item of sourceJson.scrape.articles.include) {
                if(typeof item === 'string')
                    include.push(item)
            }
        }

        instructions.scrapeOptions = {
            articles: {
                include,
                dates: {
                    gmt: typeof sourceJson.scrape?.articles?.dates?.gmt === 'boolean' ? sourceJson.scrape.articles.dates.gmt : false,
                    fallback: typeof sourceJson.scrape?.articles?.dates?.fallback === 'boolean' ? sourceJson.scrape.articles.dates.fallback : false,
                },
                filter: {
                    search: typeof sourceJson.scrape?.articles?.filter?.search === 'string' ? sourceJson.scrape.articles.filter.search : '',
                    author: typeof sourceJson.scrape?.articles?.filter?.author === 'string' ? sourceJson.scrape.articles.filter.author : '',
                    authorExclude: typeof sourceJson.scrape?.articles?.filter?.authorExclude === 'string' ? sourceJson.scrape.articles.filter.authorExclude : '',

                    // ISO8601 compliant date
                    after: typeof sourceJson.scrape?.articles?.filter?.after === 'string' ? sourceJson.scrape.articles.filter.after : '',
                    before: typeof sourceJson.scrape?.articles?.filter?.before === 'string' ? sourceJson.scrape.articles.filter.before : '',

                    // offset: typeof sourceJson.scrape?.articles?.filter?.offset === 'number' ? sourceJson.scrape.articles.filter.offset : 0,
                    slug: typeof sourceJson.scrape?.articles?.filter?.slug === 'string' ? sourceJson.scrape.articles.filter.slug : '',
                    status: typeof sourceJson.scrape?.articles?.filter?.status === 'string' ? sourceJson.scrape.articles.filter.status : '',
                    categories: typeof sourceJson.scrape?.articles?.filter?.categories === 'string' ? sourceJson.scrape.articles.filter.categories : '',
                    categoriesExclude: typeof sourceJson.scrape?.articles?.filter?.categoriesExclude === 'string' ? sourceJson.scrape.articles.filter.categoriesExclude : '',
                    tags: typeof sourceJson.scrape?.articles?.filter?.tags === 'string' ? sourceJson.scrape.articles.filter.tags : '',
                    tagsExclude: typeof sourceJson.scrape?.articles?.filter?.tagsExclude === 'string' ? sourceJson.scrape.articles.filter.tagsExclude : '',
                    sticky: typeof sourceJson.scrape?.articles?.filter?.sticky === 'boolean' ? sourceJson.scrape.articles.filter.sticky : false,
                }
            }
        };
    }

    async parse(job: Job, alias: string, url: string, amount: number): Promise<Article[]> {
        let instructions = job.getInstructions();

        let categoriesUrl = `${url}wp-json/wp/v2/categories/`;
        let postsUrl = `${url}wp-json/wp/v2/posts?_embed&per_page=${amount}`;

        const filters = instructions.scrapeOptions.articles.filter;
        if(filters.search !== '') postsUrl +=`&search=${encodeURIComponent(filters.search)}`;
        if(filters.author !== '') postsUrl +=`&author=${filters.author}`;
        if(filters.authorExclude !== '') postsUrl +=`&author_exclude=${filters.authorExclude}`;
        if(filters.after !== '') postsUrl +=`&after=${filters.after}`;
        if(filters.before !== '') postsUrl +=`&before=${filters.before}`;
        // if(filters.offset > 0) postsUrl +=`&offset=${filters.offset}`;
        if(filters.slug !== '') postsUrl +=`&slug=${filters.slug}`;
        if(filters.status !== '') postsUrl +=`&status=${filters.status}`;
        if(filters.categories !== '') postsUrl +=`&categories=${filters.categories}`;
        if(filters.categoriesExclude !== '') postsUrl +=`&categories_exclude=${filters.categoriesExclude}`;
        if(filters.tags !== '') postsUrl +=`&tags=${filters.tags}`;
        if(filters.tagsExclude !== '') postsUrl +=`&tags_exclude=${filters.tagsExclude}`;
        if(filters.sticky) postsUrl +=`&_sticky`;

        let categories: any, posts: any[];

        let config: (AxiosConfig) = {
            timeout: instructions.getSource().timeout,
            responseType: 'arraybuffer',
            responseEncoding: 'binary'
        }
        if (instructions["ignoreCertificates"]) config.httpsAgent = httpsAgent

        try {
            categories = JSON.parse(instructions.textDecoder.decode((await axios.get(categoriesUrl, (config as AxiosRequestConfig)))?.data))
            posts = JSON.parse(instructions.textDecoder.decode((await axios.get(postsUrl, (config as AxiosRequestConfig)))?.data))
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

            // INCLUDE
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