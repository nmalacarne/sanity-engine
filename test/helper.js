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

  describe('#sort', function () {
    it('should return an array', function () {
      const x = [1, 2, 3, 10];
      const a = help.sort(x);

      expect(a).to.be.an('array');
    });

    it('should sort an array in ascending order', function () {
      const x = [10, 3, 2, 1];

      const a = help.sort(x);

      expect(a).to.eql([1, 2, 3, 10]);
    });
  });
});
