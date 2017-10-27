var express = require('express'),
pathInfo = require("./pathInfo"),
config = require("./config/config"),
sample = require(pathInfo.getServicePath('sample'));

var app = express();
var server = require('http').createServer(app);

// express
require(pathInfo.getConfigPath('express'))(app, config);

// web socket
require(pathInfo.getServicePath('socket'))(server);

//------------------------------------
sample.setupSampleDatas();
sample.getData();
//------------------------------------


server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function () {
var addr = server.address();
});

module.exports = app;