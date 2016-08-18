function welcome() {
    return {
        restrict: "E",
        scope: {},
        // The default for directives is to destructively replace the contents of the element.
        // Meaning that the <button> element will be removed entirely.
        // If the content within the panel element is intended to persist, the directive needs to have transclusion enabled:
        transclude: true,
        template: "<div>This is the welcome component</div><ng-transclude></ng-transclude>"
    }
}

var greetings = angular.module('greetings', []);
greetings.directive("welcome", welcome);