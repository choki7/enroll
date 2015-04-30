/**
 * Created by GreyInk on 2015/4/12.
 */
function AssignSiteCtrl($scope, $http){
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

    $scope.set_student_exam_room = function (exam_id) {

        var postData = {
            //content : "哈哈哈"

            exam_id: exam_id

        };$scope.scores
        //console.log(JSON.stringify(postData));
        var req = {
            method: 'POST',
            url: '/admin/set_student_exam_room_by_exam',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(postData)
        };
        $http(req).success(function (data) {
            if (data) {
                if (data == 'true') {
                    alert('保存成功')
                }
            } else {
                alert('注册失败');
            }
        }).error(function (data, status) {
            //alert('注册成功');
        })
    }



}