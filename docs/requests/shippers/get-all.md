# Request: Get All Shippers

## Description :bulb:
This request allow client-side to get all shippers  
- [Request: Get All Shippers](#request-get-all-shippers)
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
localhost:PORT/shippers/all
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So shippers will be available at this endpoint
```
localhost:5300/shippers/all
```

## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*


## Response :package:
### headers
```
X-Powered-By    : Express
X-Total-Amount  : 1
Content-Type    : application/json; charset=utf-8
Content-Length  : 302
...               ...
```
'X-Total-Amount' header represents how many items (shippers) database contains at all. As far as we geting all shippers, we don't need to devide how many shippers we got and how many there are left in the database, because in '/all' case these values are equal.
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
response.body =

"There are not any shippers"
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
"Unable to define table by params : 'shippers' at 'getAll()' method"
```