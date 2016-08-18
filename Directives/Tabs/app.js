;
(function(window) {

    function tab() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
            scope: {},
            link: function(scope, elem, attr) {}
        }
    }

    var app = angular.module('app', []);
    app.directive('tab', tab);

})(window);