/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function LoginCtrl($scope, $http, $location, $cookieStore) {
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
              $cookieStore.put('stuId', data.common_down.login_reply.user_info.id);
              $scope.$parent.logined = false;
              $scope.$parent.logout = true;
              $location.path('/profile');
            }else{

            }
        }).error(function(data, status){

        })
    };
}