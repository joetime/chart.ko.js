var chart_ko_debug = true;

ko.bindingHandlers.pieChart = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        if (chart_ko_debug) {
            console.log("chart.ko.js - pieChart - init");
        }
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        if (chart_ko_debug) {
            console.log("chart.ko.js - pieChart - update");
            console.log(element);
            console.log(valueAccessor());
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        }
        // Create a context, set options, bind chart
        // 
        // 
        var pieCtx = element.getContext("2d");
        var options = [];
        new Chart(pieCtx).Pie(valueAccessor(), options);
    }
};

ko.bindingHandlers.barChart = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        if (chart_ko_debug) {
            console.log("chart.ko.js - barChart - init");
        }
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        if (chart_ko_debug) {
            console.log("chart.ko.js - barChart - update");
            console.log(element);
            console.log(valueAccessor());
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        }
        // Create a context, set options, bind chart
        // 
        // 
        var barCtx = element.getContext("2d");
        var options = [];
        new Chart(barCtx).Bar(valueAccessor(), options);
    }
};

ko.bindingHandlers.lineChart = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        if (chart_ko_debug) {
            console.log("chart.ko.js - lineChart - init");
        }
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        if (chart_ko_debug) {
            console.log("chart.ko.js - lineChart - update");
            console.log(element);
            console.log(valueAccessor());
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        }
        // Create a context, set options, bind chart
        // 
        // 
        var lineCtx = element.getContext("2d");
        var options = [];
        new Chart(lineCtx).Line(valueAccessor(), options);
    }
};
