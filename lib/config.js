'use strict';

/***
 * @module config
 */

exports.pool = {
  'min': 0,
  'max': 100,
  'events': {
    'CHANGED' : 'value-changed',
    'EMPTY'   : 'value-empty',
    'FULL'    : 'value-full'
  }
};

exports.actor = {
  'name'  : '[no name]',
  'pools' : {}
};

exports.effect = {
  'name'  : '[no name]',
  'pools' : {}
};

exports.skill = {
  'name'    : '[no name]',
  'pools'   : {},
  'effects' : {}
};
