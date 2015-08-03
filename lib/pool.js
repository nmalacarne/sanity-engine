/*
 * @module lib/pool
 */
module.exports = Pool;

/*
 * A Pool manages a value, while keeping the value within a min/max range.
 *
 * @constructor
 * @param {Object} blueprint
 * @param {Number} blueprint.min The lower bounds for the value
 * @param {Number} blueprint.max The upper bounds for the value
 * @param {Number} blueprint.val The default starting value
 */
function Pool(blueprint) {
  var blueprint = blueprint || {};

  this.min = blueprint.min || 0;
  this.max = blueprint.max || 100;
  this.val = bound(this.min, this.max, blueprint.val) || this.max;
}

/* Methods  */

/*
 * Decrements the Pool's value by one.
 */
Pool.prototype.decrement = function() {
  this.val = bound(this.min, this.max, this.val - 1);
};

/*
 * Increments the Pool's value by one.
 */
Pool.prototype.increment = function() {
  this.val = bound(this.min, this.max, this.val + 1);
};

/*
 * Helper Functions
 * TODO: move these to a module
 */
function bound(min, max, val) {
 return Math.min(Math.max(val, min), max);
}
