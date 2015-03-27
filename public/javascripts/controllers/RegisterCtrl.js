/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function RegisterCtrl($scope, $modal, $http) {
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
      if(data.student_down.set_student_register_reply.state.is_success == true){
        alert('register successfully');
      }
    }).error(function(data, status){
      console.log('error info:' + status);
    })
  }
  $scope.data_confirm = function() {
    $scope.registerData = {
      name: $scope.name,
      sex: $scope.sex,
      phone_number: $scope.phone_number,
      email: $scope.email,
      province: $scope.province,
      national_identify_id: $scope.national_identify_id,
      school: $scope.school,
      password: $scope.password
    };
    var modalInstance = $modal.open({
      templateUrl: 'confirmModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        registerData: function () {
          return $scope.registerData;
        }
      }
    });

    modalInstance.result.then(function (registerData) {
      $scope.registerData = registerData;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };
}
function ModalInstanceCtrl($scope, $modalInstance, registerData) {
  $scope.registerData = registerData;

  $scope.ok = function () {
    $modalInstance.close($scope.registerData);
  };
}
