# Request: Get All Employees

## Description :bulb:
This request allow client-side to get all employees via passing an 'info_mod' query param  
- [Request: Get All Employees](#request-get-all-employees)
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
localhost:PORT/employees/all
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So employees will be available at this endpoint
```
localhost:5300/employees/all
```

## Query parameters :pencil:    
The only query param 'info_mod' should go right there:
```
localhost:5300/employees/all?info_mod=<value>
```
The list of available query params:
- [info_mod](../query.md#info_mod)

This 'info_mod' query param is skippable, but in such case will be used 'info_mod=basic' configuration. If you want to get whole available information about each employee you should specify 'info_mod=full'


## Response :package:
### headers
```
X-Powered-By    : Express
X-Total-Amount  : 4
Content-Type    : application/json; charset=utf-8
Content-Length  : 787
...               ...
```
'X-Total-Amount' header represents how many items (employees) database contains at all. As far as we geting all employees, we don't need to devide how many employees we got and how many there are left in the database, because in '/all' case these values are equal.

### body
**'basic' case**    
```json
[
  {
    "employee_id": 1,
    "name": "Andrew Postarnak",
    "age": 55,
    "gender": "Male",
    "language": "ru",
    "phone": "8(983)320-45-15",
    "email": "fitohalll@yandex.ru",
    "position": "CEO (Chief Executive Officer)",
    "status": "Active"
  }
]
```
**'full' case**
```json
[
  {
    "employee_id": 1,
    "first_name": "Andrew",
    "last_name": "Postarnak",
    "middle_name": null,
    "bio": {
      "employee_bio_id": 1,
      "birth_date": "2023-07-10",
      "gender": "Male",
      "language": "ru"
    },
    "contacts": {
      "employee_contacts_id": 1,
      "email": "fitohall@yandex.ru"
    },
    "prefs": {
      "employee_preferences_id": 1,
      "color_schema": null,
      "language": null,
      "currency": null
    },
    "shift": {
      "employee_shift_id": 1,
      "shop_id": 1,
      "manager": null
    },
    "state": {
      "employee_state_id": 1,
      "position": "CEO (Chief Executive Officer)",
      "status": "Active"
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
response.body =

"There are not any customers (info_mod = 'basic')"
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
"Unable to define table by params : 'employees,basic' at 'getAll()' method"
```