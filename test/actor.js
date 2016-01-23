'use strict';

const expect = require('expect.js');

const actor = require(process.cwd()).actor;
const pool = require(process.cwd()).pool;

describe('actor', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      const a = actor();

      expect(a.name).to.eql('[no name]');
      expect(a.pools).to.eql({});
      expect(a.skills).to.eql({});
    });

    it('should initialize with Pool data', function () {
      const p = pool();
      const a = actor({
        pools: {
          test: p
        }
      });

      expect(a.pools.test).to.eql(p);
    });
  });

  describe('#addPool()', function () {
    it('should add a Pool with specified key', function () {
      const a = actor();

      a.addPool('test', pool());

      expect(a.pools.test).to.eql(pool());
    });
  });
});
