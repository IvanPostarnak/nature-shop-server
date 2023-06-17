# Mistakes

This file contains conclusions and main points of self-reflection. I decided to sum up some thoughts during developing process.

----

1. Right now (14.06.2023) we are reading query params by specific middleware functions, such as 'idQuery', 'infoQuery', 'authorQuery' etc. But there are such queries as 'name' and 'title', for example, so they are similar but not totaly equal. Perhaps, it is not very good practice to create so many special middleware functions, instead of convertation them into something common.
2. Perhaps, it is not a good practice (quite bad actually) to create so many similar controllers, that in 95% are similar to one another. Instead of this it is better to overload it (or configure, at least)
3. It is quite a task to refactor code without tests - it is very hard. I think, I should always add tests to my code. In case of refactoring, I had to re-check each request by my own, instead of running few lines of code...