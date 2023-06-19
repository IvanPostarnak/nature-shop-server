# Request: Get All Customers

## Description :bulb:
This request allow client-side to get all customers via passing an 'info_mod' query param  
- [Request: Get All Customers](#request-get-all-customers)
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
localhost:PORT/customers/all
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So customers will be available at this endpoint
```
localhost:5300/customers/all
```

## Query parameters :pencil:    
The only query param 'info_mod' should go right there:
```
localhost:5300/customers/all?info_mod=<value>
```
The list of available query params:
- [info_mod](../query.md#info_mod)

This 'info_mod' query param is skippable, but in such case will be used 'info_mod=basic' configuration. If you want to get whole available information about each customer you should specify 'info_mod=full'


## Response :package:
### headers
```
X-Powered-By    : Express
X-Total-Amount  : 20
Content-Type    : application/json; charset=utf-8
Content-Length  : 4003
...               ...
```
'X-Total-Amount' header represents how many items (customers) database contains at all. As far as we geting all customers, we don't need to devide how many customers we got and how many there are left in the database, because in '/all' case these values are equal.

### body
**'basic' case**    
```json
[
  {
    "customer_id": 1,
    "first_name": "Smith",
    "last_name": "John",
    "age": 55,
    "gender": "Male",
    "language": "ru",
    "phone": "(555) 123-4567",
    "email": "john.smith@example.com",
    "country": "Russia",
    "city": "Moscow"
  }
]
```
**'full' case**
```json
[
  {
    "customer_id": 1,
    "first_name": "Smith",
    "last_name": "John",
    "middle_name": "David",
    "bio": {
      "customer_bio_id": 1,
      "age": 55,
      "birth_date": "2023-07-10",
      "gender": "Male",
      "family_status": "Single",
      "has_children": true,
      "language": "ru"
    },
    "contacts": {
      "customer_contacts_id": 1,
      "phone": "(555) 123-4567",
      "email": "john.smith@example.com"
    },
    "address": {
      "customer_ship_addr_id": 1,
      "country": "Russia",
      "region": null,
      "city": "Moscow",
      "street": "Hytroin",
      "building": "32",
      "appartment": "141",
      "floor": 51,
      "entrance": "C",
      "has_fence": false,
      "postal_code": "33597"
    },
    "distr": {
      "customer_outer_distr_id": 1,
      "company": "NSP",
      "distr_id": "7345671",
      "sponsor_distr_id": null
    },
    "stats": {
      "customer_statistics_id": 1,
      "purchase_first": null,
      "purchase_total": 0,
      "item_total": 0,
      "spent_total": 0
    },
    "prefs": {
      "color_schema": null,
      "language": {
        "language_id": 1,
        "name": "English",
        "name_native": "English",
        "code": "en"
      },
      "currency": {
        "currency_id": 2,
        "name": "Ruble",
        "abbr": "RUB",
        "signature": "₽"
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
response.body =

"There are not any customers (info_mod = 'basic')"
```
### 505: Server Error
Server-side will send this response once something bad happened on the server side
```
response.code = 500
```
```
response.body =

// this
"Error uerying the database: Server Error"

// or this
"Unable to define table by params : 'products,basic' at 'getAll()' method"
```