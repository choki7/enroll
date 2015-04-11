/**
 * Created by choki on 15/4/10.
 */
//Admin System Config
'use strict'
function AdminSystemConfigCtrl($scope, $http) {

    $scope.set_system_config = function() {
        var postData = {
            //content : "哈哈哈"
            content : $scope.content
        };
        console.log(JSON.stringify(postData));
        var req = {
            method: 'POST',
            url: '/admin/set_system_config',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(postData)
        };
        $http(req).success(function(data){
            if(data) {
                if(data == 'true'){
                    alert('保存成功')
                }
            }else{
                alert('注册失败');
            }
        }).error(function(data, status){
            //alert('注册成功');
        })
    }
    var req = {
        method: 'POST',
        url: '/admin/get_system_config',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
       // data: JSON.stringify(postData)
    };
    $http(req).success(function(data){
        if(data) {
            $scope.content = data.content;
        }else{
            alert('载入失败，请刷新');
        }
    }).error(function(data, status){
        //alert('注册成功');
    })
}

