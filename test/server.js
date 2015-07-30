var io      = require('socket.io-client');
var expect  = require('expect.js');

describe('Server', function() {
  var socket;

  before(function() {
    socket = io.connect('http://localhost:3000');
  });

  after(function() {
    socket.disconnect();
  });

  it('should connect', function(done) {
    socket.on('connected', function() {
      expect(socket.connected).to.be.ok();
      done();
    });
  });
});
