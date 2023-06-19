# Request: Get All Products

## Description :bulb:
This request allow client-side to get all products via passing an 'info_mod' query param  
- [Request: Get All Products](#request-get-all-products)
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
localhost:PORT/products/all
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So products will be available at this endpoint
```
localhost:5300/products/all
```

## Query parameters :pencil:    
The only query param 'info_mod' should go right there:
```
localhost:5300/products/all?info_mod=<value>
```
The list of available query params:
- [info_mod](../query.md#info_mod)

This 'info_mod' query param is skippable, but in such case will be used 'info_mod=basic' configuration. If you want to get whole available information about each product you should specify 'info_mod=full'


## Response :package:
### headers
```
X-Powered-By    : Express
X-Total-Amount  : 177
Content-Type    : application/json; charset=utf-8
Content-Length  : 31215
...               ...
```
'X-Total-Amount' header represents how many items (products) database contains at all. As far as we geting all products, we don't need to devide how many products we got and how many there are left in the database, because in '/all' case these values are equal.
### body
**'basic' case**    
```json
[
  {
    "product_id": 1,
    "name": "Vitamin D3",
    "company": "NSP",
    "brand": "NSP Everyday",
    "points": 14.39,
    "price": 18,
    "rating": 3.75,
    "votes_count": 15,
    "units_in_stock": 157
  }
]
```
**'full' case**
```json
[
  {
    "product_id": 1,
    "outer_id": "RU22485",
    "name": "Vitamin D3",
    "company": {
      "company_id": 1,
      "name": "Nature's Sunshine Company",
      "abbr": "NSP",
      "description": "High quality Dietary Supplements",
      "country": "USA"
    },
    "brand": {
      "brand_id": 4,
      "name": "NSP Everyday",
      "description": "Amidst the bustling city streets, a chance encounter leads to a random but profound connection between two strangers."
    },
    "rating": {
      "rating_id": 1,
      "value": 3.75,
      "votes_count": 15
    },
    "price": {
      "price_id": 1,
      "diller": 16.36,
      "distr": 18,
      "wholesale": 16.36,
      "consumer": 18
    },
    "points": {
      "points_id": 1,
      "outer": 14.14,
      "inner": 14.39,
      "discount": 0
    },
    "size": {
      "size_id": 1,
      "weight": 156,
      "length": 8.2,
      "width": 9.54,
      "height": 12.58,
      "packing_material": "Plastic"
    },
    "data": {
      "data_id": 1,
      "product_form_id": 1,
      "has_dispenser": false,
      "total_volume": null,
      "items_total": 180,
      "item_volume": 355,
      "measure_unit": "mg"
    },
    "info": {
      "info_id": 1,
      "pros": "• Necessary for the prevention of osteoporosis and improving the absorption of calcium and ... effect on skin health\n• Improves mood, increases vitality",
      "advantages": "Contrary to popular belief, vitamin D affects not only bone tissue, but also the small intestine, kidneys, other organs and ... Large packaging. Vitamin D3 is obtained from natural, environmentally friendly raw materials from Australia and New Zealand.",
      "active_ingredients": "Vitamin D3 (cholecalciferol) is a fat–soluble vitamin. This vitamin can be formed in human skin under the influence ... of vitamin D, the formation of blood cells occurs, it has an anti-inflammatory effect.",
      "composition": "Dietary supplement Vitamin D3 NSP is an additional source of vitamin D3.\n1 tablet ... stearate (rast.), natural peach flavor, natural tropical fruit flavor, citric acid",
      "application": "Adults take 1 tablet a day with meals, chew. The duration of admission is 1 month. If ... from 2008, vitamin D is prescribed at a dose of 10 mcg for all age groups of children.",
      "contraindications": "individual intolerance to the components ... to consult a doctor before use\nStorage conditions",
      "storing": "Store in a dry place, protected from ... a temperature not higher than +30oC."
    },
    "shop": {
      "shop_id": 1,
      "units_in_stock": 157
    }
  }
]
```
## Error :heavy_exclamation_mark:
### 404: Not found
Client-side will recieve this response once there are no products in the database
```
response.code = 404
```
```
response.body =

"There are not any products"
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
"Unable to define table by params : 'products,basic' at 'getAll()' method"
```