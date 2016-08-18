function entering() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            scope.fun.start();
        })
    }
}

function FunCtrl() {
    var self = this;

    self.start = function() {
        console.log("Fun times have been started!");
    }

}

var coolApp = angular.module('coolApp', []);
coolApp.controller('FunCtrl', FunCtrl);
coolApp.directive("entering", entering);