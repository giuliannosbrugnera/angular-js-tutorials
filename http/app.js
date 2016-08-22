function testService($http) {
  this.get = function() {}
}


function TestCtrl(testService) {
  var self = this;

  self.getMessage = function() {}
}

var app = angular.module('app', []);
app.service('testService', testService);
app.controller('TestCtrl', TestCtrl);