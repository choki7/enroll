/**
 * Created by choki on 15/4/22.
 */
function ExamPlaceCtrl($scope, $http, $cookieStore){
  $scope.logined = true;
  $scope.logout = false;

  var data = {
    exam_id: $cookieStore.get('examId')
  };
    var req = {
        method: 'GET',
        url: '/admin/get_exam_place',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        data: JSON.stringify(data)
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