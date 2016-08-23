// If you open your developer console and refresh the page, you should see both $scope and scope.
// Notice that they both have a $id property with the same value, which means that these two variables
// actually refer to the exact same scope object.
function TestCtrl($scope) {
  console.log($scope);
}

// Now it is different. The directive uses an isolated scope.
function testDirective() {
  return {
    scope: {},
    link: function(scope) {
      console.log(scope)
    }
  }
}

var app = angular.module('app', []);
app.controller('TestCtrl', TestCtrl);
app.directive('testDirective', testDirective);