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
  var data = {
    exam_id: $cookieStore.get('examId')
  };
  var req = {
    method: 'POST',
    url: '/get_student_exam_info',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    },
    data: JSON.stringify(data)
  };
  $http(req).success(function(data){
    if(data){
      var temp = {
        big: data.big_small.big_name,
        reg: registerCode,
        small: data.big_small.small_name,
        name: name,
        phone_number: phone_number,
        national_identify_id: national_identify_id,
        subject: data.category
      }
      $scope.exams.push(temp);
    }else{

    }
  }).error(function(data, status){

  })
}