---
id: 'about'
title: "No SOAP required"
order: 1
---

No more worrying about constructing verbose SOAP requests, CAML syntax errors, or parsing XML. SPQL's API, along with some utility functions, builds the request up for you behind the scenes and converts the XML response to JSON. SPQL can even perform a number of useful transformations before handing the data back to you (e.g. aliasing, extracting ids and values from lookup/user fields, converting *Multi fields to arrays, or even applying a custom mapper function).