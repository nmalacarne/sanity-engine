'use strict';

const events    = require('events');
const util      = require('util');
const help      = require('./helper');
const defaults  = require('./defaults');

/**
 * @module pool
 */
module.exports = function create(spec) {
  spec = spec || {};

  // ensure spec data is valid
  spec.min = help.define(spec.min).or.use(defaults.pool.min);
  spec.max = help.define(spec.max).or.use(defaults.pool.max);
  spec.val = help.define(spec.val).or.use(defaults.pool.max);
  spec.val = help.limit(spec.val).within(spec.min, spec.max);

  return new Pool(spec);
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
  this._min = spec.min;
  this._max = spec.max;
  this._val = spec.val;
}

util.inherits(Pool, events.EventEmitter);

/**
 * properties
 */
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
    changeValue.call(this, val);
    // TODO: check if empty/full
  }
});

/**
 * private functions
 */

/**
 * @param {Number} newValue
 */
function changeValue(newValue) {
    const previous = this._val;

    this._val = help.limit(newValue).within(this._min, this._max);

    this.emit('value-changed', previous, this._val);
}
