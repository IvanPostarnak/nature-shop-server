require('dotenv').config();
const express = require('express');

const server = express();

server.get('/', (res, req) => {
  console.log('It is working');
});

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT} port`)
});