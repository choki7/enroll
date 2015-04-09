/**
 * Created by Cami on 15/3/21.
 */
'use strict'
angular.module('myApp', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'modules/client/index.html'}).
            when('/index', {templateUrl: 'modules/client/index.html'}).
            when('/admin', {templateUrl: 'modules/admin/index.html'}).
            when('/login', {templateUrl: 'modules/client/login/login.html', controller:LoginCtrl}).
            when('/login-successful', {templateUrl: 'modules/client/login/login-successful.html'}).
            when('/register', {templateUrl: 'modules/client/register/register.html', controller: RegisterCtrl}).
            when('/register/confirm', {templateUrl: 'modules/client/register/confirm.html'}).
            when('/signup', {templateUrl: 'modules/client/signup/signup.html'}).
            when('/signup/edit', {templateUrl: 'modules/client/signup/edit.html', controller: EditSignupCtrl}).
            when('/signup/signup-successful', {templateUrl: 'modules/client/signup/signup-successful.html'}).
            when('/profile', {templateUrl: 'modules/client/profile/index.html', controller: SignupCtrl}).
            when('/profile/signup', {templateUrl: 'modules/client/profile/signup.html', controller: SignupCtrl}).
            when('/profile/basic', {templateUrl: 'modules/client/profile/basic.html'}).
            when('/profile/info', {templateUrl: 'modules/client/profile/info.html'}).
            when('/profile/exam', {templateUrl: 'modules/client/profile/exam.html'}).
            when('/profile/record', {templateUrl: 'modules/client/profile/record.html'}).
            when('/profile/state', {templateUrl: 'modules/client/profile/state.html'}).
            when('/admin/index', {templateUrl: 'modules/admin/views/index.html'}).
            when('/admin/basic/category', {templateUrl: 'modules/admin/views/basic/category.html'}).
            when('/admin/basic/subclass', {templateUrl: 'modules/admin/views/basic/subclass.html'}).
            when('/admin/basic/subject', {templateUrl: 'modules/admin/views/basic/subject.html'}).
            when('/admin/basic/system', {templateUrl: 'modules/admin/views/basic/system.html'}).
            when('/admin/basic/statement', {templateUrl: 'modules/admin/views/basic/statement.html'}).
            otherwise({redirectTo: '/index'});
    }]);