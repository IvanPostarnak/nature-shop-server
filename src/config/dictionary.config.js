const postsDictionary = require('./dictionary/posts.dictionary.config');
const productsDictionary = require('./dictionary/products.dictionary.config');
const universalDictionary = require('./dictionary/universal.dictionary.config');

const dictionary = new Map([
  ...postsDictionary,
  ...productsDictionary,
  ...universalDictionary
]);

module.exports = dictionary;