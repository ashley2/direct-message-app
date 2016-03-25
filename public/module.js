var app = angular.module('minionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('login', {
    url: "/",
    templateUrl: "templates/login.html",
    controller: "loginCtrl"
  })
  .state('profile', {
    url: "/profile/",
    templateUrl: "templates/profile.html",
    controller: "profileCtrl"
  })
  





})