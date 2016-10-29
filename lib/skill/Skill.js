'use strict';

const help      = require('helper');
const config    = require('config');

class Skill {
  /**
   * TODO: description
   *
   * @constructor
   * @param {Object} spec
   * @param {String} spec.name    Name of the skill
   * @param {Object} spec.pools   Map of Pool objects
   * @param {Object} spec.effects Map of Effect objects
   */
  constructor (spec) {
    this._name    = spec.name;
    this._pools   = spec.pools;
    this._effects = spec.effects;
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

  /**
   * @return {Array}
   */
  get effects () {
    return this._effects;
  }
}

module.exports = exports = Skill;
