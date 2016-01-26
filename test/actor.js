'use strict';

const expect = require('expect.js');

const engine = require(process.cwd());

const actor     = engine.actor;
const pool      = engine.pool;
const config    = engine.config;

describe('actor', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      const a = actor();

      expect(a.name).to.eql(config.actor.name);
      expect(a.pools).to.eql(config.actor.pools);
    });

    it('should initialize with Pool data', function () {
      const a = actor({
        pools: config.actor.pools
      });

      expect(a.pools).to.eql(config.actor.pools);
    });
  });

  describe('#toJSON()', function () {
    it('should serialize with spec keys', function () {
      const a = actor({
        pools: {
          test: {
            val: 50
          }
        }
      });
      const json = JSON.stringify(a);
      const spec = JSON.parse(json);
      const b = actor(spec);

      expect(a).to.eql(b);
    });
  });

  describe('#addPool()', function () {
    it('should add a Pool with specified key', function () {
      const a = actor();

      a.addPool('test', pool());

      expect(a.pools).to.only.have.key('test');
      expect(a.pools.test).to.eql(pool());
    });
  });

});
