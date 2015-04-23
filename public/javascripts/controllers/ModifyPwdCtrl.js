/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function ModifyPwdCtrl($scope, $http, $location) {
    $scope.modifyPwd= function() {
        $scope.pwds = {
            my_id:"1",
            old_password: $scope.oldPassword,
            new_password: $scope.newPassword1
        };
        console.log(" $scope.oldPassword"+$scope.oldPassword)
        var req = {
            method: 'POST',
            url: '/set_password_modify',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.pwds)
        };
        $http(req).success(function(data){
            if(data){
                console.log(data)
                if(data.common_down.login_reply.state.is_success == true) {
                    $scope.$parent.logined = false;
                    $scope.$parent.logout = true;
                    $location.path('/profile');
                }
            }else{
                alert('旧密码输入有误');
            }
        }).error(function(data, status){
            $scope.$parent.logined = false;
            $scope.$parent.logout = true;
            //$location.path('/profile');
            alert('账号或密码有误');
        })
    };
}