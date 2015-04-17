/**
 * Created by Cami on 15/4/16.
 */
'use strict'
function SubclassCtrl($scope, $http) {
  $scope.subclass = [];
  $scope.createSubclass = function() {
    $scope.postData = {
      category: $scope.category,
      subject: $scope.subject
    };
    var req = {
      method: 'POST',
      url: '/admin/set_exam_category',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify($scope.postData)
    };
    $http(req).success(function(data){
      if(data) {
        alert('创建成功');
        $scope.subclass.push($scope.postData);
      }else{
        $scope.subclass.push($scope.postData);
      }
    }).error(function(data, status){
      console.log('error info:' + status);
      $scope.subclass.push($scope.category);
    })
  }
}