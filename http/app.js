function testService($http) {
  this.get = function() {
    // '$http' methods return Angular '$q' promises, which allows for clean code flow via promise chaining.
    return $http.get('http://test-routes.herokuapp.com/test/hello')
      .then(function(res) {
        // Return the enveloped data.
        return res.data.message;
      });
  }
}


function TestCtrl(testService) {
  var self = this;

  self.getMessage = function() {
    testService.get()
      .then(function(message) {
        self.message = message;
      })
  }
}

var app = angular.module('app', []);
app.service('testService', testService);
app.controller('TestCtrl', TestCtrl);