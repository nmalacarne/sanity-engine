var Pool = require('./pool');

/*
 * @module lib/actor
 */
module.exports = Actor;

/*
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 */
function Actor(spec) {
  var spec = spec || {};

  this.pools   = spec.pools   || {};
  this.skills  = spec.skills  || {};
}

/* Methods */

/*
 * Adds a Pool to Actor under specified key.
 * @param {String}  key
 * @param {Pool}    pool
 */
Actor.prototype.addPool = function(key, pool) {
  this.pools[key] = pool;
};
