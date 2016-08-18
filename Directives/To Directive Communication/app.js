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

function hello() {
  return {
    require: "welcome",
    link: function(scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHowdy();
    }
  }
}

var greetings = angular.module('greetings', [])
greetings.directive("welcome", welcome);
greetings.directive("hello", hello);