'use strict';

var app = angular.module('userAuth');


app.controller('profileCtrl', function($scope, $http, UserService) {



  $http.get('/users/me')
  .then(function(res) {
    $scope.user = res.data

  }, function(err) {
    console.error(err);
  })

//get all users from db
$http.get('/users/all')
.then(function(res){
  console.log('res', res)
  $scope.username = res.data.username
  console.log('$scope.username ' , $scope.username);
}, function(err){
  console.error(err)
})


$scope.viewEdit = null;

$scope.viewEditForm = function(user){

  $scope.viewEdit = true;
}

$scope.saveEdit = function(user){
  $scope.viewEdit = null;
  UserService.update($scope.user)
  .then(function(){
    swal("Great!", "Your profile has been updated!", "success")
  }, function(err){
    console.log(err);
  })
}

});
