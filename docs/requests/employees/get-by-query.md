# Request: Get Employees by Query params

## Description :bulb:
This request allow client-side to get employees (by passing several query params)  
- [Request: Get Employees by Query params](#request-get-employees-by-query-params)
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
localhost:PORT/employees/
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So employees will be available at this endpoint
```
localhost:5300/employees/
```

## Query parameters :pencil:
All query params should go right there:
```
localhost:5300/employees/?start=<value>&end=<value>&...
```
This is a list of available query params for this endpoint:
- [info_mod](../query.md#info_mod)
- [id](../query.md#id)
- [start](../query.md#start)
- [end](../query.md#end)
- [limit](../query.md#limit)
- [method](../query.md#method)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 4
X-Current-Amount  : 1
Content-Type      : application/json; charset=utf-8
Content-Length    : 482
...                 ...
```
'X-Total-Amount' header represents how many items (employees) database contains at all.    
'X-Current-Amount' header represents how many items (employees) was returned by the server, according to query params.

### body
**'info_mod=basic' case**
```json
[
  {
    "employee_id": 3,
    "name": "Ann Hathaway",
    "age": 21,
    "gender": "Female",
    "language": "en",
    "phone": "5641328734",
    "email": "kissygirl@gmail.com",
    "position": "Shop Administrator",
    "status": "Suspended"
  }
]
```
**'info_mod=full' case**
```json
[
  {
    "employee_id": 3,
    "first_name": "Ann",
    "last_name": "Hathaway",
    "middle_name": null,
    "bio": {
      "employee_bio_id": 3,
      "birth_date": "2023-02-14",
      "gender": "Female",
      "language": "en"
    },
    "contacts": {
      "employee_contacts_id": 3,
      "email": "kissygirl@gmail.com"
    },
    "prefs": {
      "employee_preferences_id": 3,
      "color_schema": null,
      "language": null,
      "currency": null
    },
    "shift": {
      "employee_shift_id": 3,
      "shop_id": 2,
      "manager": "Ivan Postarnak"
    },
    "state": {
      "employee_state_id": 3,
      "position": "Shop Administrator",
      "status": "Suspended"
    }
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no employees in the database
```
response.code = 404
```
```
response.headers =

X-Powered-By      : Express
X-Total-Amount    : 4
X-Current-Amount  : 0
...                 ...
```
```
response.body =

"Employees by queries : '{..., ..., ...}' were not found"
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
"Unable to define table by params : 'employees,basic' at 'getByQuery()' method"
```