/*
 * @module lib/skill
 */
module.exports = Skill;

/*
 * @constructor
 * @param {Object} spec
 * @param {String} spec.name
 * @param {Object} spec.pools
 * @param {Object} spec.effects
 */
function Skill(spec) {
  var spec = spec || {};

  this.name     = spec.name     || '[none]';
  this.pools    = spec.pools    || {};
  this.effects  = spec.effects  || {};
}

/* Methods */

/*
 * Adds a Pool to the Skill under specified key.
 * @param {String}  key
 * @param {Object}  pool Pool object to add
 */
Skill.prototype.addPool = function(key, pool) {
  this.pools[key] = pool;
};

/*
 * Adds an Effect to the Skill under specified key.
 * @param {String}  key
 * @param {Object}  effect Effect object to add
 */
Skill.prototype.addEffect = function(key, effect) {
  this.effects[key] = effect;
};