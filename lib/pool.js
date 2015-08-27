/**
 * @module lib/pool
 */
module.exports = function create(spec) {
  return new Pool(spec || {});
};

/**
 * A Pool manages a value, while keeping the value within a min/max range.
 *
 * @constructor
 * @param {Object} spec
 * @param {Number} spec.min The lower limits for the value
 * @param {Number} spec.max The upper limits for the value
 * @param {Number} spec.val The default starting value
 */
function Pool(spec) {
  this._min = (typeof spec.min === 'undefined') ? 0 : spec.min;
  this._max = (typeof spec.max === 'undefined') ? 100 : spec.max;
  this._val = (typeof spec.val === 'undefined') ? this._max : limit(this._min, this._max, spec.val);
}

Object.defineProperty(Pool.prototype, 'min', {
  get: function () {
    return this._min;
  }
});

Object.defineProperty(Pool.prototype, 'max', {
  get: function () {
    return this._max;
  }
});

Object.defineProperty(Pool.prototype, 'val', {
  get: function () {
    return this._val;
  },
  set: function (mod) {
    this._val = mod;
  }
});

/**
 * Ensures that a value is within a min/max range.
 *
 * @param {Number} min
 * @param {Number} max
 * @param {Number} val
 * @return {Number}
 */
function limit(min, max, val) {
 return Math.min(Math.max(val, min), max);
}
