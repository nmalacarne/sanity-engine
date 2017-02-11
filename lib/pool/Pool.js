'use strict';

const config    = require('config');
const events    = require('events');
const help      = require('helper');
const util      = require('util');

/**
 * Maintain a value within min/max range
 *
 * @augments EventEmitter
 */
class Pool extends events.EventEmitter {
  /**
   * @constructor
   * @param {Number} min The lower limits for the value
   * @param {Number} max The upper limits for the value
   * @param {Number} val The default starting value
   */
  constructor (min, max, val) {
    super();

    this._min = min;
    this._max = max;
    this._val = val;
  }

  /**
   * @return {Number}
   */
  get min () {
    return this._min;
  }

  /**
   * @return {Number}
   */
  get max () {
    return this._max;
  }

  /**
   * @return {Number}
   */
  get val () {
    return this._val;
  }

/**
 * @param {Number} v New value
 * @return {Void}
 */
  set val (v) {
    const previous = this._val;

    this._val = help.limit(v).within(this._min, this._max);

    this.emit(config.pool.events.VAL_CHANGED, previous, this._val);

    if (this._val === this._min) {
      this.emit(config.pool.events.VAL_EMPTY);
    }

    if (this._val === this._max) {
      this.emit(config.pool.events.VAL_FULL);
    }
  }
}

module.exports = exports = Pool;
