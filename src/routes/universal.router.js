const UniversalRouter = require('express').Router();
const UniversalController = require('../controller/universal.controller');
const endQuery = require('../middleware/query/end.query');
const limitQuery = require('../middleware/query/limit.query');
const nameQuery = require('../middleware/query/name.query');
const startQuery = require('../middleware/query/start.query');
const idQuery = require('../middleware/query/id.query');
const methodQuery = require('../middleware/query/method.query');

UniversalRouter.route('/:relation')
               .get(
                  nameQuery,
                  limitQuery,
                  startQuery,
                  endQuery,
                  idQuery,
                  methodQuery,
                  async (req, res) => {
                    const response = await UniversalController.getRelation({...req.custom.query}, req.params.relation);
                    res.set('X-Total-Amount', response.count);
                    res.status(response.code).json(response.body);
                  }
               );

module.exports = UniversalRouter;