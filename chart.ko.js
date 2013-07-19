var chart_ko_debug = true;

ko.bindingHandlers.pieChart = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        if (chart_ko_debug) {
            console.log("custom binding init");
        }
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        if (chart_ko_debug) {
            console.log("custom binding bind");
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
