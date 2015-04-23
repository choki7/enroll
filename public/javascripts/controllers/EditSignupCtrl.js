/**
 * Created by Cami on 15/4/9.
 */
'use strict'
function EditSignupCtrl($scope, $location, $cookieStore) {
  $scope.signUpEdit = {
    registerCode: $cookieStore.get('registerCode'),
    name: $cookieStore.get('name'),
    phone_number: $cookieStore.get('phone_number'),
    email: $cookieStore.get('email'),
    national_identify_id: $cookieStore.get('national_identify_id')
  };
    $scope.signUp = function() {
        $location.path('/signup-successful');
    }
}
