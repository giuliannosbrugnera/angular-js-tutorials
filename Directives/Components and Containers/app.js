// A component directive - uncomplicated behavior, essentially display the data passed into the attributes.
function clock() {
    return {
        restrict: 'E',
        scope: {
            timezone: "@"
        },
        template: "<div>12:00pm {{timezone}}</div>"
    }
}

// A container directive.
// Panel takes a title attribute from the view, uses @ in the isolate scope to insert it into the
// template, and uses transclusion to append a clock component from the view into the template after the alert-box title.
function panel() {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: "<div style='border: 3px solid #000000'>" +
            "<div class='alert-box'>{{title}}</div>" +
            "<div ng-transclude></div></div>"
    };
}

var app = angular.module("app", []);
app.directive("clock", clock);
app.directive("panel", panel);