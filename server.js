require('dotenv').config();
const express = require('express');
const HomeRouter = require('./src/routes/home.router');
const PostRouter = require('./src/routes/post.router');
const loggerURL = require('./src/middleware/loggerURL');

const server = express();

server.set(express.json());
server.use(loggerURL);

server.use(HomeRouter);
server.use('/posts', PostRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT} port`)
});