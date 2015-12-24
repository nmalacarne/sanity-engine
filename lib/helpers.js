'use strict';

/**
 * Ensures that a value is within a min/max range.
 *
 * @param {Number} min
 * @param {Number} max
 * @param {Number} val
 * @return {Number}
 */
exports.limit = function limit(min, max, val) {
 return Math.min(Math.max(val, min), max);
}

/**
 * Ensures that a value is not udefined.
 *
 * @param {Mixed} val The value to check
 * @param {Mixed} fbv The fallback value
 * @return {Mixed} Either the value if defined or the fallback value
 */
exports.define = function define(val, fbv) {
  return (typeof val === 'undefined') ? fbv : val;
}
