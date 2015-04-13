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
            console.log(data);
            $scope.categories = data;
        }else{
            alert('获取考试类型失败');
        }
    }).error(function(data, status){
        console.log('error info:' + status);
    });

    $scope.submitCategory = function() {
        $scope.category = {
            name: encodeURI($scope.submit.name),
            start_register_time: '2015-04-04 00:00',
            end_register_time: '2015-05-04 00:00',
            can_register: false,
            can_login: false,
            can_download_addmission: true,
            can_query_score: true,
            can_query_exam_room: true
        };
        var postData = {
            category: $scope.category
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
            }else{
                alert('创建失败');
            }
        }).error(function(data, status){
            console.log('error info:' + status);
        })
    }
    $scope.createCategory = function() {
        $scope.categories.push($scope.category);
        var req = {
            method: 'POST',
            url: '/admin/set_manager_exam_info',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.category)
        };
        $http(req).success(function(data){
            if(data) {
                console.log(data);
            }else{
                alert('创建失败');
            }
        }).error(function(data, status){
            console.log('error info:' + status);
        })
    };
}

