'use strict';

var app = angular.module('userAuth');


app.controller('profileCtrl', function($scope, $http, UserService) {

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
