/**
 * Created by Cami on 15/4/8.
 */
'use strict'
function SignupCtrl ($scope, $http) {
    $scope.verifyed = false;
    $scope.generated = false;
    // 验证已有报名号
    $scope.verifyAccount = function() {
        var req = {
            method: 'POST',
            url: '/login',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.account)
        };
        $http(req).success(function(data){
            if(data){
                // 报名号验证成功，可查看报名信息
            }else{
                alert('报名号有误');
            }
        }).error(function(data, status){
            $scope.verifyed = true;
        })
    }
    // 生成报名号
    $scope.generateAccount = function() {
        $scope.generated = true;

    }
}