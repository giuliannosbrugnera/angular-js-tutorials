function kid() {
    return {
        restrict: "E",
        // Isolate the scope.
        scope: {},
        template: '<input type="text" ng-model="chore"> {{chore}}'
    };
}

var app = angular.module('choreApp', []);
app.directive("kid", kid);