function welcome() {
  return {
    restrict: "E",
    controller: function($scope) {
      $scope.words = [];

      this.sayHello = function() {
        $scope.words.push("hello");
      };

      this.sayHowdy = function() {
        $scope.words.push("howdy");
      };

      this.sayHi = function() {
        $scope.words.push("hi");
      };
    },

    link: function(scope, element) {
      element.bind("mouseenter", function() {
        console.log(scope.words);
      });
    }
  }
}

var greetings = angular.module('greetings', [])
greetings.directive("welcome", welcome);