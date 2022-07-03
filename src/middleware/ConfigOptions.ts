export enum ConfigOptions {
    SOURCES_PATH = 'sources.path',
    SOURCES_INCLUDE_ONLY = 'sources.includeOnly',
    SOURCES_EXCLUDE = 'sources.exlude',
    SAFFRON_MODE = 'mode',
    WORKER_NODES = 'worker.nodes',
    REQUEST_TIMEOUT = 'worker.request.timeout',
    ARTICLE_AMOUNT = 'worker.article.amount',
    SCHEDULER_JOB_INT = 'scheduler.job.interval',
    SCHEDULER_JOB_HEAVY_INT = 'scheduler.job.heavyInterval',
    SCHEDULER_CHECKS_INT = 'scheduler.job.checkInterval',
    GRID_DISTRIBUTED = 'grid.distributed',
    GRID_SERVER_ADDRESS = 'grid.server.address',
    GRID_SERVER_PORT = 'grid.server.port',
    MISC_LOG_LEVEL = 'misc.log',
    DB_PUSH_ARTICLES = 'db.articles.push',
    DB_GET_ARTICLES = 'db.articles.get'
}