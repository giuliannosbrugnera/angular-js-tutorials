;
(function() {
  function authInterceptor(API, auth) {
    return {
      // automatically attach Authorization header.
      request: function(config) {
        return config;
      },

      // If a token was sent back, save it.
      response: function(res) {
        return res;
      },
    }
  }

  function authService($window) {
    var self = this;

    // Decoding the token.
    self.parseJwt = function(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse($window.atob(base64));
    }
  }

  function userService($http, API, auth) {
    var self = this;
    self.getQuote = function() {
      return $http.get(API + '/auth/quote')
    }

    // Getting a token.
    self.register = function(username, password) {
      return $http.post(API + '/auth/register', {
        username: username,
        password: password
      })
    }

    // Getting a token.
    self.login = function(username, password) {
      return $http.post(API + '/auth/login', {
        username: username,
        password: password
      })
    };
  }

  // We won't touch anything in here.
  function MainCtrl(user, auth) {
    var self = this;

    function handleRequest(res) {
      var token = res.data ? res.data.token : null;
      if (token) {
        console.log('JWT:', token);
      }
      self.message = res.data.message;
    }

    self.login = function() {
      user.login(self.username, self.password)
        .then(handleRequest, handleRequest)
    }
    self.register = function() {
      user.register(self.username, self.password)
        .then(handleRequest, handleRequest)
    }
    self.getQuote = function() {
      user.getQuote()
        .then(handleRequest, handleRequest)
    }
    self.logout = function() {
      auth.logout && auth.logout()
    }
    self.isAuthed = function() {
      return auth.isAuthed ? auth.isAuthed() : false
    }
  }

  angular.module('app', [])
    .factory('authInterceptor', authInterceptor)
    .service('user', userService)
    .service('auth', authService)
    .constant('API', 'http://test-routes.herokuapp.com')
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    })
    .controller('Main', MainCtrl)
})();