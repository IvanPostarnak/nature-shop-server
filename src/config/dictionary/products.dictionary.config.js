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
)
.set(
  'products data',
  {name: 'product_data', column: 'product_id', type: 'table'}
)
.set(
  'products info',
  {name: 'product_info', column: 'product_id', type: 'table'}
)
.set(
  'products points',
  {name: 'product_points', column: 'product_id', type: 'table'}
)
.set(
  'products price',
  {name: 'product_price', column: 'product_id', type: 'table'}
)
.set(
  'products rating',
  {name: 'product_rating', column: 'product_id', type: 'table'}
)
.set(
  'products size',
  {name: 'product_size', column: 'product_id', type: 'table'}
);

module.exports = productsDictionary;