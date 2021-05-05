// - 제일 먼저 실행되어야함
// .env
// require('dotenv').config();
// module alias 설정
require('../aliases').setupModuleAlias();
//--------------------------------------------------------------------------------

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var indexRouter = require('@routes/index');
var usersRouter = require('@routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '_views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '_public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// const winston = require('winston');
// console.log(winston.config.syslog.levels);

const logger = require('@utils/logger');
logger.error('error!!!');
logger.warn('warn!!!');
logger.info('info!!!');
logger.http('http!!');
logger.debug('debug!!');
// console.log(logger);
