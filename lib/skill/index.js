'use strict';

const help    = require('helper');
const config  = require('config');
const Skill   = require('./Skill');

/**
 * @param {Object} spec
 * @param {String} spec.name    Name of the skill
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.effects Map of Effect objects
 */
module.exports = exports = function skill (spec) {
  var spec = help.define(spec).or.use({});

  spec.name     = help.define(spec.name).or.use(config.skill.name);
  spec.pools    = help.define(spec.pools).or.use(config.skill.pools);
  spec.effects  = help.define(spec.effects).or.use(config.skill.effects);

  return new Skill(spec);
}
