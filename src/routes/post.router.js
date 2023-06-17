const PostRouter = require('express').Router();
const languageQuery = require('../middleware/query/language.query');
const authorQuery = require('../middleware/query/author.query');
const ratingQuery = require('../middleware/query/rating.query');
const votesQuery = require('../middleware/query/votes.query');
const visitedQuery = require('../middleware/query/visited.query');
const limitQuery = require('../middleware/query/limit.query');
const startQuery = require('../middleware/query/start.query');
const endQuery = require('../middleware/query/end.query');
const PostController = require('./../controller/post.controller');
const createDateQuery = require('../middleware/query/createDate.query');
const titleQuery = require('../middleware/query/title.query');
const contentQuery = require('../middleware/query/content.query');
const methodQuery = require('../middleware/query/method.query');

PostRouter.route('/')
          .get(
            languageQuery,
            authorQuery,
            ratingQuery,
            votesQuery,
            visitedQuery,
            limitQuery,
            startQuery,
            endQuery,
            createDateQuery,
            methodQuery,
            async (req, res) => {
              const response = await PostController.getByQuery({...req.custom.query});
              res.set('X-Total-Amount', (await PostController.getTotalCount()).body.total_count);
              res.set('X-Current-Amount', response.count);
              res.status(response.code).json(response.body);
            }
          )

PostRouter.route('/search')
          .get(
            titleQuery,
            contentQuery,
            methodQuery,
            async (req, res) => {
              const response = await PostController.getByQuery({...req.custom.query});
              res.set('X-Total-Amount', (await PostController.getTotalCount()).body.total_count);
              res.set('X-Current-Amount', response.count);
              res.status(response.code).json(response.body);
            }
          )

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
