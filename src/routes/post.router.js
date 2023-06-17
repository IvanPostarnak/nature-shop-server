const PostRouter = require('express').Router();
const languageQuery = require('../middleware/languageQuery');
const authorQuery = require('../middleware/authorQuery');
const ratingQuery = require('../middleware/ratingQuery');
const votesQuery = require('../middleware/votesQuery');
const visitedQuery = require('../middleware/visitedQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');
const endQuery = require('../middleware/endQuery');
const PostController = require('./../controller/post.controller');
const createDateQuery = require('../middleware/createDateQuery');
const titleQuery = require('../middleware/titleQuery');
const contentQuery = require('../middleware/contentQuery');
const methodQuery = require('../middleware/methodQuery');

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
              const response = await PostController.getByQuery({
                language: req.language,
                author: req.author,
                rating: req.rating,
                votes_number: req.votes_number,
                visited_total: req.visited_total,
                limit: req.limit,
                start: req.start,
                end: req.end,
                create_ts: req.create_ts,
                method: req.method
              });
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
              const response = await PostController.getByQuery({
                title: req.title,
                content: req.content,
                method: req.method
              });
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
