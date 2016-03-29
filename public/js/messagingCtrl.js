app.controller('messagingCtrl', function($scope, $http){
  $http.get('/users/username')
  .then(function(res){
    $scope.users = res.data
  })

  $scope.send = function(){

  };
})