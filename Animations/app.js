function TestCtrl() {
  var self = this;

  self.showBoxOne = false;
  self.showBoxTwo = false;
  // initialize an array
  // buttons in html add/rm items in this array
  self.people = [{
    name: "Eric Simons"
  }, {
    name: "Albert Pai"
  }, {
    name: "Matthew Greenster"
  }];
}

var app = angular.module('app', ['ngAnimate']);
app.controller('TestCtrl', TestCtrl);