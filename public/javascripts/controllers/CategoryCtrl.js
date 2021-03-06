/**
 * Created by Cami on 15/4/2.
 */
'use strict'
function CategoryTableCtrl($scope, $http) {
    $scope.today = function() {
        $scope.dt = new Date().toDateString();
    };
    $scope.today();
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
    $scope.format = 'yyyy/MM/dd';

    var req = {
        method: 'GET',
        url: '/admin/get_all_exam',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };
    $http(req).success(function(data){
        if(data) {

             for (var i  in data)
             {
             if( data[i]["can_register"]== 1  ){ data[i]["can_register"] = "icon-ok";}else{ data[i]["can_register"] = "icon-remove";}
             if( data[i]["can_query_exam_room"] == 1  ){ data[i]["can_query_exam_room"] = "icon-ok";}else{data[i]["can_query_exam_room"] = "icon-remove";}
             if( data[i]["can_query_score"] ==1 ){ data[i]["can_query_score"] = "icon-ok";}else{data[i]["can_query_score"] = "icon-remove";}
             if( data[i]["can_download_addmission"] == 1     ){  data[i]["can_download_addmission"] = "icon-ok";}else{ data[i]["can_download_addmission"] = "icon-remove";}
             }
            $scope.categories = data;

            // $scope.can_download_addmission.checked = data.can_download_addmission;
        }else{
            alert('获取考试类型失败');
        }
    }).error(function(data, status){
        //console.log('error info:' + status);
    });

    $scope.createCategory = function() {
        $scope.category = {

        };
        var postData = {
            name: $scope.submit.name,
            start_register_time: $scope.submit.startTime,
            end_register_time: $scope.submit.endTime,
            can_register: $scope.submit.register,
            can_download_addmission: $scope.submit.download,
            can_query_score: $scope.submit.queryScore,
            can_query_exam_room: $scope.submit.queryRoom
        };
        $scope.category = postData;
        var req = {
            method: 'POST',
            url: '/admin/set_manager_exam_info',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(postData)
        };
        $http(req).success(function(data){
            if( $scope.category["can_register"]== 1  ){ $scope.category["can_register"] = "icon-ok";}else{ $scope.category["can_register"] = "icon-remove";}
            if( $scope.category["can_query_exam_room"] == 1  ){ $scope.category["can_query_exam_room"] = "icon-ok";}else{$scope.category["can_query_exam_room"] = "icon-remove";}
            if( $scope.category["can_query_score"] ==1 ){ $scope.category["can_query_score"] = "icon-ok";}else{$scope.category["can_query_score"] = "icon-remove";}
            if( $scope.category["can_download_addmission"] == 1     ){  $scope.category["can_download_addmission"] = "icon-ok";}else{ $scope.category["can_download_addmission"] = "icon-remove";}

            if(data) {
                alert('创建成功');
                $scope.categories.push($scope.category);
            }else{
                $scope.categories.push($scope.category);
            }
        }).error(function(data, status){
            console.log('error info:' + status);
            $scope.categories.push($scope.category);
        })
    }
    var req = {
        method: 'POST',
        url: '/admin/get_system_config',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };

    $scope.deleteCategory = function(id) {

        var postData = {
            id: id

        };
        console.log(postData);

        $scope.id = postData["id"];
        var req = {
            method: 'POST',
            url: '/admin/delete_category',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(postData)
        };
        $http(req).success(function(data){
            if(data) {
                for(var i=0; i<$scope.categories.length; i++){
                    if($scope.categories[i]["id"] == $scope.id){
                        console.log($scope.categories[i])
                        $scope.categories.splice(i,1);
                    }
                }
            }else{
                for(var i=0; i<$scope.categories.length; i++){
                    if($scope.categories[i]["id"] == $scope.id){
                        console.log($scope.categories[i])
                        $scope.categories.splice(i,1);
                    }
                }
            }
        }).error(function(data, status){
            console.log('error info:' + status);
            //$scope.categories.push($scope.category);
        })
    }
    var req = {
        method: 'POST',
        url: '/admin/get_system_config',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };

    $scope.submitCategory = function() {
        $scope.category = {

        };

            var postData = {
            name: $scope.submit.name,
            start_register_time: $scope.submit.startTime.toString(),
            end_register_time: $scope.submit.endTime.toString(),
            can_register: $scope.submit.register.toString(),
            can_download_addmission: $scope.submit.download.toString(),
            can_query_score: $scope.submit.queryScore.toString(),
            can_query_exam_room: $scope.submit.queryRoom.toString()
        }
        var req = {
            method: 'POST',
            url: '/admin/set_exam_category',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(postData)
        };
        $http(req).success(function(data){
            if(data) {
                alert('创建成功');
                $scope.categories.push($scope.category);
            }else{
                $scope.categories.push($scope.category);
            }
        }).error(function(data, status){
            console.log('error info:' + status);
            $scope.categories.push($scope.category);
        })
    };

}

