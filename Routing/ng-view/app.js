var app = angular.module("app", ["ngRoute"]);

// $routeProvider will match the route against /:message, and the value of :message
// can be injected into the controller as $routeParams, and retrieved with a key of the same name.
// The route parameters can be stacked and accessed in the same way.
app.config(function($routeProvider) {
    $routeProvider.when("/:firstName/:middleName/:lastName", {
        templateUrl: "app.html",
        controller: "AppCtrl",
        controllerAs: "app"
    });
})

app.controller('AppCtrl', function($routeParams) {
    var self = this;
    self.message = $routeParams.firstName + " " + $routeParams.middleName + " " + $routeParams.lastName;
});