const customerDictionary = new Map()
.set(
  'customers',
  {name: 'customer_basic', column: 'customer_id', type: 'table'}
)
.set(
  'customers basic',
  {name: 'customer_basic', column: 'customer_id', type: 'table'}
)
.set(
  'customers full',
  {name: 'customer_full', column: 'customer_id', type: 'json'}
)
.set(
  'customers bio',
  {name: 'customer_bio', column: 'customer_id', type: 'table'}
)
.set(
  'customers contacts',
  {name: 'customer_contacts', column: 'customer_id', type: 'table'}
)
.set(
  'customers distr',
  {name: 'customer_outer_distr', column: 'customer_id', type: 'table'}
)
.set(
  'customers prefs',
  {name: 'customer_prefs', column: 'customer_id', type: 'table'}
)
.set(
  'customers session',
  {name: 'customer_session', column: 'customer_id', type: 'table'}
)
.set(
  'customers addr',
  {name: 'customer_ship_addr', column: 'customer_id', type: 'table'}
)
.set(
  'customers stats',
  {name: 'customer_statistics', column: 'customer_id', type: 'table'}
)

module.exports = customerDictionary;