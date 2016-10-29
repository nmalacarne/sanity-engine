'use strict';

// external modules
const expect  = require('expect.js');

// sanity-engine module index
const engine  = require(process.cwd());

// engine modules
const help  = engine.helper;
const pool  = engine.pool;

describe('helper', function () {
  describe('#limit', function () {
    it('should return a limit object', function () {
      const x = 1;
      const limit = help.limit(x);

      expect(limit).to.be.an('object');
    });

    it('should limit X within Y..Z', function () {
      const x = 11;
      const y = 1;
      const z = 10;

      const v = help.limit(x).within(y, z);

      expect(v).to.be(z);
    });
  });

  describe('#define', function () {
    it('should return an object', function () {
      const x = 1;
      const def = help.define(x);

      expect(def).to.be.an('object');
    });

    it('should define an undefined value', function () {
      const value = undefined;

      const def = help.define(value).or.use(1);

      expect(def).to.be(1);
    });
  });

  describe('#createMany', function () {
    it('should only populate when spec is of module type', function () {
      const spec = {
        first: {
          type: 'pool',
          val: 22
        },
        second: {
          val: 76
        }
      };

      const pools = help.createMany(pool).from(spec);

      expect(pools).to.have.key('first');
      expect(pools).to.not.have.key('second');
      expect(pools.first).to.be.a(pool().constructor);
    });
  });

  describe('#getKlass', function () {
    it('should return constructors type as a string', function () {
      const klass = help.getKlass(pool());

      expect(klass).to.eql('pool');
    });
  });
});
