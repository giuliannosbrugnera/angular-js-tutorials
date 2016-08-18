function entering() {
    return function(scope, element, attrs) {
        // Bind “mouseenter”.
        element.bind("mouseenter", function() {
            element.addClass(attrs.entering);
        })
    }
}

function leaving() {
    return function(scope, element, attrs) {
        // Bind “mouseleave”.
        element.bind("mouseleave", function() {
            element.removeClass(attrs.entering);
        })
    }
}

var functionalities = angular.module('functionalities', []);
functionalities.directive("entering", entering);
functionalities.directive("leaving", leaving);