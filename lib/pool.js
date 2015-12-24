'use strict';

const help  = require('./helpers');
const def   = require('./defaults');

/**
 * @module pool
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
  this._min = help.define(spec.min, def.pool.min);
  this._max = help.define(spec.max, def.pool.max);
  this._val = help.limit(this._min, this._max, help.define(spec.val, this._max));
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
  set: function (val) {
    this._val = help.limit(this._min, this._max, val);
  }
});
