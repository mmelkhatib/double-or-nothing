'use strict';
/**
 * @ngdoc function
 * @name doubleOrNothingApp.controller:playCtrl
 * @description
 * # playCtrl
 *
 */
angular.module('doubleOrNothingApp')
  .controller('playCtrl',["auth", "$scope", "$location", function (auth, $scope, $location){


    var gameUser = function() {
        var userInfo = {
          profileName: 'Mohammed',
          profileEmail: 'mmelkhatib@gmail.com'
          };
        return userInfo;
      }

      var gameAccount = function() {
         var userBalance = {
         runningBalance: 1000,
         };
        return userBalance;
      }
      var gameSession = function(){
          var session = {
            wager: 0,
            waged: 0,
            myRoll:0,
            aiRoll:0,
            outcome: 'won'
          }
          return session;
    }

      var gameSessions = [
          {
          gameid: 101,
          date: "01/20/2016",
          outcome: "Won",
          wager: "200",
          myRoll:0,
          aiRoll:0
          },
          {
          gameid: 2,
          date: "02/10/2016",
          outcome: "Lost",
          wager: "400",
          myRoll:0,
          aiRoll:0
          }
        ];


    //bind variables to the scope!
    $scope.user = gameUser();
    $scope.account = gameAccount();
    $scope.session = gameSession();
    $scope.gameHistory = gameSessions;

//get new wager balance//
    $scope.getWager = function() {
      var balance = $scope.account.runningBalance;
      var waged = $scope.session.waged;
      var newBalance = 0;
      if(balance >= waged ){
        newBalance =  balance - waged;
      }
      else{
        alert("You don't have enough balance!");
      }
      $scope.session.wager = waged;
      $scope.account.runningBalance = newBalance;
      return newBalance;
    };


    $scope.rollBid = function(){

      var lostWager = function(){
        return $scope.account.runningBalance - $scope.session.wager;
        $scope.session.outcome = "won";
      }
      var winWager = function(){
        return $scope.account.runningBalance + $scope.session.wager;
        $scope.session.outcome = "lost";
      }
      var myRoll = Math.floor(Math.random() * 100);
      var aiRoll = Math.floor(Math.random() * 100);
      if (myRoll > aiRoll) {
        winWager();
      }
      else if(myRoll < aiRoll) {
        lostWager();
      }
      $scope.session.gameid = Math.floor(Math.random());
      $scope.session.myRoll = myRoll;
      $scope.session.aiRoll = aiRoll;
      gameSessions.push($scope.session);

    }



}]);
