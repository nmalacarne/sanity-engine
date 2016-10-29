'use strict';

const config    = require('config');
const help      = require('helper');

class Effect {
  /**
   * TODO: description
   *
   * @constructor
   * @param {Object} spec
   * @param {String} spec.name    Name of the Effect
   * @param {Object} spec.pools   Map of Pool objects
   */
  constructor (spec) {
    this._name     = spec.name;
    this._pools    = spec.pools;
  }

  /**
   * @return {String}
   */
  get name () {
    return this._name;
  }

  /**
   * @return {Array}
   */
  get pools () {
    return this._pools;
  }
}

module.exports = exports = Effect;
