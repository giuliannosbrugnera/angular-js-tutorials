function TestCtrl() {
    // basic controller where we preset the scope myString variable.
    var self = this;
    self.myString = "hello world";
    self.friends = [{
        name: 'Andrew'
    }, {
        name: 'Will'
    }, {
        name: 'Mark'
    }, {
        name: 'Alice'
    }, {
        name: 'Todd'
    }];
}

// this is where the filter magic happens.
function CapitalizeFilter() {
    // this is the function that Angular will execute when the expression is evaluated.
    return function(text) {
        // text is the original string output of the Angular expression.
        return text.toUpperCase();
        // and we simply return the text in upper case!
    }
}

function StartsWithA() {
    // function to invoke by Angular each time
    // Angular passes in the `items` which is our Array.
    return function(items, letter) {
        // Create a new Array
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        // loop through existing Array
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // check if the individual Array element begins with `a` or not.
            if (letterMatch.test(item.name.substring(0, 1))) {
                // push it into the Array if it does!
                filtered.push(item);
            }
        }
        // boom, return the Array after iteration's complete.
        return filtered;
    }
}

angular.module('app', [])
    .controller('TestCtrl', TestCtrl)
    // define a filter called 'capitalize' that will invoke the CapitalizeFilter function.
    .filter('capitalize', CapitalizeFilter)
    // define a filter called 'startsWithA' that will invoke the StartsWithA function.
    .filter('startsWithA', StartsWithA);