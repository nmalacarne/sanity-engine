var expect = require('expect.js');
var path   = require('path');

var Actor = require(path.join(process.cwd(), 'lib/actor'));
var Pool = require(path.join(process.cwd(), 'lib/pool'));

describe('Actor', function() {
  it('should initialize with default values', function() {
    var a = new Actor();

    expect(a._pools).to.eql({});
    expect(a._skills).to.eql({});
  });

  describe('#create()', function() {
    it('should construct default Actor from blank object', function() {
      var a = Actor.create({});

      expect(a._pools).to.eql({});
      expect(a._skills).to.eql({});
    });

    it('should construct an Actor with default Pool when given no Pool data', function() {
      var a = Actor.create({
        _pools: {
          test: {}
        }
      });

      expect(a._pools.test._min).to.be(0)
      expect(a._pools.test._max).to.be(100)
      expect(a._pools.test._val).to.be(100)
    });

    it('should construct an Actor with defined Pool data', function() {
      var a = Actor.create({
        _pools: {
          test: {_min: 10, _max: 20, _val: 15}
        }
      });

      expect(a._pools.test._min).to.be(10);
      expect(a._pools.test._max).to.be(20);
      expect(a._pools.test._val).to.be(15);
    });
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
