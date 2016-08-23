var app = angular.module("app", []);

// Factories are a common paradigm in Angular that allow you to configure 
// a function that returns an object which can be then injected into controllers.

// $provide.provider sets up a more generic provider which returns objects that have $get functions
// Migrate the provider out of config and directly onto the app.provider method:.
app.provider("game", function() {
  var type;
  return {
    // Define a setType method within the returned provider object.
    // This exposes an API to the provider, accessible in app.config, that 
    // allows further configuration of that provider to occur before it reaches the controller.
    setType: function(value) {
      type = value;
    },
    $get: function() {
      return {
        title: type + "Craft"
      };
    }
  };
});

app.config(function(gameProvider) {
  gameProvider.setType("War");
});

// Game parameter to the controller is injected and matched to the game factory, which returns an object with a title attribute.
app.controller("AppCtrl", ['$scope', 'game', function($scope, game) {
  $scope.title = game.title;
}]);