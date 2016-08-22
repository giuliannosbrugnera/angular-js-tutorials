var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
            templateUrl: "app.html",
            controller: "AppCtrl",
            controllerAs: "app"
        })
        .when('/cookies/:cookieType', {
            // The routeParams object is the same as the $routeParams used in the controller.
            // 'path' is the string path the router received.
            // 'search' is the key/value set of the query string parameters.
            redirectTo: function(routeParams, path, search) {
                console.log(routeParams);
                console.log(path);
                console.log(search);
            // When the router sees the '/cookies' route, this will switch off to the '/sugar' route
            // when the :cookieType route parameter is 'sugar'.
                return "/" + routeParams.cookieType;
            }
        })
        .when('/sugar', {
            template: 'Sugar cookie'
        });
})

app.controller('AppCtrl', function() {
    var self = this;
    self.message = "The app routing is working!";
});