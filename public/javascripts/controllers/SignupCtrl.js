/**
 * Created by Cami on 15/4/8.
 */
'use strict'

function SignupCtrl ($scope, $http, $cookieStore) {
  $scope.logined = true;
  $scope.logout = false;
  $scope.verifyed = false;
  $scope.generated = false;

  // 验证已有报名号
  $scope.verifyAccount = function() {
      var data = {
        stu_account: $scope.student_account
      };
      var req = {
          method: 'POST',
          url: '/verify_account',
          headers: {
              'content-type': 'application/json;charset=utf-8'
          },
          data: JSON.stringify(data)
      };
      $http(req).success(function(data){
        if(data) {
          $scope.verifyed = true;
        }
      }).error(function(data, status){

      })
  };
  //获取所有类别
  var req = {
    method: 'GET',
    url: '/get_all_exam',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  };
  $http(req).success(function(data){
    console.log(data);
    if(data){
      $scope.categories = data;
    }else{
      alert('报名号有误');
    }
  }).error(function(data, status){
    console.log("error form node" + data);
  });
  $scope.updateBig = function(type) {
    $scope.type = type;
    $cookieStore.put('examId', $scope.type);
    for(var i in $scope.categories) {
      if($scope.categories[i].id == type) {
        if($scope.categories[i].small != null) {
          $scope.hasSmall = true;
          $scope.smalls = $scope.categories[i].small;
        }else {
          alert('该类别的尚未开放注册');
        }
      }
    }


  };
  $scope.updateSmall = function(small) {
    $scope.small = small;
  };
  // 生成报名号
  $scope.generateAccount = function() {
    $scope.generated = true;
    console.log("大类ID：" + $scope.type + "小类ID：" + $scope.small);
    $scope.registerCode = $scope.type.toString() + $scope.small.toString() + $cookieStore.get('stuId').toString();
    $cookieStore.put('smallId', $scope.small);
    $cookieStore.put('registerCode', $scope.registerCode);
  }
}