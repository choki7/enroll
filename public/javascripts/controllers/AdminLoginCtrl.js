/**
 * Created by choki on 15/4/9.
 */
'use strict'
function AdminLoginCtrl($scope, $http, $location) {
    $scope.adminSignIn = function() {
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
                if(data.common_down.login_reply.state.is_success == true) {
                    $location.path('/admin');
                }
            }else{
                alert('账号或密码有误');
            }
        }).error(function(data, status){
            $location.path('/admin/login');
        })
    };
}