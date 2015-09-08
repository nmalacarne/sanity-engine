var expect  = require('expect.js');

var skill = require(process.cwd()).skill;
var pool  = require(process.cwd()).pool;

describe('skill', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      var s = skill();

      expect(s.name).to.be('[none]');
      expect(s.pools).to.eql({});
      expect(s.effects).to.eql({});
    });

    it('should initialize with specified name', function () {
      var s = skill({name: 'Testing'});

      expect(s.name).to.be('Testing');
    });

    it('should initialize with specified Pool', function () {
      var s = skill({
        pools: {
          test: pool()
        }
      });

      expect(s.pools.test).to.eql(pool());
    });

    it('should initialize with specified Effect', function () {
      //TODO: create effect module
    });
  });

  describe('#addPool()', function () {
    it('should add a Pool object under specified key', function () {
      var s = skill();
      var p = pool();

      s.addPool('test', p);

      expect(s.pools.test).to.eql(p);
    });
  });

  describe('#addEffect()', function () {
    // TODO: create effect module
  });
});
