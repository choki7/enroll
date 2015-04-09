/**
 * Created by Cami on 15/3/21.
 */
'use strict'

// config the router and template
/*angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                views: {
                    '': {
                        templateUrl:'modules/client/index.html'
                    },
                    'topbar@index': {
                        templateUrl:'modules/client/partials/topbar.html'
                    },
                    'footer@index': {
                        templateUrl:'modules/client/partials/footer.html'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    '': {
                        templateUrl:'modules/client/login.html'
                    },
                    'topbar@index': {
                        templateUrl:'modules/client/partials/topbar.html'
                    },
                    'footer@index': {
                        templateUrl:'modules/client/partials/footer.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/index');
    });*/

angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'modules/client/index.html'}).
            when('/index', {templateUrl: 'modules/client/index.html'}).
            when('/admin', {templateUrl: 'modules/admin/index.html'}).
            when('/login', {templateUrl: 'modules/client/login.html', controller: LoginCtrl }).
            when('/register', {templateUrl: 'modules/client/register/register.html', controller: RegisterCtrl}).
            when('/register/confirm', {templateUrl: 'modules/client/register/confirm.html'}).
            when('/signup', {templateUrl: 'modules/client/signup/signup.html'}).
            when('/signup/edit', {templateUrl: 'modules/client/signup/edit.html'}).
            when('/profile', {templateUrl: 'modules/client/profile/index.html'}).
            when('/profile/basic', {templateUrl: 'modules/client/profile/basic.html'}).
            when('/profile/exam', {templateUrl: 'modules/client/profile/exam.html'}).
            when('/profile/record', {templateUrl: 'modules/client/profile/record.html'}).
            when('/profile/state', {templateUrl: 'modules/client/profile/state.html'}).
            when('/admin/index', {templateUrl: 'modules/admin/views/index.html'}).
            when('/admin/basic/category', {templateUrl: 'modules/admin/views/basic/category.html'}).
            when('/admin/basic/subclass', {templateUrl: 'modules/admin/views/basic/subclass.html'}).
            when('/admin/basic/subject', {templateUrl: 'modules/admin/views/basic/subject.html'}).
            when('/admin/basic/system', {templateUrl: 'modules/admin/views/basic/system.html'}).
            when('/admin/basic/statement', {templateUrl: 'modules/admin/views/basic/statement.html'}).
			when('/admin/registration/createReg', {templateUrl: 'modules/admin/views/registration/createReg.html'}).
			when('/admin/registration/assignReg', {templateUrl: 'modules/admin/views/registration/assignReg.html'}).
			when('/admin/registration/queryReg', {templateUrl: 'modules/admin/views/registration/queryReg.html'}).
			when('/admin/registration/modifyReg', {templateUrl: 'modules/admin/views/registration/modifyReg.html'}).
			when('/admin/registration/importExcel', {templateUrl: 'modules/admin/views/registration/importExcel.html'}).
			when('/admin/registration/exportExcel', {templateUrl: 'modules/admin/views/registration/exportExcel.html'}).
			when('/admin/examinee/operateExa', {templateUrl: 'modules/admin/views/examinee/operateExa.html'}).
			when('/admin/examinee/queryExa', {templateUrl: 'modules/admin/views/examinee/queryExa.html'}).
			when('/admin/site/siteSetting', {templateUrl: 'modules/admin/views/site/siteSetting.html'}).
			when('/admin/site/roomSetting', {templateUrl: 'modules/admin/views/site/roomSetting.html'}).
			when('/admin/site/assignSite', {templateUrl: 'modules/admin/views/site/assignSite.html'}).
			when('/admin/score/importScore', {templateUrl: 'modules/admin/views/score/importScore.html'}).
			when('/admin/score/queryScore', {templateUrl: 'modules/admin/views/score/queryScore.html'}).
            otherwise({redirectTo: '/index'});
    }]);
/*
angular.module('adminApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/admin', {}).
            otherwise({redirectTo: '/admin'});
    }])*/
