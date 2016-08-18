;
(function(window) {

    // This directive will represent a single pane in the tabs widget.
    function tab() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
            scope: {},
            link: function(scope, elem, attr) {}
        }
    }

    // This directive will wrap multiple tabs and provide the logic needed to select which tab is shown.
    function tabset() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            // Rather than defining a template string, we're using templateUrl to specify an external template.
            templateUrl: 'tabset.html',
            bindToController: true,
            controllerAs: 'tabset',
            controller: function() {
                var self = this
                self.tabs = []
            }
        }
    }

    var app = angular.module('app', []);
    app.directive('tab', tab);
    app.directive('tabset', tabset);

})(window);