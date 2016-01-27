'use strict';

const config    = require('./config');
const help      = require('./helper');
const pool      = require('./pool');

/**
 * @module actor
 */
module.exports = exports = createActor;

/**
 * @param {Object} spec
 * @param {String} spec.name    Name of the Actor
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.skills  Map of Skill objects
 */
function createActor(spec) {
  var spec = help.define(spec).or.use({});

  spec.name   = help.define(spec.name).or.use(config.actor.name);
  spec.pools  = help.define(spec.pools).or.use(config.actor.pools);

  spec.pools = help.createMany(pool).from(spec.pools);

  return new Actor(spec);
}

/**
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 * @param {Object} spec
 * @param {String} spec.name    Name of the Actor
 * @param {Object} spec.pools   Map of Pool objects
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
    this._pools = pools;
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

