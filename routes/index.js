var express = require('express');
var http = require('http');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '华东师范大学自主招生' });
});
router.get('/admin', function(req, res) {
    res.render('admin');
});

router.get('/admin', function(req, res) {
  res.render('admin');
});

router.get('/admin/get_system_config', function(req, res) {
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'GET'
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };
    request(options, callback);
})
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
router.post('/admin/set_manager_exam_info', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "name": "test1111",
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
/*
 * 小类设置
 * set_student_type
 * name exam_id
 * */
router.post('/admin/set_student_type', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "name":"123"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_student_type": {
                    "name":postData.name
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

/**
 * get_student_type
 * id,name
 * */

/**
 * set_exam_category
 * category
 * exam_id
 * */
router.post('/admin/set_exam_category', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "exam_id":"1",
        "category":"English"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_exam_category": {
                    "exam_id":postData.exam_id,
                    "category":postData.category
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

/**
 * set_system_config
 * category
 * exam_id
 * */
router.post('/admin/set_system_config', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "can_register":"1",
        "can_login":"English",
        "content":"高考号填写须知"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_system_config": {
                    "can_register":postData.can_register,
                    "can_login":postData.can_login,
                    "content":postData.content
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
