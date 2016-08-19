'use strict';

/**
 * @ngdoc function
 * @name doubleOrNothingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doubleOrNothingApp
 */
angular.module('doubleOrNothingApp')
  .controller('MainCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
