/**
 * Created by Cami on 15/3/26.
 */
'use strict'
function ConfirmCtrl($scope, $http) {
  $scope.register_confirm = function() {
    var postData = {
      name: $scope.name,
      sex: $scope.sex,
      phone_number: $scope.phone_number,
      email: $scope.email,
      province: $scope.province,
      national_identify_id: $scope.national_identify_id,
      school: $scope.school,
      password: $scope.password
    };
    var req = {
      method: 'POST',
      url: '/register',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify(postData)
    };
    $http(req).success(function(data){
      console.log(data);
      alert('register successfully');
    }).error(function(data, status){
      console.log('error info:' + status);
    })
  }
}