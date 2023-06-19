# Request: Get Total Count of Shippers

## Description :bulb:
This request allow client-side to get total amount of all shippers in the database  
- [Request: Get Total Count of Shippers](#request-get-total-count-of-shippers)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [505: Server Error](#505-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/shippers/total_count
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So total amount will be available at this endpoint
```
localhost:5300/shippers/total_count
```

## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*


## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 19
...               ...
```
### body
```json
{
  "total_count": "1"
}
```
## Error :heavy_exclamation_mark:
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
"Unable to define table by params : 'shippers' at 'getTotalCount()' method"
```