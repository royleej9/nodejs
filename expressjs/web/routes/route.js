var path = require('path');
var pathInfo = require(path.join(process.cwd(), 'pathInfo'));

module.exports = function (app) {
    // app.use('/test/', require('../routes/api/test'));
    app.use('/', require(pathInfo.getRoutesPath('index')));

    // app.use('/test/', require( pathInfo.api('test')));
    // app.use('/', require(pathInfo.routes('index')));    
    // app.use('/users', users);
};