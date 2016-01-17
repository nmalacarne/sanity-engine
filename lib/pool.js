'use strict';

const events    = require('events');
const util      = require('util');
const help      = require('./helper');
const defaults  = require('./defaults');

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
  this._min = help.define(spec.min, defaults.pool.min);
  this._max = help.define(spec.max, defaults.pool.max);
  this._val = help.limit(help.define(spec.val, this._max)).within(this._min, this._max);
}

util.inherits(Pool, events.EventEmitter);

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
    this._val = help.limit(val).within(this._min, this._max);
    this.emit('value-changed', this._val);
  }
});
