function TestCtrl($scope) {
  console.log($scope);
}

function testDirective() {
  return {
    link: function(scope) {
      console.log(scope)
    }
  }
}

var app = angular.module('app', []);
app.controller('TestCtrl', TestCtrl);
app.directive('testDirective', testDirective);