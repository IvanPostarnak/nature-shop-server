const shopsDictionary = new Map()
.set(
  'shops',
  {name: 'shop', column: 'shop_id', type: 'table'}
)
.set(
  'shops addr',
  {name: 'shop_addr', column: 'shop_id', type: 'table'}
)
.set(
  'shops contacts',
  {name: 'shop_contacts', column: 'shop_id', type: 'table'}
)
.set(
  'shops payment',
  {name: 'shop_payment', column: 'shop_id', type: 'table'}
)
.set(
  'shops renter',
  {name: 'shop_renter', column: 'shop_id', type: 'table'}
)
.set(
  'shops schedule',
  {name: 'shop_schedule', column: 'shop_id', type: 'table'}
)
.set(
  'shops security',
  {name: 'shop_security', column: 'shop_id', type: 'table'}
)
.set(
  'shops staff',
  {name: 'shop_staff', column: 'shop_id', type: 'table'}
)
.set(
  'shops stats',
  {name: 'shop_statistics', column: 'shop_id', type: 'table'}
);

module.exports = shopsDictionary;