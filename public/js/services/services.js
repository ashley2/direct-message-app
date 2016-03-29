'use strict';

var app = angular.module('userAuth');

app.service('UserService', function($http) {

  this.register = function(user) {
    return $http.post('/users/register', user);
  };

  this.login = function(user) {
    return $http.post('/users/authenticate', user);
  }

 this.getMe = () => $http.get('/users/me')

 this.getAll = () => $http.get('users/all')

 // this.saveEdit = () => $http.put('/users/')
 this.update = function(user){
  return $http.put('/users', user);
};
});
