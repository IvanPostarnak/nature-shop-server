# Request: Get Posts by Query params

## Description :bulb:
This request allow client to get all posts  
- [Request: Get Posts by Query params](#request-get-posts-by-query-params)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [505: Server Error](#505-server-error)
----

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```json
localhost:PORT/posts/
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So posts will be available at this endpoint
```json
localhost:5300/posts/
```
----

## Query parameters :pencil:
All query params should go right there:
```json
localhost:5300/posts/?rating=<value>&limit=<value>&...
```
This is a list of available query params for this endpoint:
- [rating](../query.md#rating)
- [votes_count](../query.md#votes_count)
- [limit](../query.md#limit)
- [visited_total](../query.md#visited_total)
- [start](../query.md#start)
- [end](../query.md#end)
- [created](../query.md#created)
- [method](../query.md#method)

----

## Response :package:
### headers
```json
X-Powered-By      : Express
X-Total-Amount    : 100
X-Current-Amount  : 12
Content-Type      : application/json; charset=utf-8
Content-Length    : 35613
...                 ...
```
'X-Total-Amount' header represents how many items (posts) database contains at all.    
'X-Current-Amount' header represents how many items (posts) was returned by the server, according to query params.
### body
```json
[
  ...
  {
    "post_id": 10,
    "title": "Dietary Mineral As Arsenic",
    "content": "Introduction:\n\nMinerals play an important role in our health, and many of them are necessary for the normal functioning of our body. One of these ... body. However, it is recommended to follow the recommendations of nutrition experts and not exceed the recommended dose in order to avoid negative health consequences.",
    "author": {
      "employee_id": 2,
      "first_name": "Ivan",
      "last_name": "Postarnak",
      "middle_name": null
    },
    "language": {
      "language_id": 1,
      "name": "English",
      "name_native": "English",
      "code": "en"
    },
    "rating": null,
    "votes_count": 0,
    "visited_total": 0,
    "created": "2023-05-29T00:17:44.877Z",
    "edited": "2023-05-29T00:17:44.877Z"
  }
  ...
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
*Client-side will recieve this response once there are no posts in the database*
```json
response.code = 404
```
```json
response.headers =

X-Powered-By      : Express
X-Total-Amount    : 100
X-Current-Amount  : 0
...                 ...
```
```json
response.body =

"Posts by queries : '{..., ..., ...}' were not found"
```
### 505: Server Error
*Server-side will send this response once something bad happened on the server side*
```json
response.code = 500
```
```json
response.body =

// this
"Error querying the database: Server Error"

// or this
"Unable to define table by params : 'posts' at 'getByQuery()' method"
```