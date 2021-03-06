/*

authFactory.js
handles http request for auth controller

*/

angular.module('App.authFactory', [])

.factory('authFactory', ['$http', '$state', '$window', function ($http, $state, $window) {

  var signup = function (user) {
    return $http({
        method: 'POST',
        url: '/api/auth/signup',
        data: user,
      })
      .then(function (resp) {
        return resp.data;
      });
  };

  var signin = function (user) {
    return $http({
        method: 'POST',
        url: '/api/auth/signin',
        data: user
      })
      .then(function (resp) {
        return resp.data;
      });
  };

  var signout = function () {
    localStorage.clear();
    $state.go('signin');
  };

  var isAuth = function() {
    if(!window.localStorage.getItem('com.challengr')){
      return false;
    } else {
      return true;
    }
  };

  return {
    signup: signup,
    signin: signin,
    signout: signout,
    isAuth: isAuth,
  };

}]);