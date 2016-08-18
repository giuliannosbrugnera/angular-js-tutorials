function entering() {
    return function(scope, element) {
        // Bind “mouseenter”.
        element.bind("mouseenter", function() {
            // Add the CSS class "activeClass".
            element.addClass("activeClass");
        })
    }
}

function leaving() {
    return function(scope, element) {
        // Bind “mouseleave”.
        element.bind("mouseleave", function() {
            // Remove the CSS class "activeClass".
            element.removeClass("activeClass");
        })
    }
}

var functionalities = angular.module('functionalities', []);
functionalities.directive("entering", entering);
functionalities.directive("leaving", leaving);