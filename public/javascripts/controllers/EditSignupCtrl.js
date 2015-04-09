/**
 * Created by Cami on 15/4/9.
 */
'use strict'
function EditSignupCtrl($scope, $location) {
    $scope.signUp = function() {
        $location.path('/signup-successful');
    }
}
