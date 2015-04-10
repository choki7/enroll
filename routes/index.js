var express = require('express');
var http = require('http');
var querystring = require('querystring');
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
      console.log('data from real backend :'+ JSON.stringify(data));
      res.send(data);
    }
  }

  request(options, callback);
});

router.post('/register', function(req, res) {
  var reqBody = req.body;
    var name = querystring.encode("张");
  var postData = {
    name: name,
    sex: reqBody.sex,
    phone_number: reqBody.phone_number,
    email: reqBody.email,
    province: reqBody.province,
    national_identify_id: reqBody.national_identify_id,
    school: reqBody.school,
    password: reqBody.password
  };
    console.log(postData);
  var options = {
    url: 'http://enrollsystem.sinaapp.com/controller.php',
    headers: {'content-type' : 'application/json'},
    method: 'POST',
    json: {
      "student_up": {
        "set_student_register": JSON.stringify(postData)
      }
    }
  };

  function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
      console.log('data from real backend :'+ data);
      res.send(data);
    } else{
        console.log(options)
    }
  }
  request(options, callback);
});



//Admin
/**
 * 考试类型设置
 * set_manager_exam_info
 * name,start_register_time,end_register_time,can_register,can_login,can_download_addmission,can_query_score,can_query_exam_room
 *
 * */
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
        "name":"1",
        "exam_id":"2"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_student_type": {
                    "name":postData.name,
                    "exam_id":postData.exam_id
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
router.get('/admin/get_student_type', function(req, res) {

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
/**
 * set_exam_category 考试科目设置
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
 * get_exam_category
 * examId
 * */
router.get('/admin/get_exam_category', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'GET',
        examId:'123'
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };

    request(options, callback);
});
/**
 * set_system_config 系统设置
 * category，exam_id
 *
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
/**
* get_system_config
* */
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

//set_student_exam_room_by_exam examId 分配考场
router.post('/admin/set_system_config', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "examId":"1"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_system_config": {
                    "examId":postData.examId
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
 * get_qulified_student
 * province,verify,national_exam_id,school
 *
 * */
router.get('/admin/get_qulified_student', function(req, res) {

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
});
/**
 * get_student_register_code
 * */
router.get('/admin/get_student_register_code', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'GET',
        exam_id:'123',
        my_id:'100001'
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };

    request(options, callback);
});
/*
* set_exam_exam_place
* 给考试增加考点
* */
router.post('/admin/set_exam_place', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "examId":"1",
        "placeId":"123"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_system_config": {
                    "exam_id":postData.examId,
                    "place_id":postData.placeId
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
* get_exam_place 获得考试相关地点
* exam_id,place_name
* */

router.get('/admin/get_exam_place', function(req, res) {

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
});
/*
 * set_exam_room
 * 给某个考点增加考场 category 是考试科目
  * */
router.post('/admin/set_exam_room', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "exam_category_id":"1",
        "place_id":"123",
        "name":"123"
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_system_config": {
                    "exam_id":postData.examId,
                    "place_id":postData.placeId
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
 * get_exam_room 获得某个考点的考场
 * place_id
 * */

router.get('/admin/get_exam_room', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'GET',
        place_id:'123123'
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };

    request(options, callback);
});

 module.exports = router;
