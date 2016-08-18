;
(function(window) {

    // This directive will represent a single pane in the tabs widget.
    function tab() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
            // The '^' character instructs the directive to move up the scope hierarchy one level and look for the controller on "tabset".
            // If the controller can't be found, angular will throw an error.
            require: '^tabset',
            // By specifying a property on the scope object of the DDO, the scope object passed to our link function will now have
            // a "heading" property automatically attached to it whose value is equal to the string defined in index.html.
            // "@" means this scope property should be a string
            scope: {
                heading: '@'
            },
            // "tabsetCtrl" is the "tabset" controller, which we can now manipulate.
            link: function(scope, elem, attr, tabsetCtrl) {
                // Any property bound to scope in the "tab" directive will also be accessible by the "tabset" controller.
                tabsetCtrl.addTab(scope);
            }
        }
    }

    // This directive will wrap multiple "tabs" and provide the logic needed to select which "tab" is shown.
    function tabset() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            // Rather than defining a template string, we're using templateUrl to specify an external template.
            templateUrl: 'tabset.html',
            bindToController: true,
            controllerAs: 'tabset',
            // By using a controller, we can require that the "tab" directive be nested inside the "tabset".
            // Doing this will inject the "tabset" controller instance into each of the "tab" link functions,
            // allowing us to operate on the controller object from within the link functions of the "tabs".
            controller: function() {
                var self = this;
                self.tabs = [];
                // Function which a tab can use to register itself.
                self.addTab = function addTab(tab) {
                    self.tabs.push(tab);
                }
            }
        }
    }

    var app = angular.module('app', []);
    app.directive('tab', tab);
    app.directive('tabset', tabset);

})(window);