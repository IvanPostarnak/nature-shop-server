# Request: Get Shippers by Query params

## Description :bulb:
This request allow client-side to get some shippers (by passing query params)
- [Request: Get Shippers by Query params](#request-get-shippers-by-query-params)
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
localhost:PORT/shippers/
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So shippers will be available at this endpoint
```
localhost:5300/shippers/
```

## Query parameters :pencil:
All query params should go right there:
```
localhost:5300/shippers/?rating=<value>&limit=<value>&...
```
This is a list of available query params for this endpoint:
- [name](../query.md#name)
- [id](../query.md#id)
- [method](../query.md#method)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 1
X-Current-Amount  : 0
Content-Type      : application/json; charset=utf-8
Content-Length    : 55
...                 ...
```
'X-Total-Amount' header represents how many items (shippers) database contains at all.    
'X-Current-Amount' header represents how many items (shippers) was returned by the server, according to query params.
### body
```json
[
  {
    "shipper_id": 1,
    "name": "CDEK",
    "country": {
      "country_id": 2,
      "name": "Russia",
      "capital": "Moscow",
      "continent": "Asia",
      "population": 120,
      "language": "ru",
      "currency": "RUB"
    },
    "contacts": {
      "shipper_contacts_id": 1,
      "name": "Sophy Latour",
      "phone": "4(398)456-19-44",
      "email": "cdek-support@yandex.ru",
      "website": "cdek.com"
    }
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no shippers in the database
```
response.code = 404
```
```
response.headers =

X-Powered-By      : Express
X-Total-Amount    : 1
X-Current-Amount  : 0
...                 ...
```
```
response.body =

"Posts by queries : '{..., ..., ...}' were not found"
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
"Unable to define table by params : 'shippers' at 'getByQuery()' method"
```