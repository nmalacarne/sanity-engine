'use strict';

const config    = require('./config');
const help      = require('./helper');
const pool      = require('./pool');

/**
 * @module effect
 */
module.exports = exports = createEffect;

/**
 * @param {Object} spec
 * @param {String} spec.name    Name of the Effect
 * @param {Object} spec.pools   Map of Pool objects
 */
function createEffect(spec) {
  var spec = help.define(spec).or.use({});

  spec.name   = help.define(spec.name).or.use(config.effect.name);
  spec.pools  = help.define(spec.pools).or.use(config.effect.pools);

  spec.pools = help.createMany(pool).from(spec.pools);

  return new Effect(spec);
}

/**
 *
 *
 * @constructor
 * @param {Object} spec
 * @param {String} spec.name    Name of the Effect
 * @param {Object} spec.pools   Map of Pool objects
 */
function Effect(spec) {
  this._name     = spec.name;
  this._pools    = spec.pools;
}

/**
 * @property
 */
Object.defineProperty(Effect.prototype, 'name', {
  get: function () {
    return this._name;
  }
});

/**
 * @property
 */
Object.defineProperty(Effect.prototype, 'pools', {
  get: function () {
    return this._pools;
  }
});
