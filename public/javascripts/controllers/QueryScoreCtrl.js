/**
 * Created by GreyInk on 2015/4/29.
 */
function QueryScoreCtrl($scope, $http) {

    var req = {
        method: 'POST',
        url: '/admin/get_exam_score',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };
    $http(req).success(function(data){
        if(data) {

            console.log(data);
            /*
            for (var i  in data)
            {
                if( data[i]["sex"] == 1  ){ data[i]["sex"] = "男";}else{ data[i]["sex"] = "女";}
                if( data[i]["verify"] == 1  ){ data[i]["verify"] = "已审核";
                    data[i]["disabled"] = "'disabled': disabled"}else{ data[i]["verify"] = "未审核";}


            }*/
            $scope.score = data;
        }else{
            alert('获取考试类型失败');
        }
    }).error(function(data, status){
        //console.log('error info:' + status);
    });

    $scope.setVerify = function(id) {

        var postData = {
            id: id

        };
        console.log(postData);

        $scope.id = postData["id"];
        var req = {
            method: 'POST',
            url: '/admin/set_student_verify',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(postData)
        };
        $http(req).success(function(data){
            if(data) {
                console.log($scope.info)
                for (var i  in $scope.info)
                {
                    if( $scope.info[i]["id"] == id  ){ $scope.info[i]["verify"] = "已审核";
                        $scope.info[i]["disabled"] = "'disabled': disabled"}

                }

            }else{

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



}