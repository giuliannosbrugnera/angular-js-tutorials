function entering() {
    return function(scope, element) {
        // Bind “mouseenter”.
        element.bind("mouseenter", function() {
            // Log “Mouse has entered the div” to the console.
            console.log("Mouse has entered the div");
        })
    }
}

function leaving() {
    return function(scope, element) {
        // Bind “mouseleave”.
        element.bind("mouseleave", function() {
            // Log “Mouse has left the div” to the console.
            console.log("Mouse has left the div");
        })
    }
}

var functionalities = angular.module('functionalities', []);
functionalities.directive("entering", entering);
functionalities.directive("leaving", leaving);