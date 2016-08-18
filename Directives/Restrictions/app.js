function Welcome() {
    // Return an object.
    return {
        // Property that restricts this directive to `Elements`.
        restrict: "E",
        // Property for specifying the HTML for our directive .
        template: "<div>Howdy there! You look splendid.</div>"
    }
}

function Howdy() {
    // Return an object.
    return {
        // Property that restricts this directive to `Attribute`. It is the default restrict property.
        restrict: "A",
        // Linking function
        link: function() {
            alert("Howdy!");
        }
    }
}

function Hello() {
    // Return an object.
    return {
        // Property that restricts this directive to `Class`.
        restrict: "C",
        link: function() {
            alert("Hello!");
        }
    }
}

function Comment() {
    // Return an object.
    return {
        // Property that restricts this directive to `Comment`.
        restrict: "M",
        link: function() {
            alert("Inside a comment! How'd know!");
        }
    }
}

function Goodbye() {
    return {
        restrict: "A",
        link: function() {
            alert("See ya later!");
        }
    }
}

var greetings = angular.module('greetings', []);
greetings.directive("welcome", Welcome);
greetings.directive("howdy", Howdy);
greetings.directive("hello", Hello);
greetings.directive("comment", Comment);
greetings.directive("goodbye", Goodbye);