/**
 * Created by Cami on 15/4/17.
 */
'use strict'
function RecordCtrl($scope, $http, $cookieStore) {
    $scope.get_exam_score=function(){
        var req = {
            method: 'POST',
            url: '/get_exam_score',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(data)
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
    };
    var data = {
      my_id: $cookieStore.get('my_id'),
      exam_id: $cookieStore.get('examId')
    };
    var req = {
        method: 'POST',
        url: '/get_student_exam',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        data: JSON.stringify(data)
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