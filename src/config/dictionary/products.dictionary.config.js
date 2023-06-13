const productsDictionary = new Map()
.set(
  'products',
  {name: 'product_basic', column: 'product_id', type: 'json'}
)
.set(
  'products basic',
  {name: 'product_basic', column: 'product_id', type: 'json'}
)
.set(
  'products full',
  {name: 'product_everything', column: 'product_id', type: 'json'}
)
.set(
  'products categories',
  {name: 'product_category', column: 'product_category_id', type: 'table'}
)
.set(
  'products forms',
  {name: 'product_form', column: 'product_form_id', type: 'table'}
)
.set(
  'products types',
  {name: 'product_type', column: 'product_type_id', type: 'table'}
);

module.exports = productsDictionary;