/**
 * Created by GreyInk on 2015/4/12.
 */
function SiteCtrl($scope, $http) {

    $scope.set_exam_place = function () {

        var postData = {
            //content : "哈哈哈"

            exam_id: $scope.exam_id,
            place_name:$scope.place_name

        };
        console.log(JSON.stringify(postData));
        var req = {
            method: 'POST',
            url: '/admin/set_exam_place',
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
    var req = {
        method: 'POST',
        url: '/admin/get_all_exam',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
        // data: JSON.stringify(postData)
    };
    $http(req).success(function (data) {
        if (data) {
            console.log(123);
            $scope.content = data.content;
        } else {
            alert('载入失败，请刷新');
        }
    }).error(function (data, status) {
        //alert('注册成功');
    })

    

}