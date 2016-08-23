var app = angular.module("app", []);

// Factories are a common paradigm in Angular that allow you to configure 
// a function that returns an object which can be then injected into controllers.
app.factory("game", function() {
  return {
    title: "StarCraft"
  };
});

// Game parameter to the controller is injected and matched to the game factory, which returns an object with a title attribute.
app.controller("AppCtrl", ['$scope', 'game', function($scope, game) {
  $scope.title = game.title;
}]);