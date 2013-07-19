chart.ko.js
===========

Knockout bindings for the delightful [Chart.js](https://github.com/nnnick/Chart.js). Binds simply:

````html
<!-- pie chart -->
<canvas data-bind="pieChart: pieData"></canvas>

<!-- bar chart -->
<canvas data-bind="barChart: barData"></canvas>

<!-- line chart -->
<canvas data-bind="lineChart: lineData"></canvas>
````
````javascript
var viewModel = function () {
  // note that pieData is an observableArray, 
  // while barData and lineData are just observables
  // (you can also use non-observable arrays/vars)
  
  pieData: ko.observableArray(testPieChartData),
  barData: ko.observable(testBarChartData),
  lineData: ko.observable(testLineChartData)
};
ko.applyBindings(viewModel);
````

I'm using this library on a current project, so I will build features on the fly as they become useful to me.

so far
=======
- pieChart: creates pie chart from data
- barChart: creates bar chart from data
- lineChart: creates line chart from data
- chartko - global for utilities and such
- chart.ko.test.js - some test data (borrowed from Chart.js docs)

interactivity
=============
The structure of the data passed to Pie charts is different than that passed to Line and Barcharts, so they behave slightly differently when you change the underlying data.
For example, you can easily push an array item onto Pie graph, but if you simply want to change a value, you have to make the 'value' of each array item observable.
I think I will find it easier to create observable templates for each type but for now I am doing it manually.


todo
=====
- test/demo page
- donut and radial charts, etc.
- refactoring: there's duplication of code   
- reasonable defaults for simpler binding data struture (for example, default colors) although this may not belong in the scope of this extension...
- eliminate jquery dependency (not sure if there is one, but I haven't tried it yet)
- ability to set chart options, either on the fly or beforehand
- hooks for extensions (legend, hover, etc.)

dependencies
============
- knockout.js
- jQuery.js (maybe, haven't tested without it)
- Chart.js
