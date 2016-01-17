'use strict';

// external modules
const expect  = require('expect.js');

// sanity-engine module index
const engine  = require(process.cwd());

// engine modules
const help  = engine.helper;

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
  });
});
