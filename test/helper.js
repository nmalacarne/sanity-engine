'use strict';

// external modules
const expect  = require('expect.js');

// sanity-engine module index
const engine  = require(process.cwd());

// engine modules
const help  = engine.helper;

describe('helper', function () {
  describe('#constructor()', function () {
    it('should return a singleton', function () {
      const a = help;
      const b = help;

      expect(a == b).to.be(true);
    });
  });
});
