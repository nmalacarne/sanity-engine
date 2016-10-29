'use strict';

/**
 * @module helper
 */
module.exports = exports;

/**
 * Ensures that a value is within a min/max range.
 *
 * @param   {Number} val
 *
 * @return {Object}
 */
exports.limit = val => {
  return {
    within (min, max) {
      return Math.min(Math.max(val, min), max);
    }
  };
}

/**
 * Ensures that a value is not undefined.
 *
 * @param   {Mixed} value     The value to check
 * @param   {Mixed} fallback  The fallback value
 *
 * @return  {Mixed} Either the value if defined or the fallback value
 */
exports.define = val => {
  return {
    or: {
      use (fallback) {
        return (typeof val === 'undefined') ? fallback : val;
      }
    }
  };
}
