/**
 * Created by choki on 15/4/22.
 */

'use strict'
function GetInfoCtrl($scope, $http, $location) {
   // $scope.getInfo = function() {
        $scope.getInfo = {
            exam_id: $scope.exam_id,
            my_id: $scope.my_id
        };
        var req = {
            method: 'GET',
            url: '/get_student_exam_info',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.getInfo)
        };
        $http(req).success(function(data){
            if(data){
                console.log(data)
                if(data.common_down.login_reply.state.is_success == true) {
                    $location.path('/admin');
                }
            }else{
                alert('账号或密码有误');
            }
        }).error(function(data, status){

        })
    //};
}
