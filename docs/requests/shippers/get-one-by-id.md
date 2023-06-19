# Request: Get One Shipper by ID

## Description :bulb:
This request allow client-side to get information about one shipper by setting it's 'id' as URL-path param  
- [Request: Get One Shipper by ID](#request-get-one-shipper-by-id)
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
localhost:PORT/shippers/:id
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific shipper will be available at this endpoint
```
localhost:5300/shippers/:id
```
**Example**: in order to get a shipper with **'shipper_id'=23** you should send a GET request to this endpoint
```
localhost:5300/shippers/23
```


## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*


## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 302
...               ...
```
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

"There is not a shipper with id '23'"
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
"Unable to define table by params : 'shippers' at 'getOneById()' method"
```