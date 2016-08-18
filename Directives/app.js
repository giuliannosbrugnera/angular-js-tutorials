angular.module('greetings', [])
    // `welcome` is the name of the new directive. Second paramenter is a function for callback.
    .directive("welcome", function() {
        // Return an object.
        return {
            // Property that restricts this directive to `Elements`.
            restrict: "E",
            // Property for specifying the HTML for our directive .
            template: "<div>Howdy there! You look splendid.</div>"
        }
    });