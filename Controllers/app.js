// The first parameter of angular.module defines the name of the module.
// The second parameter is an array that declares the module dependencies that our module uses. 
var app = angular.module('app', []);

// 'MainCtrl' is the controller name.
// Second parameter is the function that represents our controller.
app.controller('MainCtrl', function() {
    var self = this;
    self.message = 'hello';

    self.changeMessage = function(message) {
        self.message = message;
    };
});