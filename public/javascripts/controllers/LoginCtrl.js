/**
 * Created by Cami on 15/3/25.
 */
'use strict'
function LoginCtrl($scope, $http, $location, $cookieStore) {
    $scope.signIn = function() {
        $scope.login = {
            account: $scope.account,
            password: $scope.password
        };
        var req = {
            method: 'POST',
            url: '/login',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify($scope.login)
        };
        $http(req).success(function(data){
            //{"common_down":{"login_reply":{"role":"student","state":{"is_success":true},"user_info":{"id":"5","name":"test","school":"asdfjkl","sex":"0","account":"1@1.com","password":"1","national_identify_id":"1234567890-","phone_number":"12345678","email":"1@1.com","province":"sdfghjkl"}}}}
            if(data){
              $cookieStore.put('stuId', data.common_down.login_reply.user_info.id);
              $cookieStore.put('my_id', data.common_down.login_reply.user_info.id);
              $cookieStore.put('name', data.common_down.login_reply.user_info.name);
              $cookieStore.put('school', data.common_down.login_reply.user_info.school);
              $cookieStore.put('email', data.common_down.login_reply.user_info.email);
              $cookieStore.put('sex', data.common_down.login_reply.user_info.sex);
              $cookieStore.put('province', data.common_down.login_reply.user_info.province);
              $cookieStore.put('national_identify_id', data.common_down.login_reply.user_info.national_identify_id);
              $cookieStore.put('phone_number', data.common_down.login_reply.user_info.phone_number);

              $scope.$parent.logined = false;
              $scope.$parent.logout = true;
              $location.path('/profile');
            }else{

            }
        }).error(function(data, status){

        })
    };
}