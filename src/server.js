require('dotenv').config();
const express = require('express');
const loggerURL = require('./middleware/loggerURL');
const initMiddleware = require('./middleware/init.middleware');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.router');
const ProductRouter = require('./routes/product.router');
const UniversalRouter = require('./routes/universal.router');
const CustomerRouter = require('./routes/customer.router');
const SupplierRouter = require('./routes/supplier.router');
const ShipperRouter = require('./routes/shipper.router');
const ShopRouter = require('./routes/shop.router');
const EmployeeRouter = require('./routes/employee.router');
const PurchaseRouter = require('./routes/purchase.router');

const server = express();

server.set(express.json());
server.use(initMiddleware);
server.use(loggerURL);

server.use(HomeRouter);
server.use('/posts', PostRouter);
server.use('/products', ProductRouter);
server.use('/universal', UniversalRouter);
server.use('/customers', CustomerRouter);
server.use('/suppliers', SupplierRouter);
server.use('/shippers', ShipperRouter);
server.use('/shops', ShopRouter);
server.use('/employees', EmployeeRouter);
server.use('/purchases', PurchaseRouter);

const PORT = process.env.PORT || 5300;

server.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`)
});