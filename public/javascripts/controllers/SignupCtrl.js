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
          data: JSON.stringify($scope.stu_account)
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
  };
  //获取所有类别
  var req = {
    method: 'GET',
    url: '/admin/get_all_exam',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  };
  $http(req).success(function(data){
    if(data){
      console.log(data);
      $scope.categories = data;
    }else{
      alert('报名号有误');
    }
  }).error(function(data, status){
    console.log("error form node" + data);
  })
  // 生成报名号
  $scope.generateAccount = function() {
    $scope.generated = true;

  }
}