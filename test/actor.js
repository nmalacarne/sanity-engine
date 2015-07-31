var expect = require('expect.js');
var path   = require('path');

var Actor = require(path.join(process.cwd(), 'lib/actor'));
var Pool = require(path.join(process.cwd(), 'lib/pool'));

describe('Actor', function() {
  it('should initialize with default values', function() {
    var a = new Actor();

    expect(a._pools).to.eql({});
  });

  describe('#addPool()', function() {
    it('should add a Pool with specified key', function() {
      var a = new Actor();
      var p = new Pool();

      a.addPool('test', p);

      expect(a._pools.test).to.eql(p);
    });
  });
});
