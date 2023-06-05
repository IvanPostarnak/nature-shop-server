const PostRouter = require('express').Router();
const PostController = require('./../controller/post.controller');

PostRouter.route('/total')
          .get(async (req, res) => {
            const response = await PostController.getTotalCount();
            res.status(response.code).json(response.body);
          });

module.exports = PostRouter;
