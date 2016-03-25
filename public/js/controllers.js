'use strict';

var app = angular.module('userAuth');



app.controller('testCtrl', function($scope, $http) {
  console.log('test button');
  $scope.test = function() {
    $http.get('/protected')
      .then(function(res) {
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      })
    }
  });











