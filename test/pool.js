var expect  = require('expect.js');
var path    = require('path');

var Pool = require(path.join(process.cwd(), 'lib/pool'));

describe('Pool', function() {
  describe('#constructor()', function() {
    it('should initialize with default values', function() {
      var p = new Pool();

      expect(p.min).to.be(0);
      expect(p.max).to.be(100);
      expect(p.val).to.be(100);
    });

    it('should initialize with custom values', function() {
      var p = new Pool({min: 10, max: 20, val: 15});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(15);
    });

    it('should set starting value no lower than MIN', function() {
      var p = new Pool({min: 10, max: 20, val: 1});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(10);
    });

    it('should set starting value no higher than MAX', function() {
      var p = new Pool({min: 10, max: 20, val: 25});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(20);
    });
  });

  describe('#decrement()', function() {
    it('should decrement value by one', function() {
      var p = new Pool();

      p.decrement();

      expect(p.val).to.be(99);
    });

    it('should not decrement value below MIN', function() {
      var p = new Pool({min: 5, max: 10, val: 5});

      p.decrement();

      expect(p.val).to.be(5);
    });
  });

  describe('#increment()', function() {
    it('should increment value by one', function() {
      var p = new Pool({min: null, max: null, val: 99});

      p.increment();

      expect(p.val).to.be(100);
    });

    it('should not increment value above MAX', function() {
      var p = new Pool();

      p.increment();

      expect(p.val).to.be(100);
    });
  });
});
