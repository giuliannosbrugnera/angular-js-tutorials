function kid() {
    return {
        restrict: "E",
        template: '<input type="text" ng-model="chore"> {{chore}}'
    };
}

var app = angular.module('choreApp', []);
app.directive("kid", kid);