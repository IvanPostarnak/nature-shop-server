# Request: Get Support Relations

## Description :bulb:
This request allow client-side to get support information about specific part of each customer by passing queries
- [Request: Get Support Relations](#request-get-support-relations)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
      - ['.../bio' case](#bio-case)
      - ['.../contacts' case](#contacts-case)
      - ['.../distr' case](#distr-case)
      - ['.../prefs' case](#prefs-case)
      - ['.../session' case](#session-case)
      - ['.../addr' case](#addr-case)
      - ['.../stats' case](#stats-case)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [500: Server Error](#500-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/customers/support/:arg
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific support relations will be available at this endpoint
```
localhost:5300/customers/support/:arg
```
There is a list of available relations to get info (arg):
- bio [see](#bio-case)
- contacts [see](#contacts-case)
- distr [see](#distr-case)
- prefs [see](#prefs-case)
- session [see](#session-case)
- addr [see](#addr-case)
- stats [see](#stats-case)

**Example**: to get statistitcs info 'stats' information about customers one should send GET request to
```
localhost:5300/customers/support/stats
```
Do the same requests for another parts of info

## Query parameters :pencil:    
The only query param 'id' should go right there:
```
localhost:5300/customers/support/:arg?id=<value>
```
The list of available query params:
- [id](../query.md#id)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 20
X-Current-Amount  : 1
Content-Type      : application/json; charset=utf-8
Content-Length    : 118
...                 ...
```
'X-Total-Amount' header represents how many items database contains at all.    
'X-Current-Amount' header represents how many items was returned by the server, according to query params.

### body

#### '.../bio' case
Provide information about existing in the database customers' bio information
```json
[
  {
    "customer_bio_id": 7,
    "customer_id": 7,
    "age": 23,
    "birth_date": "2023-12-22T21:00:00.000Z",
    "gender_id": 2,
    "family_status_id": 2,
    "has_children": false,
    "language_id": 3
  }
]
```

#### '.../contacts' case
Provide information about existing in the database customers' contacts information
```json
[
  {
    "customer_contacts_id": 7,
    "customer_id": 7,
    "phone": "(555) 753-0864",
    "email": "james.martinez@example.com"
  }
]
```

#### '.../distr' case
Provide information about existing in the database customers' distributor's information
```json
[
  {
    "customer_outer_distr_id": 7,
    "customer_id": 7,
    "company_id": 1,
    "distr_id": "7345833",
    "sponsor_distr_id": "7345779"
  }
]
```

#### '.../prefs' case
Provide information about existing in the database customers' preferences information
```json
[
  {
    "customer_preferences_id": 7,
    "customer_id": 7,
    "color_schema": null,
    "language": null,
    "currency": {
      "currency_id": 3,
      "name": "Tenge",
      "abbr": "KZT",
      "signature": "₸"
    }
  }
]
```

#### '.../session' case
Provide information about existing in the database customers' session information
```json
[
  {
    "customer_preferences_id": 7,
    "customer_id": 7,
    "chart": {},
    "wish_list": {},
    "last_seen": {}
  }
]
```

#### '.../addr' case
Provide information about existing in the database customers' address information
```json
[
  {
    "customer_ship_addr_id": 7,
    "customer_id": 7,
    "country_id": 1,
    "region": null,
    "city_id": 1,
    "street": "Bolshevistskaya",
    "building": "45",
    "appartment": "25",
    "floor": 6,
    "entrance": "B",
    "has_fence": true,
    "postal_code": "124005"
  }
]
```

#### '.../stats' case
Provide information about existing in the database customers' statistics information
```json
[
  {
    "customer_statistics_id": 7,
    "customer_id": 7,
    "purchase_first": null,
    "purchase_total": 0,
    "item_total": 0,
    "spent_total": 0
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

"There are not any support relations matching: 'stats' by query '{\"id\":\"23\"}'"
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
"Unable to define table by params : 'customers,statss' at 'getByQuery()' method"
```