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
        // Property that restricts this directive to `Attribute`.
        restrict: "A",
        // Linking function
        link: function() {
            alert("Howdy!");
        }
    }
}


var greetings = angular.module('greetings', []);
greetings.directive("welcome", Welcome);
greetings.directive("howdy", Howdy);