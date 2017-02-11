'use strict';

const help    = require('helper');
const config  = require('config');
const Actor   = require('./Actor');

/**
 * @module actor
 * @param {String} name    Name of the Actor
 * @param {Array} pools   Map of Pool objects
 */
module.exports = exports = function factory (
    name = '[no name]',
    pools = []
) {
  const actor = new Actor(name);

  actor.pools = pools;

  return actor;
}
