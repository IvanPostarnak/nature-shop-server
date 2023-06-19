# Request: Get Our Contacts

## Description :bulb:
This request allow client-side to get 'Our contacts' article (for page) 
- [Request: Get Our Contacts](#request-get-our-contacts)
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
localhost:PORT/pages/our_contacts
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So 'our contacts' will be available at this endpoint
```
localhost:5300/pages/our_contacts
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
    "our_contacts_id": 1,
    "introduction": "We appreciate your interest in Nature Shop, a fictional online store. Please note that the contact information provided below is entirely fictional and does not represent any real company or organization.",
    "body": "Feel free to reach out to us with any inquiries, comments, or fantastical stories you'd like to share. Our dedicated team of fictional customer service representatives is ready to assist you on your imaginative shopping journey. If you wish to visit us in person, you can find our imaginary store conveniently located on Imaginary Street in the magical town of Fantasyville. Please note that as a fictional business, we don't have a physical presence in the real world. However, our virtual doors are always open, and we're just a click away. Connect with us on social media to stay up-to-date with the latest imaginary product releases, fantastical promotions, and imaginary adventures. We value your feedback and are eager to hear about your imaginative shopping experiences. Don't hesitate to get in touch with us through the provided contact information. Our imaginary team will be thrilled to assist you and make your experience with Nature Shop truly extraordinary.",
    "phone": "+1 555-123-4567",
    "email": "info@natureshop.com",
    "links": {
      "facebook": "https://github.com/IvanPostarnak",
      "twitter": "https://github.com/IvanPostarnak",
      "vk": "https://vk.com/ivanpostarnak",
      "intagram": "https://github.com/IvanPostarnak",
      "telegram": "https://github.com/IvanPostarnak",
      "reddit": "https://github.com/IvanPostarnak",
      "linkedin": "https://github.com/IvanPostarnak",
      "github": "https://github.com/IvanPostarnak",
      "tiktok": "https://github.com/IvanPostarnak"
    },
    "afterword": "Please note that all the information provided on this Contact Us page is entirely fictional and created solely for testing purposes. None of the contact details or associated information represents any real company or organization.",
    "created": "2023-06-19T06:59:15.485Z"
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

"Page 'our_contacts' was not found in the database"
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
"Unable to define table by params : 'home,our_contacts' at 'getByQuery()' method"
```