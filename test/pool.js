'use strict';

const expect  = require('expect.js');

const engine = require(process.cwd());

const pool      = engine.pool;
const defaults  = engine.defaults;

describe('pool', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      const p = pool();

      expect(p.min).to.be(defaults.pool.min);
      expect(p.max).to.be(defaults.pool.max);
      expect(p.val).to.be(defaults.pool.max);
    });

    it('should initialize with custom values', function () {
      const p = pool({min: 10, max: 20, val: 15});

      expect(p.min).to.be(10);
      expect(p.max).to.be(20);
      expect(p.val).to.be(15);
    });

    it('should allow starting value to equal MIN', function () {
      const p = pool({val: defaults.pool.min});

      expect(p.val).to.be(defaults.pool.min);
    });

    it('should set starting value equal to MIN when lower than MIN', function () {
      const p = pool({val: -5});

      expect(p.val).to.be(defaults.pool.min);
    });

    it('should set starting value equal to MAX when higher than MAX', function () {
      const p = pool({val: 125});

      expect(p.val).to.be(defaults.pool.max);
    });

    it('should swap min and max values when min > max', function () {
      const min = 100;
      const max = 0
      const p = pool({min: 100, max: 0});

      expect(p.min).to.be.below(p.max);
    });
  });

  describe('.val', function () {
    it('should increment by X', function () {
      const p = pool({val: 50});

      p.val += 1;

      expect(p.val).to.be(51);
    });

    it('should decrement by X', function () {
      const p = pool();

      p.val -= 1;

      expect(p.val).to.be(99);
    });

    it('should set val equal to X', function () {
      const p = pool();

      p.val = 50;

      expect(p.val).to.be(50);
    });

    it('should emit event when value changes', function (done) {
      const p = pool();
      const x = 1;

      p.on(defaults.pool.events.VAL_CHANGED, function (previousValue, newValue) {
        expect(previousValue).to.be(p.max);
        expect(newValue).to.be(p.max - x);
        done();
      });

      p.val -= x;
    });


    it('should emit an event when val is changed if val is equal to min', function (done) {
      const p = pool({val: 1});
      const x = 1;

      p.on(defaults.pool.events.VAL_EMPTY, function () {
        expect(true);
        done();
      });

      p.val -= x;
    });

    it('should emit an event when val is changed if val is equal to max', function (done) {
      const p = pool({val: 99});
      const x = 1;

      p.on(defaults.pool.events.VAL_FULL, function () {
        expect(true);
        done();
      });

      p.val += x;
    });
  });

  describe('#toJSON', function () {
    it('should serialize to a spec', function () {
      const p = pool();
      const json = JSON.stringify(p);
      const spec = JSON.parse(json);

      expect(spec).to.eql({
        val: defaults.pool.max,
        min: defaults.pool.min,
        max: defaults.pool.max
      });
    });
  });
});
