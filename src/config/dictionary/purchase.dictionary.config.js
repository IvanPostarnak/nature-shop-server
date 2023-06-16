const purchasesDictionary = new Map()
.set(
  'purchases',
  {name: 'purchase_basic_web', column: 'purchase_id', type: 'json'}
)
.set(
  'purchases basic',
  {name: 'purchase_basic_web', column: 'purchase_id', type: 'json'}
)
.set(
  'purchases full',
  {name: 'purchase_full_web', column: 'purchase_id', type: 'json'}
)
.set(
  'purchases shipping',
  {name: 'purchase_ship_view', column: 'purchase_id', type: 'json'}
)
.set(
  'purchases details',
  {name: 'purchase_details', column: 'purchase_id', type: 'table'}
)
.set(
  'purchases params',
  {name: 'purchase_params', column: 'purchase_id', type: 'table'}
)
.set(
  'purchases payment',
  {name: 'purchase_payment', column: 'purchase_id', type: 'table'}
);

module.exports = purchasesDictionary;