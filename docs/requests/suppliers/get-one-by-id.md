# Request: Get One Supplier by ID

## Description :bulb:
This request allow client-side to get information about one supplier by setting it's 'id' as URL-path param  
- [Request: Get One Supplier by ID](#request-get-one-supplier-by-id)
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
localhost:PORT/suppliers/:id
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific supplier will be available at this endpoint
```
localhost:5300/suppliers/:id
```
**Example**: in order to get a supplier with **'supplier_id'=23** you should send a GET request to this endpoint
```
localhost:5300/suppliers/23
```

## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*

## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 412
...               ...
```
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
Client-side will recieve this response once there is not such product in the database
```
response.code = 404
```
```
response.body =

"There is not a supplier with id '23'"
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
"Unable to define table by params : 'suppliers' at 'getOneById()' method"
```