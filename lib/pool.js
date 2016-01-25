'use strict';

const events    = require('events');
const util      = require('util');
const help      = require('./helper');
const defaults  = require('./defaults');

/**
 * @module pool
 */
module.exports = exports = createPool;

/**
 * @param {Object} spec
 * @param {Number} spec.min The lower limits for the value
 * @param {Number} spec.max The upper limits for the value
 * @param {Number} spec.val The default starting value
 */
function createPool(spec) {
  spec = help.define(spec).or.use({});

  // ensure spec data is valid
  spec.min = help.define(spec.min).or.use(defaults.pool.min);
  spec.max = help.define(spec.max).or.use(defaults.pool.max);
  spec.val = help.define(spec.val).or.use(defaults.pool.max);
  spec.val = help.limit(spec.val).within(spec.min, spec.max);

  return new Pool(spec);
};

/**
 * Maintain a value within min/max range
 *
 * @constructor
 * @augments EventEmitter
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
 * @property
 * @public
 */
Object.defineProperty(Pool.prototype, 'min', {
  get: function () {
    return this._min;
  }
});

/**
 * @property
 * @public
 */
Object.defineProperty(Pool.prototype, 'max', {
  get: function () {
    return this._max;
  }
});

/**
 * @property
 * @public
 */
Object.defineProperty(Pool.prototype, 'val', {
  get: function () {
    return this._val;
  },
  set: function (val) {
    changeValue.call(this, val);
    emitIfEmpty.call(this);
    emitIfFull.call(this);
  }
});

/**
 * @public
 */
Pool.prototype.toJSON = toJSON;
function toJSON() {
  return {
    val: this._val,
    min: this._min,
    max: this._max
  };
}

/**
 * @private
 * @param {Number} newValue
 * @return {void}
 */
function changeValue(newValue) {
  const previous = this._val;

  this._val = help.limit(newValue).within(this._min, this._max);

  this.emit(defaults.pool.events.VAL_CHANGED, previous, this._val);
}

/**
 * @private
 * @return {void}
 */
function emitIfEmpty() {
  if (this._val === this._min) {
    this.emit(defaults.pool.events.VAL_EMPTY);
  }
}

/**
 * @private
 * @return {void}
 */
function emitIfFull() {
  if (this._val === this._max) {
    this.emit(defaults.pool.events.VAL_FULL);
  }
}
