'use strict';

const help = require('./helper');

/**
 * @module actor
 */
module.exports = exports = create;

/**
 * @param {Object} spec
 * @param {String} spec.name    Name of the Actor
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.skills  Map of Skill objects
 */
function create(spec) {
  var spec = spec || {};

  spec.name   = help.define(spec.name).or.use('[no name]');
  spec.pools  = help.define(spec.pools).or.use({});

  return new Actor(spec);
}

/**
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 * @param {Object} spec
 * @param {String} spec.name    Name of the Actor
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.skills  Map of Skill objects
 */
function Actor(spec) {
  this._name     = spec.name;
  this._pools    = spec.pools;
}

/**
 * @public
 */
Object.defineProperty(Actor.prototype, 'name', {
  get: function () {
    return this._name;
  },
  set: function (name) {
    this._name = name;
  }
});

/**
 * @public
 */
Object.defineProperty(Actor.prototype, 'pools', {
  get: function () {
    return this._pools;
  },
  set: function (pools) {
    this_pools = pools;
  }
});

/**
 *
 */
Actor.prototype.toJSON = toJSON;
function toJSON() {
  return {
    name:   this._name,
    pools:  this._pools
  };
}

/**
 * Adds a Pool to Actor under specified key.
 * @param {String}  key
 * @param {Object}  pool Pool object to add
 */
Actor.prototype.addPool = addPool;
function addPool(key, pool) {
  this.pools[key] = pool;
}

