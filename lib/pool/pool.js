/*
 * Expose `Pool`
 */
module.exports = Pool;

/*
 * A Pool manages a value, while keepting the value within a min/max range.
 *
 * @constructor
 * @param {number} min The lower bounds for the value
 * @param {number} max The upper bounds for the value
 * @param {number} val The default starting value
 */
function Pool(min, max, val) {
  this._min = min || 0;
  this._max = max || 100;
  this._val = Math.min(Math.max(val, this._min), this._max) || this._max;
}

/*
 * Properties
 */
Object.defineProperty(Pool.prototype, 'min', {
  get: function() { return this._min  }
});

Object.defineProperty(Pool.prototype, 'max', {
  get: function() { return this._max  }
});

Object.defineProperty(Pool.prototype, 'val', {
  get: function() { return this._val  }
});
