var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pathInfo = require("../pathInfo");

module.exports = function (app, config) {

    // view engine setup
    app.set('views', pathInfo.views(''));
    app.set('view engine', 'ejs');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));
    console.log(path.join(__dirname, '../public'));

    // route
    require('./route')(app);

    // default handler    
    require('./defaultHandler')(app);
};


// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');

// db.serialize(function() {

//   db.run('CREATE TABLE lorem (info TEXT)');
//   var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

//   for (var i = 0; i < 10; i++) {
//     stmt.run('Ipsum ' + i);
//   }

//   stmt.finalize();

//   db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
//     console.log(row.id + ': ' + row.info);
//   });
// });
// db.close();