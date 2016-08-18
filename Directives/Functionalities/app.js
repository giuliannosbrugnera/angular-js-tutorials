// If you don’t specify the restriction for a directive, it will default to “A”.
// In addition, if all we’re going to do the directive is use the linking function,
// we can use the shorthand of just returning the linking function instead of returning an object with the properties defined on it.
function entering() {
    return function(scope, element) {
        // Bind “mouseenter”.
        element.bind("mouseenter", function() {
            // Log “Mouse has entered the div” to the console.
            console.log("Mouse has entered the div");
        })
    }
}

var functionalities = angular.module('functionalities', []);
functionalities.directive("entering", entering);