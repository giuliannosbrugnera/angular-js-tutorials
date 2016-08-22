var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "AppCtrl",
            // The resolve property is a list of promises.
            // Things that need to happen before the controller instantiates and the view loads.
            resolve: {
                // 'app' maps to the 'app' module. The function assigns a defer object and returns its promise after resolving it.
                app: function($q) {
                    var defer = $q.defer();
                    defer.resolve();
                    return defer.promise;
                }
            }
        })
});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "I'm a great app!"
    }
});