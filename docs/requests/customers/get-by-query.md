# Request: Get Customers by Query params

## Description :bulb:
This request allow client-side to get customers (by passing several query params)  
- [Request: Get Customers by Query params](#request-get-customers-by-query-params)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [505: Server Error](#505-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/customers/
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So customers will be available at this endpoint
```
localhost:5300/customers/
```

## Query parameters :pencil:
All query params should go right there:
```
localhost:5300/customers/?start=<value>&end=<value>&...
```
This is a list of available query params for this endpoint:
- [info_mod](../query.md#info_mod)
- [id](../query.md#id)
- [start](../query.md#start)
- [end](../query.md#end)
- [limit](../query.md#limit)
- [method](../query.md#method)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 20
X-Current-Amount  : 7
Content-Type      : application/json; charset=utf-8
Content-Length    : 1395
...                 ...
```
'X-Total-Amount' header represents how many items (customers) database contains at all.    
'X-Current-Amount' header represents how many items (customers) was returned by the server, according to query params.

### body
**'info_mod=basic' case**
```json
[
  {
    "customer_id": 2,
    "first_name": "Brown",
    "last_name": "Emily",
    "age": 23,
    "gender": "Male",
    "language": "kk",
    "phone": "(555) 987-6543",
    "email": "emily.johnson@example.com",
    "country": "Kazakhstan",
    "city": "Astana"
  }
]
```
**'info_mod=full' case**
```json
[
  {
    "customer_id": 2,
    "first_name": "Brown",
    "last_name": "Emily",
    "middle_name": "Grace",
    "bio": {
      "customer_bio_id": 2,
      "age": 23,
      "birth_date": "2023-12-23",
      "gender": "Male",
      "family_status": "Single",
      "has_children": false,
      "language": "kk"
    },
    "contacts": {
      "customer_contacts_id": 2,
      "phone": "(555) 987-6543",
      "email": "emily.johnson@example.com"
    },
    "address": {
      "customer_ship_addr_id": 2,
      "country": "Kazakhstan",
      "region": null,
      "city": "Astana",
      "street": "Agtyes",
      "building": "124c",
      "appartment": "101",
      "floor": 31,
      "entrance": "A",
      "has_fence": true,
      "postal_code": "58476"
    },
    "distr": {
      "customer_outer_distr_id": 2,
      "company": "NSP",
      "distr_id": "7345698",
      "sponsor_distr_id": null
    },
    "stats": {
      "customer_statistics_id": 2,
      "purchase_first": null,
      "purchase_total": 0,
      "item_total": 0,
      "spent_total": 0
    },
    "prefs": {
      "color_schema": null,
      "language": {
        "language_id": 3,
        "name": "Kazakh",
        "name_native": "Қазақша",
        "code": "kk"
      },
      "currency": {
        "currency_id": 3,
        "name": "Tenge",
        "abbr": "KZT",
        "signature": "₸"
      }
    },
    "session": {
      "chart": {},
      "wish_list": {},
      "last_seen": {}
    }
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no customers in the database
```
response.code = 404
```
```
response.headers =

X-Powered-By      : Express
X-Total-Amount    : 20
X-Current-Amount  : 0
...                 ...
```
```
response.body =

"There are not any customers matching: 'basic' by query '{"id":"22"}'"
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
"Unable to define table by params : 'products,basic' at 'getByQuery()' method"
```