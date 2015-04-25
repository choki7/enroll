/**
 * Created by choki on 15/4/22.
 */
'use strict'
function GetInfoCtrl($scope, $cookieStore) {
  $scope.logined = true;
  $scope.logout = false;
  $scope.info = {
    name: $cookieStore.get('name'),
    phone_number: $cookieStore.get('phone_number'),
    national_identify_id: $cookieStore.get('national_identify_id'),
    email: $cookieStore.get('email'),
    school: $cookieStore.get('school')
  };
}
