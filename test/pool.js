var expect  = require('expect.js');

var pool = require(process.cwd()).pool;

describe('pool', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      var p = pool();

      expect(p.min).to.be(0);
      expect(p.max).to.be(100);
      expect(p.val).to.be(100);
    });

    it('should initialize with custom values', function () {
      var p = pool({min: 10, max: 20, val: 15});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(15);
    });

    it('should allow starting value to equal MIN', function () {
      var p = pool({val: 0});

      expect(p.val).to.be(0);
    });

    it('should set starting value no lower than MIN', function () {
      var p = pool({min: 10, max: 20, val: 1});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(10);
    });

    it('should set starting value no higher than MAX', function () {
      var p = pool({min: 10, max: 20, val: 25});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(20);
    });
  });

  describe('.val', function () {
    it('should increment by X', function () {
      var p = pool({val: 50});

      p.val += 1;

      expect(p.val).to.be(51);
    });

    it('should decrement by X', function () {
      var p = pool();

      p.val -= 1;

      expect(p.val).to.be(99);
    });

    it('should set val equal to X', function () {
      var p = pool();

      p.val = 50;

      expect(p.val).to.be(50);
    });
  });
});
