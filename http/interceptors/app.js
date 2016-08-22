// An interceptor is simply a factory() service that returns an object with 4 properties that map to functions.
// It's perfectly fine to include all or only a subset of the properties that are needed.
function testInterceptor() {
  return {
    // request: called before a request is sent, capable of mutating the request object.
    request: function(config) {
      // Test the url of the request to see if it matches the URL we want.
      if (config.url.indexOf('http://test-routes.herokuapp.com') > -1) {
        // Attach an extra header that contains (what would be) the CSRF token.
        config.headers['x-csrf-token'] = 'lalalalala';
      }
      return config;
    },

    requestError: function(config) {
      return config;
    },

    // response: called with an $http request succeeds, is passed the results object.
    response: function(res) {
      return res;
    },

    // responseError: called if an $http method fails.
    responseError: function(res) {
      return res;
    }
  }
}

angular.module('app', [])
  .factory('testInterceptor', testInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('testInterceptor');
  })
  .run(function($http) {
    $http.get('http://test-routes.herokuapp.com/test/hello')
      .then(function(res) {
        console.log(res.data.message)
      })
  })