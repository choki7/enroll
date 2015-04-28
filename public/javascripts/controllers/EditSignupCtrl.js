/**
 * Created by Cami on 15/4/9.
 */
'use strict'
function EditSignupCtrl($scope, $http, $location, $cookieStore) {
  $scope.signUpEdit = {
    registerCode: $cookieStore.get('registerCode'),
    name: $cookieStore.get('name'),
    phone_number: $cookieStore.get('phone_number'),
    email: $cookieStore.get('email'),
    national_identify_id: $cookieStore.get('national_identify_id')
  };
  $scope.createReg = function() {
    var postData = {
      my_id: $cookieStore.get('my_id'),
      exam_id: $cookieStore.get('examId'),
      national_exam_id: $scope.national_exam_id,
      other: $scope.other,
      student_small: $cookieStore.get('smallId')
    };
    var req = {
      method: 'POST',
      url: '/set_student_exam',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify(postData)
    };
    $http(req).success(function(data){
      console.log(data);
      if(data){
        $location.path('/profile/info');
      }else{
        alert('');
      }
    }).error(function(data, status){
      console.log("error form node" + data);
    });
  };
}
