var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
            templateUrl: "app.html",
            controller: "AppCtrl",
            controllerAs: "app"
        })
        .otherwise({
            redirectTo: "/"
        });
})

app.controller('AppCtrl', function() {
    var self = this;
    self.message = "The app routing is working!";
});