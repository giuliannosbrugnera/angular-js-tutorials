// Controller.
function Ctrl($scope, $timeout, $http) {
  // Declare a variable.
  var ctr = 0;

  // Declare a function.
  var make_request = function() {
    // Invoke $digest when complete.
    $http({
      url: "http://google.com",
      method: "GET"
    }).success(console.log("GET request success!"));
  };

  // app-wide $digest() watcher
  // Register a $watch on all $digest calls.
  $scope.$watch(function() {
    ctr += 1;
    console.log("digest called " + ctr);
  });

  // Set a $timeout. Invoke $digest when complete.
  $timeout(function() {
    make_request();
    console.log('End timeout!');
  }, 2000);
}


var app = angular.module("app", []);

app.config(function() {
  console.log('Config reached!');
});

app.controller('Ctrl', ['$scope', '$timeout', '$http', Ctrl]);