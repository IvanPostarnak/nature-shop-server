require('dotenv').config();
const express = require('express');
const HomeRouter = require('./src/routes/home.router')

const server = express();

server.use(HomeRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT} port`)
});