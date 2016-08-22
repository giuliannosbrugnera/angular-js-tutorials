;
(function() {
  function authInterceptor(API, auth) {
    return {
      // Automatically attach Authorization header.
      request: function(config) {
        return config;
      },

      // If a token was sent back, save it.
      response: function(res) {
        if (res.config.url.indexOf(API) === 0 && res.data.token) {
          auth.saveToken(res.data.token);
        }

        return res;
      }
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

    // Save the token to localStorage thereby logging the user in.
    self.saveToken = function(token) {
      $window.localStorage['jwtToken'] = token;
    }

    // Retrieve the token from localStorage.
    self.getToken = function() {
      return $window.localStorage['jwtToken'];
    }

    // Check for the existence of a valid token and return true or false respectively.
    self.isAuthed = function() {
      var token = self.getToken();
      if (token) {
        var params = self.parseJwt(token);
        // Unix Time is in seconds while JavaScript Date.now() returns milliseconds, so a conversion is necessary.
        return Math.round(new Date().getTime() / 1000) <= params.exp;
      } else {
        return false;
      }
    }

    self.logout = function() {
      $window.localStorage.removeItem('jwtToken');
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