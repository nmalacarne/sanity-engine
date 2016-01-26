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
exports.limit = limit;
function limit(val) {
  return {
    within: function (min, max) {
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
exports.define = define;
function define(val) {
  return {
    or: {
      use: function (fallback) {
        return (typeof val === 'undefined') ? fallback : val;
      }
    }
  };
}

/**
 * @param   {Function}  module
 * @param   {Object}    spec
 *
 * @return  {Object}
 */
exports.createMany = createMany;
function createMany(module) {
  const m = {};

  return {
    from: function (spec) {
      for (let key in spec) {
        m[key] = module(spec);
      }

      return m;
    }
  };
}
