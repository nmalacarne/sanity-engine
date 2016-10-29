'use strict';

const help      = require('./helper');
const config    = require('./config');
const effect    = require('./effect');
const pool      = require('./pool');

/**
 * @module skill
 */
module.exports = exports = createSkill;

/**
 * @param {Object} spec
 * @param {String} spec.name    Name of the skill
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.effects Map of Effect objects
 */
function createSkill(spec) {
  var spec = help.define(spec).or.use({});

  spec.name     = help.define(spec.name).or.use(config.skill.name);
  spec.pools    = help.define(spec.pools).or.use(config.skill.pools);
  spec.effects  = help.define(spec.effects).or.use(config.skill.effects);

  return new Skill(spec);
};

/**
 *
 * @constructor
 * @param {Object} spec
 * @param {String} spec.name    Name of the skill
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.effects Map of Effect objects
 */
function Skill(spec) {
  this._name    = spec.name;
  this._pools   = spec.pools;
  this._effects = spec.effects;
}

/**
 * @property
 */
Object.defineProperty(Skill.prototype, 'name', {
  get: function () {
    return this._name;
  }
});

/**
 * @property
 */
Object.defineProperty(Skill.prototype, 'pools', {
  get: function () {
    return this._pools;
  }
});

/**
 * @property
 */
Object.defineProperty(Skill.prototype, 'effects', {
  get: function () {
    return this._effects;
  }
});
