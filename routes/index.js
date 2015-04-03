var express = require('express');
var http = require('http');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '华东师范大学自主招生' });
});

router.post('/login', function(req, res) {
  var reqBody = req.body;
  var postData = {
    account: reqBody.account,
    password: reqBody.password
  };
  // use fake data to test against real backend
  var options = {
    url: 'http://enrollsystem.sinaapp.com/controller.php',
    headers: {'content-type' : 'application/json'},
    method: 'POST',
    json: {
      "common_up": {
        "login": {
          "role": "student",
          "account": postData.account,
          "password": postData.password
        }
      }
    }
  };

  function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
      console.log('data from real backend :'+ data);
      res.send(data);
    }
  }

  request(options, callback);
});

router.post('/register', function(req, res) {
  var reqBody = req.body;
  var postData = {
    name: reqBody.name,
    sex: reqBody.sex,
    phone_number: reqBody.phone_number,
    email: reqBody.email,
    province: reqBody.province,
    national_identify_id: reqBody.national_identify_id,
    school: reqBody.school,
    password: reqBody.password
  };
  var options = {
    url: 'http://enrollsystem.sinaapp.com/controller.php',
    headers: {'content-type' : 'application/json'},
    method: 'POST',
    json: {
      "student_up": {
        "set_student_register": {
          "name": postData.name,
          "sex": postData.sex,
          "phone_number": postData.phone_number,
          "email": postData.email,
          "province": postData.province,
          "national_identify_id": postData.national_identify_id,
          "school": postData.school,
          "password": postData.password
        }
      }
    }
  };

  function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
      console.log('data from real backend :'+ data);
      res.send(data);
    }
  }

  request(options, callback);
});
//添加／修改考试信息  添加：传过来的id是否为空。修改：id不为空
router.post('/admin/set_manager_exam_info', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "name": "考试类型1",
        "start_register_time":"2015-01-01 00:00",
        "end_register_time":"2015-03-01 00:00",
        "can_register":false,
        "can_login":false,
        "can_download_addmission":true,
        "can_query_score":true,
        "can_query_exam_room":true
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_manager_exam_info": {
                    "role": "manager",
                    "name":postData.name,
                    "start_register_time":postData.start_register_time,
                    "end_register_time":postData.end_register_time,
                    "can_register":postData.can_register,
                    "can_login":postData.can_login,
                    "can_download_addmission":postData.can_download_addmission,
                    "can_query_score":postData.can_query_score,
                    "can_query_exam_room":postData.can_query_exam_roomxx
                }
            }
        }
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    }

    request(options, callback);
});
module.exports = router;
