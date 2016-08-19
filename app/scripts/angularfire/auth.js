'use strict';

angular.module('firebase.auth', [])

  

    .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login')


  .factory('auth', ["$firebaseAuth", function ($firebaseAuth) {
      return $firebaseAuth();
    }]);
