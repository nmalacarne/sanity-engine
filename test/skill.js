var expect  = require('expect.js');
var path    = require('path');

var Skill = require(path.join(process.cwd(), 'lib/skill'));
var Pool  = require(path.join(process.cwd(), 'lib/pool'));

describe('Skill', function() {
  describe('#constructor()', function() {
    it('should initialize with default values', function() {
      var s = new Skill();

      expect(s.name).to.be('[none]');
      expect(s.pools).to.eql({});
      expect(s.effects).to.eql({});
    });

    it('should initialize with specified name', function() {
      var s = new Skill({name: 'Testing'});

      expect(s.name).to.be('Testing');
    });

    it('should initialize with specified Pool', function() {
      var s = new Skill({
        pools: {
          test: new Pool()
        }
      });

      expect(s.pools.test).to.eql(new Pool());
    });

    it('should initialize with specified Effect', function() {
      expect().fail('TODO: create effect module');
    });
  });

  describe('#addPool()', function() {
    it('should add a Pool object under specified key', function() {
      var s = new Skill();

      s.addPool('test', new Pool());

      expect(s.pools.test).to.eql(new Pool());
    });
  });

  describe('#addEffect()', function() {
    expect().fail('TODO: create effect module');
  });
});
