/*
 * @module lib/pool
 */
module.exports = Pool;

/*
 * A Pool manages a value, while keeping the value within a min/max range.
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

/* Properties */

/*
 * The minimum allowed value for the Pool.
 */
Object.defineProperty(Pool.prototype, 'min', {
  get: function() { return this._min  }
});

/*
 * The maximum allowed value for the Pool.
 */
Object.defineProperty(Pool.prototype, 'max', {
  get: function() { return this._max  }
});

/*
 * The current value of the Pool.
 */
Object.defineProperty(Pool.prototype, 'val', {
  get: function() { return this._val  }
});

/* Methods  */

/*
 * Decrements the Pool's value by one.
 */
Pool.prototype.decrement = function() {
  this._val = Math.min(Math.max(this._val - 1, this._min), this._max);
};

/*
 * Increments the Pool's value by one.
 */
Pool.prototype.increment = function() {
  this._val = Math.min(Math.max(this._val + 1, this._min), this._max);
};
