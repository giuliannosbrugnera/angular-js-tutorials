var app = angular.module('phoneApp', []);

app.controller('AppController', function($scope) {
    $scope.leaveVoicemail = function(number, message) {
        alert('Number: ' + number + ' said: ' + message);
    };
});

app.directive('phone', function() {
    return {
        restrict: 'E',
        scope: {
            // Basically shorthand for reading in an attribute.
            number: '@',
            // Set up a bidirectional two-way binding.
            // Anything we update on the directive will be updated in the controller as well.
            network: '=',
            // Calling something within the scope of that controller.
            makeCall: '&'
        },
        templateUrl: 'phone.html',
        link: function(scope) {
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            scope.network = scope.networks[0];
        }
    };
});