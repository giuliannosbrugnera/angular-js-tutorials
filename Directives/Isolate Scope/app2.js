var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry";
});

app.directive("drink", function() {
    return {
        scope: {
            // Extract an attribute by name, and assign it to the scope.
            flavor: "@"
        },
        template: '<div>{{ flavor }}</div>'
    };
});