var app = angular.module("app", ["ngRoute"]);

// $routeProvider has a simple API, accepting either the when() method, which matches a pattern, or otherwise().
// It also allows for method chaining.
app.config(function($routeProvider) {
    // Configure a route.
    // First parameter: specify the route.
    // Second paramenter: provide an object with a templateUrl property and a controller property.
    $routeProvider.when("/", {
            templateUrl: "app.html",
            controller: "AppCtrl",
            controllerAs: "app"
        })
        .when('/cookies', {
            template: "NOM NOM NOM NOM"
        })
        .otherwise({
            template: "This route isn't set!"
        });
});

// Create a controller to wire up to the route.
app.controller('AppCtrl', function() {
    // Create a model on the scope with a message.
    var self = this;
    self.message = "The app routing is working!";
});