function clock() {
    return {
        restrict: 'E',
        scope: {
            timezone: "@"
        },
        template: "<div>12:00pm {{timezone}}</div>"
    }
}

var app = angular.module("app", []);
app.directive("clock", clock);