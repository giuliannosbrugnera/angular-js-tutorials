var app = angular.module("app", []);

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