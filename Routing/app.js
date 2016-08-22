var app = angular.module('app', []);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "AppCtrl",
            // The resolve property is a list of promises.
            // Things that need to happen before the controller instantiates and the view loads.
            resolve: {
                app: function($q) {
                    var defer = $q.defer();
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