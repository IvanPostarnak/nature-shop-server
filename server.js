require('dotenv').config();
const express = require('express');
const homeRouter = require('./src/routes/home.router')

const server = express();

server.use(homeRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT} port`)
});