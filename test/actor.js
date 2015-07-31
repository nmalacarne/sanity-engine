var expect = require('expect.js');
var path   = require('path');

var Actor = require(path.join(process.cwd(), 'lib/actor'));
var Pool = require(path.join(process.cwd(), 'lib/pool'));

describe('Actor', function() {
  it('should initialize with default values', function() {
    var a = new Actor();

    expect(a._pools).to.eql({});
  });

  describe('#create()', function() {
    it('should construct default Actor from blank object', function() {
      var obj = {};
      var a = Actor.create(obj);

      expect(a._pools).to.eql({});
    });

    it('should construct an Actor with default Pool when given no Pool data', function() {
      var obj = {_pools: {test: {}}};
      var a = Actor.create(obj);

      expect(a._pools.test).to.eql({_min: 0, _max: 100, _val: 100});
    });

    it('should construct an Actor with defined Pool data', function() {
      var data = {_min: 10, _max: 20, _val: 15};
      var obj = {_pools: {test: data}};
      var a = Actor.create(obj);

      expect(a._pools.test).to.eql(data);
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
