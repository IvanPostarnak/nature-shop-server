# Request: Get Privacy policy

## Description :bulb:
This request allow client-side to get 'Privacy policy' article (for page) 
- [Request: Get Privacy policy](#request-get-privacy-policy)
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
localhost:PORT/pages/privacy_policy
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So 'privacy policy' will be available at this endpoint
```
localhost:5300/pages/privacy_policy
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
    "privacy_policy_id": 1,
    "introduction": "At Nature Shop, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose the information you provide while using our website, natureshop.com. Please note that this policy is entirely fake and made up for testing purposes only.",
    "personal_info": {
      "collection": "We may collect fake personal information such as your name, email address, phone number, and mailing address when you voluntarily provide it to us during the fake registration process or when making a fake purchase on our website.",
      "use": "The fake personal information we collect may be used for various purposes, including but not limited to: 1) Sending fake promotional emails about our products and services. 2) Conducting fake market research and analysis to improve our offerings. 3) Processing fake orders and providing fake customer support. 4) Customizing your fake shopping experience and offering personalized recommendations.",
      "disclosure": "We may disclose your fake personal information to third parties in the following situations: 1) Fake service providers: We may share your information with fake third-party service providers who assist us in operating our website and delivering our fake services. 2) Legal requirements: We may disclose your information if required to do so by law or if we believe that such disclosure is necessary to protect our fake rights or comply with a legal process."
    },
    "security_measures": "While we take fake security measures to protect your fake personal information, please note that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your fake information.",
    "cookies": "We may use fake cookies and other tracking technologies to enhance your fake experience on our website. These technologies allow us to fake track your activities and preferences, such as fake pages visited and fake products viewed, to provide you with relevant content and improve our services.",
    "children_privacy": "Our fake website and services are not intended for children under the age of 13. We do not knowingly collect fake personal information from children. If you believe that we have fake information from a child, please contact us immediately.We may update our fake Privacy Policy from time to time. Any changes will be fake and made up. We encourage you to review this page periodically to stay informed about our fake practices.",
    "changes": "If you have any questions or concerns about our fake Privacy Policy, please contact us at privacy@natureshop.com.",
    "contact": "privacy@natureshop.com",
    "afterword": "This Privacy Policy is entirely fake and made up for testing purposes only. It has no legal validity or applicability.",
    "created": "2023-06-19T06:24:32.862Z"
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no 'privacy_policy' page in the database
```
response.code = 404
```
```
response.body =

"Page 'Privacy policy' was not found in the database"
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
"Unable to define table by params : 'home,privacy_policy' at 'getByQuery()' method"
```