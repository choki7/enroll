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
              $scope.queried = true;
              $scope.scores = data;
            }else{
                alert('状态尚未审核');
            }
        }).error(function(data, status){
            $location.path('/admin/login');
        })
    };
    var data = {
      my_id: 1,
      exam_id: 1
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