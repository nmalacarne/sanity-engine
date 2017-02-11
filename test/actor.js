'use strict';

const expect = require('expect.js');

const engine = require(process.cwd());

const actor     = engine.actor;
const config    = engine.config;
const pool      = engine.pool;

describe('actor', function () {
  describe('#constructor', function () {
    it('should initialize with default values', function () {
      const a = actor();

      expect(a.name).to.eql(config.actor.name);
      expect(a.pools).to.eql(config.actor.pools);
    });
  });
});
