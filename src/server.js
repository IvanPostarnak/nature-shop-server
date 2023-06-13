require('dotenv').config();
const express = require('express');
const loggerURL = require('./middleware/loggerURL');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.router');
const ProductRouter = require('./routes/product.router');
const UniversalRouter = require('./routes/universal.router');

const server = express();

server.set(express.json());
server.use(loggerURL);

server.use(HomeRouter);
server.use('/posts', PostRouter);
server.use('/products', ProductRouter);
server.use('/universal', UniversalRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT} port`)
});