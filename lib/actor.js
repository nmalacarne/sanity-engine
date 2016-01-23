'use strict';

const help = require('./helper');

/**
 * @module actor
 */
module.exports = function create(spec) {
  var spec = spec || {};

  spec.name   = help.define(spec.name).or.use('[no name]');
  spec.pools  = help.define(spec.pools).or.use({});
  spec.skills = help.define(spec.skills).or.use({});

  return new Actor(spec);
};

/**
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 * @param {Object} spec
 * @param {String} spec.name    Name of the Actor
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.skills  Map of Skill objects
 */
function Actor(spec) {
  this.name     = spec.name;
  this.pools    = spec.pools;
  this.skills   = spec.skills;
}

/**
 * Adds a Pool to Actor under specified key.
 * @param {String}  key
 * @param {Object}  pool Pool object to add
 */
Actor.prototype.addPool = function(key, pool) {
  this.pools[key] = pool;
};
