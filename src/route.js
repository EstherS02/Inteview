const appRoutes = (app) => {
    app.use('/api/author', require('./api/author'));
    app.use('/api/commiter', require('./api/commiter'));
    app.use('/api/commit', require('./api/commit'));
}

module.exports = appRoutes;