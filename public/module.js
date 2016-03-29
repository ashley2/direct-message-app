var app = angular.module('userAuth', ['ui.router'])
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
  .state('messaging',
   {url: '/messaging',
    templateUrl: 'templates/messaging.html',
     controller: 'messagingCtrl'})
  





})