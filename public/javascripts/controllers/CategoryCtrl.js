/**
 * Created by Cami on 15/4/2.
 */
'use strict'
function DatepickerCtrl($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
}