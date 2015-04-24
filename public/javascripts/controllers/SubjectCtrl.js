/**
 * Created by GreyInk on 2015/4/11.
 */
function SubjectCtrl($scope, $http) {

    var req = {
        method: 'POST',
        url: '/admin/get_all_catagory',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
        // data: JSON.stringify(postData)
    };
    $http(req).success(function (data) {
        if (data) {
            // console.log(123);
            $scope.subjects = data;
        } else {
            alert('载入失败，请刷新');
        }
    }).error(function (data, status) {
        //alert('注册成功');
    });
    $scope.set_exam_category = function () {

        var postData = {
            //content : "哈哈哈"

            exam_id: $scope.exam_id,
            category: $scope.category

        };
        console.log(JSON.stringify(postData));
        var req = {
            method: 'POST',
            url: '/admin/set_exam_category',
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
        });


    }
}