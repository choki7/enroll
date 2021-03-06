/**
 * Created by Cami on 15/3/21.
 */
'use strict'
angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'modules/client/login.html'}).
            when('/index', {templateUrl: 'modules/client/index.html',controller: IndexCtrl}).
            when('/admin', {templateUrl: 'modules/admin/views/basic/category.html', controller: CategoryTableCtrl}).
            when('/admin/login', {templateUrl: 'modules/admin/login.html', controller:AdminLoginCtrl}).
            when('/login', {templateUrl: 'modules/client/login/login.html', controller:LoginCtrl}).
            when('/logout', {templateUrl: 'modules/client/logout.html', controller:LoginCtrl}).
            when('/login-successful', {templateUrl: 'modules/client/login/login-successful.html'}).
            when('/register', {templateUrl: 'modules/client/register/register.html', controller: RegisterCtrl}).
            when('/register/confirm', {templateUrl: 'modules/client/register/confirm.html'}).
            when('/profile', {templateUrl: 'modules/client/profile/signup.html', controller: SignupCtrl}).
            when('/profile/signup', {templateUrl: 'modules/client/profile/signup.html', controller: SignupCtrl}).
            when('/profile/basic', {templateUrl: 'modules/client/profile/basic.html',controller:ModifyPwdCtrl}).
            when('/profile/info', {templateUrl: 'modules/client/profile/info.html',controller :GetInfoCtrl}).
            when('/profile/exam', {templateUrl: 'modules/client/profile/exam.html',controller :ExamPlaceCtrl}).
            when('/profile/record', {templateUrl: 'modules/client/profile/record.html', controller: RecordCtrl}).
            when('/profile/state', {templateUrl: 'modules/client/profile/state.html', controller: GetStateCtrl}).
            when('/admin/index', {templateUrl: 'modules/admin/views/index.html'}).
            when('/admin/basic/category', {templateUrl: 'modules/admin/views/basic/category.html', controller: CategoryTableCtrl}).
            when('/admin/basic/subclass', {templateUrl: 'modules/admin/views/basic/subclass.html', controller: SubclassCtrl}).
            when('/admin/basic/subject', {templateUrl: 'modules/admin/views/basic/subject.html', controller: SubjectCtrl}).
            when('/admin/basic/system', {templateUrl: 'modules/admin/views/basic/system.html', controller: AdminSystemConfigCtrl}).
            when('/admin/basic/statement', {templateUrl: 'modules/admin/views/basic/statement.html', controller: AdminSystemConfigCtrl}).
            when('/admin/registration/createReg', {templateUrl: 'modules/admin/views/registration/createReg.html'}).
            when('/admin/registration/assignReg', {templateUrl: 'modules/admin/views/registration/assignReg.html'}).
            when('/admin/registration/queryReg', {templateUrl: 'modules/admin/views/registration/queryReg.html',controller:QueryRegCtrl}).
            when('/admin/registration/modifyReg', {templateUrl: 'modules/admin/views/registration/modifyReg.html'}).
            when('/admin/registration/importExcel', {templateUrl: 'modules/admin/views/registration/importExcel.html'}).
            when('/admin/registration/exportExcel', {templateUrl: 'modules/admin/views/registration/exportExcel.html'}).
            when('/admin/examinee/operateExa', {templateUrl: 'modules/admin/views/examinee/operateExa.html'}).
            when('/admin/examinee/queryExa', {templateUrl: 'modules/admin/views/examinee/queryExa.html'}).
            when('/admin/site/siteSetting', {templateUrl: 'modules/admin/views/site/siteSetting.html'}).
            when('/admin/site/roomSetting', {templateUrl: 'modules/admin/views/site/roomSetting.html'}).
            when('/admin/site/assignSite', {templateUrl: 'modules/admin/views/site/assignSite.html',controller:AssignSiteCtrl}).
            when('/admin/score/importScore', {templateUrl: 'modules/admin/views/score/importScore.html'}).
            when('/admin/score/queryScore', {templateUrl: 'modules/admin/views/score/queryScore.html',controller: QueryScoreCtrl}).
            when('/signup/edit', {templateUrl: 'modules/client/signup/edit.html', controller: EditSignupCtrl}).
            otherwise({redirectTo: '/login'});

    }]);
