var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry";
})

app.directive("drink", function() {
    return {
        scope: {
            // Expects an object which it can bind to.
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    };
});