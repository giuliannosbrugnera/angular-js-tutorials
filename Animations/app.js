function TestCtrl() {
  var self = this;

  self.showBoxOne = false;
  self.showBoxTwo = false;
}

var app = angular.module('app', ['ngAnimate']);
app.controller('TestCtrl', TestCtrl);