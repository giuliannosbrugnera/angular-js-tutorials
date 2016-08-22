(function() {

  function TestCtrl($templateCache) {
    this.user = {
      name: 'Blake'
    };

    console.log($templateCache.get('test.html'));
  }

  angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider.when('/', {
          controller: 'TestCtrl as test',
          templateUrl: 'test.html'
        })
        .otherwise('/');
    })
    .controller('TestCtrl', TestCtrl);

  // Since $templateCache is a service, we won't be able to access it in the config phase of our app.
  // The earliest we can access $templateCache is in the run phase for our app. 
  angular.module('app').run(function($templateCache) {
    $templateCache.put('test.html', 'Hello {{ test.user.name }}!');
  });
})()