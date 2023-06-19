# Request: Get Support Relations

## Description :bulb:
This request allow client-side to get support information about specific part of each product by passing queries
- [Request: Get Support Relations](#request-get-support-relations)
  - [Description :bulb:](#description-bulb)
  - [Endpoint :motorway:](#endpoint-motorway)
  - [Query parameters :pencil:](#query-parameters-pencil)
  - [Response :package:](#response-package)
    - [headers](#headers)
    - [body](#body)
      - ['.../categories' case](#categories-case)
      - ['.../forms' case](#forms-case)
      - ['.../types' case](#types-case)
      - ['.../data' case](#data-case)
      - ['.../info' case](#info-case)
      - ['.../points' case](#points-case)
      - ['.../price' case](#price-case)
      - ['.../rating' case](#rating-case)
      - ['.../size' case](#size-case)
  - [Error :heavy\_exclamation\_mark:](#error-heavy_exclamation_mark)
    - [404: Not found](#404-not-found)
    - [505: Server Error](#505-server-error)

## Endpoint :motorway:
Mainly, you should set your own PORT once you want to run server
```
localhost:PORT/products/support/:arg
```
By default, if there is not specified 'PORT' environment param, server runs on ':5300' port    
So single specific support relations will be available at this endpoint
```
localhost:5300/products/support/:arg
```
There is a list of available relations to get info (arg):
- categories [see](#categories-case)
- forms [see](#forms-case)
- types [see](#types-case)
- data [see](#data-case)
- info [see](#info-case)
- points [see](#points-case)
- price [see](#price-case)
- rating [see](#rating-case)
- size [see](#size-case) 

**Example**: to get 'size' information about products one should send GET request to
```
localhost:5300/products/support/size
```
Do the same requests for another parts of info

## Query parameters :pencil:    
The only query param 'id' should go right there:
```
localhost:5300/products/support/:arg?id=<value>
```
The list of available query params:
- [id](../query.md#id)


## Response :package:
### headers
```
X-Powered-By      : Express
X-Total-Amount    : 177
X-Current-Amount  : 1
Content-Type      : application/json; charset=utf-8
Content-Length    : 127
...                 ...
```
'X-Total-Amount' header represents how many items (products) database contains at all.    
'X-Current-Amount' header represents how many items (products) was returned by the server, according to query params.

### body
#### '.../categories' case
```json
[
  {
    "product_category_id": 3,
    "name": "Cosmetics for Health",
    "abbr": null,
    "description": "'Cosmetics for Health' category comprises products aimed at enhancing health and well-being"
  }
]
```

#### '.../forms' case
```json
[
  {
    "product_form_id": 3,
    "name": "Liquid",
    "abbr": null,
    "description": "A fluid form of medication or product that can be poured or measured"
  }
]
```

#### '.../types' case
```json
[
  {
    "product_type_id": 3,
    "name": "Gel",
    "abbr": null,
    "description": "A semisolid substance with a gel-like consistency"
  }
]
```

#### '.../data' case
```json
[
  {
    "product_data_id": 3,
    "product_id": 3,
    "product_form_id": 3,
    "has_dispenser": false,
    "total_volume": 59,
    "items_total": null,
    "item_volume": null,
    "measure_unit_id": 2
  }
]
```

#### '.../info' case
```json
[
  {
    "product_info_id": 3,
    "product_id": 3,
    "pros": "Supports the work of the lymphatic, circulatory and immune systems.\nHelps the body maintain vascular health.\nPromotes the elimination of toxins from the body.\nWhen used in combination, it enhances the effect of other products.",
    "advantages": "The lymphatic system is the only way to drain toxins from the intercellular fluid, where 83% of them are contained, ... based on lymphatic drainage herbs. Convenient reception thanks to the form of syrup in a bottle with a dropper.",
    "active_ingredients": "Tenacious bedstraw (Galium aparine) – tones the lymphatic system, has a diuretic effect. It is traditionally used to ... bark (Zanthoxylum clava-herculis) – stimulates the circulatory and lymphatic systems of the body.\nStillingia root (Stillingia sylvatica) – increases drainage and prevents stagnation of lymph.",
    "composition": "1 bottle contains: vegetable glycerin – 33 g, purified water – 8.3 g, tenacious bedstraw, aboveground parts – 6 g, red ... or 1/4 teaspoon), dietary supplement Lymphatic Drainage, dissolved in 1 glass of water, twice a day.",
    "application": null,
    "contraindications": "individual intolerance to the components of the product, pregnant and lactating women.",
    "storing": null
  }
]
```

#### '.../points' case
```json
[
  {
    "product_point_id": 3,
    "product_id": 3,
    "points_outer": 23.99,
    "points_inner": 24.24,
    "points_discount": 0
  }
]
```

#### '.../price' case
```json
[
  {
    "product_price_id": 3,
    "product_id": 3,
    "diller_price": 29.49,
    "distr_price": 32.44,
    "wholesale_price": 29.49,
    "consumer_price": 32.44
  }
]
```

#### '.../rating' case
```json
[
  {
    "product_rating_id": 3,
    "product_id": 3,
    "rating_5": 4.32,
    "votes_number_5": 10
  }
]
```

#### '.../size' case
```json
[
  {
    "product_size_id": 3,
    "product_id": 3,
    "weight_g": 745,
    "length_cm": 9.1,
    "width_cm": 9.87,
    "height_cm": 17.52,
    "packing_material_id": 1
  }
]
```

## Error :heavy_exclamation_mark:
### 404: Not found
*Client-side will recieve this response once there is not such relation or relation's item in the database*
```
response.code = 404
```
```
response.body =

There are not any support relations matching: 'size' by query '1'
```
### 505: Server Error
*Server-side will send this response once something bad happened on the server side*
```
response.code = 500
```
```
response.body =

// this
"Error querying the database: Server Error"

// or this
"Unable to define table by params : 'products' at 'getByQuery()' method"
```