var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var ObjectID = require('mongodb').ObjectID;

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/mission';
var _db;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

MongoClient.connect(mongoUrl, function (err, db) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('connected to mongo');
  _db = db;
  app.listen(8888, function () {
    console.log('server is running...');
  });
});

app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.post('/authenticate', function(req, res, next){
  var msg = {
    "result": true,
    "statusCode": 200,
    "message": {
      "projects": "Public_Repository,p_tom,hbasetest",
      "roles": "leapid.admin",
      "userName": "leapadmin",
      "hive.encrypt": false
    }
  } 
  res.json(msg);
});


app.get('/lang', function(req, res, next){
  var msg = {
    "result": true,
    "statusCode": 200,
    "message": {
      "lang": "zh",
      "timestamp": 1561355557392,
      "empty": false
    }
  } 
  res.json(msg);
});


app.get('/appEntry', function(req, res, next){
  var msg = {
    "result": true,
    "statusCode": 200,
    "message": {
      "mdataEntry": "http://demo211.test.com:8110/index.html",
      "leapidEntry": "http://demo212.test.com:8089/leapid-admin/view/pm/index.html",
      "procEntry": "http://demo214.test.com:9999/TaskSchedule/",
      "sqlEntry": "https://leapsql.211.test.com",
      "dhubEntry": "http://demo214.test.com:4018/"
    }
  } 
  res.json(msg);
});


app.get('/excelMetadataInfo/import', function(req, res, next){
  var msg = {
    "message": "Ok.",
    "result": true,
    "statusCode": 200
  } 
  res.json(msg);
});


app.get('/dataset/getTopFavoriteDataset', function(req, res, next){
  var msg = {
    "result": true,
    "statusCode": 200,
    "message": [
      {
        "path": "mysql/test_mysql/metadata/wh_etl_job_execution",
        "name": "wh_etl_job_execution",
        "id": 4581635,
        "totalCount": 1
      }
    ]
  }
  res.json(msg);
});



app.get('/space/init', function(req, res, next){
  var msg = {
    "result": true,
    "statusCode": 200,
    "message": {
      "roleLevel": 1,
      "projectList": [
        {
          "id": 58,
          "name": "DKYmBmmU",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 46,
          "name": "Public_Repository",
          "manager": null,
          "creator": "",
          "idSet": null,
          "type": null
        },
        {
          "id": 55,
          "name": "YGkJgsjD",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 63,
          "name": "cd",
          "manager": "rptest",
          "creator": "rptest",
          "idSet": null,
          "type": null
        },
        {
          "id": 53,
          "name": "datahub-pro2",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 54,
          "name": "datahub-项目三",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 52,
          "name": "datahub_pro1",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 62,
          "name": "dsd",
          "manager": null,
          "creator": "rptest",
          "idSet": null,
          "type": null
        },
        {
          "id": 61,
          "name": "hbasedemo",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 60,
          "name": "hbasetest",
          "manager": "xm1",
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 47,
          "name": "leapsql",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 50,
          "name": "p1",
          "manager": "xm1",
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 51,
          "name": "p2",
          "manager": "xm2",
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 56,
          "name": "p_tom",
          "manager": "leapadmin",
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 49,
          "name": "pjOgtBVb",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 59,
          "name": "sAkcrwHI",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 48,
          "name": "super",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        },
        {
          "id": 57,
          "name": "tamcGIZJ",
          "manager": null,
          "creator": "leapadmin",
          "idSet": null,
          "type": null
        }
      ]
    }
  } 
  res.json(msg);
});



app.get('/dataset/getTopDatasetCommonInfo', function(req, res, next){
  var msg = {
    "result": true,
    "statusCode": 200,
    "message": [
      {
        "name": "job05",
        "path": "hive/LEAP-Hive/datahub02/job05",
        "id": 4579325,
        "databaseName": "datahub02",
        "datasourceName": "LEAP-Hive",
        "rate": 100
      },
      {
        "name": "zp3log_orl",
        "path": "hive/LEAP-Hive/default/zp3log_orl",
        "id": 4579352,
        "databaseName": "default",
        "datasourceName": "LEAP-Hive",
        "rate": 100
      },
      {
        "name": "flow_dag",
        "path": "mysql/test_mysql/metadata/flow_dag",
        "id": 4581562,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "flow_execution",
        "path": "mysql/test_mysql/metadata/flow_execution",
        "id": 4581563,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "flow_execution_bak",
        "path": "mysql/test_mysql/metadata/flow_execution_bak",
        "id": 4581564,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "flow_job",
        "path": "mysql/test_mysql/metadata/flow_job",
        "id": 4581567,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "flow_owner_permission",
        "path": "mysql/test_mysql/metadata/flow_owner_permission",
        "id": 4581568,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "flow_schedule",
        "path": "mysql/test_mysql/metadata/flow_schedule",
        "id": 4581569,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "flow_source_id_map",
        "path": "mysql/test_mysql/metadata/flow_source_id_map",
        "id": 4581570,
        "databaseName": "metadata",
        "datasourceName": "test_mysql",
        "rate": 50
      },
      {
        "name": "job04",
        "path": "hive/LEAP-Hive/datahub02/job04",
        "id": 4579324,
        "databaseName": "datahub02",
        "datasourceName": "LEAP-Hive",
        "rate": 50
      }
    ]
  } 
  res.json(msg);
});


app.get('/time', function(req, res, next) {
  var collection = _db.collection('my_mission');
  var time = 0;
  collection.find({}).toArray(function (err, ret) {
    if(err) {
      console.error(err);
      return;
    }

    ret.forEach(function (item, index) {
      time += +item.totalTime;
    });
    res.json({errcode:0,errmsg:"ok",time:time});
  });
});

app.get('/time-entries', function(req, res, next) {
  var collection = _db.collection('my_mission');
  collection.find({}).toArray(function (err, ret) {
    if(err) {
      console.error(err);
      return;
    }
    res.json(ret);
  });
});

app.post('/create', function(req, res, next) {
  var mission = req.body;
  var collection = _db.collection('my_mission');

  if(!mission.comment || !mission.totalTime || !mission.date) {
    res.send({errcode:-1,errmsg:"params missed"});
    return;
  }

  collection.insert({comment: mission.comment, totalTime: mission.totalTime,date:mission.date}, function (err, ret) {
    if(err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.send({errcode:0,errmsg:"ok"});
    }
  });
});

app.delete('/delete/:id', function (req, res, next) {
  var _id = req.params.id;
  var collection = _db.collection('my_mission');
  console.log(_id)
  collection.remove({_id: new ObjectID(_id)} ,function (err, result) {
    if(err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.send({errcode:0,errmsg:"ok"});
    }
  });
});
