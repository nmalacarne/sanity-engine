var expect  = require('expect.js');
var path    = require('path');

var skill = require(path.join(process.cwd(), 'lib/skill'));
var Pool  = require(path.join(process.cwd(), 'lib/pool'));

describe('Skill', function() {
  describe('#constructor()', function() {
    it('should initialize with default values', function() {
      var s = skill();

      expect(s.name).to.be('[none]');
      expect(s.pools).to.eql({});
      expect(s.effects).to.eql({});
    });

    it('should initialize with specified name', function() {
      var s = skill({name: 'Testing'});

      expect(s.name).to.be('Testing');
    });

    it('should initialize with specified Pool', function() {
      var s = skill({
        pools: {
          test: new Pool()
        }
      });

      expect(s.pools.test).to.eql(new Pool());
    });

    it('should initialize with specified Effect', function() {
      //TODO: create effect module
    });
  });

  describe('#addPool()', function() {
    it('should add a Pool object under specified key', function() {
      var s = skill();

      s.addPool('test', new Pool());

      expect(s.pools.test).to.eql(new Pool());
    });
  });

  describe('#addEffect()', function() {
    // TODO: create effect module
  });
});
