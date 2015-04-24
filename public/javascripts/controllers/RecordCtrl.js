/**
 * Created by Cami on 15/4/17.
 */
'use strict'
function RecordCtrl($scope, $http) {
    $scope.get_exam_score=function(){
        $scope.info = {
            my_id:1 ,
            exam_id: 1
        };
        var req = {
            method: 'POST',
            url: '/get_exam_score',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.info)
        };
        $http(req).success(function(data){
            if(data){
              console.log(data);

            }else{
                alert('查询有误，请稍后再试');
            }
        }).error(function(data, status){
            $location.path('/admin/login');
        })
    }
    var req = {
        method: 'GET',
        url: '/get_student_exam',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        data: JSON.stringify("{my_id:1，exam_id:1}")
    };
    $http(req).success(function(data){
        if(data) {
            console.log(data);
            $scope.examplaces = data;
        }else{
            alert('载入失败，请刷新');
        }
    }).error(function(data, status){
        //alert('注册成功');
    })

}