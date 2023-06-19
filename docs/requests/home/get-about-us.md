# Request: Get About Us

## Description :bulb:
This request allow client-side to get 'About Us' article (for page) 
- [Request: Get About Us](#request-get-about-us)
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
localhost:PORT/pages/about_us
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So 'about us' will be available at this endpoint
```
localhost:5300/pages/about_us
```

## Query parameters :pencil:    
*This request does not have and does not accept any of query parameters*


## Response :package:
### headers
```
X-Powered-By    : Express
Content-Type    : application/json; charset=utf-8
Content-Length  : 343182
...               ...
```

### body
```json
[
  {
    "about_us_id": 1,
    "introduction": "Welcome to Nature Shop, a completely fictional and made-up online store! This page is a mock About Us section created for testing purposes only. Please note that all the information provided ... a wide range of non-existent items that cater to your imagination. From mythical creatures to futuristic gadgets, we have it all!",
    "vision": "To create a virtual shopping experience that sparks joy and ignites your creativity, where you can explore a world of fantasy and wonder.",
    "mission": "To provide an escape from reality by offering an extensive collection of non-existent products that bring a smile to your face and unleash your imagination.",
    "why_us": "1) Unparalleled Selection: We take pride in curating an extensive inventory of imaginary items that are meticulously designed to fulfill your wildest dreams. From whimsical accessories to ... your imaginary purchase, please contact our imaginative support team, and they will be happy to assist you with a suitable solution.",
    "thanks": "Thank you for visiting Nature Shop, the ultimate destination for fake products and extraordinary wonders. Enjoy your time exploring our whimsical collection and let your imagination soar to new heights!",
    "afterword": "Please remember that this About Us page is purely fictitious and intended for testing purposes only. None of the information provided here is real or associated with any actual company.",
    "created": "2023-06-19T06:30:18.758Z"
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no 'our_contacs' page in the database
```
response.code = 404
```
```
response.body =

"Page 'about_us' was not found in the database"
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
"Unable to define table by params : 'home,about_us' at 'getByQuery()' method"
```