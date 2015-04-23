/**
 * Created by Cami on 15/4/16.
 */
function RegCtrl($scope) {
    $scope.createReg = function() {
        $scope.info = {
            "exam_id":$scope.exam_id,
            "national_exam_id":$scope.national_exam_id,
            "other":$scope.other
        }
        var req = {
            method: 'POST',
            url: '/set_student_exam',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.info)
        };
        $http(req).success(function(data){
            if(data){
                $location.path('/profile');
            }else{
                $location.path('/profile');
            }
        }).error(function(data, status){
            $location.path('/profile');

        })
    };
}