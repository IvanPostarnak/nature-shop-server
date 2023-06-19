# Request: Get One Shop by ID

## Description :bulb:
This request allow client-side to get information about one shop by setting it's 'id' as URL-path param
- [Request: Get One Shop by ID](#request-get-one-shop-by-id)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [500: Server Error](#500-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/shops/:id
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific shop will be available at this endpoint
```
localhost:5300/shops/:id
```
**Example**: in order to get a shop with **'shop_id'=23** you should send a GET request to this endpoint
```
localhost:5300/shops/23
```


## Query parameters :pencil:    
The only query param 'info_mod' should go right there:
```
localhost:5300/shops/:id?info_mod=<value>
```
The list of available query params:
- [info_mod](../query.md#info_mod)

This 'info_mod' query param is skippable, but in such case will be used 'info_mod=basic' configuration. If you want to get whole available information about shop you should specify 'info_mod=full'


## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 878
...               ...
```
### body
**'basic' case**
```json
[
  {
    "shop_id": 1,
    "admin": "Andrew Postarnak",
    "rating": null,
    "country": "USA",
    "city": "Washington",
    "phone": "8(123)576-98-01",
    "email": "textme@email.com",
    "collection_day": 17,
    "renter": null,
    "open_time": null,
    "close_time": null,
    "is_protected": true,
    "security_phone": "671312736",
    "staff_total": 2,
    "income_total": 0,
    "purchase_total": 0
  }
]
```
**'full' case**
```json
[
  {
    "shop_id": 1,
    "rating": null,
    "admin": {
      "employee_id": 1,
      "first_name": "Andrew",
      "last_name": "Postarnak",
      "middle_name": null
    },
    "address": {
      "shop_addr_id": 1,
      "country": "USA",
      "region": null,
      "city": "Washington",
      "street": "Agtes",
      "building": "152a",
      "appartment": "56",
      "floor": 43,
      "entrance": "C",
      "has_fence": false,
      "postal_code": "33597"
    },
    "contacts": {
      "shop_contacts_id": 1,
      "phone": "8(123)576-98-01",
      "email": "textme@email.com"
    },
    "payment": {
      "shop_payment_id": 1,
      "salary_mod": 1,
      "bonus_mod": 1,
      "salary_day": 15,
      "collection_day": 17
    },
    "renter": null,
    "schedule": {
      "shop_schedule_id": 1,
      "open_time": null,
      "close_time": null
    },
    "security": {
      "shop_security_id": 1,
      "keys_count": null,
      "is_protected": true,
      "phone": "671312736"
    },
    "staff": {
      "shop_staff_id": 1,
      "total_min": 1,
      "total_max": 1000000,
      "total_current": 2,
      "shift_min": 1,
      "shift_max": 1000000,
      "shift_current": 2
    },
    "stats": {
      "shop_statistics_id": 1,
      "income_total": 0,
      "purchase_total": 0
    }
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there is not such shop in the database
```
response.code = 404
```
```
response.body =

"There is not a shop with id '23' and query 'full'"
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
"Unable to define table by params : 'shops,basic' at 'getOneById()' method"
```