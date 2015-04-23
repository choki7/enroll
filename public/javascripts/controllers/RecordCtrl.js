/**
 * Created by Cami on 15/4/17.
 */
'use strict'
function RecordCtrl($scope, $http) {
  //$scope.examplaces = [
  //  {
  //    name: '上海中学',
  //    id: 101
  //  },
  //  {
  //    name: '华师大二附中',
  //    id: 102
  //  },{
  //    name: '复旦附中',
  //    id: 103
  //  },{
  //    name: '交大附中',
  //    id: 104
  //  },{
  //    name: '南洋模范中学',
  //    id: 105
  //  },{
  //    name: '建平中学',
  //    id: 106
  //  },{
  //    name: '延安中学',
  //    id: 107
  //  }
  //];
    $scope.get_exam_score=function(){
        $scope.info = {
            my_id:1 ,
            //$scope.my_id,
            exam_id: 1
            // $scope.exam_id
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
                if(data.common_down.login_reply.state.is_success == true) {
                    $location.path('/admin');
                }
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
            //$scope.content = data.content;
            console.log(data);
            $scope.examplaces = data;
        }else{
            alert('载入失败，请刷新');
        }
    }).error(function(data, status){
        //alert('注册成功');
    })

}