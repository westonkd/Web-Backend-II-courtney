const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Courtney Mickelsen');
})

module.exports = routes;