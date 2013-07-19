
var chartko = {
    debug: false,
    utils: {
        log: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            console.log("chart.ko.js:");
            console.log(element);
            console.log(valueAccessor);
            console.log(allBindingsAccessor());
            console.log(viewModel);
            console.log(bindingContext);
        },
        bind: function (chartType, element, valueAccessor) {
            // 1. Unwrap value, so we can use observables or regular arrays
            // 2. Create a context, set options
            // 3. Create chart

            // 1
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            // 2
            var ctx = element.getContext("2d");
            var options = [];   // would like a way to set these
            // 3
            if (chartType == "Pie")
                new Chart(ctx).Pie(valueUnwrapped, options);
            if (chartType == "Bar")
                new Chart(ctx).Bar(valueUnwrapped, options);
            if (chartType == "Line")
                new Chart(ctx).Line(valueUnwrapped, options);
        },
    
        update: function (chartType, element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            // debug
            if (chartko.debug)
                chartko.utils.log(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);

            chartko.utils.bind(chartType, element, valueAccessor);
        }
    }
};

ko.bindingHandlers.pieChart = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        chartko.utils.update("Pie", element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
    }
};

ko.bindingHandlers.barChart = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        chartko.utils.update("Bar", element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
    }
};

ko.bindingHandlers.lineChart = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        chartko.utils.update("Line", element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
    }
};
