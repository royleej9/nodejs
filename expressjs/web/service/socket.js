const pathInfo = require("../pathInfo"),
  sample = require(pathInfo.getServicePath('sample'));

module.exports = function (server) {
  var io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('connection');

    socket.on('getDatas', (data) => {
      sample.getData().then((res) => {
        socket.emit('fromServer', { type: 'chart', data: res });
      }).catch((err) => {
      });
    });

  });
};