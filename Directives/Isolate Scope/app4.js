var app = angular.module('phoneApp', []);

app.controller("AppCtrl", function($scope) {
    $scope.callHome = function(message) {
        alert(message);
    };
});

app.directive("phone", function() {
    return {
        scope: {
            // Allows you to invoke or evaluate an expression on the parent scope of whatever the directive is inside of.
            dial: "&"
        },
        // With this, it is possible to pass data into a scoped method within the template.
        template: '<input type="text" ng-model="value">' +
            '<div class="button" ng-click="dial({message:value})">' +
            'Call home!</div>'
    };
});