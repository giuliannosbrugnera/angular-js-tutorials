var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app.html",
            controller: "AppCtrl",
            resolve: {
                // Most of the time, resolve is associated with a controller - here, AppCtrl.
                // This allows for promises to be decoupled from the router and
                // declared separately, but still remain linked to its parent controller.
                loadData: appCtrl.loadData,
                prepData: appCtrl.prepData
            }
        })
});

var appCtrl = app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "I'm a great app!"
    }
});

appCtrl.loadData = function($timeout) {
    console.log("loadData");
    // Return a promise that would get resolved once 2 seconds have passed.
    return $timeout(function() {}, 2000);
};

appCtrl.prepData = function($timeout) {
    console.log("prepData");
    // Return a promise that would get resolved once 2 seconds have passed.
    return $timeout(function() {}, 2000);
};