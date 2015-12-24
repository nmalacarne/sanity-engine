'use strict';

var expect = require('expect.js');

var actor = require(process.cwd()).actor;
var pool = require(process.cwd()).pool;

describe('actor', function () {
  describe('#constructor()', function () {
    it('should initialize with default values', function () {
      var a = actor();

      expect(a.pools).to.eql({});
      expect(a.skills).to.eql({});
    });

    it('should initialize with Pool data', function () {
      var a = actor({
        pools: {
          test: pool()
        }
      });

      expect(a.pools.test).to.eql(pool());
    });
  });

  describe('#addPool()', function () {
    it('should add a Pool with specified key', function () {
      var a = actor();

      a.addPool('test', pool());

      expect(a.pools.test).to.eql(pool());
    });
  });
});
