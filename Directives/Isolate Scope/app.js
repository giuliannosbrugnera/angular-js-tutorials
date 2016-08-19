function kid() {
    return {
        restrict: "E",
        // Isolate the scope.
        scope: {},
        template: '<input type="text" ng-model="chore"> {{chore}}'
    };
}

function ChoreCtrl($scope) {
    $scope.logChore = function(chore) {
        alert(chore + " is done!");
    };
}

var app = angular.module('choreApp', []);
app.controller('ChoreCtrl', ChoreCtrl);
app.directive('kid', kid);