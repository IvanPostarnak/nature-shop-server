# Request: Get All Suppliers

## Description :bulb:
This request allow client-side to get all suppliers
- [Request: Get All Suppliers](#request-get-all-suppliers)
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
localhost:PORT/suppliers/all
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So suppliers will be available at this endpoint
```
localhost:5300/suppliers/all
```

## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*


## Response :package:

### headers
```
X-Powered-By    : Express
X-Total-Amount  : 2
Content-Type    : application/json; charset=utf-8
Content-Length  : 830
...               ...
```
'X-Total-Amount' header represents how many items (suppliers) database contains at all. As far as we geting all suppliers, we don't need to devide how many suppliers we got and how many there are left in the database, because in '/all' case these values are equal.

### body
```json
[
  {
    "supplier_id": 1,
    "name": "NSP Moscow",
    "company": {
      "company_id": 1,
      "name": "Nature's Sunshine Company",
      "abbr": "NSP",
      "description": "High quality Dietary Supplements",
      "company": "Nature's Sunshine Company"
    },
    "address": {
      "supplier_addr_id": 1,
      "name": "Russia",
      "region": null,
      "city": "Moscow"
    },
    "contacts": {
      "supplier_contacts_id": 1,
      "name": "Michail Narenkov",
      "phone": "8(321)456-98-01",
      "email": "contact-us@natr.ru",
      "website": "natr.ru"
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

"There are not any suppliers"
```
### 500: Server Error
Server-side will send this response once something bad happened on the server side
```
response.code = 500
```
```
response.body =

// this
"Error uerying the database: Server Error"

// or this
"Unable to define table by params : 'suppliers' at 'getAll()' method"
```