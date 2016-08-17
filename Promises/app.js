function getData($timeout, $q) {
    return function() {
        var defer = $q.defer()

        // simulated async function
        return $q(function(resolve, reject) {
            $timeout(function() {
                if (Math.round(Math.random())) {
                    resolve('data received!')
                } else {
                    reject('oh no an error! try again')
                }
            }, 2000)
        })
    }
}

angular.module('app', [])
    .factory('getData', getData)
    .run(function(getData) {
        var promise = getData()
            .then(function(string) {
                console.log(string)
            }, function(error) {
                console.error(error)
            })
    })