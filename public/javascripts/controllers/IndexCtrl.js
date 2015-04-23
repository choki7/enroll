/**
 * Created by Cami on 15/4/9.
 */
'use strict'
angular.module('myApp').controller('IndexCtrl', ['$scope', function($scope) {
  $scope.logined = true;
  $scope.logout = false;

  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120714-_MG_3252.jpg'
    },
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120722-_MG_3521.jpg'
    },
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120722-_MG_3528.jpg'
    },
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120714-_MG_3380.jpg'
    }
  ];
}]);
function IndexCtrl($scope) {
  $scope.logined = true;
  $scope.logout = false;

  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120714-_MG_3252.jpg'
    },
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120722-_MG_3521.jpg'
    },
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120722-_MG_3528.jpg'
    },
    {
      image: 'http://www.zsb.ecnu.edu.cn/uploads/Images/20120714-_MG_3380.jpg'
    }
  ];
}

