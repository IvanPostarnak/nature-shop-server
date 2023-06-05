const PostRouter = require('express').Router();
const authorIdQuery = require('../middleware/authorIdQuery');
const endQuery = require('../middleware/endQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');
const PostController = require('./../controller/post.controller');

PostRouter.use(limitQuery);
PostRouter.use(startQuery);
PostRouter.use(endQuery);
PostRouter.use(authorIdQuery);

PostRouter.route('/')
          .get(async (req, res) => {
            const response = await PostController.getByQuery({
              author_id: req.author_id,
              limit: req.limit,
              start: req.start,
              end: req.end
            });
            res.set('X-Total-Amount', (await PostController.getTotalCount()).body.total_count);
            res.set('X-Current-Amount', response.count);
            res.status(response.code).json(response.body);
          })

PostRouter.route('/all')
          .get(async (req, res) => {
            const response = await PostController.getAll();
            res.set('X-Total-Amount', response.count);
            res.status(response.code).json(response.body);
          });

PostRouter.route('/total_count')
          .get(async (req, res) => {
            const response = await PostController.getTotalCount();
            res.status(response.code).json(response.body);
          });

PostRouter.route('/:id')
          .get(async (req, res) => {
            const id = req.params.id;
            const response = await PostController.getOneById(id);
            res.status(response.code).json(response.body);
          });

module.exports = PostRouter;
