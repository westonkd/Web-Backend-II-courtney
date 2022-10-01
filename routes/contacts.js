const routes = require('express').Router();
const { getAll, getSingle } = require('../controllers/contacts');

routes.get('/', getAll);
routes.get('/:id', getSingle);

// routes.get('/:id', (req, res) => {
//     res.send(req.params.id);
// })

module.exports = routes;