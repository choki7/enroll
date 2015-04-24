/**
 * Created by Cami on 15/4/24.
 */
'use strict'
function GetStateCtrl($scope, $http, $cookieStore) {
  $scope.exams = [];
  var registerCode = $cookieStore.get('registerCode'),
    name = $cookieStore.get('name'),
    phone_number = $cookieStore.get('phone_number'),
    national_identify_id = $cookieStore.get('national_identify_id');
  var req = {
    method: 'GET',
    url: '/get_student_exam_info',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    },
    data: JSON.stringify($scope.getInfo)
  };
  $http(req).success(function(data){
    console.log(data);
    if(data){
      var temp = {
        big: data.big_small.big_name,
        reg: registerCode,
        small: data.big_small.small_name,
        name: name,
        phone_number: phone_number,
        national_identify_id: national_identify_id
      }
      $scope.exams.push(temp);
    }else{

    }
  }).error(function(data, status){

  })
}