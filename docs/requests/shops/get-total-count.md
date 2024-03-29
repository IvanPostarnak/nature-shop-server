# Request: Get Total Count of Shops

## Description :bulb:
This request allow client-side to get total amount of all shops in the database  
- [Request: Get Total Count of Shops](#request-get-total-count-of-shops)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [500: Server Error](#500-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/shops/total_count
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So total amount will be available at this endpoint
```
localhost:5300/shops/total_count
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
  "total_count": "2"
}
```
## Error :heavy_exclamation_mark:
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
"Unable to define table by params : 'shops' at 'getTotalCount()' method"
```