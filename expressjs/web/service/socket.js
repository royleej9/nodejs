const pathInfo = require("../pathInfo"),
  sample = require(pathInfo.service('sample'));

module.exports = function (server) {
  var io = require('socket.io')(server);
  io.on('connection', function (socket) {
    console.log('connection');

    socket.on('getDatas', function (data) {
      sample.getData().then(function (res) {
        socket.emit('fromServer', { type: 'chart', data: res });
      }).catch(function (err) {
      });
    });

  });
};