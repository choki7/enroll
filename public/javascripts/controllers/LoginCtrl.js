/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function LoginCtrl($scope, $http) {
  $scope.signIn = function() {
    $scope.login = {
      account: $scope.account,
      password: $scope.password
    };
    var req = {
      method: 'POST',
      url: '/login',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify($scope.login)
    };
    $http(req).success(function(data){
      if(data.common_down.login_reply.state.is_success == true) {
        alert('login successfully');
      }
      alert('login successfully');
    }).error(function(data, status){
      console.log('error info:' + status);
    })
  }

}