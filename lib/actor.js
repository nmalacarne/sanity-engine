var Pool = require('./pool');

/*
 * @module lib/actor
 */
module.exports = Actor;

/*
 * An Actor represents a player (Human/AI) in the game.
 * @constructor
 */
function Actor() {
  this._pools   = {};
  this._skills  = {};
}

/* Static Methods */

/*
 * Creates a new Actor from given data.
 * @param   {Object} data
 * @return  {Actor}
 */
Actor.create = function(data) {
  var a = new Actor();

  for (var key in data._pools) {
    var p = Pool.create(data._pools[key]);

    a.addPool(key, p);
  }

  return a;
};

/* Methods */

/*
 * Adds a Pool to Actor under specified key.
 * @param {String}  key
 * @param {Pool}    pool
 */
Actor.prototype.addPool = function(key, pool) {
  this._pools[key] = pool;
};
