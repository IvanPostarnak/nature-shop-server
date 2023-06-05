const PostRouter = require('express').Router();
const PostController = require('./../controller/post.controller');

PostRouter.route('/')
          .get(async (req, res) => {
            const isFull = req.query.isfull || false;
            const response = await PostController.getAll(isFull);
            res.set('X-Total-Amount', response.count);
            res.status(response.code).json(response.body);
          });

PostRouter.route('/total')
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
