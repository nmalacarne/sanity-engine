var expect  = require('expect.js');
var path    = require('path');

var Pool = require(path.join(process.cwd(), 'lib/pool'));

describe('Pool', function() {
  it('should initialize with default values', function() {
    var p = new Pool();

    expect(p._min).to.be(0);
    expect(p._max).to.be(100);
    expect(p._val).to.be(100);
  });

  it('should initialize with custom values', function() {
    var p = new Pool(10, 20, 15);

    expect(p._min).to.be(10);
    expect(p._max).to.be(20);
    expect(p._val).to.be(15);
  });

  it('should set starting value no lower than MIN', function() {
    var p = new Pool(10, 20, 1);

    expect(p._min).to.be(10);
    expect(p._max).to.be(20);
    expect(p._val).to.be(10);
  });

  it('should set starting value no higher than MAX', function() {
    var p = new Pool(10, 20, 25);

    expect(p._min).to.be(10);
    expect(p._max).to.be(20);
    expect(p._val).to.be(20);
  });

  it('should provide getters', function() {
    var p = new Pool();

    expect(p.min).to.be(0);
    expect(p.max).to.be(100);
    expect(p.val).to.be(100);
  });

  describe('#create()', function() {
    it('should construct a default Pool based on empty object', function() {
      var obj = {};
      var p = Pool.create(obj);

      expect(p._min).to.be(0);
      expect(p._max).to.be(100);
      expect(p._val).to.be(100);
    });

    it('should construct a Pool based on custom object', function() {
      var obj = {_min: 10, _max: 20, _val: 15};
      var p = Pool.create(obj);

      expect(p._min).to.be(10);
      expect(p._max).to.be(20);
      expect(p._val).to.be(15);
    });
  });

  describe('#decrement()', function() {
    it('should decrement value by one', function() {
      var p = new Pool();

      p.decrement();

      expect(p.val).to.be(99);
    });

    it('should not decrement value below MIN', function() {
      var p = new Pool(5, 10, 5);

      p.decrement();

      expect(p.val).to.be(5);
    });
  });

  describe('#increment()', function() {
    it('should increment value by one', function() {
      var p = new Pool(null, null, 99);

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
