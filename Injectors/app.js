var app = angular.module("app", []);

app.factory("game", function() {
  return {
    title: "StarCraft"
  };
});

// The injector is able to seek out what ‘game’ is being injected as, here a factory.
angular.injector(["app"]).invoke(function(game) {
  alert(game.title);
});

app.controller("AppCtrl", function($scope, game) {
  $scope.title = game.title;
});