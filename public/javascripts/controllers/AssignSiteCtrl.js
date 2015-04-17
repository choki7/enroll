/**
 * Created by GreyInk on 2015/4/12.
 */
function AssignSiteCtrl($scope, $http){
$scope.set_student_exam_room = function (exam_id) {

    var postData = {
        //content : "哈哈哈"

        exam_id: exam_id

    };
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