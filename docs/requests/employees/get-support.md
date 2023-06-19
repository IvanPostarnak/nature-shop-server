# Request: Get Support Relations

## Description :bulb:
This request allow client-side to get support information about specific part of each employee by passing queries
- [Request: Get Support Relations](#request-get-support-relations)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
      - ['.../addr' case](#addr-case)
      - ['.../prefs' case](#prefs-case)
      - ['.../bio' case](#bio-case)
      - ['.../contacts' case](#contacts-case)
      - ['.../hire' case](#hire-case)
      - ['.../hire' case](#hire-case-1)
      - ['.../shifts' case](#shifts-case)
      - ['.../specifics' case](#specifics-case)
      - ['.../states' case](#states-case)
      - ['.../access\_levels' case](#access_levels-case)
      - ['.../contract\_types' case](#contract_types-case)
      - ['.../positions' case](#positions-case)
      - ['.../statuses' case](#statuses-case)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [500: Server Error](#500-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/employees/support/:arg
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific support relations will be available at this endpoint
```
localhost:5300/employees/support/:arg
```
There is a list of available relations to get info (arg):
- addr [see](#addr-case)
- prefs [see](#prefs-case)
- bio [see](#bio-case)
- contacts [see](#contacts-case)
- hire [see](#hire-case)
- payments [see](#payments-case)
- shifts [see](#shifts-case)
- specifics [see](#specifics-case)
- states [see](#states-case)
- access_levels [see](#access_levels-case)
- contract_types [see](#contract_types-case)
- positions [see](#positions-case)
- statuses [see](#statuses-case)

**Example**: to get statistitcs info 'stats' information about employees one should send GET request to
```
localhost:5300/employees/support/stats
```
Do the same requests for another parts of info

## Query parameters :pencil:    
The only query param 'id' should go right there:
```
localhost:5300/employees/support/:arg?id=<value>
```
The list of available query params:
- [id](../query.md#id)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 4
X-Current-Amount  : 1
Content-Type      : application/json; charset=utf-8
Content-Length    : 169
...                 ...
```
'X-Total-Amount' header represents how many items database contains at all.    
'X-Current-Amount' header represents how many items was returned by the server, according to query params.

### body

#### '.../addr' case
Provide information about existing in the database employees' address information
```json
[
  {
    "employee_id": 3,
    "living": {
      "employee_addr_liv_id": 3,
      "country": "Kazakhstan",
      "region": null,
      "city": "Astana",
      "street": "Abai",
      "building": "45",
      "appartment": "25",
      "floor": 6,
      "entrance": "B",
      "has_fence": true,
      "postal_code": "124005"
    },
    "registration": {
      "employee_addr_reg_id": 3,
      "country": "USA",
      "region": null,
      "city": "Washington",
      "street": "Bolshevistskaya",
      "building": "45",
      "appartment": "25",
      "floor": 6,
      "entrance": "B",
      "has_fence": true,
      "postal_code": "124005"
    }
  }
]
```

#### '.../prefs' case
Provide information about existing in the database employees' preferences information
```json
[
  {
    "employee_preferences_id": 3,
    "employee_id": 3,
    "color_schema": null,
    "language": null,
    "currency": null
  }
]
```

#### '.../bio' case
Provide information about existing in the database employees' bio information
```json
[
  {
    "employee_bio_id": 3,
    "employee_id": 3,
    "age": 21,
    "birth_date": "2023-02-13T21:00:00.000Z",
    "gender_id": 3,
    "family_status_id": 1,
    "has_children": true,
    "language_id": 1
  }
]
```

#### '.../contacts' case
Provide information about existing in the database employees' contacts information
```json
[
  {
    "employee_contacts_id": 3,
    "employee_id": 3,
    "phone": "5641328734",
    "email": "kissygirl@gmail.com",
    "emergency_phone": null
  }
]
```

#### '.../hire' case
Provide information about existing in the database employees' hiring information
```json
[
  {
    "employee_hire_data_id": 3,
    "employee_id": 3,
    "hire_date": "2018-02-17T21:00:00.000Z",
    "prev_promotion_date": null,
    "next_promotion_date": null,
    "termination_date": null
  }
]
```

#### '.../hire' case
Provide information about existing in the database employees' hiring information
```json
[
  {
    "employee_payment_id": 3,
    "employee_id": 3,
    "currency_id": 1,
    "salary_mod": 1,
    "bonus_mod": 1,
    "account_num": "12831982647619463",
    "tax_account_num": "1283198264761125"
  }
]
```

#### '.../shifts' case
Provide information about existing in the database employees' information about shifts
```json
[
  {
    "employee_shift_id": 3,
    "employee_id": 3,
    "shop_id": 2,
    "manager_id": 2,
    "has_keys": true,
    "shift_start_time": "08:00:00",
    "hours_per_day": 10,
    "days_per_week": 5
  }
]
```

#### '.../specifics' case
Provide information about existing in the database employees' information about specifics
```json
[
  {
    "employee_specific_id": 3,
    "employee_id": 3,
    "has_kin_in_company": false
  }
]
```

#### '.../states' case
Provide information about existing in the database employees' information about states
```json
[
  {
    "employee_state_id": 3,
    "employee_id": 3,
    "position_id": 7,
    "contract_type_id": 9,
    "status_id": 4,
    "access_level_id": 1
  }
]
```

#### '.../access_levels' case
Provide information about existing in the database employees' information about levels of access
```json
[
  {
    "employee_access_level_id": 1,
    "level": "AAA",
    "description": "AAA is the highest access level in the company"
  }
]
```

#### '.../contract_types' case
Provide information about existing in the database employees' information about types of contracts
```json
[
  {
    "employee_contract_type_id": 1,
    "contract_type": "Full-time",
    "description": "Full-time - The individual is employed or engaged in a position where they work the standard or designated hours for that role."
  }
]
```

#### '.../positions' case
Provide information about existing in the database employees' information about positions in company
```json
[
  {
    "employee_position_id": 1,
    "name": "CEO (Chief Executive Officer)",
    "description": "CEO (Chief Executive Officer) - The highest-ranking executive in a company, responsible for making major corporate decisions and managing overall operations.",
    "salary_mod": 36,
    "bonus_mod": 36,
    "superior_id": null
  }
]
```

#### '.../statuses' case
Provide information about existing in the database employees' information about statuses in company
```json
[
  {
    "employee_status_id": 1,
    "status": "Active",
    "description": "Active - The individual is currently engaged and actively participating in their duties or responsibilities."
  }
]
```

## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there is not such relation or relation's item in the database
```
response.code = 404
```
```
response.body =

"There are not any support relations matching: 'statuses' by query '{..., ..., ...}'"
```
### 500: Server Error
Server-side will send this response once something bad happened on the server side
```
response.code = 500
```
```
response.body =

// this
"Error querying the database: Server Error"

// or this
"Unable to define table by params : 'employee,statuses' at 'getByQuery()' method"
```