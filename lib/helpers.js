'use strict';

/**
 * Ensures that a value is within a min/max range.
 *
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
exports.limit = function limit(val, min, max) {
 return Math.min(Math.max(val, min), max);
}

/**
 * Ensures that a value is not udefined.
 *
 * @param {Mixed} val The value to check
 * @param {Mixed} fallback The fallback value
 * @return {Mixed} Either the value if defined or the fallback value
 */
exports.define = function define(val, fallback) {
  return (typeof val === 'undefined') ? fallback : val;
}
