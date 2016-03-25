'use strict';

var app = angular.module('userAuth');


app.controller('loginCtrl', function($scope, UserService) {
  $scope.login = function(user) {
    UserService.login(user)
      .then(function(res) {
        state.go()
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      });
  }
});
