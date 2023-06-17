const UniversalRouter = require('express').Router();
const UniversalController = require('../controller/universal.controller');
const endQuery = require('../middleware/endQuery');
const limitQuery = require('../middleware/limitQuery');
const nameQuery = require('../middleware/nameQuery');
const startQuery = require('../middleware/startQuery');
const idQuery = require('../middleware/idQuery');
const methodQuery = require('../middleware/methodQuery');

UniversalRouter.route('/:relation')
               .get(
                  nameQuery,
                  limitQuery,
                  startQuery,
                  endQuery,
                  idQuery,
                  methodQuery,
                  async (req, res) => {
                    const response = await UniversalController.getRelation({
                      name: req.name,
                      limit: req.limit,
                      start: req.start,
                      end: req.end,
                      id: req.id,
                      method: req.method                    
                    }, req.params.relation);
                    res.set('X-Total-Amount', response.count);
                    res.status(response.code).json(response.body);
                  }
               );

module.exports = UniversalRouter;