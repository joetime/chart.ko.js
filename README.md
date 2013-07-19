chart.ko.js
===========

Knockout bindings for Chart.js

I'm just starting to use this library so I will be adding features as I find them useful.

so far
=======
- pieChart: creates pie chart from data
- barChart: creates bar chart from data
- lineChart: creates line chart from data
- chart.ko.test.js - some test data (borrowed from Chart.js docs)

todo
=====
- test/demo page
- donut and radial charts, etc.
- refactoring: there's some duplication of code   
- reasonable defaults for simpler binding data struture (for example, default colors) although this may not belong in the scope of this extension...
- eliminate jquery dependency (not sure if there is one, but I haven't tried it yet)
- ability to set chart options, either on the fly or beforehand
- hooks for extensions (legend, hover, etc.)

dependencies
============
- knockout.js
- jQuery.js (maybe, haven't tested without it)
- Chart.js
