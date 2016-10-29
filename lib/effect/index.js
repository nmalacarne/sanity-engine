const config  = require('config');
const help    = require('helper');
const Effect  = require('./Effect');

/**
 * @param {Object} spec
 * @param {String} spec.name    Name of the Effect
 * @param {Object} spec.pools   Map of Pool objects
 */
module.exports = exports = function effect (spec) {
  var spec = help.define(spec).or.use({});

  spec.name   = help.define(spec.name).or.use(config.effect.name);
  spec.pools  = help.define(spec.pools).or.use(config.effect.pools);

  return new Effect(spec);
}
