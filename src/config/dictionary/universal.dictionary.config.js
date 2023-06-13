const universalDictionary = new Map()
.set(
  'universal genders',
  {name: 'gender', column: 'gender_id', type: 'table'}
)
.set(
  'universal brands',
  {name: 'brand', column: 'brand_id', type: 'table'}
)
.set(
  'universal cities',
  {name: 'city', column: 'city_id', type: 'table'}
)
.set(
  'universal color_schemas',
  {name: 'color_schema', column: 'color_schema_id', type: 'table'}
)
.set(
  'universal companies',
  {name: 'company', column: 'company_id', type: 'table'}
)
.set(
  'universal countries',
  {name: 'country', column: 'country_id', type: 'table'}
)
.set(
  'universal currency',
  {name: 'currency', column: 'currency_id', type: 'table'}
)
.set(
  'universal exchange_rates',
  {name: 'exchange_rate', column: 'exchange_rate_id', type: 'table'}
)
.set(
  'universal family_statuses',
  {name: 'family_status', column: 'family_status_id', type: 'table'}
)
.set(
  'universal languages',
  {name: 'language', column: 'language_id', type: 'table'}
)
.set(
  'universal measure_units',
  {name: 'measure_unit', column: 'measure_unit_id', type: 'table'}
)
.set(
  'universal packing_materials',
  {name: 'packing_material', column: 'packing_material_id', type: 'table'}
)
.set(
  'universal payment_types',
  {name: 'payment_type', column: 'payment_type_id', type: 'table'}
)

module.exports = universalDictionary;