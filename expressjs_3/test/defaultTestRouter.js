var express = require('express');
var testRouterApp = express();

testRouterApp.use(express.urlencoded({ extended: false }));

module.exports = testRouterApp;
