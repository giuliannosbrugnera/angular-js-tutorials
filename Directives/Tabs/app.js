;
(function(window) {

    // This directive will represent a single pane in the tabs widget.
    function tab() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
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
                // The active property will determine whether or not an individual tab is shown so all tabs should begin life as inactive.
                scope.active = false;

                scope.disabled = false;
                if (attr.disable) {
                    attr.$observe('disable', function(value) {
                        scope.disabled = (value !== 'false');
                    })
                }

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
                    if (self.tabs.length === 1) {
                        tab.active = true;
                    }
                };
                // This method will deactivate all the "tabs" that weren't selected before finally activating the selected "tab".
                self.select = function select(selectedTab) {
                    if (selectedTab.disabled) {
                        return;
                    }

                    angular.forEach(self.tabs, function(tab) {
                        if (tab.active && tab !== selectedTab) {
                            tab.active = false;
                        }
                    })

                    selectedTab.active = true;
                };
            }
        }
    }

    var app = angular.module('app', []);
    app.directive('tab', tab);
    app.directive('tabset', tabset);

})(window);