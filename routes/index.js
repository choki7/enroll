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
    }else {
      console.log(error);
    }
  }

  request(options, callback);
});

router.post('/register', function(req, res) {
    var reqBody = req.body;
    var postData = {
        name: encodeURI(reqBody.name),
        sex: reqBody.sex,
        phone_number: reqBody.phone_number,
        email: reqBody.email,
        province: encodeURI(reqBody.province),
        national_identify_id: reqBody.national_identify_id,
        school: encodeURI(reqBody.school),
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

//Admin
/**
 * 获取所有考试类型
 * */
router.get('/admin/get_all_exam', function(req, res) {
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        header: {'content-type': 'application/json'},
        method: 'POST',
        json: {
          common_up: {get_all_exam:{}}
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
router.get('/get_all_exam', function(req, res) {
  var options = {
    url: 'http://enrollsystem.sinaapp.com/controller.php',
    header: {'content-type': 'application/json'},
    method: 'POST',
    json: {
      student_up: {get_all_exam:{}}
    }
  };
  function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
      console.log('data from real backend :'+ data);
      res.send(data);
    }
  }

  request(options, callback);
})
/**
 * get_exam_small
 */
router.post('/admin/get_exam_small', function(req, res) {
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        header: {'content-type': 'application/json'},
        method: 'POST',
        json: {
            student_up: {get_exam_small:{}}
        }
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    }

    request(options, callback);
})
/**
 * get_all_catagory
 */
router.post('/admin/get_all_catagory', function(req, res) {
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        header: {'content-type': 'application/json'},
        method: 'POST',
        json: {
            student_up: {get_all_catagory:{}}
        }
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    }

    request(options, callback);
})
//Admin
/**
 * 获取所有考试类型
 * */
router.post('/admin/delete_category', function(req, res) {
    var reqBody = req.body;
    console.log("req body"+ reqBody);
    var postData = {
        id: reqBody.id
    };
    console.log("post data"+JSON.stringify(postData));
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "delete_category": {
                    "id":postData.id
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
 * 考试类型设置
 * set_manager_exam_info
 * name,start_register_time,end_register_time,can_register,can_login,can_download_addmission,can_query_score,can_query_exam_room
 *
 * */
router.post('/admin/set_manager_exam_info', function(req, res) {
    var reqBody = req.body;
    console.log("req body"+ reqBody);
    var postData = {
        name: encodeURI(reqBody.name),
        start_register_time: reqBody.start_register_time,
        end_register_time: reqBody.end_register_time,
        can_register: reqBody.can_register,
        can_download_addmissio: reqBody.can_download_addmissio,
        can_query_score: reqBody.can_query_score,
        can_query_exam_room: reqBody.can_query_exam_room
    };
    console.log("post data"+JSON.stringify(postData));
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
                    "can_download_addmission":postData.can_download_addmission,
                    "can_query_score":postData.can_query_score,
                    "can_query_exam_room":postData.can_query_exam_room
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
 * 小类设置
 * set_exam_small
 * name,start_register_time,end_register_time,can_register,can_login,can_download_addmission,can_query_score,can_query_exam_room
 *
 * */
router.post('/admin/set_exam_small', function(req, res) {
    var reqBody = req.body;
    console.log("req body"+ reqBody);
    var postData = {
        name: encodeURI(reqBody.name),
        big_id:reqBody.big_id
    };
    console.log("post data"+JSON.stringify(postData));
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_exam_small": {
                    "name":postData.name,
                    "big_id":postData.big_id

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
        "category": reqBody.category
    };
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_exam_category": {
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
        "content":reqBody.content
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
router.post('/admin/get_system_config', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'POST',
        json: {
            "manager_up": {
                "get_system_config": {
                }
            }
        }
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
router.post('/admin/set_student_exam_room_by_exam', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "exam_id":reqBody.exam_id
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_student_exam_room_by_exam": {
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
/**
 * get_all_exam
 * */
router.post('/admin/get_all_exam', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'POST',
        json: {
            "common_up": {
                "get_all_exam": {
                }
            }
        }
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
* set_exam_exam_place
* 给考试增加考点
* */
router.post('/admin/set_exam_place', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "exam_id":reqBody.exam_id,
        "place_name":reqBody.place_name
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_exam_place": {
                    "exam_id":postData.exam_id,
                    "place_name":postData.place_name
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
* get_exam_place 获得考试相关地点
* exam_id,place_name
* */

router.get('/admin/get_exam_place', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        method: 'GET',
        json:{
            "manager_up": {
                "get_exam_place": {
                    "exam_id":123
                }
            }
        }
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
 * set_exam_room
 * 给某个考点增加考场 category 是考试科目
  * */
router.post('/admin/set_exam_room', function(req, res) {
    var reqBody = req.body;

    var postData = {
        "place_id":reqBody.place_id,
        "name":reqBody.name,
        "exam_category_id":reqBody.exam_category_id
    };

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "manager_up": {
                "set_exam_room": {
                    "name":postData.name,
                    "place_id":postData.place_id,
                    "exam_category_id":postData.exam_category_id
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
 * get_exam_room 获得某个考点的考场
 * place_id
 * */

router.post('/admin/get_exam_room', function(req, res) {

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

/**
 * set_password_modify 重设密码
 * old_password，new_password，my_id
 */
router.post('/set_password_modify', function(req, res) {

    var reqBody = req.body;
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "student_up": {
                "set_password_modify": {
                    "old_password":reqBody.old_password,
                    "new_password":reqBody.new_password
                }
            },"my_id":reqBody.my_id
        }
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
            console.log(options)
        }
    }

    request(options, callback);
});

/**
 * get_exam_room 获得某个考点的考场
 * place_id
 * */

router.get('/get_student_exam', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'GET',
        json: {
            "student_up": {
                "get_student_exam": {
                }
            },"my_id":1
        }
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
 *  set_student_exam
 *
 * */
router.post('/set_student_exam',function(req,res){
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: {
            "student_up": {
                "set_student_exam": {
                    "exam_id":req.body.exam_id
                }
            },
            "my_id": req.body.my_id
        }
    };
    console.log(options);
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };

    request(options, callback);
});
/**
 * set_student_place
 **/
router.get('/set_student_place',function(req,res){
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'GET',
        json: {
            "student_up": {
                "set_student_place": {
                    "exam_id":req.exam_id
                }
            },"my_id":req.my_id
        }
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
 *  get_student_exam_info
 *  //"{\"student_up\":{\"get_student_exam_info\":{\"exam_id\":\"1\"}},\"my_id\":1}"
 * */
router.post('/get_student_exam_info', function(req, res) {

    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'GET',
        json: {
            "student_up": {
                "get_student_exam_info": {
                    "exam_id": req.body.exam_id
                        //req.body.exam_id
                }
            },"my_id":1
        }
    };
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };

    request(options, callback);
});
router.post('/verify_account', function(req, res) {
  var options = {
    url: 'http://enrollsystem.sinaapp.com/controller.php',
    headers: {'content-type' : 'application/json'},
    method: 'GET',
    json: {
      "student_up": {
        "get_verify_register_code": req.body.stu_account
      }
    }
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
 * get_exam_score
 **/
router.post('/get_exam_score',function(req,res){
    var options = {
        url: 'http://enrollsystem.sinaapp.com/controller.php',
        headers: {'content-type' : 'application/json'},
        method: 'GET',
        json: {
            "student_up": {
                "get_exam_score": {
                    "exam_id":req.exam_id
                }
            },"my_id":req.my_id
        }
    };
    console.log(options.json.my_id);
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('data from real backend :'+ data);
            res.send(data);
        }
    };

    request(options, callback);
});
 module.exports = router;
