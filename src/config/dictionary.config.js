const customerDictionary = require('./dictionary/customers.dictionary.config');
const postsDictionary = require('./dictionary/posts.dictionary.config');
const productsDictionary = require('./dictionary/products.dictionary.config');
const shippersDictionary = require('./dictionary/shippers.dictionary.config');
const shopsDictionary = require('./dictionary/shops.dictionary.config');
const suppliersDictionary = require('./dictionary/suppliers.dictionary.config');
const universalDictionary = require('./dictionary/universal.dictionary.config');

const dictionary = new Map([
  ...postsDictionary,
  ...productsDictionary,
  ...universalDictionary,
  ...customerDictionary,
  ...suppliersDictionary,
  ...shippersDictionary,
  ...shopsDictionary
]);

module.exports = dictionary;