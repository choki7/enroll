/**
 * Created by Cami on 15/4/2.
 */
'use strict'
function CategoryTableCtrl($scope, $http) {
    $scope.categories = [
        {
            name: '免费师范生',
            start_register_time: '2015-01-01 00:00',
            end_register_time: '2015-03-01 00:00'
        }
    ];
    $scope.category = {
        name: 'test',
        start_register_time: '2015-04-04 00:00',
        end_register_time: '2015-05-04 00:00',
        can_register: false,
        can_login: false,
        can_download_addmission: true,
        can_query_score: true,
        can_query_exam_room: true
    };
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
