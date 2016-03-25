'use strict';

var app = angular.module('userAuth');


app.controller('profileCtrl', function($scope, $http, UserService) {



$http.get('/users/me')
      .then(function(res) {
        console.log('NEWres:', res);
      }, function(err) {
        console.error(err);
      })



$scope.viewEdit = null;

  $scope.viewEditForm = function(){
    $scope.viewEdit = true;
  }

  $scope.saveEdit = function(saveEdit){
    $scope.viewEdit = null;
    // .then(function(){
    //   swal("Great!", "Your minion has been saved!", "success")
    // }, function(err){
    //   console.log(err);
    // })
  }




});
