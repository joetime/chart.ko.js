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
        // 1. Unwrap value, so we can use observables or regular arrays
        // 2. Create a context, set options, bind chart
        // 3. Log debug info

        //1
        var value = valueAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        //2
        if (chart_ko_debug) {
            console.log("chart.ko.js - pieChart - update");
            console.log(element);
            console.log(valueAccessor);
            console.log(valueUnwrapped);
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        }
        //3
        var ctx = element.getContext("2d");
        var options = [];   // would like a way to set these
        new Chart(ctx).Pie(valueUnwrapped, options);
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
        // 1. Unwrap value, so we can use observables or regular arrays
        // 2. Create a context, set options, bind chart
        // 3. Log debug info

        //1
        var value = valueAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        //2
        if (chart_ko_debug) {
            console.log("chart.ko.js - barChart - update");
            console.log(element);
            console.log(valueAccessor);
            console.log(valueUnwrapped);
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        }
        //3
        var ctx = element.getContext("2d");
        var options = [];   // would like a way to set these
        new Chart(ctx).Bar(valueUnwrapped, options);
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

        // 1. Unwrap value, so we can use observables or regular arrays
        // 2. Create a context, set options, bind chart
        // 3. Log debug info

        //1
        var value = valueAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        //2
        if (chart_ko_debug) {
            console.log("chart.ko.js - lineChart - update");
            console.log(element);
            console.log(valueAccessor);
            console.log(valueUnwrapped);
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        }
        //3
        var ctx = element.getContext("2d");
        var options = [];   // would like a way to set these
        new Chart(ctx).Line(valueUnwrapped, options);
    }
};
