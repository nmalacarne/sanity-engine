'use strict';

const config    = require('config');
const help      = require('helper');

class Actor {
  /**
   * An Actor represents a player (Human/AI) in the game.
   *
   * @constructor
   * @param {Object} spec
   * @param {String} spec.name    Name of the Actor
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
   * @param {String} name The name of the Actor
   */
  set name (name) {
    this._name = help.define(name).or.use(config.actor.name);
  }

  /**
   * @return {Array}
   */
  get pools () {
    return this._pools;
  }

  /**
   * @param {Array} pools
   */
  set pools (pools) {
    this._pools = help.define(pools).or.use(config.actor.pools);
  }

  /**
   * @param {String} key
   * @param {Pool} pool
   */
  addPool (key, pool) {
    this.pools[key] = help.define(pool).or.use(config.pool);
  }
}

module.exports = exports = Actor;
