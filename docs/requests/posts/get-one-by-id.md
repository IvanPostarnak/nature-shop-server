# Request: Get One Post by ID

## Description :bulb:
This request allow client-side to get information about one post by setting it's 'id' as URL-path param  
- [Request: Get One Post by ID](#request-get-one-post-by-id)
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
localhost:PORT/posts/:id
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific post will be available at this endpoint
```
localhost:5300/posts/:id
```
**Example**: in order to get a post with **'post_id'=23** you should send a GET request to this endpoint
```
localhost:5300/posts/23
```


## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*


## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 2758
...               ...
```
### body
```json
[
  {
    "post_id": 23,
    "title": "Dietary Mineral Cu Cuprum",
    "content": "Introduction:\nCopper (Cu) is a trace element necessary for the normal functioning of the body. It is widely known and is important for various ... and antioxidant protection. With an excess or lack of copper, various diseases can occur. To maintain the balance of copper in the body, it is recommended to eat foods rich in this mineral.",
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
response.body =

"Post with id '23' was not found"
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
"Unable to define table by params : 'posts' at 'getOneById()' method"
```