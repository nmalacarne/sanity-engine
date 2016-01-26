'use strict';

/***
 * @module config
 */
exports.pool = {
  'min': 0,
  'max': 100,
  'events': {
    'VAL_CHANGED' : 'value-changed',
    'VAL_EMPTY'   : 'value-empty',
    'VAL_FULL'    : 'value-full'
  }
};

exports.actor = {
  'name'  : '[no name]',
  'pools' : {}
};
