# Request: Get Universal Relations

## Description :bulb:
This requests allow client-side to get universal relations by passing queries. This relations contains common information.
- [Request: Get Universal Relations](#request-get-universal-relations)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
      - ['.../genders' case](#genders-case)
      - ['.../brands' case](#brands-case)
      - ['.../cities' case](#cities-case)
      - ['.../color\_schemas' case](#color_schemas-case)
      - ['.../companies' case](#companies-case)
      - ['.../countries' case](#countries-case)
      - ['.../currency' case](#currency-case)
      - ['.../exchange\_rates' case](#exchange_rates-case)
      - ['.../family\_statuses' case](#family_statuses-case)
      - ['.../languages' case](#languages-case)
      - ['.../measure\_units' case](#measure_units-case)
      - ['.../packing\_materials' case](#packing_materials-case)
      - ['.../payment\_types' case](#payment_types-case)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [505: Server Error](#505-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/universal/:arg
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So universal relations will be available at this endpoints
```
localhost:5300/universal/:arg
```
There is a list of available relations to get info (arg):
- genders [see](#genders-case)
- brands [see](#brands-case)
- cities [see](#cities-case)
- color_schemas [see](#color_schemas-case)
- companies [see](#companies-case)
- countries [see](#countries-case)
- currency [see](#currency-case)
- exchange_rates [see](#exchange_rates-case)
- family_statuses [see](#family_statuses-case)
- languages [see](#languages-case)
- measure_units [see](#measure_units-case)
- packing_materials [see](#packing_materials-case)
- payment_types [see](#payment_types-case)

**Example**: to get 'genders' information about products one should send GET request to
```
localhost:5300/universal/genders
```
Do the same requests for another relations

## Query parameters :pencil:    
All query params should go right there:
```
localhost:5300/universal/:arg?name=<value>&id=<value>
```
The list of available query params:
- [name](../query.md#name)
- [id](../query.md#id)
- [start](../query.md#start)
- [end](../query.md#end)
- [limit](../query.md#limit)
- [method](../query.md#method)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 3
Content-Type      : application/json; charset=utf-8
Content-Length    : 112
...                 ...
```
'X-Total-Amount' header represents how many items this relation contains.

### body
#### '.../genders' case
Provide information about existing in the database genders
```json
[
  {
    "gender_id": 1,
    "name": "Any"
  }
]
```

#### '.../brands' case
Provide information about existing in the database brands
```json
[
  {
    "brand_id": 1,
    "name": "Bremani Makeup",
    "description": "The random collision of particles in the atmosphere creates mesmerizing Northern Lights.",
    "company_id": 1
  }
]
```

#### '.../cities' case
Provide information about existing in the database cities
```json
[
  {
    "city_id": 1,
    "name": "Washington",
    "country_id": 1,
    "population_mil": 1,
    "tel_area_code": ["+1 202"],
    "time_delta": -4
  }
]
```

#### '.../color_schemas' case
Provide information about existing in the database color schemas
```json
[
  {
    "color_schema_id": 1,
    "name": "Light"
  }
]
```

#### '.../companies' case
Provide information about existing in the database companies (producers)
```json
[
  {
    "company_id": 1,
    "name": "Nature's Sunshine Company",
    "abbr": "NSP",
    "description": "High quality Dietary Supplements",
    "country_id": 1
  }
]
```

#### '.../countries' case
Provide information about existing in the database countries
```json
[
  {
    "country_id": 1,
    "name": "USA",
    "capital_city_id": 1,
    "continent": "North America",
    "population_mil": 333.287,
    "language_id": 1,
    "currency_id": 1
  }
]
```

#### '.../currency' case
Provide information about existing in the database currency
```json
[
  {
    "currency_id": 1,
    "name": "Dollar US",
    "abbr": "USD",
    "signature": "$"
  }
]
```

#### '.../exchange_rates' case
Provide information about existing in the database exchange rates
```json
[
  {
    "exchange_rate_id": 1,
    "currency_from": 1,
    "currency_to": 2,
    "current_rate": 81.49,
    "previous_rate": 81.48,
    "update_ts": "2023-05-16T03:45:49.756Z",
    "default_rate": 80,
    "min_rate": 70,
    "max_rate": 100
  }
]
```

#### '.../family_statuses' case
Provide information about existing in the database family statuses
```json
[
  {
    "family_status_id": 1,
    "name": "Married",
    "description": "Married - The individual is legally joined in matrimony to another person."
  }
]
```

#### '.../languages' case
Provide information about existing in the database languages
```json
[
  {
    "language_id": 1,
    "name": "English",
    "name_native": "English",
    "code": "en"
  }
]
```

#### '.../measure_units' case
Provide information about existing in the database measure units
```json
[
  {
    "measure_unit_id": 1,
    "name": "milligrams",
    "abbr": "mg"
  }
]
```

#### '.../packing_materials' case
Provide information about existing in the database packing materials
```json
[
  {
    "packing_material_id": 1,
    "name": "Plastic",
    "description": "A synthetic material made from polymers that is versatile, lightweight, and commonly used for various applications"
  }
]
```

#### '.../payment_types' case
Provide information about existing in the database payments types
```json
[
  {
    "payment_type_id": 1,
    "name": "Combine"
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

Universal relation 'payment_types' were not found by queries : '{..., ..., ...}'
```
### 505: Server Error
Server-side will send this response once something bad happened on the server side
```
response.code = 500
```
```
response.body =

// this
"Error querying the database: Server Error"

// or this
"Unable to define table by params : 'universal' at 'getByQuery()' method"
```