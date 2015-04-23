/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function ModifyPwdCtrl($scope, $http, $location,$cookieStore) {
    $scope.modifyPwd= function() {
        $scope.pwds = {
            my_id:$cookieStore.get('my_id'),
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
                if(data == 'true'){
                    alert('密码修改成功')
                }
                else{
                    alert('旧密码输入有误');
                }
            }else{
                alert('系统忙，请稍后再试。');
            }
        }).error(function(data, status){
            $scope.$parent.logined = false;
            $scope.$parent.logout = true;
            //$location.path('/profile');
            alert('系统忙，请稍后再试。');
        })
    };
}