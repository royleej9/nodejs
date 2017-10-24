var express = require('express'),
  pathInfo = require("./pathInfo"),
  config = require("./config/config"),
  sample = require(pathInfo.service('sample'));

var app = express();
var server = require('http').createServer(app);

// express
require(pathInfo.config('express'))(app, config);

// web socket
require(pathInfo.service('socket'))(server);

//------------------------------------
sample.setupSampleDatas();
sample.getData();
//------------------------------------



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  var addr = server.address();
});


module.exports = app;
