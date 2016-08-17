function getData($timeout, $q) {
    return function() {
        var defer = $q.defer()

        // simulated async function
        return $q(function(resolve, reject) {
            $timeout(function() {
                resolve(Math.floor(Math.random() * 10))
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
            .finally(function() {
                console.log('Finished at:', new Date())
            })
    })