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
    restrict: "E"
  };
}

function city() {
  return {
    restrict: "E",
    require: "^country",
    link: function(scope, element, attrs, countryCtrl) {
      countryCtrl.makeAnnouncement("This city rocks");
    }
  };
}

var app = angular.module("app", []);
app.directive("country", country);
app.directive("state", state);
app.directive("city", city);