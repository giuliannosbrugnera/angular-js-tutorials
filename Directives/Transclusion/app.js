function welcome() {
    return {
        restrict: "E",
        scope: {},
        template: "<div>This is the welcome component</div>"
    }
}

var greetings = angular.module('greetings', []);
greetings.directive("welcome", welcome);