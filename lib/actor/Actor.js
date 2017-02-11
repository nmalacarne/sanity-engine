'use strict';

const config    = require('config');
const help      = require('helper');

class Actor {
  /**
   * An Actor represents a player (Human/AI) in the game.
   *
   * @constructor
   * @param {String} name    Name of the Actor
   */
  constructor (name) {
    this._name = name;
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
    this._name = name;
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
    this._pools = pools;
  }
}

module.exports = exports = Actor;
