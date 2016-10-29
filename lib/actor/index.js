'use strict';

const help    = require('helper');
const config  = require('config');
const Actor   = require('./Actor');

/**
 * @module actor
 * @param {Object} spec
 * @param {String} spec.name    Name of the Actor
 * @param {Object} spec.pools   Map of Pool objects
 * @param {Object} spec.skills  Map of Skill objects
 */
module.exports = exports = function actor (spec) {
  var spec = help.define(spec).or.use({});

  spec.name   = help.define(spec.name).or.use(config.actor.name);
  spec.pools  = help.define(spec.pools).or.use(config.actor.pools);

  return new Actor(spec);
}
