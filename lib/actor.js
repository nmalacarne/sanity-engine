/*
 * @module lib/actor
 */
module.exports = Actor;

/*
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 */
function Actor() {
  this._pools = {};
}

/* Methods */

/*
 * Adds a Pool to Actor under specified key.
 */
Actor.prototype.addPool = function(key, pool) {
  this._pools[key] = pool;
};
