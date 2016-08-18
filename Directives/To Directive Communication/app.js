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
    // The last parameter, which is the required controller, does not have a required name convention.
    link: function(scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHowdy();
    }
  }
}

function howdy() {
  return {
    require: "welcome",
    link: function(scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHowdy();
    }
  }
}

function hi() {
  return {
    require: "welcome",
    link: function(scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHi();
    }
  }
}

var greetings = angular.module('greetings', [])
greetings.directive("welcome", welcome);
// Set up another directive within the app to interact with the welcome directive.
greetings.directive("hello", hello);
greetings.directive("howdy", howdy);
greetings.directive("hi", hi);