# Request: Get All Posts

## Description :bulb:
This request allow client-side to get all posts  
- [Request: Get All Posts](#request-get-all-posts)
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
localhost:PORT/posts/search
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So posts will be available at this endpoint
```
localhost:5300/posts/search
```

## Query parameters :pencil:
All query params should go right there:
```
localhost:5300/posts/search?title=<value>&content=<value>&...
```
This is a list of available query params for this endpoint:
- [title](../query.md#title)
- [content](../query.md#content)
- [method](../query.md#method)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 100
X-Current-Amount  : 57
Content-Type      : application/json; charset=utf-8
Content-Length    : 191803
...                 ...
```
'X-Total-Amount' header represents how many items (posts) database contains at all.    
'X-Current-Amount' header represents how many items (posts) was returned by the server, according to query params.
### body
```json
[
  {
    "post_id": 3,
    "title": "BodyPart Arms&Hands",
    "content": "Introduction:\n\nThe hands and forearms are important parts of our body that enable us to perform various movements and perform tasks of everyday life. They consist of various structures, including bones, muscles, tendons, and joints. In this part, we ... we can enjoy freedom of movement, effectively perform tasks and fully participate in everyday life. Take care and take care of these important parts of your body, and they will serve you for many years.",
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
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no posts in the database
```
response.code = 404
```
```
response.headers =

X-Powered-By      : Express
X-Total-Amount    : 100
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
"Unable to define table by params : 'posts' at 'getByQuery()' method"
```