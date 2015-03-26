/**
 * Created by Cami on 15/3/21.
 */
'use strict'

// config the router and template
angular.module('myApp', ['ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/index', {templateUrl: 'modules/client/index.html'}).
      when('/login', {templateUrl: 'modules/client/login.html', controller: LoginCtrl }).
      when('/register', {templateUrl: 'modules/client/register/register.html', controller: RegisterCtrl}).
      when('/register/confirm', {templateUrl: 'modules/client/register/confirm.html'}).
      when('/signup', {templateUrl: 'modules/client/signup/signup.html'}).
      otherwise({ redirectTo: '/index' });
  }]);