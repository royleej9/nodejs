var pathInfo = require("../pathInfo");

module.exports = function (app) {
    app.use('/test/', require('../routes/api/test'));
    app.use('/', require(pathInfo.routes('index')));

    // app.use('/test/', require( pathInfo.api('test')));
    // app.use('/', require(pathInfo.routes('index')));    
    // app.use('/users', users);
};