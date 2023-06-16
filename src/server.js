require('dotenv').config();
const express = require('express');
const loggerURL = require('./middleware/loggerURL');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.router');
const ProductRouter = require('./routes/product.router');
const UniversalRouter = require('./routes/universal.router');
const CustomerRouter = require('./routes/customer.router');
const SupplierRouter = require('./routes/supplier.router');
const ShipperRouter = require('./routes/shipper.router');
const ShopRouter = require('./routes/shop.router');

const server = express();

server.set(express.json());
server.use(loggerURL);

server.use(HomeRouter);
server.use('/posts', PostRouter);
server.use('/products', ProductRouter);
server.use('/universal', UniversalRouter);
server.use('/customers', CustomerRouter);
server.use('/suppliers', SupplierRouter);
server.use('/shippers', ShipperRouter);
server.use('/shops', ShopRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT} port`)
});