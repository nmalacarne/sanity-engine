/*
 * @module lib/pool
 */
module.exports = function create(spec) {
  return new Pool(spec || {});
};

/*
 * A Pool manages a value, while keeping the value within a min/max range.
 *
 * @constructor
 * @param {Object} spec
 * @param {Number} spec.min The lower bounds for the value
 * @param {Number} spec.max The upper bounds for the value
 * @param {Number} spec.val The default starting value
 */
function Pool(spec) {
  this.min = spec.min || 0;
  this.max = spec.max || 100;
  this.val = bound(this.min, this.max, spec.val) || this.max;
}

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
