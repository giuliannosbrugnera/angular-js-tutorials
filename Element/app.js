var app = angular.module("app", [])

app.directive("dumbPassword", function() {
  var validElement = angular.element('<div>{{ model.input }}</div>');
  return {
    restrict: "E",
    replace: true,
    templateUrl: "dumbpass.html",
    link: function(scope, element) {
      // Sets a listener on that model and waits for it to change.
      scope.$watch("model.input", function(value) {
        // When it changes, the value parameter can be used to check the new value in the listener function.
        if (value === "password") {
          element.children(1).toggleClass("alert-box alert");
        }
      });
    }
  };
});