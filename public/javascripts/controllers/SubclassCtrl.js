/**
 * Created by Cami on 15/4/16.
 */
'use strict'
function SubclassCtrl($scope, $http) {
  var req = {
    method: 'POST',
    url: '/admin/get_exam_small',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  };
  $http(req).success(function(data){
    if(data) {

      $scope.len1 = 0;
      $scope.len2 = 0;
      $scope.len3 = 0;
      $scope.len4 = 0;
      console.log(data);
      $scope.subclass1 = [];
      $scope.subclass2 = [];
      $scope.subclass3 = [];
      $scope.subclass4 = [];

      for (var i  in data)
      {
        if(data[i].big_id == 1){$scope.subclass1.push(data[i]);$scope.len1++;}
        if(data[i].big_id == 2){$scope.subclass2.push(data[i]);$scope.len2++;}
        if(data[i].big_id == 3){$scope.subclass3.push(data[i]);$scope.len3++;}
        if(data[i].big_id == 4){$scope.subclass4.push(data[i]);$scope.len4++;}
      }

      var da = {
        name: "无"
      }


      if($scope.len1 == 0){$scope.len1 = 1;$scope.subclass1.push(da);}
      if($scope.len2 == 0){$scope.len2 = 1;$scope.subclass2.push(da);}
      if($scope.len3 == 0){$scope.len3 = 1;$scope.subclass3.push(da);}
      if($scope.len4 == 0){$scope.len4 = 1;$scope.subclass4.push(da);}


       // $scope.can_download_addmission.checked = data.can_download_addmission;
    }else{
      alert('获取考试类型失败');
    }
  }).error(function(data, status){
    //console.log('error info:' + status);
  });


  $scope.createSubclass = function() {
    $scope.subclass = {

    };
    var postData = {
      name: $scope.submit.name,
      big_id: $scope.submit.big_id
    };

    var req = {
      method: 'POST',
      url: '/admin/set_exam_small',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify(postData)

    };

    $http(req).success(function(data){

      if(data) {
        alert('创建成功');
        //$scope.categories.push($scope.category);
        if(data.big_id == 1){$scope.subclass1.push(data);$scope.len1++;}
        if(data.big_id == 2){$scope.subclass2.push(data);$scope.len2++;}
        if(data.big_id == 3){$scope.subclass3.push(data);$scope.len3++;}
        if(data.big_id == 4){$scope.subclass4.push(data );$scope.len4++;}
      }else{
       // $scope.categories.push($scope.category);
      }
    }).error(function(data, status){
      console.log('error info:' + status);
     // $scope.categories.push($scope.category);
    })
  }
  var req = {
    method: 'POST',
    url: '/admin/set_exam_small',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  };
/*
  $scope.subclass = [];
  $scope.createSubclass = function() {
    $scope.postData = {
      category: $scope.category,
      subject: $scope.subject
    };
    var req = {
      method: 'POST',
      url: '/admin/set_exam_category',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify($scope.postData)
    };
    $http(req).success(function(data){
      if(data) {
        alert('创建成功');
        $scope.subclass.push($scope.postData);
      }else{
        $scope.subclass.push($scope.postData);
      }
    }).error(function(data, status){
      console.log('error info:' + status);
      $scope.subclass.push($scope.category);
    })
  }
  */
}