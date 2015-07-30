var server  = require('http').createServer();
var io      = require('socket.io')(server);

var connections = {};

io.on('connection', function(socket) {
  socket.emit('connected');

  connections[socket.id] = socket;

  socket.on('disconnect', function() {
    delete connections[socket.id];
  });
});

server.listen(3000);
