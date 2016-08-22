var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    // Configure a route.
    // First parameter: specify the route.
    // Second paramenter: provide an object with a templateUrl property and a controller property.
    $routeProvider.when("/", {
        templateUrl: "app.html",
        controller: "AppCtrl",
        controllerAs: "app"
    });
});

// Create a controller to wire up to the route.
app.controller('AppCtrl', function() {
    // Create a model on the scope with a message.
    var self = this;
    self.message = "The app routing is working!";
});