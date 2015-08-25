/**
 * @module actor
 */
module.exports = function create(spec) {
  return new Actor(spec || {});
};

/**
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 * @param {Object} spec
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.skills  Map of Skill objects
 */
function Actor(spec) {
  this.pools   = spec.pools   || {};
  this.skills  = spec.skills  || {};
}

/**
 * Adds a Pool to Actor under specified key.
 * @param {String}  key
 * @param {Object}  pool Pool object to add
 */
Actor.prototype.addPool = function(key, pool) {
  this.pools[key] = pool;
};
