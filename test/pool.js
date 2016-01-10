'use strict';

const expect  = require('expect.js');

const engine = require(process.cwd());

const pool  = engine.pool;
const def   = engine.defaults;

describe('pool', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      var p = pool();

      expect(p.min).to.be(def.pool.min);
      expect(p.max).to.be(def.pool.max);
      expect(p.val).to.be(def.pool.max);
    });

    it('should initialize with custom values', function () {
      var p = pool({min: 10, max: 20, val: 15});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(15);
    });

    it('should allow starting value to equal MIN', function () {
      var p = pool({val: def.pool.min});

      expect(p.val).to.be(def.pool.min);
    });

    it('should set starting value no lower than MIN', function () {
      var p = pool({val: -5});

      expect(p.val).to.be(def.pool.min);
    });

    it('should set starting value no higher than MAX', function () {
      var p = pool({val: 125});

      expect(p.val).to.be(def.pool.max);
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
