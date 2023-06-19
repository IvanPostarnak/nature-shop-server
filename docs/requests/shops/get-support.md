# Request: Get Support Relations

## Description :bulb:
This request allow client-side to get support information about specific part of each shop by passing queries
- [Request: Get Support Relations](#request-get-support-relations)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
      - ['.../addr' case](#addr-case)
      - ['.../contacts' case](#contacts-case)
      - ['.../payment' case](#payment-case)
      - ['.../renter' case](#renter-case)
      - ['.../schedule' case](#schedule-case)
      - ['.../security' case](#security-case)
      - ['.../staff' case](#staff-case)
      - ['.../stats' case](#stats-case)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [500: Server Error](#500-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/shops/support/:arg
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific support relations will be available at this endpoint
```
localhost:5300/shops/support/:arg
```
There is a list of available relations to get info (arg):
- addr [see](#addr-case)
- contacts [see](#contacts-case)
- payment [see](#payment-case)
- renter [see](#renter-case)
- schedule [see](#schedule-case)
- security [see](#security-case)
- staff [see](#staff-case)
- stats [see](#stats-case)

**Example**: to get statistitcs info 'stats' information about shops one should send GET request to
```
localhost:5300/shops/support/stats
```
Do the same requests for another parts of info

## Query parameters :pencil:    
The only query param 'id' should go right there:
```
localhost:5300/shops/support/:arg?id=<value>
```
The list of available query params:
- [id](../query.md#id)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 2
X-Current-Amount  : 1
Content-Type      : application/json; charset=utf-8
Content-Length    : 118
...                 ...
```
'X-Total-Amount' header represents how many items database contains at all.    
'X-Current-Amount' header represents how many items was returned by the server, according to query params.

### body

#### '.../addr' case
Provide information about existing in the database shops' address information
```json
[
  {
    "shop_addr_id": 1,
    "shop_id": 1,
    "country_id": 1,
    "region": null,
    "city_id": 1,
    "street": "Agtes",
    "building": "152a",
    "appartment": "56",
    "floor": 43,
    "entrance": "C",
    "has_fence": false,
    "postal_code": "33597"
  }
]
```

#### '.../contacts' case
Provide information about existing in the database shops' contacts information
```json
[
  {
    "shop_contacts_id": 1,
    "shop_id": 1,
    "phone": "8(123)576-98-01",
    "email": "textme@email.com"
  }
]
```

#### '.../payment' case
Provide information about existing in the database shops' payment information
```json
[
  {
    "shop_payment_id": 1,
    "shop_id": 1,
    "salary_mod": 1,
    "bonus_mod": 1,
    "salary_day": 15,
    "collection_day": 17
  }
]
```

#### '.../renter' case
Provide information about existing in the database shops' renter information
```json
[
  {
    "shop_renter_id": 2,
    "shop_id": 2,
    "name": "Renter Company",
    "contact_name": "Jim Gordon",
    "contact_phone": "8(478)984-31-12",
    "contact_email": "touchme@yandex.ru",
    "rent_start_date": "2020-10-23T21:00:00.000Z",
    "rent_termintaion_date": "2025-10-23T21:00:00.000Z",
    "payment_day": 18,
    "payment_account": "123876187263481",
    "payment_sum": 5324,
    "currency_id": 1
  }
]
```

#### '.../schedule' case
Provide information about existing in the database shops' schedule information
```json
[
  {
    "shop_schedule_id": 2,
    "shop_id": 2,
    "open_time": "11:00:00",
    "close_time": "19:00:00"
  }
]
```

#### '.../security' case
Provide information about existing in the database shops' security information
```json
[
  {
    "shop_security_id": 2,
    "shop_id": 2,
    "keys_num": 2,
    "is_protected": true,
    "security_phone": "671312736"
  }
]
```

#### '.../staff' case
Provide information about existing in the database shops' staff information
```json
[
  {
    "shop_staff_id": 1,
    "shop_id": 1,
    "staff_total_min": 1,
    "staff_total_max": 1000000,
    "staff_total_current": 2,
    "staff_shift_min": 1,
    "staff_shift_max": 1000000,
    "staff_shift_current": 2
  }
]
```

#### '.../stats' case
Provide information about existing in the database shops' statistics information
```json
[
  {
    "shop_statistics_id": 1,
    "shop_id": 1,
    "income_total": 0,
    "purchase_total": 0
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

"There are not any support relations matching: 'stats' by query '{"id":"23"}'"
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
"Unable to define table by params : 'shops,statss' at 'getByQuery()' method"
```