# Request: Get Suppliers by Query params

## Description :bulb:
This request allow client-side to get suppliers (by passing several query params)  
- [Request: Get Suppliers by Query params](#request-get-suppliers-by-query-params)
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
localhost:PORT/suppliers/
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So suppliers will be available at this endpoint
```
localhost:5300/suppliers/
```

## Query parameters :pencil:
All query params should go right there:
```
localhost:5300/suppliers/?id=<value>&name=<value>&...
```
This is a list of available query params for this endpoint:
- [id](../query.md#id)
- [name](../query.md#name)
- [method](../query.md#method)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 2
X-Current-Amount  : 1
Content-Type      : application/json; charset=utf-8
Content-Length    : 419
...                 ...
```
'X-Total-Amount' header represents how many items (suppliers) database contains at all.    
'X-Current-Amount' header represents how many items (suppliers) was returned by the server, according to query params.

### body
```json
[
  {
    "supplier_id": 2,
    "name": "PSN Total",
    "company": {
      "company_id": 2,
      "name": "Personal Super Nature",
      "abbr": "PSN",
      "description": "Made up high quality company",
      "company": "Personal Super Nature"
    },
    "address": {
      "supplier_addr_id": 2,
      "name": "USA",
      "region": null,
      "city": "Washington"
    },
    "contacts": {
      "supplier_contacts_id": 2,
      "name": "Daniel Markov",
      "phone": "8(467)351-56-81",
      "email": "contact-us@gmail.com",
      "website": "psn-total.com"
    }
  }
]
```

## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are not suppliers in the database
```
response.code = 404
```
```
response.headers =

X-Powered-By      : Express
X-Total-Amount    : 2
X-Current-Amount  : 0
...                 ...
```
```
response.body =

"Suppliers by queries : '{..., ..., ...}' were not found"
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
"Unable to define table by params : 'suppliers' at 'getByQuery()' method"
```