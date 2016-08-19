function country() {
  return {
    restrict: "E",
    controller: function() {
      this.makeAnnouncement = function(message) {
        console.log("Country says: " + message);
      };
    }
  };
}

function state() {
  return {
    restrict: "E",
    controller: function() {
      this.makeLaw = function(law) {
        console.log("Law: " + law);
      };
    }
  };
}

function city() {
  return {
    restrict: "E",
    require: ["^country", "^state"],
    link: function(scope, element, attrs, ctrls) {
      ctrls[0].makeAnnouncement("This city rocks");
      ctrls[1].makeLaw("Jump higher");
    }
  };
}

var app = angular.module("app", []);
app.directive("country", country);
app.directive("state", state);
app.directive("city", city);