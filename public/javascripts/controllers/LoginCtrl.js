/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function LoginCtrl($scope, $http, $location) {
    $scope.signIn = function() {
        $scope.login = {
            account: $scope.account,
            password: $scope.password
        };
        var req = {
            method: 'POST',
            url: '/login',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.login)
        };
        $http(req).success(function(data){
            if(data){
              $scope.$parent.logined = false;
              $scope.$parent.logout = true;
              $location.path('/profile');
            }else{
              $scope.$parent.logined = false;
              $scope.$parent.logout = true;
              $location.path('/profile');
            }
        }).error(function(data, status){
          $scope.$parent.logined = false;
          $scope.$parent.logout = true;
          $location.path('/profile');

        })
    };
}