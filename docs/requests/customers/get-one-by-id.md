# Request: Get One Customer by ID

## Description :bulb:
This request allow client-side to get information about one customer by setting it's 'id' as URL-path param  
- [Request: Get One Customer by ID](#request-get-one-customer-by-id)
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
localhost:PORT/customers/:id
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific customer will be available at this endpoint
```
localhost:5300/customers/:id
```
**Example**: in order to get a customer with **'customer_id'=23** you should send a GET request to this endpoint
```
localhost:5300/customers/23
```


## Query parameters :pencil:    
The only query param 'info_mod' should go right there:
```
localhost:5300/customers/:id?info_mod=<value>
```
The list of available query params:
- [info_mod](../query.md#info_mod)

This 'info_mod' query param is skippable, but in such case will be used 'info_mod=basic' configuration. If you want to get whole available information about customer you should specify 'info_mod=full'


## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 193
...               ...
```
### body
**'basic' case**
```json
[
  {
    "customer_id": 19,
    "first_name": "Hall",
    "last_name": "Jackson",
    "age": 21,
    "gender": "Female",
    "language": "en",
    "phone": "(555) 203-5487",
    "email": "jackson.adams@example.com",
    "country": "USA",
    "city": "Washington"
  }
]
```
**'full' case**
```json
[
  {
    "customer_id": 19,
    "first_name": "Hall",
    "last_name": "Jackson",
    "middle_name": "Daniel",
    "bio": {
      "customer_bio_id": 19,
      "age": 21,
      "birth_date": "2023-02-14",
      "gender": "Female",
      "family_status": "Married",
      "has_children": false,
      "language": "en"
    },
    "contacts": {
      "customer_contacts_id": 19,
      "phone": "(555) 203-5487",
      "email": "jackson.adams@example.com"
    },
    "address": {
      "customer_ship_addr_id": 19,
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
    },
    "distr": {
      "customer_outer_distr_id": 19,
      "company": "NSP",
      "distr_id": "7346157",
      "sponsor_distr_id": "7345995"
    },
    "stats": {
      "customer_statistics_id": 19,
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
Client-side will recieve this response once there is not such product in the database
```
response.code = 404
```
```
response.body =

"There is not any customer with id='23'(info_mod = 'full')"
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
"Unable to define table by params : 'customers,basic' at 'getOneById()' method"
```