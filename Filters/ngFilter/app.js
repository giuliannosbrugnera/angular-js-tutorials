function TestCtrl() {
  var self = this;
  self.people = [{
    name: "Eric Simons",
    born: "Chicago"
  }, {
    name: "Albert Pai",
    born: "Taiwan"
  }, {
    name: "Matthew Greenster",
    born: "Virginia"
  }];
}

angular.module('app', [])
  .controller('TestCtrl', TestCtrl);