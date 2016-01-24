'use strict';

const expect = require('expect.js');

const engine = require(process.cwd());

const actor     = engine.actor;
const pool      = engine.pool;
const defaults  = engine.defaults;

describe('actor', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      const a = actor();

      expect(a.name).to.eql(defaults.actor.name);
      expect(a.pools).to.eql(defaults.actor.pools);
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

      expect(a.pools).to.only.have.key('test');
      expect(a.pools.test).to.eql(pool());
    });
  });

  describe('#toJSON()', function () {
    it('should serialize with spec keys', function () {
      const a = actor();
      const json = JSON.stringify(a);
      const spec = JSON.parse(json);

      expect(spec).to.eql({
        name:   defaults.actor.name,
        pools:  defaults.actor.pools
      });
    });
  });
});
