# Query Params

## Description :bulb:

- [Query Params](#query-params)
  - [Description :bulb:](#description-bulb)
    - [title](#title)
    - [content](#content)
    - [rating](#rating)
    - [votes\_count](#votes_count)
    - [limit](#limit)
    - [visited\_total](#visited_total)
    - [start](#start)
    - [end](#end)
    - [created](#created)
    - [method](#method)
  - [Note, that...](#note-that)

----

### title
*Allow client-side to filter posts by it's 'title' property. It makes case-insensitive research through 'title' column ('vitamin' = 'Vitamin' = 'viTamIN' = etc)*    
*Note also, that title doesn't have to be equal to this value entirely - it simply has to contain it*  
```json
localhost:5300/.../?title=<value>

// for example, we want to get all posts with title that contains 'vitamin' word
localhost:5300/posts/?title=vitamin
```

----

### content
*Allow client-side to filter posts by min 'content' property. It makes case-insensitive research through 'content' column ('deficency' = 'Deficency' = 'deFICency' = etc)*    
*Note also, that content doesn't have to be equal to this value entirely - it simply has to contain it*  
```json
localhost:5300/.../?content=<value>

// for example, we want to get all posts with content that contains 'deficency' word
localhost:5300/posts/?content=deficency
```

----

### rating
*Allow client-side to filter posts by min 'rating' property*  
```json
localhost:5300/.../?rating=<value>

// for example, we want to get all posts with rating >= 4/5
localhost:5300/posts/?rating=4
```

----

### votes_count
*Allow client-side to filter posts by min 'votes_count' property*
```json
localhost:5300/.../?votes_count=<value>

// for example, we want to filter all posts by votes_count >= 10
localhost:5300/posts/?votes_count=10
```

----

### limit
*Allow client-side to filter posts by maximum amount of it*    
'X-Total-Amount' response header will be no more than 'limit' query param
```json
localhost:5300/.../?limit=<value>

// for example, we want to get maximum 12 posts - no more
localhost:5300/posts/?limit=12
```
----

### visited_total
*Allow client-side to filter posts by minimum amount of 'visited_total' param*    
```json
localhost:5300/.../?visited_total=<value>

// for example, we want to get all posts with visited_total >= 10
localhost:5300/posts/?visited_total=10
```
----

### start
*Allow client-side to filter posts by 'post_id' that equal or more (>=) than 'start' query param*    
```json
localhost:5300/.../?start=<value>

// for example, we want to get all posts with post_id >= 54
localhost:5300/posts/?start=54
```
----

### end
*Allow client-side to filter posts by 'post_id' that equal or less (<=) than 'end' query param*    
```json
localhost:5300/.../?end=<value>

// for example, we want to get all posts with post_id <= 78
localhost:5300/posts/?end=78
```
----

### created
*Allow client-side to filter posts by te timestamp that post was created (equal or after this moment of time - >=)*    
```json
localhost:5300/.../?created=<value>

// for example, we want to get all posts with created timestamp >= 1407701258
localhost:5300/posts/?created=1407701258
```
----

### method
*Allow client-side to configure, how exactly should other configurative query params interfere with each other. It accepts either 'AND' or 'OR' value. 'AND' by default: by default, response will be configured as intersection (logical 'AND') of query params, but you can switch it to unity of them (logical 'OR')*
```json
localhost:5300/.../?method=<value>

// for example, we want to get all posts with rating >= 3 OR votes_count >= 10
localhost:5300/posts/?rating=3&votes_count=10&method=OR
```
----

## Note, that...
Value of **ANY** query params that equals to **-1** or **unset**, will be equal to absence of it at all:
```json
// this
localhost:5300/.../?rating=-1

// or this
localhost:5300/.../?rating=

// equals to absence of it at all
localhost:5300/.../
```