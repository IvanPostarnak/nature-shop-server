const employeesDictionary = new Map()
.set(
  'employees',
  {name: 'employee_basic_web', column: 'employee_id', type: 'json'}
)
.set(
  'employees basic',
  {name: 'employee_basic_web', column: 'employee_id', type: 'json'}
)
.set(
  'employees full',
  {name: 'employee_full_web', column: 'employee_id', type: 'json'}
)
.set(
  'employees addr',
  {name: 'employee_addr', column: 'employee_id', type: 'json'}
)
.set(
  'employees prefs',
  {name: 'employee_prefs', column: 'employee_id', type: 'json'}
)
.set(
  'employees bio',
  {name: 'employee_bio', column: 'employee_id', type: 'table'}
)
.set(
  'employees contacts',
  {name: 'employee_contacts', column: 'employee_id', type: 'table'}
)
.set(
  'employees hire',
  {name: 'employee_hire_data', column: 'employee_id', type: 'table'}
)
.set(
  'employees payments',
  {name: 'employee_payment', column: 'employee_id', type: 'table'}
)
.set(
  'employees shifts',
  {name: 'employee_shift', column: 'employee_id', type: 'table'}
)
.set(
  'employees specifics',
  {name: 'employee_specific', column: 'employee_id', type: 'table'}
)
.set(
  'employees states',
  {name: 'employee_state', column: 'employee_id', type: 'table'}
)
.set(
  'employees access_levels',
  {name: 'employee_access_level', column: 'employee_access_level_id', type: 'table'}
)
.set(
  'employees contract_types',
  {name: 'employee_contract_type', column: 'employee_contract_type_id', type: 'table'}
)
.set(
  'employees positions',
  {name: 'employee_position', column: 'employee_position_id', type: 'table'}
)
.set(
  'employees statuses',
  {name: 'employee_status', column: 'employee_status_id', type: 'table'}
);

module.exports = employeesDictionary;